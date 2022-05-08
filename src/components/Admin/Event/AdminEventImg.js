import React, { useState } from "react";
import '../../../css/event/AdminEventImg.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventImg = () => {

    const url = "/admin/event/img";

    // Event Id
    const [eventId, setEventId] = useState(null);
    const handleEventId = e => {
        setEventId(e.target.value);
    }


    // File
    const [files, setFiles] = useState(null);
    const handleFileList = e => {

        let tempFiles = []

        for (let i = 0; i < e.target.files.length; i++) {
            tempFiles.push()
            formData.append("files", e.target.files[i]);
            
            // console.log(e.target.files[i])
        }

        setFiles(tempFiles);
    }

    var formData = new FormData();

    
    // Axios Upload
    const onClickUpload = async () => {
        try {
        
            const value = {
                eventId: eventId
            }
        
            formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));
        

            const response = await axios.post("/api/admin/eventImgProcess", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }


    // Evnet List
    const [eventListLoading, eventList, eventListError] = useApiGet(() => {
        return axios.get("/api/eventAllList");
    }, []);



    return (
        <div className="admin-event-img-wrap">
            <h2>축제 이미지</h2>

            <div className="admin-event-img-list">
                <div className="admin-event-img-item">

                    <span className="title">PK + 이벤트 이름</span><br/>
                    <input name="files" type="file" onChange={handleFileList} multiple />
                    <br/><br/>

                    <span>축제 </span>
                    <select onChange={handleEventId}>
                        <option selected disabled>
                            선택하시오
                        </option>
                        {eventList != null && !eventListLoading ?
                        <>
                            {eventList.data.items.map(event => (
                                <option value={event.id}>
                                    {event.id} {event.name}
                                </option>
                            ))}
                        </>
                        :
                        <></>
                        }
                    </select>
                    <br/><br/>


                    <button onClick={onClickUpload}>추가</button>
                    <br/><br/><br/>

                    <span>img link</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEventImg;