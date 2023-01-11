class Personne {
    nom;
    prenom;

    constructor(pNom, pPrenom) {
        console.log("constructor");
        this.nom = pNom;
        this.prenom = pPrenom
    }
    afficher() {
        console.log(`Bonjour je s'appelle ${this.prenom} ${this.nom}.`);
    }

}

