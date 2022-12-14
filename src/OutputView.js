const { Console } = require("@woowacourse/mission-utils");
const OUTPUT_MESSAGE = Object.freeze({
  game_start: "숫자 야구 게임을 시작합니다.",
  strike: "스트라이크",
  ball: "볼",
  null: "",
});

const OutputView = {
  printStartGame() {
    Console.print(OUTPUT_MESSAGE.game_start);
  },

  printResult(ball, strike) {
    Console.print(
      `${ball ? ball + OUTPUT_MESSAGE.ball : OUTPUT_MESSAGE.null} ${
        strike ? strike + OUTPUT_MESSAGE.strike : OUTPUT_MESSAGE
      }`.trim()
    );
  },
};

module.exports = OutputView;
