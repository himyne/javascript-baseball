const InputView = require('./InputView');
const { makeRandomNumber } = require('./util');

class Car {
  #cars;

  constructor() {
    this.#cars = {}; 
  }

  saveCarInfo() {
    InputView.readCarName((carArray) => {
      carArray.forEach((car) => {
        this.#cars[car] = 0
      })
      this.saveAttemptNumber();
    });
  }

  saveAttemptNumber() {
    InputView.readAttemptNumber((number) => {
      this.giveRandomNumberToCar();
    });
  }

  giveRandomNumberToCar() {
    Object.keys(this.#cars).forEach((key) => {
      this.#cars[key] = makeRandomNumber();
    })
  }
}

module.exports = Car;
