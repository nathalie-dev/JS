function dollarVersEuro(montant) {
    return montant / 1.06;
}
function couronneVersEuro(montant) {
    return montant / 151.69;
}
function euroVersDollar(montant) {
    return montant * 1.06;
}
function euroVersCouronne(montant) {
    return montant * 151.69;
}


function ajouterChiffreSaisie(pTouche) {
    let valeurSaisie = document.querySelector('#valeurSaisie');
    valeurSaisie.value += pTouche;
}
function ajouterVirguleSaisie() {
    let valeurSaisie = document.querySelector('#valeurSaisie');
    valeurSaisie.value += ',';
}

function touchePressee(event) {
    console.log(event);
    if ((event.key >= 0) && (event.key <= 9))
    ajouterChiffreSaisie(event.key)
        else
    switch (event.key) {
        case ',': ajouterVirguleSaisie()
            break;
        
        default:
            console.log(event.key);
            break;
    }

}

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});
const dollar = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});
const couronne = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});



function convertir(event) {
    let valeurSaisie = document.querySelector('#valeurSaisie');
    let valeurConvertie = document.querySelector('#valeurConvertie');
    let moneyDepart = document.querySelector('input[name=moneyDepart]:checked');
    let moneyArrivee = document.querySelector('input[name=moneyArrivee]:checked');
    console.log(valeurSaisie.value);
    console.log(valeurConvertie.value);
    console.log(moneyDepart.value);
    console.log(moneyArrivee.value);
    let montantEuroIntermediaire = 0;

    //si moneyDepart="euro" alors
    if (moneyDepart.value == "euro") {
        console.log("euro");
        // montantEuroIntermediaire <-valeurSaisie
        montantEuroIntermediaire = valeurSaisie.value;
    }
    //sinon
    else {
        //si moneyDepart="dollars" alors
        if (moneyDepart.value == "dollars") {
            console.log("tarpandoiodollars");
            //montantEuroIntermediaire <- valeurSaisie convertie du dollars a l euro
            montantEuroIntermediaire = dollarVersEuro(valeurSaisie.value);
        }
        //sinon c'est des couronnes
        else {
            console.log("c'est des couronnes");
            montantEuroIntermediaire = couronneVersEuro(valeurSaisie.value);
        }
    }

    //si moneyArrivee="euro" alors
    if (moneyArrivee.value == "euro") {
        console.log("euro");
         // resultat <-montantEuroIntermediaire
         resultat = montantEuroIntermediaire;
    }

    //sinon
    else {
        //si moneyArrivee="dollars" alors
        if (moneyArrivee.value == "dollars") {
            //resultat <-  montantEuroIntermediaire convertie de l euro au dollars
            console.log("euroVersDollar");
            resultat = euroVersDollar(montantEuroIntermediaire);
        }
        else {
            console.log("c'est des couronnes");
            resultat = euroVersCouronne(montantEuroIntermediaire);
        }
    }
    // mettre la valeur de résultat dans valeurConvertie
    console.log("afficher valeur convertie");
    console.log(resultat);
    valeurConvertie.value = resultat;
}