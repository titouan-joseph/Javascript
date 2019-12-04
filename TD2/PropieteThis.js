let i = 30
function f () {
    // this.i = 'test'
    let i = 15;
    console.log(i);
    console.log(this.i);
}
f()