// parcourir les nombres de 1 à 10 avce la boucle FOR
let nombre ="";

// pour chaque valeur de i de 1 à 10, on concatène la valeur courante de i
// i est ici transformé en texte et non traité comme un nombre
for (let i = 1; i <= 10; i++) {
    nombre: nombre + i;
}
    
// si nombre pair alors ajouter i 
// i%2 == 0 equivaut à la division entière de i par 2 a un reste égal à zero ----> i est pair
        if((i%2)==0)
       {  console.log(`le nombre ${i} est pair`);
    }

// afficher si le nombre est pair ou impair
else {
console.log(`le nombre ${i} est impair`);
}