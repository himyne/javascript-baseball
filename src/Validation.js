const PREFIX = '[ERROR]'
const RESTART_REGEXP = /[^12]/g;
const ERROR_MESSAGE = Object.freeze({
  not_number: `${PREFIX} 숫자를 입력해야 합니다.`,
  not_three_digits: `${PREFIX} 3자리 숫자를 입력해야 합니다.`,
  duplicate: `${PREFIX} 중복되지 않는 3자리 숫자를 입력해야 합니다.`,
  out_of_range: `${PREFIX} 1부터 9까지의 숫자를 입력해야 합니다.`,
  not_one_or_two:`${PREFIX} 1과 2만 입력할 수 있습니다.`,
})

const Validation = {
  checkUserNumber(number) {
    if (isNaN(number)) throw new Error(ERROR_MESSAGE.not_number);
    if (number.length !== 3) throw new Error(ERROR_MESSAGE.not_three_digits);
    if (new Set([...number]).size !== 3) throw new Error(ERROR_MESSAGE.duplicate);
    if (number.includes('0')) throw new Error(ERROR_MESSAGE.out_of_range);
    
    return number.split('').map((item) => +item);
  },

  checkRestartOrDone(number){
    if(RESTART_REGEXP.test(number)) throw new Error(ERROR_MESSAGE.not_one_or_two);
    if(number.length !== 1) throw new Error(ERROR_MESSAGE.not_one_or_two);
    return +number;
  },
}

module.exports = Validation;