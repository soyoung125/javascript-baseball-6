import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.numbers = this.getRandomNumbers();
    MissionUtils.Console.print(this.numbers);
  }

  getRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9))
    }
    return [...numbers];
  }

  compareNumbers(inputNumbers) {
    const numbers = inputNumbers.split("");
    let strike = 0;
    let ball = 0;

    numbers.map((n, index) => {
      const number = parseInt(n);

      if (this.numbers.includes(number)) {
        if (this.numbers[index] === number) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    })

    if (strike === 3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return true;
    }

    if (strike === 0) {
      if (ball === 0) {
        MissionUtils.Console.print("낫싱");
      } else {
        MissionUtils.Console.print(`${ball}볼`);
      }
    } else {
      if (ball === 0) {
        MissionUtils.Console.print(`${strike}스트라이크`);
      } else {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }

    return false;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")

    while(1) {
      const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
      if (this.compareNumbers(input)){
        break;
      }
    }

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
}

export default App;

const app = new App();
app.play();
