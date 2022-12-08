// Afficher les nombres de 1 à 10 en utlisant for
let texte = "";

for (let i = 1; i <= 10; i++) {
    // pour chaque valeur de i de 1 à 10, on concatène la valeur courante de i
    // i est ici transformé en texte et non traité comme un nombre
    texte = texte + i;
}
// affichage de la valeur finale de texte: "12345678910"
console.log(texte)