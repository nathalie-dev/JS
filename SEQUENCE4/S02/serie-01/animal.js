class Animal
{
    nom;
    espece;

    constructor(pNom, pEspece) {

        console.log("constructor");
        this.nom = pNom;
        this.espece = pEspece;
    }
    afficher() {
        console.log(`Mon animal de compagnie est un ${this.espece} qui s'appelle ${this.nom}.`);
    }

}