import ClearIconSvg from '../assets/highlight_off.svg';
import CheckCircleIconSvg from '../assets/check_circle_outline.svg';


export default function useButtonsStyles() {
    // Style for the button if the user clicks the wrong answer 
    function wrongAnswerButtonStyles(e) {
        const buttonStyle = e.currentTarget.style;
        buttonStyle.backgroundColor = "red";
        buttonStyle.backgroundImage =  `url(${ClearIconSvg})`;
        buttonStyle.backgroundRepeat = "no-repeat";
        buttonStyle.backgroundPosition = "98%";
        // e.target.style.color = "white";
     };

    // Style for the button if the user clicks the right answer 
     function rightAnswerButtonStyles(rightButton) {
        const buttonStyle = rightButton.style;
        buttonStyle.backgroundColor = "green";
        buttonStyle.backgroundImage =  `url(${CheckCircleIconSvg})`;
        buttonStyle.backgroundRepeat = "no-repeat";
        buttonStyle.backgroundPosition = "98%";
        // rightButton.color = "white";
     };

      return {wrongAnswerButtonStyles, rightAnswerButtonStyles};
     
}