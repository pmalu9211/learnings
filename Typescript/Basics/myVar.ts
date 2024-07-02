const names : string = "pratham"
const mynum  = 1 //no need to define it with munum : number coz ts infers it's type on it's own

mynum.toExponential(3)
console.log(names)
export{}

//Any should't be used, as it misses the point of using ts in the first place

let myStr : string;

function getHro(){
    return "Hello"
}

myStr = getHro();
console.log(myStr)