function parle(phrase) {
    console.log("Je vous dit : ", phrase)
}

var phrase = "Coucou"
parle.call(null, phrase)

parle.apply(null, [phrase+', hello'])


parle('hello')