"use strict";
//type safety in functions is absolutely necessary, coz you might give wrong agruments and the function might use some methods that are not avaiable for that method
Object.defineProperty(exports, "__esModule", { value: true });
function suma(a, b) {
    return a + b;
}
// const ans1:string = suma(1,2);
var ans = suma(1, 2); //this is the better way to write the code
// we don't really need to declare the ans as number type 
function bill(name, email, paid) {
    if (paid === void 0) { paid = true; }
    return name + email;
}
var billed = bill("pratham", "123@gmail.com");
console.log(billed);
