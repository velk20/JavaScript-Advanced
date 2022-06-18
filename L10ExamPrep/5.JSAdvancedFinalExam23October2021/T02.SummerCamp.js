class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  checkForAlreadyPresent(name) {
    return this.listOfParticipants.find((e) => e.name == name);
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error('Unsuccessful registration at the camp.');
    }

    let campPrice = this.priceForTheCamp[condition];

    if (this.checkForAlreadyPresent(name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < campPrice) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });

    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let currentParticipant = this.checkForAlreadyPresent(name);

    if (!currentParticipant) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants.splice(
      this.listOfParticipants.indexOf(currentParticipant),
      1
    );

    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2 = undefined) {
    let participantOne = this.checkForAlreadyPresent(participant1);
    if (!participantOne) {
      throw new Error(`Invalid entered name/s.`);
    }

    if (typeOfGame == 'WaterBalloonFights') {
      let participantTwo = this.checkForAlreadyPresent(participant2);
      if (!participantTwo) {
        throw new Error(`Invalid entered name/s.`);
      }

      if (participantOne.condition != participantTwo.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (participantOne.power > participantTwo.power) {
        participantOne.wins++;
        return `The ${participantOne.name} is winner in the game ${typeOfGame}.`;
      } else if (participantOne.power < participantTwo.power) {
        participantTwo.wins++;
        return `The ${participantTwo.name} is winner in the game ${typeOfGame}.`;
      } else return `There is no winner.`;
    } else if (typeOfGame == 'Battleship') {
      participantOne.power += 20;
      return `The ${participantOne.name} successfully completed the game ${typeOfGame}.`;
    } else return `There is no winner.`;
  }

  toString() {
    let result = [];

    result.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );

    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach((e) =>
        result.push(`${e.name} - ${e.condition} - ${e.power} - ${e.wins}`)
      );

    return result.join('\n');
  }
}
const summerCamp = new SummerCamp(
  'Jane Austen',
  'Pancharevo Sofia 1137, Bulgaria'
);
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(
  summerCamp.timeToPlay(
    'WaterBalloonFights',
    'Petar Petarson',
    'Sara Dickinson'
  )
);
console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
console.log(
  summerCamp.timeToPlay(
    'WaterBalloonFights',
    'Petar Petarson',
    'Dimitur Kostov'
  )
);
