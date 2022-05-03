import React, { useState } from "react";
import '../../../css/event/AdminEventSeason.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventSeason = () => {

    const url = "/admin/event/season";

    // Name
    const [name, setName] = useState(null);

    const handleName = e => {
        setName(e.target.value);
    }

    // File
    const [file, setFile] = useState(null);

    const handleFile = e => {
        setFile(e.target.files[0]);
    }

    var formData = new FormData();
    formData.append("file", file);

    const value = {
        name: name
    }

    formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/eventSeasonProcess", formData, {
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

    // Event Season List
    const [eventSeasonListLoading, eventSeasonList, eventSeasonListError] = useApiGet(() => {
        return axios.get("/api/eventSeasonAllList");
    }, []);

    // Modify
    const [modifyName, setModifyName] = useState(null);
    
    const onChagngeModifyName = e => {
        setModifyName(e.target.value)
    }

    const changeValue = {
        name: modifyName
    }

    const onClickModify = async (e) => {
        const response = await axios.post("/api/admin/eventSeasonNameModify/" + e.target.value, changeValue)

        if(response.data.status === 'SUCCESS') {
            alert("수정 성공");
            window.location.replace(url)
        }
    }


    // Remove
    const onClickRemove = async (e) => {
        const response = await axios.post("/api/admin/eventSeasonRemove/" + e.target.value)

        if(response.data.status === 'SUCCESS') {
            alert("삭제 성공");
            window.location.replace(url)
        }
    }


    return (
        <div className="admin-event-season-wrap">
            <h2>이벤트 시즌</h2>

            <h2>업로드</h2>
            <div className="admin-event-season-upload">
                <span>이름 (*)</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>이미지 (1개)</span>
                <input type="file" onChange={handleFile} />
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
                <br/><br/><br/><br/>
            </div>

            <h2>리스트</h2>
            <div className="admin-event-season-list">
                
                {eventSeasonList != null && !eventSeasonListLoading ?
                <>
                    {eventSeasonList.data.items.map(season => (
                        <div className="item" key={season.id} >
                            <input placeholder={season.name} onChange={onChagngeModifyName} />
                            <button value={season.id} onClick={onClickModify}>수정</button>
                            <button value={season.id} onClick={onClickRemove} >삭제</button><br/>
                        </div>
                    ))}
                </>
                :
                <></>
                }
            </div>
        </div>
    );
};

export default AdminEventSeason;