function fizzbuzz(n) {
  let fizBuzz = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizBuzz.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizBuzz.push("Fizz");
    } else if (i % 5 === 0) {
      fizBuzz.push("Buzz");
    } else {
      fizBuzz.push(i);
    }
  }
  return fizBuzz;
}
console.log(fizzbuzz(10));
