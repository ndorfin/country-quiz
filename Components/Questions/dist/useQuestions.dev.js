"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useQuestions;

var _react = require("react");

var _useVariables = _interopRequireDefault(require("../useVariables"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useQuestions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _useVariables["default"])(),
      buttonRef = _ref.buttonRef,
      fetchCountries = _ref.fetchCountries,
      countries = _ref.countries,
      answerButtonClass = _ref.answerButtonClass,
      setAnswerButtonClass = _ref.setAnswerButtonClass,
      disableButton = _ref.disableButton,
      setDisableButton = _ref.setDisableButton,
      capitalName = _ref.capitalName,
      countryNameRightAnswer = _ref.countryNameRightAnswer,
      flagToShow = _ref.flagToShow,
      flagCountryOwner = _ref.flagCountryOwner,
      capitalRandomNumber = _ref.capitalRandomNumber,
      capitalRandomNumber1 = _ref.capitalRandomNumber1,
      capitalRandomNumber2 = _ref.capitalRandomNumber2,
      capitalRandomNumber3 = _ref.capitalRandomNumber3,
      handleIncrement = _ref.handleIncrement;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      divClass = _useState2[0],
      setDivClass = _useState2[1]; //   let { buttonRef, fetchCountries, countries, answerButtonClass, setAnswerButtonClass, disableButton, setDisableButton, capitalName, countryNameRightAnswer, flagToShow, flagCountryOwner, capitalRandomNumber, capitalRandomNumber1, capitalRandomNumber2, capitalRandomNumber3, handleIncrement,} = useVariables();
  // Get all the capitals from the data 


  var capital = countries.map(function (city) {
    return city.capital;
  }); // Get all the country names from the data

  var countryName = countries.map(function (city) {
    return city.name;
  }); // This is how we look foor the right country that matches the question

  var findCountryAnswer = countries.find(function (country) {
    return country.capital == capital[capitalRandomNumber];
  });

  if (findCountryAnswer) {
    capitalName = findCountryAnswer.capital;
    countryNameRightAnswer = findCountryAnswer.name;
  } else {
    return null;
  } // From here is all questions about the flag
  // Get one flag from the data


  var flag = countries.map(function (country) {
    return country.flag;
  }); // Finding the owner of the flag

  var findFlagOwner = countries.find(function (country) {
    return country.flag == flag[capitalRandomNumber];
  });

  if (findFlagOwner) {
    flagToShow = findFlagOwner.flag;
    flagCountryOwner = findFlagOwner.name;
  } else {
    return null;
  } // All the countries to show in the quiz including the right answer


  var countriesToShow = [countryNameRightAnswer, countryName[capitalRandomNumber1], countryName[capitalRandomNumber2], countryName[capitalRandomNumber3]];

  var changeTheQuestion = function changeTheQuestion(e) {
    var div = e.target.closest(".countries--container");

    if (div) {
      setDivClass("resetBackground");
    }

    fetchCountries();
    setDisableButton(false);
    var nextButton = document.getElementById("next-btn-container"); // display the next button

    nextButton.style.display = "none";
    var rightAnswerId = document.getElementById(countryNameRightAnswer);
    rightAnswerId.style.backgroundColor = "unset";
  };

  var handleClick = function handleClick(e) {
    var buttonId = e.target.id; // Get the element that has the right answer and change the background color

    var rightAnswerId = document.getElementById(countryNameRightAnswer);
    rightAnswerId.style.backgroundColor = "green";
    var nextButton = document.getElementById("next-btn-container"); // display the next button

    nextButton.style.display = "block";

    if (buttonId !== countryNameRightAnswer) {
      var wrongAnswer = document.getElementById(buttonId);
      wrongAnswer.style.backgroundColor = "red";
    } else {
      return null;
    }

    setDisableButton(true);
    handleIncrement();
  };

  var questions = [{
    question: "".concat(capitalName, " is the capital of"),
    countryName1: countriesToShow[2],
    countryName2: countriesToShow[3],
    countryName3: countriesToShow[0],
    countryName4: countriesToShow[1]
  }, {
    question: "Which country does this flag belong to",
    countryName1: countriesToShow[2],
    countryName2: countriesToShow[3],
    countryName3: countriesToShow[0],
    countryName4: countriesToShow[1],
    flag: flagToShow
  }];
  var randomNumber = Math.floor(Math.random() * questions.length);
  var oneQuestion = questions[randomNumber];
  return {
    divClass: divClass,
    oneQuestion: oneQuestion,
    buttonRef: buttonRef,
    answerButtonClass: answerButtonClass,
    disableButton: disableButton,
    handleClick: handleClick,
    changeTheQuestion: changeTheQuestion
  };
}