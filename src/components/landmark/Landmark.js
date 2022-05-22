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
    const length = imgList.length

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
    }, [])


    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {

            // 정상적으로 검색이 완료됐으면 
             if (status === kakao.maps.services.Status.OK) {
        
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
        
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                // var infowindow = new kakao.maps.InfoWindow({
                //     content: null
                // });
                // infowindow.open(map, marker);
        
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });   
        }, [])
        
        

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    if(!Array.isArray(imgList) || imgList.length <= 0) {
        return null
    }

    return (
        <div className="landmark-wrap">
            
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
                    <div className="landmark-description">
                    {/* 칠갑산(561m)은 크고 작은 봉우리와 계곡을 지닌 명산으로 자연 그대로의 울창한 숲을 지니고 있다. 1973년 3월 6일에 도립공원으로 지정되었고 면적은 32.542㎢으로 3개면에 걸쳐 있으며 주요 명소는 정상, 아흔 아홉골, 칠갑산장(최익현 동상, 칠갑산노래 조각품 등), 장승공원, 천장호, 장곡사, 정혜사, 자연휴양림, 도림사지, 두률성 등이 있다. 특히 칠갑산은 계절의 변화가 뚜렷하여 봄에는 산철쭉과 벚꽃으로 단장하여 우아한 자태를 자랑하고 여름에는 울창한 천연림이 현대인들의 심신을 안정시켜주며, 또한 가을에는 울긋불긋한 단풍으로 어우러지며, 겨울의 설경은 천상의 세계에 들어온 듯한 느낌으로 다가와 사시사철 등산객들에게 독특한 묘미를 전해주는 명산이다. 칠갑산은 7개의 등산로가 개발되어 있으며 각각 특성을 자랑하고 있어 각자에 맞게 등산코스를 선택할 수 있어 꾸준히 관광객이 늘고 있고, 대중가요 '칠갑산' 노래로 일반인들에게 친숙하다. */}
                    </div>

                    <div className="landmark-fee">
                        입장료 - 무료
                    </div>

                    <div className="landmark-img-wrap">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                    {imgList.map((img, index) => (
                        <div className={index === current ? 'slide  active' : 'slide'}>
                            {index === current && (
                                <img src={img} alt="img" className="image" />
                            )}
                        </div>
                    ))}
                    </div>

                    
                    
                </div>

                <div className="landmark-map">
                    <div className="landmark-kakao-map" id='map' style={{
                                    width: '300px', 
                                    height: '300px'
                                }}>
                    </div>

                    <div className="span">
                        <span className="address">
                            주소
                        </span>
                        <span className="ing-festival">
                            이 동네에 진행중인 축제
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landmark;