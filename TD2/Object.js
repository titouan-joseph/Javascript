function parle (phrase) {
    console.log("Le lapin ", this.couleur, " dit '", phrase, "'");
}
let lapinBlanc = { couleur : "blanc", parle : parle };
let lapinNoir = { couleur : "noir", parle : parle };

lapinBlanc.parle(" Je suis tout blanc ");
lapinNoir.parle(" Je suis tout noir ");

let lapin = {couleur : "rouge", parle : parle}

lapin.parle(" je suis blanc ")
// ==
parle.apply(lapin, ["je suis blanc"]);
// ==
parle.call(lapin, "je suis blanc");


function Lapin (couleur) {
    this.couleur = couleur;
    this.parle = function (phrase) {
        console.log("Le lapin ", this.couleur, " dit '", phrase, "'");
    };
}

let lapinTueur = new Lapin(" tueur ");
lapinTueur.parle(" GRRRAAAAAAHHHH ");
Lapin.prototype.dents = "petites";
console.log(lapinTueur.dents)
// --> "petites"
lapinTueur.dents = "longues et ascérées"
console.log(lapinTueur.dents)
// --> "longues et ascérées";
console.log(Lapin.prototype.dents)
// --> "petites";
// "longues et ascérées"