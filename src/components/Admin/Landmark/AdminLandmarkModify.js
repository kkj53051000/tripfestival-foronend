import React, { useState } from "react";
import { useParams } from "react-router";
import "../../../css/landmark/AdminLandmarkModify.css";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminLandmarkModify = () => {

    const { id } = useParams();

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // Description
    const [description, setDescription] = useState(null);
    const handleDescription = e => {
        setDescription(e.target.value);
    }

    // Address
    const [address, setAddress] = useState(null);
    const handleAddress = e => {
        setAddress(e.target.value);
    }

    // Homepage
    const [homepage, setHomepage] = useState(null);
    const handleHomepage = e => {
        setHomepage(e.target.value);
    }

    const value = {
        name: name,
        description: description,
        address: address,
        homepage: homepage
    }

    // Axios Modify Request
    const onClickModfiy = async () => {
        try {
            const response = await axios.post("/api/admin/landmarkModify/" + id, value)

            if (response.data.status == "SUCCESS") {
                alert("수정 성공")
            }

        } catch(e) {
            console.log(e);
        }
    }



     // Landmark List
    const [landmarkLoading, landmark, landmarkError] = useApiGet(() => {
        return axios.get("/api/landmark", {
            params: {
                landmarkId: id
            }
        });
    }, []);

    return (
        <div>
            <h1>관광지 수정</h1>
            {!landmarkLoading && landmark != null ?
            <>
                <h1>{landmark.data.name}</h1>
                <h2>제목</h2>
                <input className="name" placeholder={landmark.data.name} onChange={handleName} />
                <h2>설명</h2>
                <textarea className="description" placeholder={landmark.data.description} onChange={handleDescription} />
                <h2>주소</h2>
                <textarea className="address" placeholder={landmark.data.address} onChange={handleAddress} />
                <h2>홈페이지</h2>
                <input className="homepage" placeholder={landmark.data.homepage} onChange={handleHomepage} />

                <br/><br/>
                
                <button onClick={onClickModfiy}>수정</button>
                <br/><br/>
            </>
            :
            <></>
            }
        </div>
    );
};

export default AdminLandmarkModify;