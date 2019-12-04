function multiplie(a,b){
    return a*b
}

console.log(multiplie(10,5))

multiplier = (a) => {return (b) => multiplie(a,b)}

console.log(multiplier(5)(6))

multiple5 = multiplier(5)

console.log(multiple5(6))