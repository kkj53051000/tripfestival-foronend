import React, { useState } from "react";
import '../../../css/hotsight/AdminHotSightTwo.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminHotSightTwo = () => {

    const url = "/admin/hotsight/two";

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // File
    const [file, setFile] = useState(null);
    const handleFile = e => {
        setFile(e.target.files[0])
    }

    // Hot Sight One Id
    const [hotSightOneId, serHotSightOneId] = useState(null);
    const handleHotSightOneId = e => {
        serHotSightOneId(e.target.value);
    }

    var formData = new FormData();

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const value = {
                name: name,
                hotSightOneId: hotSightOneId
            }

            formData.append("file", file);
            formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

            const response = await axios.post("/api/admin/hotSightTwoProcess", formData, {
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

    // Axios Remove
    const onClickRemove = async ( e ) => {
        try {
            const response = await axios.post("/api/admin/hotSightTwoRemove/" + e.target.value);

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }



    // Hot Sight One List
    const [hotSightOneListLoading, hotSightOneList, hotSightOneListError] = useApiGet(() => {
        return axios.get("/api/hotSightOneAllList")
    }, [])

    // Hot Sight Two List
    const [hotSightTwoListLoading, hotSightTwoList, hotSightTwoListError] = useApiGet(() => {
        return axios.get("/api/hotSightTwoAllList")
    }, [])

    return (
        <div className="admin-hot-sight-two-wrap">
            <h2>스페셜 2 업로드/리스트</h2>

            <h2>업로드</h2>
            <div className="admin-hot-sight-two-upload">

                <span>이름</span>
                <input name="name" onChange={handleName} /><br/><br/>

                <span>이미지</span>
                <input type="file" onChange={handleFile} /><br/><br/>

                <span>스페셜 1</span>
                <select onChange={handleHotSightOneId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {hotSightOneList != null && !hotSightOneListLoading ?
                    <>
                        {hotSightOneList.data.items.map(hotSightOne => (
                            <option value={hotSightOne.id} key={hotSightOne.id}>
                                {hotSightOne.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select><br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>
            
            <h2>리스트</h2>

            <div className="admin-hot-sight-two-list">
                

                {hotSightTwoList != null && !hotSightTwoListLoading ?
                <>
                    {hotSightTwoList.data.items.map(hotSightTwo => (
                        <>
                            <span style={{fontSize: '26px', fontWeight: 'bold'}}>{hotSightTwo.id} - {hotSightTwo.name} </span>
                            <br/><br/>

                            <span>이미지 링크</span>
                            <br/><br/>

                            <button value={hotSightTwo.id} onClick={onClickRemove} >삭제</button>
                            <br/><br/>
                        </>
                    ))}
                </>
                :
                <></>
                }
            </div>
        </div>
    );
};

export default AdminHotSightTwo;