import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.randomNumber = null;
  }

  createRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.randomNumber = computer;
  }

  async play() {
    this.createRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

const app = new App();
app.play();

export default App;
