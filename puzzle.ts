export class Puzzle {
  flippedNumbers: number[] = [];
  notFlippedNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  flippedNumbersString(): string {
    let string = ""
    for(let i = 1; i <= 9; i++) {
      if (this.flippedNumbers.includes(i)) {
        string += i.toString();
      }
      else {
        string += " "
      }
    }
    return string;
  }

  notFlippedNumbersString(): string {
    let string = ""
    for(let i = 1; i <= 9; i++) {
      if (this.notFlippedNumbers.includes(i)) {
        string += i.toString();
      }
      else {
        string += " "
      }
    }
    return string;
  }
}