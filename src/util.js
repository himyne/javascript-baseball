const { Console, Random } = require('@woowacourse/mission-utils');
const RANGE_NUMBER = {
  start_inclusive: 0,
  end_inclusive: 9
};
const catchError = (input, validation) => {
  try {
    return validation(input);
  } catch (error) {
    Console.print(error);
    return false;
  }
};

const makeRandomNumber = () => {
  return Random.pickNumberInRange(RANGE_NUMBER.start_inclusive, RANGE_NUMBER.end_inclusive);
};

module.exports = {catchError, makeRandomNumber};
