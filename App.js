import React, { useState } from 'react';
import Questions from './Components/Questions/Questions';
import useVariables from './Components/useVariables';

export default function App() {
  let { buttonRef, endpoint, fetchCountries, countries, answerButtonClass, setAnswerButtonClass, disableButton, setDisableButton, capitalName, countryNameRightAnswer, flagToShow, flagCountryOwner, capitalRandomNumber, capitalRandomNumber1, capitalRandomNumber2, capitalRandomNumber3, handleIncrement,} = useVariables();
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

    const changeTheQuestion = () => {
        fetchCountries()
        setDisableButton(false)
    }


    const handleClick = (e) => {
        const buttonId = e.target.id; 
        if(buttonId === countryNameRightAnswer) {
             handleIncrement();
        }
         
        setDisableButton(true) 
    }
 

 const questions = [{ 
        question: `${capitalName} is the capital of`,
        countryName1: countriesToShow[2],
        countryName2: countriesToShow[3],
        countryName3: countriesToShow[0],
        countryName4: countriesToShow[1],
    },
    {
        question: `Which country does this flag belong to`,
        countryName1: countriesToShow[2],
        countryName2: countriesToShow[3],
        countryName3: countriesToShow[0],
        countryName4: countriesToShow[1],
        flag: flagToShow,
    }]
 
 const randomNumber = Math.floor((Math.random() * questions.length));
 const oneQuestion = questions[randomNumber]; 

    return (    
        <div>
            <Questions
                flag = {oneQuestion.flag}
                question={oneQuestion.question}
                countriesToShow1={oneQuestion.countryName1}
                countriesToShow2={oneQuestion.countryName2}
                countriesToShow3={oneQuestion.countryName3}
                countriesToShow4={oneQuestion.countryName4}
                buttonRef={buttonRef}
                buttonClass={answerButtonClass}
                isDisabed={disableButton}
                changeTheQuestion={changeTheQuestion}
                handleClick={(e) => handleClick(e)}
            />
        </div> 
    )
}