import axios from "axios";
import React, { useState } from "react";
import '../../../css/hotsight/HotSightLandmark.css';
import useApiGet from "../../../lib/useApiGet";

const AdminHotSightLandmark = () => {

    const url = "/admin/hotsight/landmark";

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value);
    }

    // Hot Sight Two Id
    const [hotSightTwoId, setHotSightTwoId] = useState(null);
    const handleHotSightTwoId = e => {
        setHotSightTwoId(e.target.value);
    }
    
    const value= {
        landmarkId: landmarkId,
        hotSightTwoId: hotSightTwoId
    }
    
    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/hotSightLandmarkProcess", value)

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
            const response = await axios.post("/api/admin/hotSightLandmarkRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }
    
    // Landmark List
    const [landmarkListLoading, landmarkList, landmarkListError] = useApiGet(() => {
        return axios.get("/api/landmarkAllList");
    }, [])

    // Hot Sight Two List
    const [hotSightTwoListLoading, hotSightTwoList, hotSightTwoListError] = useApiGet(() => {
        return axios.get("/api/hotSightTwoAllList");
    }, [])

    // Hot Sight Lanmark List
    const [hotSightLandmarkListLoading, hotSightLandmarkList, hotSightLandmarkListError] = useApiGet(() => {
        return axios.get("/api/hotSightLandmarkAllList");
    }, [])

    return (
        <div className="admin-hot-sight-one-wrap">
            <h2>스페셜 관광지 업로드/리스트</h2>

            <h2>업로드</h2>
            <div className="admin-hot-sight-one-upload">

                <span>랜드마크</span>
                <select onChange={handleLandmarkId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {landmarkList != null && !landmarkListLoading ?
                    <>
                        {landmarkList.data.items.map(landmark => (
                            <option value={landmark.id} key={landmark.id}>
                                {landmark.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <span>스페셜 2</span>
                <select onChange={handleHotSightTwoId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {hotSightTwoList != null && !hotSightTwoListLoading ?
                    <>
                        {hotSightTwoList.data.items.map(hotSightTwo => (
                            <option value={hotSightTwo.id} key={hotSightTwo.id}>
                                {hotSightTwo.name}
                            </option>
                        ))}
                    </>
                    :
                    <>
                    </>
                    }
                </select>
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>
            
            
            <h2>리스트</h2>

            <div className="admin-hot-sight-one-list">
                
                {hotSightLandmarkList && !hotSightLandmarkListLoading ?
                <>
                    {hotSightLandmarkList.data.items.map(hotSightLandmark => (
                        <div key={hotSightLandmark.id}>
                            <span style={{fontSize: '26px', fontWeight: 'bold'}}>{hotSightLandmark.id} - {hotSightLandmark.landmarkName}</span>
                            <br/><br/>

                            <span style={{fontSize: '26px', fontWeight: 'bold'}}>{hotSightLandmark.hotSightTwoName}</span>
                            <br/><br/>

                            <button value={hotSightLandmark.id} onClick={onClickRemove} >삭제</button>
                            <br/><br/>
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

export default AdminHotSightLandmark;