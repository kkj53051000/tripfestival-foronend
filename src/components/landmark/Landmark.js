import React, { useState, useEffect } from "react";
import "../../css/landmark/Landmark.css";
import { FaArrowAltCircleRight,  FaArrowAltCircleLeft } from 'react-icons/fa'; 
import { useParams } from 'react-router-dom';
import axios from "axios";
import useApiGet from "../../lib/useApiGet";

const { kakao } = window;

const Landmark = () => {

    const { id } = useParams();

    const imgList = [
        "http://tong.visitkorea.or.kr/cms/resource/19/2662619_image2_1.bmp",
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
    ]

    const [current, setCurrent] = useState(0)
    // const length = imgList.length
    const [length, setLength] = useState(null);

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // Landmark
    const [landmarkLoading, landmark, landmarkError] = useApiGet(() => {
        return axios.get("/api/landmark", {
            params: {
                landmarkId: id,
            }
        })
    }, []); 


    const onClicklandmarkClear = async () => {
        try {
            const response = await axios.post("/api/admin/landmarkClear/" + id);

            if(response.data.status == "SUCCESS") {
                alert("삭제완료");
            }

        }catch(e) {

        }
        
    }
 
    const [description, setDescription] = useState(null);

    useEffect(()=>{

        if (landmark != null) {
            setDescription(landmark.data.description)

            setLength(landmark.data.imgList.items.length)
        }

        if(process.env.REACT_APP_ENV === "prod") {
            if(landmark == null) {
                return;
            }

            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
              level: 3
            };

            var map = new kakao.maps.Map(container, options);


            
    
            var geocoder = new kakao.maps.services.Geocoder();
    
            geocoder.addressSearch(landmark.data.address, function(result, status) {
    
                // 정상적으로 검색이 완료됐으면 
                 if (status === kakao.maps.services.Status.OK) {
            
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
            
                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);

      
                } 
            });
        }
        
    }, [landmark])
        

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    if(!Array.isArray(imgList) || imgList.length <= 0) {
        return null
    }

    return (
        <div className="landmark-wrap">

            <h1><button onClick={onClicklandmarkClear}>삭제</button></h1>
            
            <div className="landmark-screen">
                {landmark != null && !landmarkLoading ?
                <div className="landmark-header">
                    <div className="img-area">
                        <img src={landmark.data.img} alt="img" />
                    </div>
                    
                    <div className="title-area">
                        <span className="title">{landmark.data.name}</span>
                        <span className="address">{landmark.data.address}</span>
                    </div>
                    
                    
                </div>
                :
                <></>
                }

                <div className="landmark-body">
                    {landmark != null && !landmarkLoading ?
                    <>
                        <div className="landmark-description" dangerouslySetInnerHTML={ {__html: description}} >
                            {/* {landmark.data.description} */}
                        </div>
                    </>
                        :
                    <></>
                    }  
                    

                    <div className="landmark-fee">
                        {/* 입장료 */}
                    </div>


                    {landmark !== null && !landmarkLoading ?
                    <div className="landmark-img-wrap">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                        {landmark.data.imgList.items.map((img, index) => (
                            <div className={index === current ? 'slide  active' : 'slide'}>
                                {index === current && (
                                    <img src={img.img} alt="img" className="image" />
                                )}
                            </div>
                        ))}
                    </div>
                    :
                    <></>
                    }
                    

                    
                    
                </div>

                <div className="landmark-map">
                    <div className="landmark-kakao-map" id='map' style={{
                                    width: '500px', 
                                    height: '500px'
                                }}>
                    </div>

                    {/* <div className="span">
                        <span className="address">
                            주소
                        </span>
                        <span className="ing-festival">
                            이 동네에 진행중인 축제
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Landmark;