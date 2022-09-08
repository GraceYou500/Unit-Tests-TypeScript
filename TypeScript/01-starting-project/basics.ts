// Primitives: number, string, boolean, null, undefine
// More complex types: arrays, objects
// Function types, parameters

// Primitives:

let age: number = 23; // string and number type useing the lowercase, if Number => will point to Number object in js.
age = 12.2;

let userName: string | string[];
userName = "desegfh";
userName = "12";
userName = ["fs", "rwtg"];

let isInstructor: boolean;
isInstructor = true;

// More complex types:
let hobbies: string[]; // tell typescript we want an array of strings.
hobbies = ["sport", "sing", "12"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Grace",
  age: 23,
};

let people: Person[];

// Type inference

let course: string | number = "React";

course = 2134;

// Functions & types

function add4(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
} // have no return value, the type of the return value is void (like undefine), so if you work with the value, just like work with undefined.

// Generics

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1); // [-1,1,2,3]

// updatedArray[0].split(""); // typescript cannot detact the error here, split should be used for string not number.

const stringArray = insertAtBegining(["a", "fa", "dfa"], "f");

const radArray = insertAtBegining(["s", "df", "fa"], "23");
