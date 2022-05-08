import React, { useState } from "react";
import "../../../css/landmark/AdminLandmarkTime.css";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminLandmarkTime = () => {

    const url = "/admin/landmark/time";

    // Title
    const [title, setTitle] = useState(null);
    const handleTitle = e => {
        setTitle(e.target.value);
    }

    // Start Time
    const [startTime, setStartTime] = useState(null);
    const handleStartTime = e => {
        setStartTime(e.target.value);
    }

    // End Time
    const [endTime, setEndTime] = useState(null);
    const handleEndTime = e => {
        setEndTime(e.target.value);
    }

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value);
    }

    const value = {
        title: title,
        startTime: startTime,
        endTime: endTime,
        landmarkId: landmarkId
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {

            const response = await axios.post("/api/admin/landmarkTimeProcess", value)

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
            const response = await axios.post("/api/admin/landmarkTimeRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }



    // Landmark
    const [landmarkListLoading, landmarkList, landmarkListError] = useApiGet(() => {
        return axios.get("/api/landmarkAllList");
    }, [])

    // Landmark Time
    const [landmarkTimeListLoading, landmarkTimeList, landmarkTimeListError] = useApiGet(() => {
        return axios.get("/api/landmarkTimeAllList");
    }, [])
    
    return (
        <div className="admin-landmark-time-wrap">
            <h2>관광지 시간</h2>

            <div className="admin-landmark-time-upload">
                <span>제목</span>
                <input name="title" onChange={handleTitle} />
                <br/><br/>

                <span>시작 시간</span>
                <input type="time" onChange={handleStartTime} />
                <br/><br/>

                <span>끝나는 시간</span>
                <input type="time" onChange={handleEndTime} />
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
                <br/><br/>

                <button onClick={onClickUpload} >업로드</button>
                <br/><br/><br/><br/>
            </div>

            <div className="admin-landmark-time-list">
                
                {landmarkTimeList != null && !landmarkTimeListLoading ?
                <>
                    {landmarkTimeList.data.items.map(time => (
                        <div className="admin-landmark-time-item">
                            <span className="title">PK + 관광지 이름</span>
                            <br/><br/>
                            
                            <input placeholder={time.title} />
                            <input placeholder={time.startTime} />
                            <input placeholder={time.endTime} />

                            <button value={time.id} onClick={onClickRemove}>삭제</button>
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

export default AdminLandmarkTime;