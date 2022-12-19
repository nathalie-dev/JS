// exercice n°1
function cacherImg(event) {
    // sur mouse Event :  event.srcElement
    event.srcElement.style.visibility = "hidden";
}
/*
let image1= document.querySelector('#image1');
image1.addEventListener('dblclick',cacherImg)
*/
// let images = document.querySelectorAll('img');
// images.forEach(image => {
//     image.addEventListener('click', cacherImg);
// })



// exercice n° 2
function cacherImg2(event) {
    // sur mousse Event: event.srcElement
    event.srcElement.style.display = "none";
}
/*let image2= document.querySelector('#image2');
image2.addEventListener('dblclick', cacherImg)
*/
//let images= document.querySelectorAll('img');
//images.forEach(image=>{
//    image.addEventListener('click', cacherImg2)
//})

//exercice n° 3 bouton tout afficher / tout masquer
function afficherTout(event) {
   let images = document.querySelectorAll("img");
   images.forEach(image => {
        image.style.display = "block";
        image.style.visiblity = "visible";
    })
}
function cacherTout(event) {
    let images = document.querySelectorAll("img");
    images.forEach(image => {
        image.style.display = "none";
        image.style.visiblity = "hidden";
    })
}
let boutonA = document.querySelector("#afficher");
boutonA.addEventListener("click", afficherTout)
let boutonC = document.querySelector("#cacher");
boutonC.addEventListener("click", cacherTout)


// exercice n° 4 desactiver/reactiver la surveillance d'evenements
function desactiverTout(event) {
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.removeEventListener('dblclick', cacherImg2);
    })
}

function activerTout(event){
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('dblclick', cacherImg2);
    })
}

let boutonB = document.querySelector("#desactiver");
boutonB.addEventListener("click", desactiverTout)
let boutonD = document.querySelector("#activer");
boutonD.addEventListener("click", activerTout)