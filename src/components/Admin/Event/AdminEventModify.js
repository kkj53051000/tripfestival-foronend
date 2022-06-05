import React, { useState } from "react";
import "../../../css/event/AdminEventModify.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventModify = () => {

    const { id } = useParams();

    // title
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // description
    const [description, setDescription] = useState(null);
    const handleDescription = e => {
        setDescription(e.target.value);
    }

    // inout
    const [inout, setInout] = useState(null);
    const handleInout = e => {
        setInout(e.target.value);
    }

    // visitor
    const [visitor, setVisitor] = useState(null);
    const handleVisitor = e => {
        setVisitor(e.target.value)
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

    const value = {
        name: name,
        description: description,
        inout: inout,
        visitor: visitor,
        worldCountryCityRegionId: worldCountryCityRegionId,
        eventCategoryId: eventCategoryId,
        eventSeasonId: eventSeasonId
    }

    // Event Modify
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/eventModify/" + id, value);

            if(response.data.status === 'SUCCESS') {
                alert("수정 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Evnet 
    const [eventLoading, event, eventError] = useApiGet(() => {
        return axios.get("/api/event/" + id);
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
        <div>
            {event != null ?
            <div className="admin-event-modify-wrap">
                <h1>{event.data.name}</h1>

                <h2>제목</h2>
                <input name="name" placeholder={event.data.name} onChange={handleName} />
                <h3>설명</h3>
                <input name="description" placeholder={event.data.description} onChange={handleDescription} />
                <h3>안/밖</h3>
                <input name="inout" placeholder={event.data.inout} onChange={handleInout} />
                <h3>방문객</h3>
                <input name="visitor" placeholder={event.data.visitor} onChange={handleVisitor} />
                <h3>지역</h3>
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
                <h3>카테고리</h3>
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
                <h3>시즌</h3>
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
                <button onClick={onClickUpload}>수정</button>
            </div>
            :
            <>
            
            </>
            }
        </div>
    );
};

export default AdminEventModify;