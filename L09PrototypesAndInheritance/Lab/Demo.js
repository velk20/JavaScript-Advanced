const obj = {
  name: 'Peter',
  age: 23,
};

console.log(obj);

Object.defineProperty(obj, 'lastName', {
  value: 'Jackson',
  enumerable: true,
  writable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptors(obj));

//* Object.seal()

Object.seal(obj); // lock the Object cant add new properties cant modify old

//* Object.freeze()

//! PROTOTYPES

//* factory Function like class (Classes are only sugar syntax of functions)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//* adding new method to the Person function
Person.prototype.sayHi = function () {
  console.log(this.name + ' says hello!');
};

const myPerson = new Person('John', 27);
console.log(myPerson);
myPerson.sayHi();

//* Prototype inheritance
function Button(label) {
  this.label = label;
}

Button.prototype.click = function () {
  console.log(this.label + 'is clicked');
};

function FancyButton(label, color) {
  Button.call(this, label); // call the parent constructor
  this.color = color;
}

FancyButton.prototype = Object.create(Button.prototype);

FancyButton.prototype.glow = function () {
  console.log('The button glows in ' + this.color);
};

const btn = new FancyButton('Confetti', 'magenta');

//* Class Inheritance
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name + ' says Hi!');
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.dogYears = age * 7;
  }

  sayHi() {
    super.sayHi() + ' I am a dog';
  }
}
