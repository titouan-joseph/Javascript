a = "Je suis âgé de dix (10) ans"

regx = RegExp(/\(|\)/, 'g')

console.log("->", a.replace(regx, "\""))