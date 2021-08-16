export default class Game {
  static correctIndex = null;
  static correctOption = null;
  static options = [];
  static optionsCount = null;
  
  _getRandomOptionIndex() {
    return Math.floor(Math.random() * this.optionsCount);
  }

  setOptions(optionsArray) {
    this.options = optionsArray;
    this.optionsCount = this.options.length;
    this.correctIndex = this._getRandomOptionIndex();
    this.correctOption = this.options[this.correctIndex];
  }
}