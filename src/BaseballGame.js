const OutputView = require('./OutputView');
const InputView = require('./InputView');

class BaseballGame {
  
  startGame() {
    OutputView.printStartGame();
    this.handleUserInput();
  }

  handleUserInput() {
    InputView.readUserNumber((number) => {
      console.log(number)
    })
  }
}

module.exports = BaseballGame;