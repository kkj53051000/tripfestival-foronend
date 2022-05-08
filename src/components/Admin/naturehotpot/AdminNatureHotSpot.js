import React, { useState } from "react";
import '../../../css/naturehotspot/AdminNatureHotSpot.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminNatureHotSpot  = () => {

    const url = "/admin/naturehotspot/naturehotspot";

    // File
    const [file, setFile] = useState(null);
    const handleFile = e => {
        setFile(e.target.files[0]);
    }

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value);
    }

    // Nature Hotspot Type Id
    const [natureHotspotTypeId, setNatureHotspotTypeId] = useState(null);
    const handleHotspotTypeId = e => {
        setNatureHotspotTypeId(e.target.value);
    }

    var formData = new FormData();

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const value = {
                landmarkId: landmarkId,
                natureHotspotTypeId: natureHotspotTypeId
            }

            formData.append("file", file);
            formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

            const response = await axios.post("/api/admin/natureHotspotProcess", formData, {
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
            const response = await axios.post("/api/admin/natureHotspotRemove/" + e.target.value)

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

    // Nature Hotspot Type List
    const [natureHotspotTypeListLoading, natureHotspotTypeList, natureHotspotTypeListError] = useApiGet(() => {
        return axios.get("/api/natureHotspotTypeAllList");
    }, [])

    // Nature Hotspot
    const [natureHotspotListLoading, natureHotspotList, natureHotspotListError] = useApiGet(() => {
        return axios.get("/api/natureHotspotAllList");
    }, [])

    return (
        <div className="admin-nature-hot-spot-wrap">
            <h2>자연관광지</h2>

            <h2>업로드</h2>
            <div className="admin-nature-hot-spot-upload">
                <span>랜드마크</span>
                <select onChange={handleLandmarkId}>
                    <option disabled selected>
                        선택하시오
                    </option>
                    {landmarkList != null && !landmarkListLoading ?
                    <>
                        {landmarkList.data.items.map(landmark => (
                            <option key={landmark.id} value={landmark.id}>
                                {landmark.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <span>자연관광지 타입</span>
                <select onChange={handleHotspotTypeId}>
                    <option disabled selected>
                        선택하시오
                    </option>
                    {natureHotspotTypeList != null && !natureHotspotTypeListLoading ?
                    <>
                        {natureHotspotTypeList.data.items.map(type => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <span>사진 </span>
                <input name="file" type="file" onChange={handleFile} />
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            <div className="admin-nature-hot-spot-list">
                
                {natureHotspotList != null && !natureHotspotListLoading ?
                <>
                    {natureHotspotList.data.items.map(hotSpot => (
                        <div className="item" key={hotSpot.id}>
                            <span>pk + {hotSpot.landmarkName}</span><br/><br/>
                            <span>자연관광지 타입 이름</span><br/><br/>
                            <button value={hotSpot.id} onClick={onClickRemove} >삭제</button>
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

export default AdminNatureHotSpot;