 import React from 'react';
export default function Questions(props) {
    return (
        <div className="questions--container">
            {
                props.flag ? <img src={props.flag} alt="flag" /> : ""
            }
            <h2>{props.question}</h2>
            <div className="countries--container">
                <button type="button" ref={props.buttonRef} data-value={props.countriesToShow1} id={props.countriesToShow1} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>A</span>{props.countriesToShow1}</button>
                <button type="button" ref={props.buttonRef} data-value={props.countriesToShow2}  id={props.countriesToShow2} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>B</span>{props.countriesToShow2}</button>
                <button type="button" ref={props.buttonRef} data-value={props.countriesToShow3}  id={props.countriesToShow3} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>C</span>{props.countriesToShow3}</button>
                <button type="button" ref={props.buttonRef} data-value={props.countriesToShow4}  id={props.countriesToShow4} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>D</span>{props.countriesToShow4}</button>
                <div className="next-btn-container">
                    <button type="button" className="next-button" onClick={props.changeTheQuestion}> Next </button>
                </div>
            </div>
        </div>
    )
}