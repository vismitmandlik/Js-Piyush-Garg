//Arow Function
const hello = () => {
    console.log("HEllo")
}

const add = (a, b) => {
    return a + b 
}

const addv2 = (a, b) => a + b

const add2 = (...num ) => {
    console.log(num)
}
add(5, 7, 8, 6)

const obj = {
    value : 20,
    myfunction: function() {
        console.log(this.value)
        console.log(this)
    },
}
obj.myfunction()