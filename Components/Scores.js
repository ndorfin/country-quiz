import React from 'react';

export default function Scores(props) {

    return (
        <div className="scores--container">
            <h2 className="page--subheading">
                Results
            </h2>
            <p>
                You got <span className="score--number">{props.scores}</span> correct answers
            </p>
            <button type="button" className="return--btn" id="return--btn" onClick={props.resetQuiz}>Try again</button>
        </div>
    )
}