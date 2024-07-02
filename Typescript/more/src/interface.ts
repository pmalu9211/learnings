const user = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 2,
};

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(user));

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee1 implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
