let arrayPalos = ["♦","♥","♠","♣"];
let arrayCartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let palo, carta;

function dealCard (){
    palo = Math.floor(Math.random() * (arrayPalos.lenght));
    console.log(palo);
    carta = Math.floor(Math.random() * (arrayCartas.lenght));
    console.log(carta);
}

window.onload = function() {
    dealCard;
    document.getElementById("palo1").innerHTML = palo;
    this.document.getElementById("palo2").innerHTML = palo;
    this.document.getElementById("numero").innerHTML = carta;

};