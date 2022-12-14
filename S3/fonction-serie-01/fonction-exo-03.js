function estPair (pNombre){
     return (pNombre % 2 == 0)
}

function afficherNombresPairs (pNombresMax){
        let resultat="";
        for (let i= 2; i<=pNombresMax; i++) {
            if (estPair(i))
            // console.log(i);
            resultat+= "-" + i;
        }
        return resultat;
    }

    console.log (estPair(2));
    console.log (estPair(5));

    console.log (afficherNombresPairs(5));
    console.log (afficherNombresPairs(20));
    //console.log(afficherNombresPairs(parseInt(prompt("nombre max ?"))));