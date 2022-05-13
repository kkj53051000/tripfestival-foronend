import React, { useState } from "react";
import "../../css/landmark/Landmark.css";

const Landmark = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModalTrue = () => {
        setOpenModal(true)
    }

    const handleOpenModalFalse = () => {
        setOpenModal(false)
    }

    const imgList = [
        "http://tong.visitkorea.or.kr/cms/resource/19/2662619_image2_1.bmp",
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
    ]

    return (
        <div className="landmark-wrap">
            <div className="landmark-screen">
                <div className="landmark-header">
                    <div className="img-area">
                        <img src="http://tong.visitkorea.or.kr/cms/resource/19/2662619_image2_1.bmp" alt="img" />
                    </div>

                    <div className="title-area">
                        <span className="title">칠갑산</span>
                        <span className="address">대한민국 충청남도 청양군</span>
                    </div>
                </div>

                <div className="landmark-body">
                    <div className="landmark-description">
                    칠갑산(561m)은 크고 작은 봉우리와 계곡을 지닌 명산으로 자연 그대로의 울창한 숲을 지니고 있다. 1973년 3월 6일에 도립공원으로 지정되었고 면적은 32.542㎢으로 3개면에 걸쳐 있으며 주요 명소는 정상, 아흔 아홉골, 칠갑산장(최익현 동상, 칠갑산노래 조각품 등), 장승공원, 천장호, 장곡사, 정혜사, 자연휴양림, 도림사지, 두률성 등이 있다. 특히 칠갑산은 계절의 변화가 뚜렷하여 봄에는 산철쭉과 벚꽃으로 단장하여 우아한 자태를 자랑하고 여름에는 울창한 천연림이 현대인들의 심신을 안정시켜주며, 또한 가을에는 울긋불긋한 단풍으로 어우러지며, 겨울의 설경은 천상의 세계에 들어온 듯한 느낌으로 다가와 사시사철 등산객들에게 독특한 묘미를 전해주는 명산이다. 칠갑산은 7개의 등산로가 개발되어 있으며 각각 특성을 자랑하고 있어 각자에 맞게 등산코스를 선택할 수 있어 꾸준히 관광객이 늘고 있고, 대중가요 '칠갑산' 노래로 일반인들에게 친숙하다.
                    </div>

                    <div className="landmark-fee">
                        입장료 - 무료
                    </div>
                </div>

                <div class="landmark-img-list">
                    <img onClick={handleOpenModalTrue} src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" />
                    <div id="modal-class" className={`modal ${openModal ? null : 'hidden'}`}>
                        <div className="modal_overlay" onClick={handleOpenModalFalse}>

                        </div>
                        <div className="modal_content">
                            <button>&#60;</button>
                            <div className="img">
                                {/* {imgList.map(img => (
                                    <img src={img} alt="img" />
                                ))} */}
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="img" />
                            </div>
                            
                            <button>&#62;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landmark;