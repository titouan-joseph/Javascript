function test(f) { // Ne pas toucher à ce code
    setTimeout(function () {
        for (var i = 0; i < 20; i++) {
            console.log("coucou", i);
        }
        f();
    })
}

console.log("Debut");

test(function(message) {
    console.log("-> Terminé");
});

console.log("Fin")