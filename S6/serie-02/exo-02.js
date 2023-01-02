
function conversionEnAnnee(pDureeMs) // ms veux dire millimetre par seconde
{
    let nbAnnees = 0;
    nbAnnees=Math.trunc(pDureeMs/(1000*60*60*24*365))
    return nbAnnees
}
function conversionEnMois(pDureeMs,nbAnnees)
{ 
    let nbMois = 0;
    nbMois=Math.trunc((pDureeMs -nbAnnees)/(1000*60*60*24*31))
    return nbMois
}
function conversionEnJours(pDureeMs,nbAnnees,nbMois)
{
    let nbJours=0;
    nbJours=Math.trunc((pDureeMs-nbAnnees-nbMois)/(1000*60*60*24))
  
    return nbJours
  
}

let birth = new Date(1756,0,27);
let death = new Date(1791,11,5);
let ageEnMS= ( death - birth)
console.log(conversionEnAnnee(ageEnMS));
let anneeEnMS = conversionEnAnnee(ageEnMS)*1000*60*60*24*365;


console.log(conversionEnJours(ageEnMS,anneeEnMS));


