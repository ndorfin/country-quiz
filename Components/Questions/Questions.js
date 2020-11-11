 import React from 'react';
export default function Questions(props) {
    return (
        <div className="questions--container">
            {
                props.flag ? <img src={props.flag} alt="flag" /> : ""
            }
            <h2>{props.question}</h2>
            <div className={`countries--container ${props.divClass}`}>
                <button type="button" ref={props.buttonRef} id={props.countriesToShow1} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>A</span>{props.countriesToShow1}</button>
                <button type="button" ref={props.buttonRef} id={props.countriesToShow2} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>B</span>{props.countriesToShow2}</button>
                <button type="button" ref={props.buttonRef} id={props.countriesToShow3} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>C</span>{props.countriesToShow3}</button>
                <button type="button" ref={props.buttonRef} id={props.countriesToShow4} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>D</span>{props.countriesToShow4}</button>
                <div className="next-btn-container" id="next-btn-container">
                    <button type="button" className="next-button" id="nextBtn" onClick={props.changeTheQuestion}> Next </button>
                </div>
            </div>
        </div>
    )
}

 // {props.countries.map(country => {
//     return <button type="button" ref={props.buttonRef} id={country} className={props.buttonClass} onClick={props.handleClick} disabled={props.isDisabed}><span>D</span>{country}</button>
// })
// }