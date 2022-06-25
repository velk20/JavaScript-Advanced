class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources <= 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let dif = this.resources - Number(time) * 10;
    if (dif < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= Number(time) * 10;
    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
    });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    let newRes = Number(time) * 10;
    this.resources += newRes;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${newRes}% resources`;
    }
  }

  showRecord(criteria) {
    let res = [];

    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria == 'all') {
      res.push('All hiking records:');
      for (const person of this.listOfHikes) {
        res.push(
          `${this.username} hiked ${person.peak} for ${person.time} hours`
        );
      }

      return res.join('\n');
    } else {
      let peopleWithCriteria = this.listOfHikes.filter(
        (e) => e.difficultyLevel == criteria
      );
      if (peopleWithCriteria.length == 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      peopleWithCriteria.sort((a, b) => a.time - b.time);

      return `${this.username}'s best ${criteria} hike is ${peopleWithCriteria[0].peak} peak, for ${peopleWithCriteria[0].time} hours`;
    }
  }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
