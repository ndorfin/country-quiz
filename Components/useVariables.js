import {useState, useEffect } from 'react';

export default function useVariable() { 
    
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const [countries, setCountries] = useState([]); 
    const [showQuestions, setShowQuestions] = useState(true);
    const [answerButtonClass, setAnswerButtonClass] = useState("btn");
    const [disableButton, setDisableButton] = useState(false);
    const [scores, setScores] = useState(0); 

   
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
    
    // Get different random numbers from the array of countries 
    const randomNumber1 = Math.floor((Math.random() * countries.length));
    const randomNumber2 = Math.floor((Math.random() * countries.length));
    const randomNumber3 = Math.floor((Math.random() * countries.length));
    const randomNumber4 = Math.floor((Math.random() * countries.length));

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
     randomNumber1,
     randomNumber2,
     randomNumber3,
     randomNumber4, 
     scores,
     setScores,
     handleIncrement,
     }
}