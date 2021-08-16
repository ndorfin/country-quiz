const jsonEndpoint = '/json/all.json';

export default class Countries {
  static list = [];
  static listCount = null;

  _formatData(data) {
    /* 
      Cut the items in `data` down to the fields we're interested in
    */
    return data.map( country => {
      return  {
        id: country.alpha3Code,
        capital: country.capital,
        flag: country.flag,
        name: country.name,
      }
    });
  }
  
  _getCountryByIndex(index) {
    return this.list[index];
  }

  _getRandomCountryIndex() {
    return Math.floor(Math.random() * this.listCount);
  }

  _getRandomIndices(count) {
    /* 
      Return an array of random indices
      from the `list` of countries
      up to a max length of `count`
    */
    let randomIndices = [];
    while (randomIndices.length < count) {
      let randomIndex = this._getRandomCountryIndex();
      if (randomIndices.indexOf(randomIndex) === -1) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices;
  }

  getCountryChoices(count) {
    /*
      Return an array of random countries from the `list`
      up to a max length of `count`
    */
    let randomCountries = [];
    
    this._getRandomIndices(count).forEach(
      index => randomCountries.push(this._getCountryByIndex(index))
    );
    
    return randomCountries;
  }

  async getTemplateData() {
    /*
      Hit the all countriea API endpoint,
      then format the JSON response to the fields we need
      then set the result to the `list` static array
      and cache the `list` length as `listCount`
    */
    await fetch(jsonEndpoint)
      .then(response => response.json())
      .then(data => this._formatData(data))
      .then(filteredData => {
        this.list = filteredData
        this.listCount = this.list.length;
      });
  }
}