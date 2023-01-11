class Cercle {
    rayon;
    surface;
    perimetre;
   


constructor(pRayon) {
    console.log("constructor");
    this.rayon = parseInt(pRayon);

}

afficher() {
    console.log(`Le cercle est de rayon ${this.rayon} cm.`);
}

calculerSurface() {
    return Math.PI * (this.rayon * this.rayon) ; // calcul la surface et la retourne
}


calculerPerimetre() {
    return Math.PI * radius; // calcul du perimetre et la retourne
}
}
