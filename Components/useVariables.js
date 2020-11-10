import React, {useState, useEffect, useRef} from 'react';

export default function useVariable() {
    const buttonRef = useRef();
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const [countries, setCountries] = useState([]);
    const [answerButtonClass, setAnswerButtonClass] = useState("btn");
    const [disableButton, setDisableButton] = useState(false);
    let capitalName;
    let countryNameRightAnswer;
    let flagToShow;
    let flagCountryOwner;
    // Calculate the scores
    const [scores, setScores] = useState(0);

    const handleIncrement = () => {
        setScores(prevScores => prevScores + 1);
    }; 
     // Fetch the countries
    async function fetchCountries() {
        const response = await fetch(endpoint);
        const countryData = await response.json();
        setCountries(countryData)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    // Get random countries from the array of countries 
    const capitalRandomNumber = Math.floor((Math.random() * countries.length));
    const capitalRandomNumber1 = Math.floor((Math.random() * countries.length));
    const capitalRandomNumber2 = Math.floor((Math.random() * countries.length));
    const capitalRandomNumber3 = Math.floor((Math.random() * countries.length));


    return {
     buttonRef,
     endpoint,
     fetchCountries,
     countries, 
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
     handleIncrement,
     }
}