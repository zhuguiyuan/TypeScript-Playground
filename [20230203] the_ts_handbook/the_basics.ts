// @source: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
// What is the type in JavaScript?
// It's the sorts of behaviors and capabilities it has,
// or we can observe from runtime.
// So types in JavaScript are dynamic.

// TypeScript is a static typechecker on JavaScript.

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

// Let's try an error.
// greet("Brendan");
greet("Brendan", new Date());

// TypeScript can infer the type.
let msg = "hello there!";
