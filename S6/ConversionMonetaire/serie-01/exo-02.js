// creer une fonction jour de la semaine
function getWeekDay(pDate) 
{   
    let resultat = "";
   console.log(pDate.getDay());
   switch (pDate.getDay()) {
    case 1:resultat= "SU";
    break;
    case 2:resultat= "MO";
    break;
    case 3:resultat= "TU";
    break;
    case 4:resultat= "WE";
    break;
    case 5:resultat= "TH";
    break;
    case 6:resultat= "FR";
    break;
    case 7:resultat= "SA";
    break;
   }
    return resultat;
}

let date= new Date(2012,0,3);
console.log(getWeekDay(date));


// ou alors 
//function getWeekDay(pDate) {
//    let resultat = "";
//    let listeJours = ['SU','MO','TU','WE','TH','FR','SA']
 //   console.log(pDate.getDay());
//    return listeJours[pDate.getDay()];
// }
//let date = new Date(2012, 0, 3);
//console.log(getWeekDay(date));