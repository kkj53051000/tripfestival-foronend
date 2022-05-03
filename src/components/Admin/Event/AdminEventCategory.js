import React, { useState } from "react";
import '../../../css/event/AdminEventCateogry.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventCateogry = () => {

    const url = "/admin/event/category";

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
            const response = await axios.post("/api/admin/eventCategoryProcess", formData, {
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

    const [eventCategoryListLaoding, eventCategoryList, eventCategoryListError] = useApiGet(() => {
        return axios.get("/api/eventCategoryAllList");
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
        const response = await axios.post("/api/admin/eventCategoryNameModify/" + e.target.value, changeValue)

        if(response.data.status === 'SUCCESS') {
            alert("수정 성공");
            window.location.replace(url)
        }
    }


    // Remove
    const onClickRemove = async (e) => {
        const response = await axios.post("/api/admin/eventCategoryRemove/" + e.target.value)

        if(response.data.status === 'SUCCESS') {
            alert("삭제 성공");
            window.location.replace(url)
        }
    }


    return (
        <div className="admin-event-catgory-wrap">
            <h2>이벤트 카테고리</h2>

            <h2>업로드</h2>
            <div className="admin-event-category-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>사진</span>
                <input name="img" type="file" onChange={handleFile} />
                <br/><br/>
                
                <button onClick={onClickUpload}>업로드</button>
            </div>


            <h2>리스트</h2>
            <div className="admin-event-category-list">
                
                {eventCategoryList != null && !eventCategoryListLaoding ?
                <>
                    {eventCategoryList.data.items.map(category => (
                        <div className="item" key={category.id} >
                            <input placeholder={category.name} onChange={onChagngeModifyName} />
                            <button value={category.id} onClick={onClickModify} >수정</button>
                            <button value={category.id} onClick={onClickRemove} >삭제</button><br/>
                        </div>
                    ))
                    }
                </>
                :
                <></>
                }
            </div>
        </div>
    );
};

export default AdminEventCateogry;