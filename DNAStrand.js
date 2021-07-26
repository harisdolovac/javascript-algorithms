function DNAStrand(dna) {
  let dnaArr = dna.split("");
  repArr = [];
  dnaArr.forEach((element) => {
    if (element === "A") {
      repArr.push("T");
    } else if (element === "T") {
      repArr.push("A");
    } else if (element === "G") {
      repArr.push("C");
    } else if (element === "C") {
      repArr.push("G");
    }
  });
  return repArr.join("");
}

DNAStrand("ATTGC");

// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"
