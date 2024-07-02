//type safety in functions is absolutely necessary, coz you might give wrong agruments and the function might use some methods that are not avaiable for that method

function suma( a:number, b:number){
    return a+b
}

// const ans1:string = suma(1,2);

const ans:number = suma(1,2); //this is the better way to write the code
// we don't really need to declare the ans as number type 

function bill( name:string, email: string, paid : boolean = true){
    return name + email
}

const billed = bill("pratham", "123@gmail.com")
console.log(billed)

export {}