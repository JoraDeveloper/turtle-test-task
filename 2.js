function calcHandshake(countOfPeople = 10) {
  if (countOfPeople <= 0) {
    return 0;
  }

  let countOfHandshake = 0;
  let countInTheRoom = 1;

  while (countOfPeople - countInTheRoom) {
    countOfHandshake += countInTheRoom;
    countInTheRoom++;
  }

  return countOfHandshake;
}

module.exports = {
  calcHandshake,
};
