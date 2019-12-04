var numbers = [1,2,3,4,5,5,8,4,1,2,3]


console.log(numbers.reduce( (cumul, val) => {return (val + cumul)}) / numbers.length)