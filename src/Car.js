const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { makeRandomNumber, getKeyByValue } = require('./util');

class Car {
  #cars;
  #carRanking;

  constructor() {
    this.#cars = {};
    this.#carRanking = {};
  }

  saveCarInfo() {
    InputView.readCarName((carArray) => {
      carArray.forEach((car) => {
        this.#cars[car] = 0;
        this.#carRanking[car] = 0;
      });
      this.saveAttemptNumber();
    });
  }

  saveAttemptNumber() {
    InputView.readAttemptNumber((number) => {
      for (let i = 0; i < number; i++) {
        this.giveRandomNumberToCar();
        this.makeResult();
      }
      this.decideWinner();
    });
  }

  giveRandomNumberToCar() {
    Object.keys(this.#cars).forEach((key) => {
      this.#cars[key] = makeRandomNumber();
    });
    for (let key in this.#cars) {
      if (this.#cars[key] >= 4) {
        this.#carRanking[key]++;
      }
    }
  }

  makeResult() {
    const ranking = Object.values(this.#carRanking);
    const carName = Object.keys(this.#carRanking);
    OutputView.printResultTitle();
    carName.forEach((car, index) => {
      OutputView.printResult(car, ranking[index]);
    });
  }

  decideWinner() {
    const arr = Object.values(this.#carRanking);
    const winnerNum = Math.max(...arr);
    OutputView.printWinner(getKeyByValue(this.#carRanking, winnerNum));
  }
}

module.exports = Car;
