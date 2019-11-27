function affiche(x){
    console.log("->" + x)
}

let a = function(x){
    console.log("-->" + x)
}

let b = (x) => {
    console.log("--->" + x)
}

affiche("coucou")
a("Coucou")
b("hello")