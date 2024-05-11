let name = "MyScript";

//let address;
address = "MyAddress";

//console.log(address);

var firstName = 20;
var last_name = 10;
var address = "main street";
var address = "first street";

//Normal function
let greet = function () {
  console.log("Hello World");
  return 1;
};

console.log(greet());

// Arrow Function
let greet1 = (user) => {
  console.log("Hello" + user);
  return 3;
};
console.log(greet1("Navin"));

/*
let num1, num2;
let add = (num1, num2) => num1 + num2;
if (num1 > 0 && num2 > 0) {
  let result = add(3, -4);
} else {
  console.log("Can't add Negative");
}
*/
let input1 = Math.abs(5);
let input2 = Math.abs(-6);
let add = (num1, num2) => num1 + num2;

let result = add(input1, input2);
console.log(result);
