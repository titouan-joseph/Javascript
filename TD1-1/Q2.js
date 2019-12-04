a = "Bonjour M. stephane.\n Je m\'appelle Stephane. Super Stephane"

regx = new RegExp('Stephane', 'ig')

console.log(a.replace(regx, 'Georges'))