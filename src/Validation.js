const { ERROR } = require('./Constants');

const Validation = {
  checkCarName(cars) {
    const carArray = cars.split(',').map((car) => car.trim());
    if (!cars || !cars.trim()) throw new Error(ERROR.blank);
    if (carArray.some((car) => car.length > 5)) throw new Error(ERROR.not_five_digits);
    if (carArray.some((car) => !car)) throw new Error(ERROR.not_name);
    if (new Set([...carArray]).size !== carArray.length) throw new Error(ERROR.duplicate);
    return carArray;
  }
};

module.exports = Validation;
