function turtle(goUp = 50, sleepDown = 30) {
  let currentHeight = 0;
  let day = 0;
  while (true) {
    day++;
    currentHeight += goUp;
    if (currentHeight >= 100) {
      break;
    }
    currentHeight -= sleepDown;
  }
}

module.exports = {
  turtle,
};
