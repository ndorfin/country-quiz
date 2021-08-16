import Countries from './countries.js';

let countries = new Countries();

function loaded() {
  console.log(countries.getCountryChoices(4));
}

countries.getTemplateData().then(loaded);