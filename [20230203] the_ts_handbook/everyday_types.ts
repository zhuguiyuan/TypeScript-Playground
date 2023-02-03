// @source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// The primitives are string number and boolean.
// Arrays are number[] or Array<number>.
// any is the top.

// type annotations on variables
let myName: string = "Alice";
// However, the tsc can infer it as string, so there is no need to write.

// type annotations on functions
function anotherGreet(name: string): number {
  console.log("Hello, ", name.toUpperCase() + "!!");
  return 42;
}
// However, the return type can also be inferred, so there is also no need.

// Context typing, can infer the type of parameters.
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first.toUpperCase());
  console.log(obj.last?.toUpperCase());
}
printName({ first: "Blob" });
printName({ first: "Alice", last: "Alisson" });

// Union types
function printId(id: number | string) {
  if (typeof id === "number") {
    console.log("Your ID is: " + id);
  }
  if (typeof id === "string") {
    console.log("Your ID is: " + id.toUpperCase());
  }
}
printId(101);
printId("202");
// Error!
// printId({ myID: 22342 });

// Type Aliases
type Point = {
  x: number;
  y: number;
};
type ID = number | string;
type UserInputSanitizedString = string;

// Interface
interface AnotherPointType {
  x: number;
  y: number;
}

// The difference between interface and type is that:
// interfaces is mutable and can insert new fields,
// type aliases cannot be changed after being created.
// When extends certain type (with another type name):
// interfaces can use keyword extends to extend, type aliases can use &.
// Type aliases may not participate in declaration merging, but interfaces can.

// Type assertion: Do we often use it or rarely?

// Literal type: type inference on const
const constantString = "Hello World";
function printText(s: string, alignment: "left" | "right" | "center") {
  // ... do something
}
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
// Also literal inference, it's a little hard to understand.

// If strictNullChecks is on, then:
// If some value can be null or undefined, we must check it before using it.
function doSomethingWithProbNull(x: string | null) {
  if (x === null) {
    return;
  }
  console.log("Hello, ", x.toUpperCase());
}

// At last, two less common primitives: bigint (es2020) and symbol
