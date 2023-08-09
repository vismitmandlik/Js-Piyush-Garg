//HigherOrder
function add(a, b, cb){
    let result = a + b
    cb(result)
}

function showResult(result){
    console.log(result)
}

add(2, 4, showResult)
add(3, 9, (val) => console.log(val))