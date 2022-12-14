const OutputView = require("./OutputView");
const InputView = require("./InputView");
const makeComputerNumber = require("./ComputerNumberGenerator");

class BaseballGame {
  #computerNumber;
  #userNumber;

  constructor() {
    this.#computerNumber = makeComputerNumber();
    console.log(this.#computerNumber);
  }

  handleUserInput() {
    InputView.readUserNumber((number) => {
      this.#userNumber = number;
      this.compareComputerAndUser();
    });
  }

  compareComputerAndUser() {
    OutputView.printResult(this.countBall(), this.countStrike());
    if (this.countStrike() === 3) return this.success();
    return this.handleUserInput();
  }

  countStrike() {
    return this.#computerNumber.filter(
      (computerNumber, index) => computerNumber === this.#userNumber[index]
    ).length;
  }

  countBall() {
    return this.#userNumber.filter(
      (userNumber, index) =>
        this.#computerNumber.includes(userNumber) &&
        userNumber !== this.#computerNumber[index]
    ).length;
  }

  success() {
    OutputView.printSuccessMessage();
    this.retryOrDone();
  }
  
  retryOrDone() {
    InputView.readRestartOrDone((input) => {
      if (input === 1) {
        this.#computerNumber = makeComputerNumber();
        console.log(this.#computerNumber);
        return this.handleUserInput();
      }
      return OutputView.closeGame();
    });
  }
}

module.exports = BaseballGame;
