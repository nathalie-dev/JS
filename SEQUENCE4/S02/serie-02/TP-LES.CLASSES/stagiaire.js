// creation de notre premiere classe
class Stagiaire {
    nom;
    prenom;

    constructor(pPrenom, pNom) {
        this.prenom = pPrenom;
        this.nom = pNom.toUpperCase();
    }


    //creer des methodes
    salutation() {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
}

