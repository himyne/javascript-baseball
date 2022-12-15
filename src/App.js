const Car = require("./Car");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printStartMessage();
    const car = new Car();
    car.saveCarInfo();
  }
}

const app = new App();
app.play();

module.exports = App;
