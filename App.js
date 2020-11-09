import React, { useEffect, useState } from 'react';

export default function App() {
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const [countries, setCountries] = useState([]); 

    async function fetchCountries() {
        const response = await fetch(endpoint);
        const countryData = await response.json();
        setCountries(countryData);
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    

const capital = countries.map(city => city.capital);
console.log(capital[1])

const countrieName= countries.map(city => city.name);
console.log(countrieName)
 
    return (
        <div>Hi</div>
    )
}