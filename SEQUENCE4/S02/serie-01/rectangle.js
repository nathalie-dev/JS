class Rectangle {
    longueur;
    largeur;


    constructor(pLongueur, pLargeur) {
        console.log("constructor");
        this.longueur = parseInt(pLongueur);
        this.largeur = parseInt(pLargeur);
    }

    afficher() {
        console.log(`La longueur du rectangle est ${this.longueur} et la largeur du rectangle est ${this.largeur}.`);
    }
    calculeSurface() {
        return this.largeur * this.longueur; // calcul la surface et la retourne
    }

    calculerPerimetre() {
        return ((this.longueur + this.largeur) * 2); // calcul du perimetre et la retourne
    }
}
