function afficherNombres (pNombres)
    {
        let message="";
        for (let i=1; i<= pNombres; i++)
        {
            message= message + i ;
        }
        return message;
    }

    let nombreSaisi= parseInt (prompt("saisir un nombre"));
    let resultatTexte= afficherNombres(nombreSaisi);
    console.log(resultatTexte);