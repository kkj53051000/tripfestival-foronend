import React, { useState } from "react";
import "../../css/main/MainView.css";
import { Link } from "react-router-dom";

const MainView = () => {

    const [inputValue, SetInputValue] = useState("");

    const onChangeInputValue = e => {
        SetInputValue(e.target.value)
    }

    const [inputFocused, setInputFocused] = useState("");

    const onInputFocus = () => {
        setInputFocused(true)
    }
    
    const onInputBlur = () => {
        setTimeout(() => setInputFocused(false), 100);
    }

    const [inputDivtFocus, setInputDivFocus] = useState("");

    const onInputDivFocus = () => setInputDivFocus(true)
    const onInputDivBlur = () => setInputDivFocus(false)

    return (
        <div className="main-view-wrap">
            
            <div className="main-view-input">
                <div className="input">
                    <input
                    className="main-input"
                    onChange={onChangeInputValue}
                    placeholder="어디로 가시나요?"
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    />
                </div>
                {inputFocused || inputDivtFocus ?
                <div className="input-div" onClick={onInputDivFocus} onFocus={onInputDivFocus} onBlur={onInputDivBlur}>
                    <Link to="/f" className="input-content">
                        <span className="input-content-name">부산</span>
                        <span className="input-content-adress">대한민국 부산광역시</span>
                    </Link>
                </div>
                :
                <div></div>
                }
                
            </div>
        
        </div>
    );
};

export default MainView;