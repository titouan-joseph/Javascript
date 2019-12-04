function forEachIn(object, action) {
    for (let property in object) {
        if (object.hasOwnProperty(property))
            action(property, object[property]);
    }
}

function register(publicFunc) {
    forEachIn(publicFunc, function(name, value) {
        window[name] = value;
    });
}

(function() {
    let names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    console.log(" $ -> ", $)
    register({
        getDayName: function(number) {
            return names[number];
        },
        getDayNumber: function(name) {
            for (let number = 0; number < names.length; number++) {
                if (names[number] == name)
                    return number;
            }
        }
    });
})($);

buildMonthNameModule();
console.log(getMonthName(11));