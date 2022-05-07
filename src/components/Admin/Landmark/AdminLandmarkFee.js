import React, { useState } from "react";
import "../../../css/landmark/AdminLandmarkFee.css";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminLandmarkFee = () => {

    const url = "/admin/landmark/fee";

    // Title
    const [title, setTitle] = useState(null);
    const handleTitle = e => {
        setTitle(e.target.value);
    }

    // Price
    const [price, setPrice] = useState(null);
    const handlePrice = e => {
        setPrice(e.target.value);
    }

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value);
    }

    const value = {
        title: title,
        price: price,
        landmarkId: landmarkId
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {

            const response = await axios.post("/api/admin/landmarkFeeProcess", value)

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Change Title
    const [changeTitle, setChangeTitle] = useState(null);
    const handleChangeTitle = e => {
        setChangeTitle(e.target.value);
    }

    // Change Price
    const [changePrice, setChangePrice] = useState(null);
    const handleChangePrice = e => {
        setChangePrice(e.target.value);
    }

    const changeValue = {
        title: changeTitle,
        price: changePrice
    }

    // Axios Modify
    const onClickModify = async ( e ) => {
        try {
            const response = await axios.post("/api/admin/landmarkFeeModify/" + e.target.value, changeValue)

            if(response.data.status === 'SUCCESS') {
                alert("수정 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Axios Remove
    const onClickRemove = async ( e ) => {
        try {
            const response = await axios.post("/api/admin/landmarkFeeRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }


    const [landmarkFeeListLoading, landmarkFeeList, landmarkFeeListError] = useApiGet(() => {
        return axios.get("/api/landmarkFeeAllList");
    }, []);

    const [landmarkListLoading, landmarkList, landmarkListError] = useApiGet(() => {
        return axios.get("/api/landmarkAllList");
    }, [])

    return (
        <div className="admin-landmark-fee-wrap">
            <h2>랜드마크 가격</h2>
            
            <div className="admin-landmark-fee-upload">
                <span>제목</span>
                <input name="title" onChange={handleTitle} />
                <br/><br/>
                <span>가격</span>
                <input name="price" onChange={handlePrice} />
                <br/><br/>
                <span>관광지 (landmark) </span>
                <select onChange={handleLandmarkId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {landmarkList != null && !landmarkListLoading ?
                    <>
                        {landmarkList.data.items.map(landmark => (
                            <option value={landmark.id}>
                                {landmark.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <button onClick={onClickUpload}>업로드</button>
                <br/><br/><br/><br/>
            </div>


            <div className="admin-landmark-fee-list">
                
                {landmarkFeeList != null && !landmarkFeeListLoading ?
                <>
                    {landmarkFeeList.data.items.map(landmarkFee => (
                        <div className="admin-landmark-fee-item">
                            <span className="title">{landmarkFee.id} - {landmarkFee.title}</span>
                            <br/><br/>
        
                            <input placeholder={landmarkFee.title} onChange={handleChangeTitle} />
                            <input placeholder={landmarkFee.price} onChange={handleChangePrice} />
                            <button value={landmarkFee.id} onClick={onClickModify} >수정</button>
                            <button value={landmarkFee.id} onClick={onClickRemove} >삭제</button>
                            <br/>
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

export default AdminLandmarkFee;