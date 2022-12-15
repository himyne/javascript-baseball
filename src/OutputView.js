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
  },

  printWinner(winner) {
    Console.print(`${OUTPUT.winner}${winner.join(',')}`);
    Console.close();
  }
};

module.exports = OutputView;
