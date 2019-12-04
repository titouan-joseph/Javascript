function forEachIn(object, action) {
    for (let property in object) {
        if (object.__proto__.hasOwnProperty(property))
            action(property, object[property]);
    }
}

let etudiants = {"sfrenot" : {nom: "frenot", prenom : "stephane", age : "22"},
                 "lmametz" : {nom: "mametz", prenom : "laurent"},
                 "hasOwnProperty" : {nom: "name", prenom: "test"}};

forEachIn(etudiants, function(name, value) {
    console.log("nom : ", name, " -> valeur ", value);
});