const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const INPUT_QUERY = Object.freeze({
  ask_user_number: "숫자를 입력해주세요 : ",
  ask_restart_or_done: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

const InputView = {
  readUserNumber(readLineCallback) {
    Console.readLine(INPUT_QUERY.ask_user_number, (number) => {
      number = Validation.checkUserNumber(number);
      readLineCallback(number);
    });
  },

  readRestartOrDone(readLineCallback) {
    Console.readLine(INPUT_QUERY.ask_restart_or_done, (retryOrDone) => {
      readLineCallback(retryOrDone);
    });
  },
};

module.exports = InputView;