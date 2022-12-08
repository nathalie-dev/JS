// afficher les nombres de 2 a 20 mais uniquement les pair, séparés par un tiret
let texte = "";
console.log(13%2);
console.log((13%2)==0);
console.log(26%2);
console.log((26%2)==0);
for (let i = 2; i <= 20; i++) {
    // pour chaque valeur de i de 1 à 10, on concatène la valeur courante de i
    // i est ici transformé en texte et non traité comme un nombre
    // si nombre pair alors ajouter i et '-'
    if((i%2)==0)
        {texte = texte + i+'-';}
}
// affichage de la valeur finale de texte: "2-4-6-8-10-12-14-16-18-20"
console.log(texte)


// ou autre posibilité
for(let i = 2; i<=20; i=i+2)
{
     console.log(i);
}
