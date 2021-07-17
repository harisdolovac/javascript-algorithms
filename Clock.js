function humanReadable(seconds) {
  let hour = parseInt(seconds / 3600);
  let ostatakOdSata = seconds % 3600;
  let minutes = parseInt(ostatakOdSata / 60);

  let ostatakMin = ostatakOdSata % 60;
  let secounds = parseInt(ostatakMin);
  console.log(secounds);

  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  secounds = String(secounds).padStart(2, "0");

  return `${hour}:${minutes}:${secounds}`;
}

console.log(humanReadable(60));
