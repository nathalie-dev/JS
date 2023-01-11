// déclaration et initialisation de la variable texte qui contient du texte
let texte = "";


for (let i = 10; i >=1 ; i--) {
    // pour chaque valeur de i de 10 à 1, on concatène la valeur courante de i
    // i est ici transformé en texte et non traité comme un nombre
    texte = texte+i+'-';
   // texte =`${texte}${i}`;
}
// affichage de la valeur finale de texte: "10987654321"
console.log(texte)