let personne = new Personne()
console.log(personne);

let animal = new Animal()
console.log(animal);

let vehicule = new Vehicule()
console.log(vehicule);

let maison = new Maison()
console.log(maison);

let formateur = new Personne ("Bru","Thierry");
formateur.afficher();
let chatFormateur =  new Animal ("Arwen", "chat");
chatFormateur.afficher()
let vehiculeFormateur = new Vehicule ("NavBot ninebot", "G30MAX","1");
vehiculeFormateur.afficher()
let domicileFormateur =  new Maison ( 1, "rue", "du paradis","18999", "Las Angelos");
domicileFormateur.afficher()
console.log(formateur,chatFormateur, vehiculeFormateur,domicileFormateur);