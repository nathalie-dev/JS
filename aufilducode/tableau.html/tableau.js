let notes = new Array();
let somme =0;
let moyenne = 0.0;
for (let i = 0; i <12; i++) {
     notes[i]=parseInt(prompt('note n°'+i+"=?"));
}
// for (let i = 0; i <12; i++) {
//     somme+=notes[i];
// }


moyenne = somme/notes.length;
alert(`la moyenne de la classe est de :${moyenne.toFixed(1)}`);