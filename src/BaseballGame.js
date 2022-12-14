const OutputView = require('./OutputView');
const InputView = require('./InputView');
const makeComputerNumber = require('./ComputerNumberGenerator');

class BaseballGame {
  #computerNumber;

  constructor() {
    this.#computerNumber = makeComputerNumber();
  }

  startGame() {
    OutputView.printStartGame();
    this.handleUserInput();
  }

  handleUserInput() {
    InputView.readUserNumber((number) => {
      
    })
  }

}

module.exports = BaseballGame;