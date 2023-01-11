// exo 1: Rendre le bouton Random actif
let btnRandom = document.querySelector("#btnRandom");
btnRandom.addEventListener('click',changerCouleurAlea);

// exo 2: Rendre le couton couleur actif
let btnColor = document.querySelector('#btnColor');
btnColor.addEventListener('click',changerDarkLightMode);

//exo 3: Rendre les boutons P et H1 actifs
let ajouterH1 = document.querySelector('#ajouterH1');
ajouterH1.addEventListener('click',ajouterTitre);
let ajouterP = document.querySelector('#ajouterP');
ajouterP.addEventListener('click',ajouterParagraphe);
var nbParagraphe =0;





