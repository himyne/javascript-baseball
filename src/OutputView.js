const { Console } = require("@woowacourse/mission-utils");
const OUTPUT_MESSAGE = Object.freeze({
  game_start: '숫자 야구 게임을 시작합니다.',
})


const OutputView = {
  printStartGame(){
    Console.print(OUTPUT_MESSAGE.game_start);
  }
}

module.exports = OutputView;