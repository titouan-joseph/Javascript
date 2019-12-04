function parle() {
    console.log("->", this.me, " dis quelque chose")
}

let tmp  = parle.bind({me : "Jean"})

console.log(tmp)

tmp()