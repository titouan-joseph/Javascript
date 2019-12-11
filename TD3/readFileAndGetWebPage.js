fs = require('fs')
request = require('request')

fs.readFile('url.txt', 'utf-8', function(err, data){
    request(data, function (err, res) {
        console.log(res)
    })
})