const { Console } = require('@woowacourse/mission-utils');
const { INPUT_QUERY } = require('./Constants');
const catchError = require('./util');
const { checkCarName } = require('./Validation');

const InputView = {
  readCarName(readCarNameCallback) {
    Console.readLine(INPUT_QUERY.car_name, (cars) => {
      cars = catchError(cars, checkCarName);
      if(!cars) return this.readCarName(readCarNameCallback);
      readCarNameCallback(cars);
    });
  }
};

module.exports = InputView;
