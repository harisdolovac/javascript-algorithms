function alphabetPosition(text) {
  const a = "abcdefghijklmnopqrstuvwxyz";

  let final = [];
  const smallAndBigLetters = text.toLowerCase();

  for (let i = 0; i < smallAndBigLetters.length; i++) {
    let val = a.indexOf(smallAndBigLetters[i]);

    val >= 0 ? final.push(val + 1) : false;
  }
  console.log(final, "tre");
  return final.join(",");
}

console.log(alphabetPosition("Tt"));

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
