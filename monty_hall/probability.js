function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function game(userChoice, change) {
  const chosenDoor = getRandomInt(0, 3);

  let openedDoor = getRandomInt(0, 3);
  while (openedDoor === userChoice || openedDoor === chosenDoor) {
    openedDoor = getRandomInt(0, 3);
  }

  let otherPossibleDoor = getRandomInt(0, 3);
  while (otherPossibleDoor === userChoice || otherPossibleDoor === openedDoor) {
    otherPossibleDoor = getRandomInt(0, 3);
  }

  if (change) {
    userChoice = otherPossibleDoor;
  }

  return chosenDoor === userChoice;
}

function loopGame(change) {
  let trueRes = 0;
  let falseRes = 0;
  const loop = 1000000;
  for (let i = 0; i < 1000000; i++) {
    const res = game(getRandomInt(0, 3), change);
    if (res) {
      trueRes++;
    } else {
      falseRes++;
    }
  }
  return [(trueRes * 100) / loop + "%", (falseRes * 100) / loop + "%"];
}

console.log(loopGame(false));
console.log(loopGame(true));
