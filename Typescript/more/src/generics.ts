function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

function first<T>(args: T[]) {
  return args[0];
}

let arr = [1, 2, 3, "pratham"];

console.log(first(arr));

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());
