import React, { useState } from "react";
import '../../../css/event/AdminEventHashTag.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminEventHashTag = () => {

    const url = "/admin/event/hashtag";

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // Event Id
    const [eventId, setEventId] = useState(null);
    const handleEventId = e => {
        setEventId(e.target.value);
    }


    const value = {
        name: name,
        eventId: eventId
    }


    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/eventHashTagProcess", value);

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

    // Evnet HashTag List
    const [eventHashTagListLoading, eventHashTagList, eventHashTagListError] = useApiGet(() => {
        return axios.get("/api/eventHashTagAllList");
    }, []);

    return (
        <div className="admin-event-hash-tag-wrap">
            <h2>이벤트 해시태그</h2>

            <h2>리스트</h2>
            <div className="admin-event-hash-tag-list">
                <div className="admin-event-hash-tag-item">
                    <span className="title">PK + 해시태그 이름</span>
                    <br/><br/>

                    <span>축제 </span>
                    <select onChange={handleEventId}>
                        <option selected disabled>
                            선택하시오
                        </option>
                        {eventList != null && !eventListLoading ?
                        <>
                            {eventList.data.items.map(event => (
                                <option value={event.id}>
                                    {event.id} {event.name}
                                </option>
                            ))}
                        </>
                        :
                        <></>
                        }
                    </select>
                    <br/><br/>

                    <span>해시태그 이름</span>
                    <input name="name" onChange={handleName} />
                    <br/><br/>

                    <button onClick={onClickUpload} >추가</button>
                    <br/><br/>
                </div>

                <div className="admin-event-hash-tag-list">
                    {eventHashTagList != null && !eventHashTagListLoading ?
                    <>
                        {eventHashTagList.data.items.map(hashtag => (
                            <div>
                                <h2>{hashtag.eventId} - {hashtag.eventName}</h2>
                                <span>{hashtag.name}</span>
                                <button>삭제</button>
                            </div>
                        ))}
                    </>
                    :
                    <></>
                    }
                    

                </div>
            </div>
        </div>
    );
};

export default AdminEventHashTag;