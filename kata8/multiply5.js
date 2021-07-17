function multiTable(number) {
  // good luck
  for (let i = 1; i <= 10; i++) {
    let sum = i * number;
    let res = "";
    res += `${i} * ${number} = ${sum}\n`;
    console.log(res);
  }
}
// console.log(multiTable(5));
multiTable(5);
