const { Console } = require('@woowacourse/mission-utils');
const { INPUT_QUERY } = require('./Constants');
const { catchError } = require('./util');
const { checkCarName, checkAttemptNumber } = require('./Validation');

const InputView = {
  readCarName(readCarNameCallback) {
    Console.readLine(INPUT_QUERY.car_name, (cars) => {
      cars = catchError(cars, checkCarName);
      if(!cars) return this.readCarName(readCarNameCallback);
      readCarNameCallback(cars);
    });
  },

  readAttemptNumber(readAttemptNumberCallback) {
    Console.readLine(INPUT_QUERY.attempt_number, (number) => {
      number = catchError(number, checkAttemptNumber)
      if(!number) return this.readAttemptNumber(readAttemptNumberCallback);
      readAttemptNumberCallback(number);
    })
  }
};

module.exports = InputView;
