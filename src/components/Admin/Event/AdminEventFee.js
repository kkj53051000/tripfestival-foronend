import React, { useState } from "react";
import '../../../css/event/AdminEventFee.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventFee = () => {

    const url = "/admin/event/fee";


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


    // Event
    const [eventId, setEventId] = useState(null);
    const handleEvent = e => {
        setEventId(e.target.value);
    }

    const value = {
        title: title,
        price: price,
        eventId: eventId
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/eventFeeProcess", value);

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
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

    // EvnetFee List
    const [eventFeeListLoading, eventFeeList, eventFeeListError] = useApiGet(() => {
        return axios.get("/api/eventFeeAllList");
    }, []);

    return (
        <div className="admin-event-fee-wrap">
            <h2>이벤트 가격</h2>


            <h2>리스트</h2>
            <div className="admin-event-fee-list">
                <div className="admin-event-fee-item">
                    <span className="title">PK + 이벤트 이름</span>
                    <br/><br/>
                    <span>제목</span>
                    <input name="title" onChange={handleTitle} />
                    <br/><br/>

                    <span>가격</span>
                    <input name="price" onChange={handlePrice} />
                    <br/><br/>

                    <span>축제 (Event)</span>
                    <select onChange={handleEvent}>
                        <option disabled selected>
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
                        <>
                        </>
                        }
                    </select>

                    <button onClick={onClickUpload}>업로드</button>
                    <br/><br/>
                    
                    {eventFeeList != null && !eventFeeListLoading ?
                    <>
                        {eventFeeList.data.items.map(eventFee => (
                            <div>
                                <h2>{eventFee.eventId} - {eventFee.eventName}</h2>
                                <input name="title" placeholder={eventFee.title} />
                                <input name="price" placeholder={eventFee.price} />
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                        ))}
                    </>
                    :
                    <></>
                    }
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default AdminEventFee;