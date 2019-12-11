function test(f) { // Ne pas toucher à ce code
    setTimeout(function () {
        for (var i = 0; i < 20; i++) {
            console.log("coucou", i);
        }
        f();
    })
}

console.log("Debut");

function call() {
    test(function (message) {
        console.log("-> Terminé");
    });
    setTimeout(call, 1000)
}

call()

console.log("Fin")