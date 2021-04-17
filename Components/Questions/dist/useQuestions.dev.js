"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useQuestions;

function useQuestions() {
  // Choose the country function
  var chooseCountryFunction = function chooseCountryFunction(e, countryNameRightAnswer, setShowQuestions) {
    // Get the id of the button that is being clicked
    var buttonId = e.currentTarget.id;
    e.currentTarget.style.color = "white"; //Call the function that has styles for the button that has the right answer 

    if (buttonId === countryNameRightAnswer) {
      // Display the next button
      var nextButton = document.getElementById("next-btn-container");
      nextButton.style.display = "flex";
      setShowQuestions(true);
    } else {
      setTimeout(function () {
        setShowQuestions(false);
      }, 1000);
    }
  }; // A function that made for changing the questions


  var changeTheQuestion = function changeTheQuestion(fetchCountries, handleIncrement, wrongAnswerButtonStyles) {
    var nextButton = document.getElementById("next-btn-container"); // display the next button

    nextButton.style.display = "none"; //Remove the button's background after clicking the next-button

    var buttonsArray = document.getElementsByClassName("btn");

    for (var i = 0; i < buttonsArray.length; i++) {
      var eachButton = buttonsArray[i]; // Reset the background to its original bg 
      // eachButton.classList.add("reset_button");

      eachButton.style.backgroundColor = '#ffffff';
      eachButton.style.color = 'rgba(17, 20, 71, 0.8)';
    }

    fetchCountries();
    handleIncrement();
  };

  return {
    chooseCountryFunction: chooseCountryFunction,
    changeTheQuestion: changeTheQuestion
  };
}