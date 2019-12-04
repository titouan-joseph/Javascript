Number.prototype.parler = function() {
    console.log("Je suis un nombre !");
};

let nombre = 42;
nombre.parler();

String.prototype.parler = function(){console.log("Je suis une chiane de caracteres")}
let str = "coucou"
str.parler()