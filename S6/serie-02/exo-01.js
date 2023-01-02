// creer une variable qui contient la date du jour
let date = new Date();
// recuperer le n° du jour ente 1 et 31
let dateJour= date.getDate();
// recuperer le mois entre 0 et 11
let mois = date.getMonth();
// si ((le numero du mois = 8 ) et le (numero du jour >= 22)ou (le numero du mois = 9) et (le numero du jour <=21))
if (((mois == 8) && (dateJour >= 22)) || ((mois == 9) && (dateJour<=21)))
//alors
{
    moisRevolutionnaire = "Vendemiaire"
}
else
//sinon
// si ((le numero du mois =  ) et le (numero du jour >= 22)ou (le numero du mois = ) et (le numero du jour <=22))
if (((mois == 9) && (dateJour >= 22)) || ((mois == 10) && (dateJour<=21)))
{
    moisRevolutionnaire = "Brumaire"
}
else

if (((mois == 10) && (dateJour >= 22)) || ((mois == 11) && (dateJour<=21)))
{
    moisRevolutionnaire ="Frimaire"
}

else

if (((mois == 11) && (dateJour >= 22)) || ((mois == 0) && (dateJour<=20)))
{
    moisRevolutionnaire ="Nivôse"
}

else

if (((mois == 0) && (dateJour >= 21)) || ((mois == 1) && (dateJour<=19)))
{
    moisRevolutionnaire ="Pluviôse"
}

else

if (((mois == 1) && (dateJour >= 20)) || ((mois == 2) && (dateJour<=19)))
{
    moisRevolutionnaire ="Ventôse"
}

else

if (((mois == 2) && (dateJour >= 22)) || ((mois == 3) && (dateJour<=19)))
{
    moisRevolutionnaire ="Germinal"
}

else

if (((mois == 3) && (dateJour >= 20)) || ((mois == 4) && (dateJour<=19)))
{
    moisRevolutionnaire ="Floréal"
}
else

if (((mois == 4) && (dateJour >= 20)) || ((mois == 5) && (dateJour<=18)))
{
    moisRevolutionnaire ="Prairial"
}

else

if (((mois == 5) && (dateJour >= 19)) || ((mois == 6) && (dateJour<=18)))
{
    moisRevolutionnaire ="Messidor"
}

else

if (((mois == 6) && (dateJour >= 19)) || ((mois == 7) && (dateJour<=17)))
{
    moisRevolutionnaire ="Thermidor"
}

else

if (((mois == 7) && (dateJour >= 18)) || ((mois == 8) && (dateJour<=17)))
{
    moisRevolutionnaire ="Fructidor"
}
else {
    nomMois = "Jour Supplémentaire";
}
console.log(moisRevolutionnaire);

