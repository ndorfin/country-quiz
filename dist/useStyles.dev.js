"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useStyles;

var _highlight_off = _interopRequireDefault(require("../assets/highlight_off.svg"));

var _check_circle_outline = _interopRequireDefault(require("../assets/check_circle_outline.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useStyles() {
  // Style for the button if the user clicks the wrong answer 
  function wrongAnswerButtonStyles(e) {
    var buttonStyle = e.currentTarget.style;
    buttonStyle.backgroundColor = "red";
    buttonStyle.backgroundImage = "url(".concat(_highlight_off["default"], ")");
    buttonStyle.backgroundRepeat = "no-repeat";
    buttonStyle.backgroundPosition = "98%";
    e.target.style.color = "white";
  }

  ; // Style for the button if the user clicks the right answer 

  function rightAnswerButtonStyles(rightButton) {
    var buttonStyle = rightButton.style;
    buttonStyle.backgroundColor = "green";
    buttonStyle.backgroundImage = "url(".concat(_check_circle_outline["default"], ")");
    buttonStyle.backgroundRepeat = "no-repeat";
    buttonStyle.backgroundPosition = "98%";
    rightButton.color = "white";
  }

  ;

  var chooseCountryFunction = function chooseCountryFunction(e, countryNameRightAnswer, setShowQuestions) {
    // Get the id of the button that is being clicked
    var buttonId = e.currentTarget.id; // Get the element that has the right answer and change the background color

    var rightAnswerId = document.getElementById(countryNameRightAnswer); //Call the function that has styles for the button that has the right answer 

    rightAnswerButtonStyles(rightAnswerId);

    if (buttonId === countryNameRightAnswer) {
      // Display the next button
      var nextButton = document.getElementById("next-btn-container");
      nextButton.style.display = "block";
      setShowQuestions(true);
    } else {
      //Call the function that has styles for the button that has the wrong answer 
      wrongAnswerButtonStyles(e);
      setTimeout(function () {
        setShowQuestions(false); // setDisableButton(true)
      }, 1000);
    }
  };

  var changeTheQuestion = function changeTheQuestion(fetchCountries, handleIncrement) {
    var nextButton = document.getElementById("next-btn-container"); // display the next button

    nextButton.style.display = "none"; //Remove the button's background after clicking the next-button

    var buttonsArray = document.getElementsByClassName("btn");

    for (var i = 0; i < buttonsArray.length; i++) {
      var eachButton = buttonsArray[i]; // Reset the background to its original bg

      eachButton.style.backgroundColor = "white";
    }

    fetchCountries();
    handleIncrement(); // setDisableButton(false)
  }; //  return {wrongAnswerButtonStyles, rightAnswerButtonStyles};


  return {
    chooseCountryFunction: chooseCountryFunction,
    changeTheQuestion: changeTheQuestion
  };
}