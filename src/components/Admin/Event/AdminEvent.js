import React, { useState } from "react";
import "../../../css/event/AdminEvent.css";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";
import { Link } from "react-router-dom";

const AdminEvent = () => {

    const url = "/admin/event/event"

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // StartDate
    const [startDate, setStartDate] = useState(null);
    const handleStartDate = e => {
        setStartDate(e.target.value);
    }

    // EndDate
    const [endDate, setEndDate] = useState(null);
    const handleEndDate = e => {
        setEndDate(e.target.value);
    }

    // Description
    const [description, setDescription] = useState(null);
    const handleDiscription = e => {
        setDescription(e.target.value);
    }

    // Adress
    const [address, setAddress] = useState(null);
    const handleAddress = e => {
        setAddress(e.target.value);
    }

    // Visitor
    const [visitor, setVisitor] = useState(null);
    
    const handleVisitor = e => {
        setVisitor(e.target.value);
    }

    // Inout
    const [inout, setInout] = useState(null);
    const handleInout = e => {
        setInout(e.target.value)
    }

    // WorldCountryCityRegion
    const [worldCountryCityRegionId, setWorldCountryCityRegionId] = useState(null);
    const handleWorldCountryCityRegion = e => {
        setWorldCountryCityRegionId(e.target.value);
    }

    // EventCategory
    const [eventCategoryId, setEventCategoryId] = useState(null);
    const handleEventCategory = e => {
        setEventCategoryId(e.target.value);
    }

    // EventSeason
    const [eventSeasonId, setEventSeasonId] = useState(null);
    const handleEventSeason = e => {
        setEventSeasonId(e.target.value);
    }

    // File
    const [file, setFile] = useState(null);

    const handleFile = e => {
        setFile(e.target.files[0])
    }

    var formData = new FormData();
    formData.append("file", file);

    const value = {
        name: name,
        startDate: startDate,
        endDate: endDate,
        description: description,
        address: address,
        visitor: visitor,
        inout: inout,
        worldCountryCityRegionId: worldCountryCityRegionId,
        eventCategoryId : eventCategoryId,
        eventSeasonId : eventSeasonId
    }

    formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/eventProcess", formData, {
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

    // Event Remove
    const onClickRemove = async (e) => {
        try {
            const response = await axios.post("/api/admin/eventRemove/" + e.target.value);

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }


    // Evnet List
    const [eventListLoading, eventList, eventListError] = useApiGet(() => {
        return axios.get("/api/eventAllList");
    }, []);


    // WorldCountryCityRegion List
    const [worldCountryCityRegionListLoading, worldCountryCityRegionList, worldCountryCityRegionListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityRegionList");
    }, []);

    // EventCategory List
    const [eventCategoryListLoading, eventCategoryList, eventCategoryListError] = useApiGet(() => {
        return axios.get("/api/eventCategoryAllList");
    }, []);

    // EventSeason List
    const [eventSeasonListLoading, eventSeasonList, eventSeasonListError] = useApiGet(() => {
        return axios.get("/api/eventSeasonAllList");
    }, []);


    return (
        <div className="admin-event-upload-wrap">
            <h2>이벤트(축제) 업로드</h2>

            <div className="admin-event-upload">
                <span>이름</span>
                <input onChange={handleName} /><br/><br/>
                <span>시작 날짜</span>
                <input type="date" onChange={handleStartDate} /><br/><br/>
                <span>마지막 날짜</span>
                <input type="date" onChange={handleEndDate} /><br/><br/>
                <span>설명</span>
                <textarea onChange={handleDiscription} /><br/><br/>
                <span>주소</span>
                <input onChange={handleAddress}  /><br/><br/>
                <span>방문객</span>
                <input onChange={handleVisitor} /><br/><br/>
                <span>inout</span>
                <input placeholder="1 밖 0 안" onChange={handleInout} /><br/><br/>

                <span>리젼</span>
                <select onChange={handleWorldCountryCityRegion}>
                    <option disabled selected>
                        선택하시오
                    </option>
                    {worldCountryCityRegionList != null && !worldCountryCityRegionListLoading ?
                    <>
                        {worldCountryCityRegionList.data.items.map(region => (
                            <option value={region.id}>
                                {region.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <span>카테고리</span>
                <select onChange={handleEventCategory}>
                    <option disabled selected>
                        선택하시오
                    </option>
                    {eventCategoryList != null && !eventCategoryListLoading ?
                    <>
                        {eventCategoryList.data.items.map(category => (
                            <option value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <span>시즌</span>
                <select onChange={handleEventSeason}>
                    <option disabled selected>
                        선택하시오
                    </option>
                    {eventSeasonList != null && !eventSeasonListLoading ?
                    <>
                        {eventSeasonList.data.items.map(season => (
                            <option value={season.id}>
                                {season.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>


                <span>축제 메인 이미지 </span>
                <input name="file" type="file" onChange={handleFile} />
                <br/><br/>


                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>이벤트(축제) 리스트</h2>

            <div className="admin-event-list">
                {eventList != null && !eventListLoading ?
                <>
                    {eventList.data.items.map(event => (
                        <>
                        <span className="title">{event.id} - {event.name}</span>

                        <br/>

                        {/* 이름 : <input className="name" placeholder={event.name} />
                        <br/><br/>

                        설명 : <textarea className="description" placeholder={event.description} />
                        <br/><br/>

                        주소 : <input className="address" placeholder={event.address} />
                        <br/><br/>

                        방문객 : <input className="visitor" placeholder={event.visitor} />
                        <br/><br/>
                        
                        밖안 : <input className="inout" placeholder={event.inout ? "밖":"안"} />
                        <br/><br/>

                        worldCountryCityRegionId : <input className="worldcountrycityRegionId" placeholder={event.worldCountryCityRegionId} />
                        <br/><br/>

                        eventCategoryId : <input className="eventCategoryId" placeholder={event.eventCategoryId} />

                        
                        <br/><br/>

                        eventSeasonId : <input className="eventSeasonId" placeholder={event.eventSeasonId} />
                        <br/><br/> */}

                        <br/><br/>

                        <button value={event.id} onClick={onClickRemove}>삭제</button>
                        <Link to={`/admin/event/event/modify/${event.id}`}>수정</Link>
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

export default AdminEvent;