// //Loops

for(let i=1; i<10; i++){
    console.log("I am Vismit")
}

let ip = 0
let house = 50

while(ip != 50){
    ip = ip + 1
    console.log('Step Taken ' + ip)
}

do {
    ip = ip + 1
    console.log('Step Taken ' + ip)
}while(ip != house)

let number = 68
let guess = 0

do{
    guess = parseInt(prompt("Guess a number : "))

    if(guess == number ){
        alert("You Won !!! ")
        break;
    }
}while(guess != 0)
