import React from "react";
import { Link } from "react-router-dom";
import "../../css/AdminMain.css";
import axios from "axios";

const AdminMain = () => {

    const onClickCityNew = async ( e ) => {
        try {
            const response = await axios.get("/api/updateCountryCityKorea")

            if(response.data.status === 'SUCCESS') {
                alert("최신화 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }

    const onClickRegionNew = async ( e ) => {
        try {
            const response = await axios.get("/api/updateCountryCityRegionKorea")

            if(response.data.status === 'SUCCESS') {
                alert("최신화 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }

    const onClickLandmarkNew = async ( e ) => {
        try {
            const response = await axios.get("/api/updateLandmarkKorea")

            if(response.data.status === 'SUCCESS') {
                alert("최신화 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }

    const onClickLandmarkDescriptionNew = async ( e ) => {
        try {
            const response = await axios.get("/api/updateLandmarkDescriptionKorea")

            if(response.data.status === 'SUCCESS') {
                alert("최신화 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }

    const onClickLandmarkImgNew = async ( e ) => {
        try {
            const response = await axios.get("/api/updateLandmarkImgKorea")

            if(response.data.status === 'SUCCESS') {
                alert("최신화 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }

    const onClickEventListNew = async ( e ) => {
        try {
            const response = await axios.get("/api/updateEventListKorea")

            if(response.data.status === 'SUCCESS') {
                alert("최신화 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }


    return (
        <div className="admin-main-wrap">
            <h1>유저</h1>
            <Link to='/admin/user'>
                <h1>유저</h1>
            </Link>

            <h1>세계</h1>
            <Link to="/admin/world">
                <h1>세계</h1>
            </Link>

            <h1>관광지</h1>
            <Link to="/admin/landmark">
                <h1>랜드마크(관광지)</h1>
            </Link>

            <Link to="/admin/hotspot">
                <h1>인공관광지</h1>
            </Link>

            <Link to="/admin/naturehotspot">
                <h1>자연관광지</h1>
            </Link>

            <h1>축제</h1>
            <Link to="/admin/event">
                <h1>이벤트(축제)</h1>
            </Link>

            <h1>스페셜</h1>
            <Link to="/admin/hotsight">
                <h1>Hotsight(스페셜)</h1>
            </Link>
            <h1>최신화</h1>
            <h4>회의 후 실행 할 것.</h4>
            <div className="new">
                <button style={{height: '50px', width: '120px'}} onClick={onClickCityNew}>City 최신화</button>
                <button style={{height: '50px', width: '120px'}} onClick={onClickRegionNew}>Region 최신화</button>
                <button style={{height: '50px', width: '120px'}} onClick={onClickLandmarkNew}>Landmark 최신화</button>
                <button style={{height: '50px', width: '120px'}} onClick={onClickLandmarkDescriptionNew}>Landmark Description 최신화 (1회 2000개)</button>
                <button style={{height: '50px', width: '120px'}} onClick={onClickLandmarkImgNew}>Landmark img 최신화</button>
                <button style={{height: '50px', width: '120px'}} onClick={onClickEventListNew}>축제 최신화</button>
            </div>
        </div>
    );
};

export default AdminMain;