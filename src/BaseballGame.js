const OutputView = require('./OutputView');

class BaseballGame {
  constructor() {
    
  }
  startGame() {
    OutputView.printStartGame();
  }
}

module.exports = BaseballGame;