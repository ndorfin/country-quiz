import React, { useEffect, useState } from 'react';
import Questions from './Components/Questions/Questions';

export default function App() {
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const [countries, setCountries] = useState([]); 
    const [rightAnswer, setRightAnswer] = useState({}); 

// Fetch the countries
    async function fetchCountries() {
        const response = await fetch(endpoint);
        const countryData = await response.json();
        setCountries(countryData);
    }

    useEffect(() => {
        fetchCountries();
    }, [])
 
 // Get random countries from the array of countries
const capitalRandomNumber = Math.floor((Math.random() * countries.length));
const capitalRandomNumber1 = Math.floor((Math.random() * countries.length));
const capitalRandomNumber2 = Math.floor((Math.random() * countries.length));
const capitalRandomNumber3 = Math.floor((Math.random() * countries.length));

// Get all the capitals from the data
const capital = countries.map(city => city.capital);
 
// Get all the country names from the data
const countryName= countries.map(city => city.name);

// This is how we look foor the right country that matches the question
const findCountryAnswer = countries.find(country => country.capital == capital[capitalRandomNumber]);

let capitalName;
let countryNameRightAnswer;

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
 
let flagToShow;
let flagCountryOwner;
if (findFlagOwner) { 
    flagToShow = findFlagOwner.flag;
    flagCountryOwner = findFlagOwner.name
} else {
    return null;
}
 
// All the countries to show in the quiz including the right answer
const countriesToShow = [countryNameRightAnswer, countryName[capitalRandomNumber1], countryName[capitalRandomNumber2], countryName[capitalRandomNumber3]]
 
    return (
        <div>
             <Questions 
             capitalName={capitalName}
             countriesToShow1={countriesToShow[2]}
             countriesToShow2={countriesToShow[1]}
             countriesToShow3={countriesToShow[3]}
             countriesToShow4={countriesToShow[0]} 
             buttonClass="btn"/>
        </div>
    )
}