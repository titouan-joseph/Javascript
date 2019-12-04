function create() {
    let reponse = 23;
    return function (x) { return x + reponse; }
}

let a = create()
console.log(a(12))

function create2() {
    this.reponse = 23;
    this.calc = function (x) { return x + this.reponse; }
}

let a2 = new create2()
console.log(a2.calc(12))

function moins(a, b, c) {
    return (a - b);
}

console.log(moins(3, 2));
console.log(moins(3, 2, 4, 8));
console.log(moins(2));