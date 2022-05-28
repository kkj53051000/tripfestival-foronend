import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/trip/TripSpecialMenu.css";
import useApiGet from "../../lib/useApiGet";
import axios from "axios";

const TripSpecialMenu = () => {

    // Special Id
    let { id } = useParams()

    // Trip Special Menu List
    const [tripSpecialMenuListLoading, tripSpecialMenuList, tripSpecialMenuListError] = useApiGet(() => {
        return axios.get("/api/hotSightTwoList", {
            params: {
                hotSightOneId: id
            }
        });
    }, [])


    return (
        <div className="trip-special-menu-wrap">
            <h2>TEST</h2>
            <div className="trip-special-menu-list">
                {!tripSpecialMenuListLoading ?
                <>
                    {tripSpecialMenuList != null ?
                    <>
                        {tripSpecialMenuList.data.items.map(menu => (
                            <Link to={`/tripspecialLandmark/${menu.id}`} className="trip-special-menu" key={menu.id}>
                                <img src={menu.img} alt="img" />
                                <span>{menu.name}</span>
                            </Link>
                        ))}
                    </>
                    :
                    <></>
                    }
                </>
                :
                <></>
                }
                <div className="trip-special-menu">
                    <img src="https://www.didipick.com/didipick_Admin/images/category_icon/test.png" alt="img" />
                    <span>TEST</span>
                </div>
                <div className="trip-special-menu">

                </div>
                <div className="trip-special-menu">

                </div>
                <div className="trip-special-menu">

                </div>
                
                
            </div>
        </div>
    );
};

export default TripSpecialMenu;