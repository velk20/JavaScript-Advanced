class Person {
  constructor(name, age) {
    // properties directly in constructor
    this.setName = name;
    this._age = age;
  }

  sayHi() {
    console.log(`Hi my name is ${this._name}`);
  }

  //override toString
  toString() {
    return `${this._name} with age = ${this._age}`;
  }

  static hi() {
    console.log('hi');
  }

  static compareToWithAge(a, b) {
    return a.age - b.age;
  }

  get getName() {
    return this._name;
  }

  set setName(value) {
    if (typeof value != 'string') {
      throw new Error('Name must be string!');
    }
    this._name = value;
  }
}

const guy1 = new Person('Peter', 23);
const guy2 = new Person('George', 2);
const guy3 = new Person('Angel', 21);

console.log(guy1.sayHi());
console.log(guy2);

console.log(guy1 instanceof Person); // true

Person.hi(); // hi

//sort object from class with static method
const arr = [guy1, guy2, guy3];
arr.sort(Person.compareToWithAge);
console.log(arr);

//getters nad setters
console.log(guy1.getName);
guy1.setName = 'Peter2';
console.log(guy1.getName);
