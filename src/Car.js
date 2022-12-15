const InputView = require('./InputView');

class Car {
  saveCarInfo() {
    InputView.readCarName((cars) => {
      this.saveAttemptNumber();
    });
  }

  saveAttemptNumber() {
    InputView.readAttemptNumber((number) => {});
  }
}

module.exports = Car;
