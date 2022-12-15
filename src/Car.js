const InputView = require('./InputView');
const { makeRandomNumber } = require('./util');

class Car {
  #cars;
  #carRanking;

  constructor() {
    this.#cars = {}; 
    this.#carRanking = {};
  }

  saveCarInfo() {
    InputView.readCarName((carArray) => {
      carArray.forEach((car) => {
        this.#cars[car] = 0
        this.#carRanking[car] = 0
      })
      this.saveAttemptNumber();
    });
  }

  saveAttemptNumber() {
    InputView.readAttemptNumber((number) => {
      for(let i=0; i<number; i++){
        this.giveRandomNumberToCar();
      }
    });
  }

  giveRandomNumberToCar() {
    Object.keys(this.#cars).forEach((key) => {
      this.#cars[key] = makeRandomNumber();
    })
    for(let key in this.#cars){
      if(this.#cars[key] >= 4){
        this.#carRanking[key]++;
      }
    }
  }
}

module.exports = Car;
