class Maison
{
    numeroRue;
    typeVoie;
    nomVoie;
    codePostal;
    ville;

    constructor(pNumeroRue, pTypeVoie, pNomVoie, pCodePostal, pVille) {
        console.log("constructor");
        this.numeroRue = pNumeroRue;
        this.typeVoie = pTypeVoie;
        this.nomVoie = pNomVoie;
        this.codePostal = pCodePostal;
        this.ville = pVille;
    }
    afficher() {
        console.log(`J'habite au ${this.numeroRue} ${this.typeVoie} ${this.nomVoie} ${this.codePostal} ${this.ville}.`);
    }

}

