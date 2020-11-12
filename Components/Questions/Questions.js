import React from 'react';
export default function Questions(props) {
    return (
        <div className="questions--container">
            {
                props.flag ? <img src={props.flag} alt="flag" /> : ""
            }
            <h2>{props.question}</h2>
            <div className="countries--container">
                <button type="button" id={props.countriesToShow1} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>A</span> <span>{props.countriesToShow1}</span></button>
                <button type="button" id={props.countriesToShow2} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>B</span> <span>{props.countriesToShow2}</span></button>
                <button type="button" id={props.countriesToShow3} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>C</span> <span>{props.countriesToShow3}</span></button>
                <button type="button" id={props.countriesToShow4} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>D</span> <span>{props.countriesToShow4}</span></button>
                <div className="next-btn-container" id="next-btn-container">
                    <button type="button" className="next-button" id="nextBtn" onClick={props.changeTheQuestion}> Next </button>
                </div>
            </div>
        </div>
    )
}

 