// saisir un nombre d'etoiles
let nombreEtoiles = parseInt(prompt("nombre etoiles= ?"));

// tant qu'il n'est pas bien superieur ou egal à 1 et inferieur strictement a 11
while ((nombreEtoiles >= 1) || (nombreEtoiles < 11))
{
    alert ("le nombre d'etoiles est incorrect");
    nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
}
    // afficher n etoiles
    let etoiles = "";

    for (let i = 1; i <= nombreEtoiles; i++) {
        etoiles += "*";
        console.log(etoiles);

    }
    for (let i = 1; i <= nombreEtoiles; i++) {
        console.log("*".repeat(i));

    }









