const text = "i hate Js";
let i = 0;

console.log(document.body.innerText);
function start() {
  document.body.innerText = text.slice(0, i);
  console.log(text);
  i++;
  if (i > text.length) {
    i = 0;
  }
}

console.log(start());
