const OutputView = require("./OutputView");
const InputView = require("./InputView");
const makeComputerNumber = require("./ComputerNumberGenerator");

class BaseballGame {
  #computerNumber;

  constructor() {
    this.#computerNumber = makeComputerNumber();
    console.log(this.#computerNumber);
  }

  handleUserInput() {
    InputView.readUserNumber((number) => {
      this.compareComputerAndUser(number);
    });
  }

  compareComputerAndUser(number) {
    const strike = this.countStrike(number);
    const ball = this.countBall(number);
  }

  countStrike(number) {
    return this.#computerNumber.filter(
      (computerNumber, index) => computerNumber === number[index]
    ).length;
  }

  countBall(number) {
    return this.#computerNumber.filter(
      (computerNumber, index) =>
        this.#computerNumber.includes(number) ||
        computerNumber !== number[index]
    ).length;
  }
}

module.exports = BaseballGame;
