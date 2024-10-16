function square(a, b) {
  return a * b;
}

function test() {
  console.log("test");
}

console.log(square(2, 3)); // 6

let t = test();
console.log(t); // undefined

console.log(test()); // undefined

const arrowFunction = () => {
  console.log("arrow function");
};

arrowFunction(); // arrow function

const arrSquare = (a, b) => a * b;
const arrSquare2 = (a, b) => {
  return a * b; // without return statement, it will return undefined
};
console.log(arrSquare(2, 3)); // 6

const arr = ["Ionut", "Mihai"];
const ob = { x: 0, y: 0 };

arr.push("Andrei");

console.log(arr); // ["Ionut", "Mihai", "Andrei"]

// arr = []; // this does not work because the reference arr is constant

ob.d = 3; // do not do this
console.log(ob); // { x: 0, y: 0, d: 3 } still works

// do this
const ob2 = { ...ob, d: 3 };

console.log(ob2); // { x: 0, y: 0, d: 3 }

// if we want to make the object immutable we need to use Object.freeze
const ob3 = Object.freeze(ob);
ob3.d = 4;
console.log(ob3); // { x: 0, y: 0, d: 3 } it wont update

const arrFrozen = Object.freeze("Haha", 4, [1, 2, 3]);

arrFrozen[2][2] = 100;

let ob1 = { color: "blue", age: 20 };

function copy(ob) {
  console.log(ob);

  return { ...ob };
}

let ob4 = copy(ob1);

ob4.color = "red";

console.log(ob1); // { color: "blue", age: 20 }
console.log(ob4); // { color: "red", age: 20 }

// Recursivitate

function loop(x) {
  console.log(x);

  if (x >= 10) return;

  x++;
  loop(x);
}

loop(0);

function multiplicator(multy, ...numbers) {
  for (let i of numbers) console.log(i * multy);
}

// function that takes function as a param
function first(second) {
  console.log(typeof second); // function
  if (typeof second === "function") {
    return second();
  }
  return;
}

function second() {
  console.log("second");
}

first(second); // pass the reference to the function
// first(second()); // we pass it undefined so it errors out

// Nested functions
function outer() {
  console.log("outer");

  function inner() {
    console.log("inner");
  }

  inner();
}

outer();

// closure
function outSideFunc(x) {
  let y = 9; // wont be accessible from the insideFunc
  function insideFunc(y) {
    return x * y;
  }

  return insideFunc;
}

let g = outSideFunc(2);

console.log(g); // [Function: insideFunc]
console.log(g(3)); // 6

function Persoana(name) {
  let age;
  return {
    getAge: function () {
      return age;
    },
    setAge: function (newAge) {
      age = newAge;
    },
    getName: () => {
      return name;
    },
    setName: (newName) => {
      name = newName;
    },
    getNameAndAge: () => {
      return `${name} are ${age} ani`;
    },
  };
}

let p = Persoana("Ionut");

p.setAge(20);
console.log(p.getAge()); // 20
console.log(p.getName()); // Ionut

p.setName("Mihai");
console.log(p.getName()); // Mihai

console.log(p.getNameAndAge()); // Mihai are 20 ani
