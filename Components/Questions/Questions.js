// https://restcountries.eu/rest/v2/all

import React from 'react';

export default function Questions(props) {
    
    return (
        <div className="questions--container">
            <h2>{props.capitalName} is the capital city of</h2>
            <div className="countries--container">
                <button type="button" id={props.countriesToShow1} className={props.buttonClass}><span>A</span>{props.countriesToShow1}</button>
                <button type="button" id={props.countriesToShow2} className={props.buttonClass}><span>B</span>{props.countriesToShow2}</button>
                <button type="button" id={props.countriesToShow3} className={props.buttonClass}><span>C</span>{props.countriesToShow3}</button>
                <button type="button" id={props.countriesToShow4} className={props.buttonClass}><span>D</span>{props.countriesToShow4}</button>
                <div className="next-btn-container">
                    <button type="button" className="next-button"> Next </button>
                </div>
            </div>
        </div>
    )
}
