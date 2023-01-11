class Vehicule
{
    marque;
    modele;
    nombrePlaces;

    constructor(pMarque, pModele, pNombrePlaces) {
        console.log("constructor");
        this.marque = pMarque;
        this.modele = pModele;
        this.nombrePlaces = pNombrePlaces;
    }
    afficher() {
        console.log(`J'ai comme véhicule un ${this.marque} ${this.modele}. Il ne peut transporter qu' ${this.nombrePlaces} personne.`);
    }
}