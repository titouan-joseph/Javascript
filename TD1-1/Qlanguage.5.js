a = "Hello 1 word. Sentence number 2."

regx = new RegExp(/\d/, "g")

console.log(a.split(regx)) //sans convervation du groupe
console.log(a.split(/(\d)/)) //avec convervation du groupe
