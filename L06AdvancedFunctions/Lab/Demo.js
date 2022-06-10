function func() {
    console.log(this);
}

func();// global invocation


let obj = {
    name: 'Peter',
    greed() {
        func();// global invocation again even if it is in object scope
        console.log(`Hello! my name is ${this.name}`);
    }
};

obj.greed();//`Hello! my name is Peter`

let greed = obj.greed; // copy function by reference
greed();//`Hello! my name is undefined`, because we change the context to global !!! and there is no this.name

// * DOM Element context - must be in browser
// element.addEventListener('click', function () {
//     console.log(this); // this point to the current Element
// })

// * Nested functions context
function a() {
    function b() {
        function c() {
            console.log(this);//again global
        }

        c();
    }

    b();
}

a();

// * Arrow functions context

const person = {
    firstName: 'Pesho',
    lastName: 'Georgiev',
    introduce() {
        const getFullName = () => { // ! Arrow functions save the closes function context (that are not arrow fun)
            return this.firstName + ' ' + this.lastName;
        }

        console.log(`My name is ${getFullName()}`);
    }
}

person.introduce();
console.log()
// * Explicit Binding -> call(), apply(), bind()
console.log('1. Call -> Explicit Binding');

// ? 1.Call() , Apply();
function introduce(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}

introduce('Gosho', 'Ivanov'); // Global invocation

let personObj = {
    name: 'Pesho',

}

introduce.call(personObj, 'Gosho', 'Ivanov'); // invoke using call with list the arguments separated by ', '
introduce.apply(personObj, ['Gosho', 'Ivanov']);// invoke using apply with array
// * Call and Apply настройват контекста, също така и входните параметри, и се изпълнявт веднага

// ? 2.Bind();
let superHuman = {
    name: 'Superman',

}

//? 1.
let superIntro = introduce.bind(superHuman, 'Mariika', 'Petrova'); // * return new function that we can use later
superIntro(); //Hello Mariika Petrova, my name is Superman

//? 2.
let superIntro2 = introduce.bind(superHuman);
superIntro2('Mariika2', 'Petrova2');

// * Closures
function counterBuilder() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

let counter = counterBuilder();
counter();
counter();
counter();

// * IIFE -> immediately invoked function
(function print() {
    console.log("Hi!");
})();