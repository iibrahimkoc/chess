// CİHAZIN WİDTH DEĞERİNİ ALDIK
var screenWidth = document.getElementById("body").clientWidth;
screenWidth -= 20;

blockWidth = screenWidth / 8;
console.log("screenWidth:", screenWidth);
console.log("blockWidth:", blockWidth);
var style = document.createElement('style');
style.type = 'text/css';
document.head.appendChild(style);
style.innerHTML = '@media screen and (max-width: 500px) {.table{ width: ' + screenWidth + 'px; height: ' + screenWidth +'px;}.yesil{width: ' + blockWidth +'px;height: ' + blockWidth +'px;font-size: '+ (blockWidth*0.6) +'px;}.beyaz{width: ' + blockWidth +'px;height: ' +blockWidth +'px;font-size: '+ (blockWidth*0.6) + 'px;}}'






function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("table").style.display = "block";
}

var hamleSayisi = 0;
var tasTuru;
var renk;
var oynanacakTasKonumToChar;
var hedefKonumToChar;


function renkBelirle(konum) {
    if (document.getElementById(konum).innerHTML.includes("white")) {
        renk = "white";
    }
    else if (document.getElementById(konum).innerHTML.includes("black")) {
        renk = "black";
    }
}

function tasTurBelirle(konum) {
    if (document.getElementById(konum).innerHTML.includes("Pawn")) {
        renkBelirle(konum);
        tasTuru = "pawn";
        console.log("pawn " + konum + " " + renk)
    }
    else if (document.getElementById(konum).innerHTML.includes("Rook")) {
        renkBelirle(konum);
        tasTuru = "rook"
        console.log("rook " + konum)
    }
    else if (document.getElementById(konum).innerHTML.includes("Knight")) {
        renkBelirle(konum);
        tasTuru = "knight"
        console.log("knight " + konum)
    }
    else if (document.getElementById(konum).innerHTML.includes("Bishop")) {
        renkBelirle(konum);
        tasTuru = "bishop"
        console.log("bishop " + konum)
    }
    else if (document.getElementById(konum).innerHTML.includes("Queen")) {
        renkBelirle(konum);
        tasTuru = "queen"
        console.log("queen " + konum)
    }
    else if (document.getElementById(konum).innerHTML.includes("King")) {
        renkBelirle(konum);
        tasTuru = "king"
        console.log("king " + konum)
    }
    else {
        console.log("Boş " + konum);
    }
}
var tasharektihtimal;
function tasHareket(tasTuru) {
    switch (tasTuru) {

        case 'pawn':
            if (renk == "white") {
                if (oynanacakTasKonum[1] == 2) {
                    if (((hedefKonum[1] - oynanacakTasKonum[1] == 2) || (hedefKonum[1] - oynanacakTasKonum[1] == 1)) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                    }
                }
                else {
                    if ((hedefKonum[1] - oynanacakTasKonum[1] == 1) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                    }
                }
            }
            else if (renk == "black") {
                if (oynanacakTasKonum[1] == 7) {
                    if (((hedefKonum[1] - oynanacakTasKonum[1] == -2) || (hedefKonum[1] - oynanacakTasKonum[1] == -1)) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                    }
                }
                else {
                    if ((hedefKonum[1] - oynanacakTasKonum[1] == -1) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                    }
                }
            }

            break;
        case 'rook':
            if (renk == "white") {
                if (hedefKonum[0] == oynanacakTasKonum[0]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                //console.log(Number(oynanacakTasKonum[0].charCodeAt(0)) - 64)
            }
            else if (renk == "black") {
                if (hedefKonum[0] == oynanacakTasKonum[0]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }
            break;
        case 'knight':

            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            console.log(oynanacakTasKonumToChar)
            console.log(hedefKonumToChar);
            console.log(oynanacakTasKonumToChar - hedefKonumToChar)
            console.log(oynanacakTas)
            if (renk == "white") {
                if ((oynanacakTasKonumToChar - hedefKonumToChar == 2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == 1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }

            }
            else if (renk == "black") {
                if ((oynanacakTasKonumToChar - hedefKonumToChar == 2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == 1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }
            break;
        case 'bishop':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            if (renk = "white") {
                if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";

                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }
            else if (renk = "black") {
                if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";

                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }
            break;
        case 'queen':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            if (renk = "white") {
                if (hedefKonum[0] == oynanacakTasKonum[0]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";

                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }
            else if (renk = "black") {
                if (hedefKonum[0] == oynanacakTasKonum[0]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";

                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }

            break;
        case 'king':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            console.log(1)
            if (renk = "white") {
                if ((hedefKonumToChar - oynanacakTasKonumToChar == -1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((hedefKonumToChar == oynanacakTasKonumToChar) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
                else if ((hedefKonumToChar - oynanacakTasKonumToChar == 1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                }
            }
            else if (renk = "black") {

            }
            break;
        default:
            console.log("mal");

    }
}

var oynanacakTas;
var oynanacakTasKonum;
var hedefKonum;

function box(konum) {


    //------Beyaz------
    if (hamleSayisi % 2 == 0) {
        if (document.getElementById(konum).innerHTML !== "") { //Taş seçildi mi?
            hedefKonum = "";
            oynanacakTas = document.getElementById(konum).innerHTML;
            tasTurBelirle(konum);
            console.log(oynanacakTas);
            oynanacakTasKonum = konum;
        }
        else {
            hedefKonum = konum;
            console.log("Hedef: " + hedefKonum);
        }

        tasHareket(tasTuru);
    }
    //------Siyah------
    else {

    }


}

