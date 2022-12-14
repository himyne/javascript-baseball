const BaseballGame = require("./baseballGame");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStartGame();
    const baseballGame = new BaseballGame();
    baseballGame.handleUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
