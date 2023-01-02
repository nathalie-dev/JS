console.log(euroVersDollar(1))
console.log(euroVersCouronne(1))
console.log(dollarVersEuro(1))
console.log(couronneVersEuro(1))


let boutonConversion = document.querySelector('#conversion');
boutonConversion.addEventListener('click', convertir);

let body = document.querySelector('body');
body.addEventListener('keydown',touchePressee);