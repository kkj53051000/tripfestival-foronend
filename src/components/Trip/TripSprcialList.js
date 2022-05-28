import React from "react";
import { Link } from "react-router-dom";
import "../../css/trip/TripSpecial.css";
import useApiGet from "../../lib/useApiGet";
import axios from "axios";

const TripSpecialList = () => {

    // Trip Special List
    const [tripSpecialListLoading, tripSpecialList, tripSpecialListError] = useApiGet(() => {
        return axios.get("/api/hotSightOneAllList");
    }, [])

    return (
        <div className="main-special-wrap">
            {!tripSpecialListLoading ?
            <>
                {tripSpecialList != null ?
                <>
                    {tripSpecialList.data.items.map(special => (
                        <div className="main-special-item" key={special.id}>
                            <img src={special.img} alt="test" />
            
                            <Link className="title-wrap" to={`/tripspecialmenu/${special.id}`}>
                                <span className="title">{special.name}</span>
                            </Link>
                        </div>
                    ))}
                </>
                :
                <></>
                }
            </>
            :
            <></>
            }
        </div>
    );
};

export default TripSpecialList;