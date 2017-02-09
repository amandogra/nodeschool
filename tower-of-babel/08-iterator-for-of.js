const max = process.argv[2];

function logic(x) {
    if (x % 15 === 0) {
        return 'FizzBuzz';
    }
    if (x % 3 === 0) {
        return 'Fizz';
    }
    if (x % 5 === 0) {
        return 'Buzz';
    }
    return x;
}
let FizzBuzz = {
  [Symbol.iterator]() {
    let pre = 1;
    // here belongs the FizzBuzz logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
    return {
        next() {
            if (pre <= max) return { done: false, value: logic(pre++) };
            return { done: true };
        }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// ...
}
