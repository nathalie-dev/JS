function afficherNombresRebour (pNombres)
    {
        let message="";
        for (let i=pNombres; i>=1; i--)
        {
            message= message + i ;
        }
        return message;
    }

    let nombreSaisi= parseInt (prompt("saisir un nombre"));
    let resultatTexte= afficherNombresRebour(nombreSaisi);
    console.log(resultatTexte);