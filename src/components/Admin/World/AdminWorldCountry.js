import React, { useState } from "react";
import '../../../css/world/AdminWorldCountry.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";
// import history from '../../../history';

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
            
            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace("/admin/world/country")
            }

        } catch(e) {
            console.log(e);
        }
    }

    const [worldCountryListLoading, worldCountryList, worldCountryListError] = useApiGet(() => {
        return axios.get("/api/worldCountryNameList");
    }, []);


    // Modify

    // Name
    const [namee, setNamee] = useState(null);
    const onChangeNamee = e => {
        setNamee(e.target.value);
    }

    // Currency
    const [currencyy, setCurrencyy] = useState(null);
    const onChangeCurrencyy = e => {
        setCurrencyy(e.target.value);
    }

    // Capital
    const [capitall, setCapitall] = useState(null);
    const onChangeCapitall = e => {
        setCapitall(e.target.value);
    }


    // ExchangeRatio
    const [exchangeRatioo, setExchangeRatioo] = useState(null);
    const onChangeExchangeRatioo = e => {
        setExchangeRatioo(e.target.value);
    }


    const changeValue = {
        name: namee,
        currency: currencyy,
        capital: capitall,
        exchangeRatio: exchangeRatioo
    }



    const onClickModify = async (e) => {
        const response = await axios.post("/api/admin/worldCountryModify/" + e.target.value, changeValue)

        if(response.data.status === 'SUCCESS') {
            alert("수정 성공");
            window.location.replace("/admin/world/country")
        }
    }


    // Remove
    const onClickRemove = async (e) => {
        const response = await axios.post("/api/admin/worldCountryRemove/" + e.target.value)

        if(response.data.status === 'SUCCESS') {
            alert("삭제 성공");
            window.location.replace("/admin/world/country")
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
                <input name="exchangeRatio" placeholder="숫자만" onChange={handleExchangeRatio} />
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-list">
                {worldCountryList != null && !worldCountryListLoading ?
                <>
                    {worldCountryList.data.items.map(country => (
                        <div className="item" key={country.id}>
                            <h3>{country.name}</h3>
                            이름 : <input name="name" placeholder={country.name} onChange={onChangeNamee} /><br/>
                            통화 : <input name="currency" placeholder={country.currency} onChange={onChangeCurrencyy} /><br/>
                            수도 : <input name="capital" placeholder={country.capital} onChange={onChangeCapitall} /><br/>
                            환율 : <input name="exchangeRatio" placeholder={country.exchangeRatio} onChange={onChangeExchangeRatioo} /><br/><br/>
                            <button value={country.id}  onClick={onClickModify}>수정</button>
                            <button value={country.id} onClick={onClickRemove} >삭제</button>
                            <br/><br/><br/><br/>
                        </div>
                    ))}
                </>
                :
                <></>
                }
            </div>
        </div>
    );
};

export default AdminWorldCountry;