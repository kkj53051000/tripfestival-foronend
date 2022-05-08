import React, { useState } from "react";
import '../../../css/hotspot/AdminHotSpot.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminHotSpot = () => {

    const url = "/admin/hotspot/hotspot";

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value);
    }

    // HotSpot Type Id
    const [hotspotTypeId, setHotspotTypeId] = useState(null);
    const handleHotspot = e => {
        setHotspotTypeId(e.target.value);
    }

    const value = {
        landmarkId: landmarkId,
        hotspotTypeId: hotspotTypeId
    }


    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/hotspotProcess", value)

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
            const response = await axios.post("/api/admin/hotspotRemove/" + e.target.value)

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

    // Hotspot Type List
    const [hotspotTypeListLoading, hotspotTypeList, hotspotTypeListError] = useApiGet(() => {
        return axios.get("/api/hotspotTypeAllList");
    }, [])

    // Hotspot List
    const [hotspotListLoading, hotspotList, hotspotListError] = useApiGet(() => {
        return axios.get("/api/hotspotAllList");
    }, [])


    return (
        <div className="admin-hot-spot-wrap">
            <h2>인공관광지</h2>

            <h2>업로드</h2>
            <div className="admin-hot-spot-upload">
                <span>랜드마크</span>
                <select onChange={handleLandmarkId}>
                    <option selected disabled>선택하시오</option>
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

                <span>인공관광지 타입</span>
                <select onChange={handleHotspot}>
                    <option selected disabled>선택하시오</option>
                    {hotspotTypeList != null && !hotspotTypeListLoading ?
                    <>
                        {hotspotTypeList.data.items.map(hotspot => (
                            <option value={hotspot.id} key={hotspot.id}>
                                {hotspot.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            <div className="admin-hot-spot-list">
                
                {hotspotList != null && !hotspotListLoading ?
                <>
                    {hotspotList.data.items.map(hotspot => (
                        <div className="item" key={hotspot.id}>
                            <span>{hotspot.hotspotTypeName} - {hotspot.landmarkName}</span><br/><br/>
                            <button value={hotspot.id} onClick={onClickRemove} >삭제</button>
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
export default AdminHotSpot;