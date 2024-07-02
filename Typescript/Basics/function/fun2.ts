// function addtwo( a : number, b:number) : number{
//     return " jdfug"
// } we can't return like this coz the return type of the fucntion is already set to number and anything other than that can lead to error

function addtwo( a : number, b:number) : number{
    return a + b
}

const ans =  addtwo(1,2);
console.log(ans)