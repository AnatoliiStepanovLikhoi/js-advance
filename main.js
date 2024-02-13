//!Nested functions
// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();

//////////////
//!Closures

// function outer() {
//   let counter = 0;

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }
// const fn = outer();
// fn();
// fn();

//!Curring

function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

// console.log(add5);

//! this keyword

// function sayMyName(name) {
//   console.log(`My name is ${name}`);
// }

// sayMyName("Walter");
// sayMyName("Kolya");

//? Implicit binding

// const person = {
//   name: "Walter",
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// person.sayMyName();

//? Explicit binding

globalThis.name = 'Superman';

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

// sayMyName.call(person);

//? New Binding

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Sara");
// const p2 = new Person("Vova");

// console.log(p1.name, p2.name);

//? Default binding

// sayMyName();

//!Prototype

// function Person(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// function SuperHero(fName, lName) {
//   Person.call(this, fName, lName);
//   this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting crime");
// };

// SuperHero.prototype = Object.create(Person.prototype);

// const batman = new SuperHero("Sasha", "Connor");
// SuperHero.prototype.constructor = SuperHero;
// console.log(batman.getFullName());

// const person1 = new Person("Sava", "Gava");
// const person2 = new Person("Sara", "Connor");

// console.log(person2.getFullName());

//!Classes

class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  sayMyName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person1 = new Person('Sara', 'Connor');
// console.log(person1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log('Fighting crime');
  }
}

const batman = new SuperHero('Sara', 'Nova');
// console.log(batman.sayMyName());

//! Iterables and Iterators

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        }
        return { value: undefined, done: true };
      },
    };

    return iterator;
  },
};

// for (const iterator of obj) {
//   console.log(iterator);
// }

//!Generators

function normalFunction() {
  console.log('Hello');
  console.log('World');
}

// normalFunction();

function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

// const generatorObj = generatorFunction();
// for (const word of generatorObj) {
//   console.log(word);
// }

//! Object groupBy

const people = [
  { name: 'Kyle', age: 28 },
  { name: 'Sally', age: 28 },
];

// Object.groupBy(people, (person) => {
//   return person.age;
// });

//!withResolvers

const promise2 = new Promise((resolve, reject) => {
  resolve();
  reject();
});

const { promise, resolve, reject } = Promise.withResolvers();
reject();
