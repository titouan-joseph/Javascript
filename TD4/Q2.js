Promise = require('bluebird');

wait = function(time) {
    return new Promise(function(resolve, reject) {
        if (time > 3000) {
            return reject('erreur');
        } else {
            setTimeout(resolve, time);
        }
    });
}

wait(2000)
    .then(function() {
            console.log('Bonjour');
            return wait(4000)
        })
    .catch(function(res) { console.log('Erreur', res);})

