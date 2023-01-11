// je crée unevariable boutons et j'y affecte la liste des elements html qui ont pour class animal
let buttons = document.querySelectorAll(".animal");

// boutons est une liste, donc je la parcours avec un forEach
buttons.forEach(button => {
    // pour chauqe bouton, on abonne à l'element click
    button.addEventListener("click",changerImageAnimal);
});

//imagesPetites
// variable pour selectionner tout les boutons
let images = document.querySelectorAll(".imagesPetites");
images.forEach(image => {
    image.addEventListener("mouseover",changerTexteAuSurvol);
    
})
