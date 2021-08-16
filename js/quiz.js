import Countries from './countries.js';
import Game from './game.js';

const numberOfOptions = 4;

let countries = new Countries();
let game = new Game();

function loaded() {
  game.setOptions(countries.getCountryChoices(numberOfOptions));

  const board = document.querySelector('#board');
  const templateQuestions = document.querySelector('#template_questions').content.children;
  const templateChoice = document.querySelector('#template_choice').content.children[0];

  let chosenQuestion = templateQuestions[Math.floor(Math.random() * templateQuestions.length)].cloneNode(true);
  
  let chosenQuestionCapital = chosenQuestion.querySelector('#capital_name');
  if (chosenQuestionCapital) {
    chosenQuestionCapital.innerHTML = game.correctOption.capital;
  }

  let chosenQuestionFlag = chosenQuestion.querySelector('img');
  if (chosenQuestionFlag) {
    chosenQuestionFlag.src = game.correctOption.flag;
  }

  board.insertAdjacentElement('afterbegin', chosenQuestion);

  game.options.forEach((option, index) => {
    let choice = templateChoice.cloneNode(true);
    choice.querySelector('input').setAttribute('value', index);
    choice.querySelector('input').setAttribute('id', 'answer_' + index);
    choice.querySelector('span').innerHTML = option.name;
    choice.querySelector('label').setAttribute('for', 'answer_' + index);
    board.querySelector('ol').appendChild(choice);
  });
}

countries.getTemplateData().then(loaded);

