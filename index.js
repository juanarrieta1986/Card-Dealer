let arrayPalos = ["♦","♥","♠","♣"];
let arrayCartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let testArray = [1,2,3,4];
let palo, carta;
//console.log(testArray.length);


function dealCard (){
    palo = Math.floor(Math.random()*(arrayPalos.length));
    carta = Math.floor(Math.random() * (arrayCartas.length));
    //console.log(arrayCartas.length);
}

window.onload = function() {
    dealCard();
    document.getElementById("palo1").innerHTML = arrayPalos[palo];
    this.document.getElementById("palo2").innerHTML = arrayPalos[palo];
    this.document.getElementById("numero").innerHTML = arrayCartas[carta];

};