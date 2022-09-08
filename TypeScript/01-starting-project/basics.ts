// Primitives: number, string, boolean, null, undefine
// More complex types: arrays, objects
// Function types, parameters

// Primitives:

let age: number = 23; // string and number type useing the lowercase, if Number => will point to Number object in js.
age = 12.2;

let userName: string;
userName = "desegfh";
userName = "12";

let isInstructor: boolean;
isInstructor = true;

// More complex types:
let hobbies: string[]; // tell typescript we want an array of strings.
hobbies = ["sport", "sing", "12"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Grace",
  age: 23,
};

let people: { name: string; age: number }[];

// Type inference

let course = "React";

//course = 2134;
