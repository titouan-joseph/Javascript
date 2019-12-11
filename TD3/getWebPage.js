require('request')("http://www.google.fr", (err, data) =>{
                        console.log("traitement")
                        console.log(data)})