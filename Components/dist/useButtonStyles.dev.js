"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useButtonsStyles;

var _highlight_off = _interopRequireDefault(require("../assets/highlight_off.svg"));

var _check_circle_outline = _interopRequireDefault(require("../assets/check_circle_outline.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useButtonsStyles() {
  // Style for the button if the user clicks the wrong answer 
  function wrongAnswerButtonStyles(e) {
    var buttonStyle = e.currentTarget.style;
    buttonStyle.backgroundColor = "#EA8282";
    buttonStyle.backgroundImage = "url(".concat(_highlight_off["default"], ")");
    buttonStyle.backgroundRepeat = "no-repeat";
    buttonStyle.backgroundPosition = "95%";
    buttonStyle.color = "#FFFFFF";
  }

  ; // Style for the button if the user clicks the right answer 

  function rightAnswerButtonStyles(rightButton) {
    var buttonStyle = rightButton.style;
    buttonStyle.backgroundColor = "#60BF88";
    buttonStyle.backgroundImage = "url(".concat(_check_circle_outline["default"], ")");
    buttonStyle.backgroundRepeat = "no-repeat";
    buttonStyle.backgroundPosition = "95%";
    buttonStyle.color = "#FFFFFF";
  }

  ;
  return {
    wrongAnswerButtonStyles: wrongAnswerButtonStyles,
    rightAnswerButtonStyles: rightAnswerButtonStyles
  };
}