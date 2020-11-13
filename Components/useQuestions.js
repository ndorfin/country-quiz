
export default function useQuestions() {

    // Choose the country function
    const chooseCountryFunction = (e, countryNameRightAnswer, setShowQuestions) => {
        // Get the id of the button that is being clicked
        const buttonId = e.currentTarget.id;  
        //Call the function that has styles for the button that has the right answer 
         if (buttonId === countryNameRightAnswer) { 
            // Display the next button
            const nextButton = document.getElementById("next-btn-container"); 
            nextButton.style.display = "block";
            setShowQuestions(true) 
        } else { 
            setTimeout(() => { 
                setShowQuestions(false)  
             }, 1000);
        }
        
    }
 
    // A function that made for changing the questions
    const changeTheQuestion = (fetchCountries, handleIncrement, wrongAnswerButtonStyles) => { 
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

        // Reset the color of the spans
        for (let i = 0; i < spanArray.length; i++) {
            const eachSpan = spanArray[i]; 
            // Reset the color of the span to its original color
            eachSpan.style.color = "inherit";
        }
        
        fetchCountries();
        handleIncrement(); 
    }


    return {chooseCountryFunction, changeTheQuestion};
}