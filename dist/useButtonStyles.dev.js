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
    buttonStyle.backgroundPosition = "98%"; // e.target.style.color = "white";
  }

  ; // Style for the button if the user clicks the right answer 

  function rightAnswerButtonStyles(rightButton) {
    var buttonStyle = rightButton.style;
    buttonStyle.backgroundColor = "green";
    buttonStyle.backgroundImage = "url(".concat(_check_circle_outline["default"], ")");
    buttonStyle.backgroundRepeat = "no-repeat";
    buttonStyle.backgroundPosition = "98%"; // rightButton.color = "white";
  }

  ;
  return {
    wrongAnswerButtonStyles: wrongAnswerButtonStyles,
    rightAnswerButtonStyles: rightAnswerButtonStyles
  };
}