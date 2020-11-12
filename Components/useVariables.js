import {useState, useEffect } from 'react';

export default function useVariable() { 
    
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const [countries, setCountries] = useState([]); 
    const [showQuestions, setShowQuestions] = useState(true);
    const [answerButtonClass, setAnswerButtonClass] = useState("btn");
    const [disableButton, setDisableButton] = useState(false);
    const [scores, setScores] = useState(0); 

    let capitalName;
    let countryNameRightAnswer;
    let flagToShow;
    let flagCountryOwner;
   
     // Fetch the countries
    async function fetchCountries() {
        const response = await fetch(endpoint);
        const countryData = await response.json();
        setCountries(countryData)
    }
 
    useEffect(() => {
        fetchCountries()
    }, [])
    

    // Calculate the scores
    const handleIncrement = () => {
        setScores(prevScores => prevScores + 1);
    }; 
    
    // Get random countries from the array of countries 
    const capitalRandomNumber = Math.floor((Math.random() * countries.length));
    const capitalRandomNumber1 = Math.floor((Math.random() * countries.length));
    const capitalRandomNumber2 = Math.floor((Math.random() * countries.length));
    const capitalRandomNumber3 = Math.floor((Math.random() * countries.length));


    return {  
     fetchCountries,
     countries, 
     setCountries,
     showQuestions,
     setShowQuestions,
     answerButtonClass,
     setAnswerButtonClass,
     disableButton,
     setDisableButton,
     capitalName,
     countryNameRightAnswer,
     flagToShow,
     flagCountryOwner,
     capitalRandomNumber,
     capitalRandomNumber1,
     capitalRandomNumber2,
     capitalRandomNumber3, 
     scores,
     setScores,
     handleIncrement,
     }
}