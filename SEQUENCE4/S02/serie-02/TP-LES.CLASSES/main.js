// //exo 1 creer une liste de stagiaire
// let stagiaire1 = ["Martin", "DUPONT"];
// let stagiaire2 = ["Vincent", "MARTIN"];
// let stagiaires = [stagiaire1, stagiaire2];
// console.log(stagiaires);
// console.log(stagiaires[1][0]);


// let stagiaireA = new Stagiaire("", "");
// stagiaireA.nom = "DUPONT";
// stagiaireA.prenom = "Martin";


// let stagiaireB = new Stagiaire("", "");
// stagiaireB.nom = "MARTIN";
// stagiaireB.prenom = "Vincent";

// let stagiaireBis = [stagiaireA, stagiaireB];

// console.log(stagiaireBis);
// console.log(stagiaireBis[1].prenom);
// console.log(stagiaireBis[0].salutation());

// let anotherStagiaire = new Stagiaire("Lucette", "Anderson");
// console.log(anotherStagiaire);

// let classe = new Classe('dwwm vierzon 18 2023',new Date(2023,1,6),new Date(2023,6,28));
// classe.ajouterStagiaire(stagiaireA)
// classe.ajouterStagiaire(stagiaireB)
// console.log(classe);
function creerStage() {
    console.log('creer stage');
    stage = new Classe(document.querySelector("#name").value, new Date(document.querySelector("#dateDebut").value), new Date(document.querySelector("#dateFin").value))
    
}

function afficherLog(){
    console.log(stage);
   
}
var stage;
var voirLog;

let btnCreer = document.querySelector("#btnCreer");
btnCreer.addEventListener("click", creerStage);

let btnLog = document.querySelector("#btnLog");
btnLog.addEventListener("click", afficherLog);