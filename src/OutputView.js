const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('./Constants');

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT.start);
  },

  printResultTitle() {
    Console.print(OUTPUT.result);
  },

  printResult(carName, carRanking) {
    Console.print(`${carName}: ${OUTPUT.move_symbol.repeat(carRanking)}`);
  }
};

module.exports = OutputView;
