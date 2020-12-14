import ClearIconSvg from '../assets/highlight_off.svg';
import CheckCircleIconSvg from '../assets/check_circle_outline.svg';


export default function useButtonsStyles() {
    // Style for the button if the user clicks the wrong answer 
    function wrongAnswerButtonStyles(e) {
        const buttonStyle = e.currentTarget.style;
        buttonStyle.backgroundColor = "#EA8282";
        buttonStyle.backgroundImage =  `url(${ClearIconSvg})`;
        buttonStyle.backgroundRepeat = "no-repeat";
        buttonStyle.backgroundPosition = "98%"; 
        buttonStyle.color = "#FFFFFF";
     };

    // Style for the button if the user clicks the right answer 
     function rightAnswerButtonStyles(rightButton) {
        const buttonStyle = rightButton.style;
        buttonStyle.backgroundColor = "#60BF88";
        buttonStyle.backgroundImage =  `url(${CheckCircleIconSvg})`;
        buttonStyle.backgroundRepeat = "no-repeat";
        buttonStyle.backgroundPosition = "98%";
        buttonStyle.color = "#FFFFFF";
        
     };

      return {wrongAnswerButtonStyles, rightAnswerButtonStyles};
     
}