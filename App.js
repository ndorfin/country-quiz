import React, { useState } from 'react';
import useVariables from './Components/useVariables';
import Header from './Components/Header';
import Questions from './Components/Questions/Questions';
import Scores from './Components/Scores';


export default function App() {
    let [divClass, setDivClass] = useState("");
    let { buttonRef, fetchCountries, showQuestions, setShowQuestions, countries, answerButtonClass, setAnswerButtonClass, disableButton, setDisableButton, capitalName, countryNameRightAnswer, flagToShow, flagCountryOwner, capitalRandomNumber, capitalRandomNumber1, capitalRandomNumber2, capitalRandomNumber3, scores, setScores, handleIncrement, } = useVariables();

    // Get all the capitals from the data 
    const capital = countries.map(city => city.capital);

    // Get all the country names from the data
    const countryName = countries.map(city => city.name);

    // This is how we look foor the right country that matches the question
    const findCountryAnswer = countries.find(country => country.capital == capital[capitalRandomNumber]);
    if (findCountryAnswer) {
        capitalName = findCountryAnswer.capital;
        countryNameRightAnswer = findCountryAnswer.name;
    } else {
        return null;
    }

    // From here is all questions about the flag
    // Get one flag from the data
    const flag = countries.map(country => country.flag);
    // Finding the owner of the flag
    const findFlagOwner = countries.find(country => country.flag == flag[capitalRandomNumber]);

    if (findFlagOwner) {
        flagToShow = findFlagOwner.flag
        flagCountryOwner = findFlagOwner.name
    } else {
        return null
    }

    // All the countries to show in the quiz including the right answer
    const countriesToShow = [countryNameRightAnswer, countryName[capitalRandomNumber1], countryName[capitalRandomNumber2], countryName[capitalRandomNumber3]];

    // Randomize countries to show: change the order of the index in the array
    let randomCountriesArr = countriesToShow, randomCountries = [], i = countriesToShow.length, j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        randomCountries.push(randomCountriesArr[j]);
        randomCountriesArr.splice(j, 1);
    }

    
    const handleClick = (e) => {
        let buttonId = e.target.id;  
        // // Get the element that has the right answer and change the background color
        let rightAnswerId = document.getElementById(countryNameRightAnswer);
        rightAnswerId.style.backgroundColor = "green";
        let nextButton = document.getElementById("next-btn-container");
        // // // display the next button
        nextButton.style.display = "block";
        if (buttonId !== countryNameRightAnswer) {
            let wrongAnswer = document.getElementById(buttonId);
            // wrongAnswer.style.backgroundColor = "red";
            setShowQuestions(false)
        } else {
            handleIncrement();
            setShowQuestions(true)
        }
        setDisableButton(prevState => prevState = true)
    }

    const changeTheQuestion = (e) => {
        let div = e.target.closest(".countries--container");
        if (div) {
            setDivClass("resetBackground");
        }
        let nextButton = document.getElementById("next-btn-container");
        // display the next button
        nextButton.style.display = "none";
        let rightAnswerId = document.getElementById(countryNameRightAnswer);
        rightAnswerId.style.backgroundColor = "unset";
        setDisableButton(prevState => prevState = false)
        fetchCountries()
    }

    const questions = [{
        question: `${capitalName} is the capital of`,
        countryName1: randomCountries[0],
        countryName2: randomCountries[1],
        countryName3: randomCountries[2],
        countryName4: randomCountries[3],
    },
    {
        question: `Which country does this flag belong to?`,
        countryName1: randomCountries[0],
        countryName2: randomCountries[1],
        countryName3: randomCountries[2],
        countryName4: randomCountries[3],
        flag: flagToShow,
    }]

    const randomNumber = Math.floor((Math.random() * questions.length));
    const oneQuestion = questions[randomNumber];

    // Reset the quiz when clicking the try again btn
    const resetQuizFunction = () => {
        setShowQuestions(true)
        setDisableButton(false)
        setScores(0)
    }

    return (
        <div>
            <Header />

            {
                showQuestions ?
                    <Questions
                        divClass={divClass}
                        flag={oneQuestion.flag}
                        question={oneQuestion.question}
                        countriesToShow1={oneQuestion.countryName1}
                        countriesToShow2={oneQuestion.countryName2}
                        countriesToShow3={oneQuestion.countryName3}
                        countriesToShow4={oneQuestion.countryName4}
                        buttonRef={buttonRef}
                        buttonClass={answerButtonClass}
                        isDisabed={disableButton}
                        handleClick={(e) => { handleClick(e) }}
                        changeTheQuestion={(e) => changeTheQuestion(e)}
                    /> :
                    <Scores scores={scores} resetQuiz={resetQuizFunction} />
            }
        </div>
    )
}