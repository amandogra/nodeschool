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

let FizzBuzz = function*() {
    let pre = 1;

    while (pre <= max) {
        yield logic(pre++);
    }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
