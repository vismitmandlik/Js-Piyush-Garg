// functions

function login(){
    console.log("Welcome You are logged in.")
}

do{
    let num1 = parseInt(prompt("Enter num 1"))
    let num2 = parseInt(prompt("Enter num 2"))
    alert("Total: " + add(num1, num2))
}while(true)

function add(){
    let ans = 0
    for(let i=0; i<arguments.length; i++){
        ans = ans + arguments[i]
    }
    return ans
    
}
let result = add(1,2)
console.log(result)

// let result = add(61, 68)
// console.log("The result is : " + result)