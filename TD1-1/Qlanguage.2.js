a = "Hello World.\n Good bye world"

regx = RegExp(/^.*\n/, 'i')

console.log("->", a.replace(regx, ""))