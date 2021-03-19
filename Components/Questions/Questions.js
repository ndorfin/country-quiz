import React from 'react';
export default function Questions(props) {

    function buttonMouseEnter(e) {
        const button = e.target;
        button.classList.add("hoverButton");
    }

    return (
        <div className="questions--container"> 
                <img className="image" src="./undraw_adventure_4hum.svg" alt="undraw adventure image" />
                {
                    props.flag ? <img src={props.flag} alt="flag" /> : ""
                }
             <h2>{props.question}</h2>
            <div className="countries--container">
                <button type="button" id={props.countriesToShow1} className={props.buttonClass} onMouseOver={buttonMouseEnter} onClick={props.handleClick} disabled={props.isDisabed}>
                    <span className="buttonText">A</span> <span className="buttonText">{props.countriesToShow1}</span>
                </button>
                <button type="button" id={props.countriesToShow2} className={props.buttonClass} onMouseOver={buttonMouseEnter} onClick={props.handleClick} disabled={props.isDisabed}>
                    <span className="buttonText">B</span> <span className="buttonText">{props.countriesToShow2}</span>
                </button>
                <button type="button" id={props.countriesToShow3} className={props.buttonClass} onMouseOver={buttonMouseEnter} onClick={props.handleClick} disabled={props.isDisabed}>
                    <span className="buttonText">C</span> <span className="buttonText">{props.countriesToShow3}</span>
                </button>
                <button type="button" id={props.countriesToShow4} className={props.buttonClass} onMouseOver={buttonMouseEnter} onClick={props.handleClick} disabled={props.isDisabed}>
                    <span className="buttonText">D</span> <span className="buttonText">{props.countriesToShow4}</span>
                </button>
                <div className="next-btn-container" id="next-btn-container">
                    <button type="button" className="next-button" id="nextBtn" onClick={props.changeTheQuestion}> Next </button>
                </div>
            </div>
        </div>
    )
}

