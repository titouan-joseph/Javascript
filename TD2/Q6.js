class Machine3 {
    constructor() {
        this.utilite = "rien3";
        this.test = function() {console.log("coucou3", this.utilite)};
    }
}

let machine3 = new Machine3();

//Vous ajouterez vos codes ici.
// machine3.test = function () { console.log("COUCOUUU", this.utilite) }
Machine3.prototype.test = function() {console.log("Hello")}
Object.prototype.test = function() {console.log("has been modified")}

machine3.test();
machine3.__proto__.test()
machine3.__proto__.__proto__.test()