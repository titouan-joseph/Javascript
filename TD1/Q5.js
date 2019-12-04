let chose = { "hello" : "coucou", 3:10}
chose["3"];
//-> 10
chose.hello;
//-> coucou
delete chose.hello;

for (o in chose) {
    console.log( o + '->' + chose[o])
}