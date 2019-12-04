a = "Hello World.\n Good bye world"

regx = RegExp(/world/, 'ig')

console.log("->", a.replace(regx, "World of Stephane"))