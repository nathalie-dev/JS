// fonction pour changer l'image de l'animal
function changerImageAnimal(pEvent) {
    
        // pour afficher la nouvelle image
        console.log("changerImageAnimal");
        console.log(pEvent);
        console.log(pEvent.srcElement);
        console.log(pEvent.srcElement.value);

        // declarer la variable de l'element image
        //selecte l'image 
        let image = document.querySelector("#id_image");
        image.src = pEvent.srcElement.value;
        // declarer la variable de l'element quel est le nom de l'image selectionner
        let texte = document.querySelector("#id_quoi");
        texte.innerText = pEvent.srcElement.id;

}
function changerTexteAuSurvol(pEvent) {
    console.log("changerTexteAuSurvol");
    console.log(pEvent);
    console.log(pEvent.srcElement);
    console.log(pEvent.srcElement.src);
 // declarer la variable de l'element image
        //selecte l'image 
        let image = document.querySelector("#id_image");
        image.src = pEvent.srcElement.src;
        // declarer la variable de l'element quel est le nom de l'image selectionner
        let texte = document.querySelector("#id_quoi");
        texte.innerText = pEvent.srcElement.id;


}
