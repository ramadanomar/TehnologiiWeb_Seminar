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
