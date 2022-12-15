const INPUT_QUERY = {
  car_name: '자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.\n',
  attempt_number: '시도할 횟수를 입력해주세요.\n'
};

const ERROR = {
  not_five_digits: '자동차의 이름은 5자 이하여야 합니다.',
  blank: '아무것도 입력하지 않았습니다.',
  not_name: '이름이 없는 자동차가 있습니다.',
  not_competitor: '자동차 개수는 한대 이상이어야 합니다.',
  duplicate: '중복된 자동차가 있습니다.',
  not_number: '시도 횟수는 숫자여야 합니다.'
};

module.exports = { INPUT_QUERY, ERROR };
