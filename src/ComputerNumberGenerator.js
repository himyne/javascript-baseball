const { Random } = require("@woowacourse/mission-utils");
const START_INCLUSIVE = 1;
const END_INCLUSIVE = 9;

const makeComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

module.exports = makeComputerNumber;
