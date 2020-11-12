import React from 'react';
import useVariables from './Components/useVariables';
import Header from './Components/Header';
import Questions from './Components/Questions/Questions';
import Scores from './Components/Scores';


export default function App() {
    let {fetchCountries, showQuestions, setShowQuestions, countries, answerButtonClass, disableButton, setDisableButton, capitalName, countryNameRightAnswer, flagToShow, flagCountryOwner, capitalRandomNumber, capitalRandomNumber1, capitalRandomNumber2, capitalRandomNumber3, scores, setScores, handleIncrement, } = useVariables();
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
 
    // Get one flag from the data
    const flag = countries.map(country => country.flag);
    // Finding the owner of the flag
    const findFlagOwner = countries.find(country => country.flag == flag[capitalRandomNumber]);
    // if the flagOwner object exists, get flag and the flag owner
    if (findFlagOwner) {
        flagToShow = findFlagOwner.flag
        flagCountryOwner = findFlagOwner.name
    } else {
        return null
    }

    // All the countries to show in the quiz including the right answer
    const countriesToShowArr = [countryNameRightAnswer, countryName[capitalRandomNumber1], countryName[capitalRandomNumber2], countryName[capitalRandomNumber3]];

    // Randomize countries to show: change the order of the index in the array
    let randomCountriesArr = countriesToShowArr, randomCountries = [], i = countriesToShowArr.length, j = 0;
    // Disordering the name of the countries in the array randomly
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        randomCountries.push(randomCountriesArr[j]);
        randomCountriesArr.splice(j, 1);
    }

    const handleClick = (e) => {
        const buttonId = e.currentTarget.id;  
        e.currentTarget.style.backgroundColor="red";
        // Get the element that has the right answer and change the background color
        const rightAnswerId = document.getElementById(countryNameRightAnswer);
        rightAnswerId.style.backgroundColor = "green";
         if (buttonId === countryNameRightAnswer) { 
            // Display the next button
            const nextButton = document.getElementById("next-btn-container"); 
            nextButton.style.display = "block";
            setShowQuestions(true) 
        } else { 
            setTimeout(() => { 
                setShowQuestions(false) 
                // setDisableButton(true)
             }, 1000);
        }
        
    }

    const changeTheQuestion = () => { 
        const nextButton = document.getElementById("next-btn-container");
        // display the next button
        nextButton.style.display = "none";
        //Remove the button's background after clicking the next-button
        const buttonsArray = document.getElementsByClassName("btn");
        for (let i = 0; i < buttonsArray.length; i++) {
            const eachButton = buttonsArray[i];
            // Reset the background to its original bg
            eachButton.style.backgroundColor = "white";
        }
        fetchCountries();
        handleIncrement();
        // setDisableButton(false)
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

    // Random number for values of the questions object properties
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
                        flag={oneQuestion.flag}
                        question={oneQuestion.question}
                        countriesToShow1={oneQuestion.countryName1}
                        countriesToShow2={oneQuestion.countryName2}
                        countriesToShow3={oneQuestion.countryName3}
                        countriesToShow4={oneQuestion.countryName4}
                        buttonClass={answerButtonClass}
                        isDisabed={disableButton}
                        handleClick={(e) => { handleClick(e) }}
                        changeTheQuestion={changeTheQuestion}
                    /> :
                    <Scores scores={scores} resetQuiz={resetQuizFunction} />
            }
        </div>
    )
}