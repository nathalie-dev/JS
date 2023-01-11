
let longueur = prompt ("Saisissez un nombre pour definir la longueur du rectangle");
alert (`La longueur du rectangle est de ${longueur} cm.`)
let largeur = prompt ("Saisissez un nombre pour definir la largeur du rectangle");
alert (`La largeur du rectangle est de ${largeur} cm.`)
let rectangle = new Rectangle(longueur,largeur)
console.log(rectangle);
console.log(rectangle.calculeSurface());
console.log(rectangle.calculerPerimetre());