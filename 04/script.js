const age = 90

if(age >=80){
    console.log("You are Senior Citizen.")
}
 
else if(age>=18){
    console.log("You are eligible to vote.")
}

else{
    console.log("You cannot vote.")
}
//Ternary operator

age>=18 ? console.log("Yes") : console.log("No")

//Switch
const option = 4

switch(option){
    case 1:
        console.log("Hello")
        break;

    case 2:
        console.log("Namaste")
        break;

    case 3:
        console.log("Khaifhalik")
        break;
    
    default:
        console.log("Invalid Input")
}