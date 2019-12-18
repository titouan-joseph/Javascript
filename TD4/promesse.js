Promise = require('bluebird');

wait = function(time) {
    return new Promise(function(resolve, reject) {
        console.log('dans la promesse')
        if (time <= 3000) {
            setTimeout(resolve, time);
        }
        else{
            return reject('error: time out !')
        }
        console.log("apres le setTimeout")
    });
}

wait(30000)
    .then(function() { console.log('Bonjour');})
    .catch(function (err) {console.log("Time out! \n",err)})