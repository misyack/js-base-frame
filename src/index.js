import './style.css';
import numbers from './module';
 
class Square {
  constructor(numbers) {
    this.numbers = numbers;
  }

  get() {
    console.log(`asdasdasd`);
    document.getElementById('result').innerText = this.numbers.map(x => x * x);
  }
}
const test = new Square(numbers);
test.get();