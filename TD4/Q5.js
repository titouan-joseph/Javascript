Promise = require('bluebird');

wait = function(time) {
    a = new Promise(function(resolve) {
        calc = time/1000
        //setTimeout(resolve(calc), time)    //Attention resolve(a) est directement executé
        //setTimeout(resolve, time, calc);    //setTimeout prend en prametre function, temps, parametres
        setTimeout(function () {resolve(calc)}, time)
    });
    return a;
}

wait(3000).then(function(res) { console.log('Bonjour, le resultat est: ',res);})