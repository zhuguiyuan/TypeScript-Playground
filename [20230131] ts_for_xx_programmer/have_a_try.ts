// Source code is from:
// https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const anotherUser: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
  return new UserAccount("admin", 0);
}

// Consider type as set and is structural
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html
interface PointLike {
  x: number;
  y: number;
}
interface Named {
  name: string;
}

function logPoint(point: PointLike) {
  console.log("x = " + point.x + ", y = " + point.y);
}

function logName(x: Named) {
  console.log("Hello, " + x.name);
}

const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};

logPoint(obj);
logName(obj);
