//tirage aléatoire
let nombreChercher = Math.round(Math.random() * (5 - 1) + 1);
console.log(nombreChercher);
let nombre = 0;
let nbEssais = 0;
do {
    // saisie du nombre
    nombre = parseInt(prompt('proposez un nombre entre 1 et 5'));
    nbEssais+=1;
    // donner les indices <> si pas égal
    if (nombre != nombreChercher) {
        if (nombre > nombreChercher)
            alert('trop grand');
        else
            alert('trop petit');
    }
}
while ((nombre != nombreCherche)&&(nbEssais<3))
if (nombre == nombreCherche)
    alert('BRAVO tu as trouvé! en '+nbEssais+' tentatives');
else
    alert('BOOOUHHH TU ES NUL');
// recommancer si pas égal 5
5