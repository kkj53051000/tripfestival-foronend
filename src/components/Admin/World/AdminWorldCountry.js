import React, { useState } from "react";
import '../../../css/world/AdminWorldCountry.css';
import axios from "axios";

const AdminWorldCountry = () => {


    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // Currency
    const [currency, setCurrency] = useState(null);
    const handleCurrency = e => {
        setCurrency(e.target.value);
    }

    // Capital
    const [capital, setCapital] = useState(null);
    const handleCapital = e => {
        setCapital(e.target.value);
    }

    // ExchangeRatio
    const [exchangeRatio, setExchangeRatio] = useState(null);
    const handleExchangeRatio = e => {
        setExchangeRatio(e.target.value);
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
        currency: currency,
        capital: capital,
        exchangeRatio: exchangeRatio
    }

    formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/worldCountryProcess", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response)
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="admin-world-country-wrap">
            <h2>세계 나라</h2>

            <h2>업로드</h2>

            <div className="admin-world-country-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>국기</span>
                <input name="file" type="file" onChange={handleFile} />
                <br/><br/>

                <span>통화</span>
                <input name="currency" onChange={handleCurrency} />
                <br/><br/>

                <span>수도</span>
                <input name="capital" onChange={handleCapital} />
                <br/><br/>

                <span>환율</span>
                <input name="exchangeRatio" onChange={handleExchangeRatio} />
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-list">
                <div className="item">
                    <input placeholder="나라 이름" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminWorldCountry;