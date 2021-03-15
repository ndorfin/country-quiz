import React from 'react';
import useVariables from './Components/useVariables';
import useButtonStyles from './Components/useButtonStyles';
import useQuestions from './Components/Questions/useQuestions';
import Header from './Components/Header';
import Questions from './Components/Questions/Questions';
import Scores from './Components/Scores';
import Footer from './Components/Footer';

export default function App() {
    let {fetchCountries, showQuestions, setShowQuestions, countries, answerButtonClass, isButtonDisabled, setIsButtonDisabled, randomNumber1, randomNumber2, randomNumber3, randomNumber4, scores, setScores, handleIncrement, } = useVariables();
    const {chooseCountryFunction, changeTheQuestion} = useQuestions();
    const {wrongAnswerButtonStyles, rightAnswerButtonStyles} = useButtonStyles();
    const buttonElements = document.getElementsByClassName("btn");
     
    let capitalName;
    let countryNameRightAnswer;
    let flagToShow;
    let flagCountryOwner; 

    // Get all the capitals from the data 
    const capitalArr = countries.map(country => country.capital);
    // Get all the country names from the data
    const countryNameArr = countries.map(country => country.name);
    // This is how we look foor the right country that matches the question
    const findCountryAnswer = countries.find(country => country.capital == capitalArr[randomNumber1]);
    
    if (findCountryAnswer) {
        capitalName = findCountryAnswer.capital;
        countryNameRightAnswer = findCountryAnswer.name;
    } else {
        return null;
    }
 
    // Get one flag from the data
    const flagsArr = countries.map(country => country.flag);
    // Finding the owner of the flag
    const findFlagOwner = countries.find(country => country.flag == flagsArr[randomNumber1]);
    // if the flagOwner object exists, get flag and the flag owner
    if (findFlagOwner) {
        flagToShow = findFlagOwner.flag
        flagCountryOwner = findFlagOwner.name
    } else {
        return null
    }

    // All the countries to show in the quiz including the right answer
    // Random Index from the countryName array for the countries to show array
    const countriesToShowArr = [countryNameRightAnswer, countryNameArr[randomNumber2], countryNameArr[randomNumber3], countryNameArr[randomNumber4]];

    // Randomize countries to show: change the order of the index in the array
    let randomCountriesArr = countriesToShowArr, randomCountries = [], i = countriesToShowArr.length, j = 0;
    // Disordering the index in the countries to show array randomly
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        randomCountries.push(randomCountriesArr[j]);
        randomCountriesArr.splice(j, 1);
    }

      // A function that  for each button
      const selectOneCountry = (e) => { 
        const rightAnswerId = document.getElementById(countryNameRightAnswer);
        // calls the chooseCountry function in useQuestion file
        chooseCountryFunction(e, countryNameRightAnswer, setShowQuestions, wrongAnswerButtonStyles(e), rightAnswerButtonStyles(rightAnswerId) );
        // setIsButtonDisabled(true);
        for (let i = 0; i < buttonElements.length; i++) {
            const eachButton = buttonElements[i]; 
            eachButton.setAttribute("disabled", true)
        } 

    } 

    // Remove a disabled attribute from the button
    function removeDisabledAttribute() {
        for (let i = 0; i < buttonElements.length; i++) {
            const eachButton = buttonElements[i];
            eachButton.removeAttribute("disabled")
            eachButton.removeAttribute("style")
        } 
    }
      // Togglling between the two questions
      const toggleQuestions = () => {
          // call the changeQuestions function in useQuestion file that changes the questions here
        changeTheQuestion(fetchCountries, handleIncrement)
        // setIsButtonDisabled(false); 
            removeDisabledAttribute()

    } 
      // An object for the two different questions
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

    // Random number to get a question randomy from the questions obj
    const randomNumber = Math.floor((Math.random() * questions.length));
    const oneQuestion = questions[randomNumber];
    // Reset the quiz when clicking the try again btn
    const resetQuizFunction = () => { 
       setShowQuestions(true)
       removeDisabledAttribute();
       setScores(0)
    }

     
    return (
        <>
       { countries === [] ?
         <div className="loading--container">
            <h2>...Loading</h2>
        </div> 
        : 
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
                        isDisabed={isButtonDisabled}
                        handleClick={(e) =>  selectOneCountry(e)}
                        changeTheQuestion={toggleQuestions}
                    /> :
                    <Scores scores={scores} resetQuiz={resetQuizFunction} />
            }
            <Footer />
        </div>
    }
    </>
    )
}