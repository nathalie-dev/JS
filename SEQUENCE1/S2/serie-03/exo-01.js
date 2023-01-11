//saisir un nombre d'etoiles
let nombreEtoiles = parseInt(prompt("nombre etoiles= ?"));

//verifier qu'il est bien superieur ou egal à 1 et inferieur a 11
if ((nombreEtoiles >= 1) && (nombreEtoiles < 11))

// alors le nombre d'etoiles est correct
{
    let texteEtoiles = "";

// pour chaque valeur de i de 1 à 10, on concatène la valeur courante de i
// i est ici transformé en texte et non traité comme un nombre
    for (let i = 1; i <= nombreEtoiles; i++) {
        texteEtoiles += "*";
    }
    console.log(texteEtoiles);
}
//sinon le nombre d'etoiles n'est pas correct
else {
    console.log("le nombre d'etoiles n'est pas correct");
}



    
// lire nombreEtoiles
// si nombreEtoiles >1 et nombreEtoiles <11
// ALORS
//    texteEtoile =""
//    POUR i de 1 à nombreEtoile FAIRE
//    texteEtoile = texteEtoile + "*"
// FIN POUR
// ecrire texteEtoile
// SINON
// ECRIRE "nombre etoiles incorrect"