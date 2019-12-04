var name = ["pierre","paul","jack"]

function upperCase(array){
    for (i=0; i < array.length; i++){
        console.log(array[i].toUpperCase())
    }
}

upperCase(name)

console.log('->', ["steph", "albert", "jeanne"].map( (val) => { val.toUpperCase() } ))
