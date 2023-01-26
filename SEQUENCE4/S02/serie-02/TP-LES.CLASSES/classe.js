// creation des proprietes et du constructeur

class Classe {
    intitule;
    listeStagiaire;
    dateDebut;
    dateFin;

    constructor(intitule, dateDebut, dateFin) {
        this.intitule = intitule;
        this.listeStagiaire = new Array();
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

    ajouterStagiaire(pStagiaire) {
        this.listeStagiaire.push(pStagiaire)
    }

    creerStage() {
        this.creer()
    }

}
