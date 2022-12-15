const { Console } = require('@woowacourse/mission-utils');
const { INPUT_QUERY } = require('./Constants');

const InputView = {
  readCarName(readCarNameCallback) {
    Console.readLine(INPUT_QUERY.car_name, (cars) => {
      readCarNameCallback(cars)
    });
  }
};

module.exports = InputView;
