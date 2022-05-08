import React, { useState } from "react";
import '../../../css/event/AdminEventTime.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventTime = () => {

    const url = "/admin/event/time";

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

    // Event Id
    const [eventId, setEventId] = useState(null);
    const handleEventId = e => {
        setEventId(e.target.value);
    }
 
    const value = {
        title : title,
        startTime : startTime,
        endTime : endTime,
        eventId: eventId
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/eventTimeProcess", value)

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
            const response = await axios.post("/api/admin/eventTimeRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Event List
    const [eventListLoading, eventList, eventListError] = useApiGet(() => {
        return axios.get("/api/eventAllList");
    }, [])

    // Event Time List
    const [eventTimeListLoading, eventTimeList, eventTimeListError] = useApiGet(() => {
        return axios.get("/api/eventTimeAllList");
    }, [])


    return (
        <div className="admin-event-time-wrap">
            <h2>이벤트 시간 업로드</h2>

            <div className="admin-event-time-upload">
                <span className="title">PK + 축제 이름</span>
                <br/><br/>

                <span>제목</span>
                <input name="title" onChange={handleTitle} />
                <br/><br/>

                <span>시작 시간</span>
                <input name="startTime" type="time" onChange={handleStartTime} />
                <br/><br/>

                <span>끝나는 시간</span>
                <input name="endTime" type="time" onChange={handleEndTime} />
                <br/><br/>

                <span>축제</span>
                <select onChange={handleEventId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {eventList != null && !eventListLoading ?
                    <>
                        {eventList.data.items.map(event => (
                            <option value={event.id}>
                                {event.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
                <br/><br/><br/><br/>
            </div>

            <div className="admin-event-time-list">
                
                {eventTimeList != null && !eventTimeListLoading ?
                <>
                    {eventTimeList.data.items.map(eventTime => (
                        <div className="admin-event-time-item">
                            <h2>{eventTime.eventId} - {eventTime.eventName}</h2>
                            <input placeholder={eventTime.title}/>
                            <input placeholder={eventTime.startTime}/>
                            <input placeholder={eventTime.endTime}/>
                            <br/><br/>


                            <button value={eventTime.id} onClick={onClickRemove} >삭제</button>
                            <br />
                        </div>
                    ))}
                </>
                :
                <>
                </>
                }
            </div>
        </div>
    );
};

export default AdminEventTime;