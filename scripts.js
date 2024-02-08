// CİHAZIN WİDTH DEĞERİNİ ALDIK
var screenWidth = document.getElementById("body").clientWidth;
screenWidth -= 10;

blockWidth = screenWidth / 8;
console.log("screenWidth:", screenWidth);
console.log("blockWidth:", blockWidth);
var style = document.createElement('style');
style.type = 'text/css';
document.head.appendChild(style);
style.innerHTML = '@media screen and (max-width: 640px) {.table{ width: ' + screenWidth + 'px; height: ' + screenWidth + 'px;}.yesil{width: ' + blockWidth + 'px;height: ' + blockWidth + 'px;font-size: ' + (blockWidth * 0.7) + 'px;}.beyaz{width: ' + blockWidth + 'px;height: ' + blockWidth + 'px;font-size: ' + (blockWidth * 0.7) + 'px;}}'


var hamleSesi = new Audio("hamle.mp3");

//----------SAYAC----------


let sayac = new Date(0, 0, 0);
sayac.setFullYear(0);

sayac.setMinutes(45);
console.log(sayac);


function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("table").style.display = "block";
}

var hamleSayisi = 0;
var tasTuru;
var renk;
var oynanacakTasKonumToChar;
var hedefKonumToChar;

function whiteUpdatePawn(toPawn) {
    switch (toPawn) {
        case 'rook':
            document.getElementById(hedefKonum).innerHTML = '<i class="whiteRook fa-solid fa-chess-rook"></i>';
            document.getElementById("whiteUpdatePawn").style.display = "none";
            break;
        case 'knight':
            document.getElementById(hedefKonum).innerHTML = '<i class="whiteKnight fa-solid fa-chess-knight"></i>';
            document.getElementById("whiteUpdatePawn").style.display = "none";
            break;
        case 'bishop':
            document.getElementById(hedefKonum).innerHTML = '<i class="whiteBishop fa-solid fa-chess-bishop"></i>';
            document.getElementById("whiteUpdatePawn").style.display = "none";
            break;
        case 'queen':
            document.getElementById(hedefKonum).innerHTML = '<i class="whiteQueen fa-solid fa-chess-queen"></i>';
            document.getElementById("whiteUpdatePawn").style.display = "none";
            break;
    }
}
function blackUpdatePawn(toPawn) {
    switch (toPawn) {
        case 'rook':
            document.getElementById(hedefKonum).innerHTML = '<i class="blackRook fa-solid fa-chess-rook"></i>';
            document.getElementById("blackUpdatePawn").style.display = "none";
            break;
        case 'knight':
            document.getElementById(hedefKonum).innerHTML = '<i class="blackKnight fa-solid fa-chess-knight"></i>';
            document.getElementById("blackUpdatePawn").style.display = "none";
            break;
        case 'bishop':
            document.getElementById(hedefKonum).innerHTML = '<i class="blackBishop fa-solid fa-chess-bishop"></i>';
            document.getElementById("blackUpdatePawn").style.display = "none";
            break;
        case 'queen':
            document.getElementById(hedefKonum).innerHTML = '<i class="blackQueen fa-solid fa-chess-queen"></i>';
            document.getElementById("blackUpdatePawn").style.display = "none";
            break;
    }
}

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
            console.log("kod içine girdik-1-2")
            if ((renk == "white") && (hamleSayisi % 2 == 0)) {
                console.log("kod içine girdik-1-3")
                if (oynanacakTasKonum[1] == 2) {
                    console.log("kod içine girdik-1-4")
                    console.log(oynanacakTas);
                    console.log(hedefKonum)
                    console.log(oynanacakTasKonum)
                    console.log(hedefKonum.innerHTML !== "")


                    if ((((hedefKonum[1] - oynanacakTasKonum[1]) == 2) || (hedefKonum[1] - oynanacakTasKonum[1] == 1)) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        console.log("kod içine girdik-1-5")
                        for (var i = ++oynanacakTasKonum[1]; i <= hedefKonum[1]; i++) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if (musaitlik !== "bosDegil") {
                            document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                            document.getElementById(oynanacakTasKonum).innerHTML = "";
                            hamleSayisi++;
                            console.log(hamleSayisi);
                            oynanacakTas = "";
                            hamleSesi.play();
                        }
                    }
                    //TAŞ YEME DURUMU İÇİN
                    else if ((hedefKonum[1] - oynanacakTasKonum[1] == 1) && (((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == 1) || ((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == -1)) && (hedefKonum.innerHTML !== "") && (document.getElementById(hedefKonum).innerHTML.includes("black"))) {
                        console.log("buraya geliiii")
                        document.getElementById(hedefKonum).innerHTML = "";
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        oynanacakTas = "";
                        hamleSesi.play();
                    }
                    console.log("kod içine girdik-1-5345")
                }
                else {
                    console.log("kod içine girdik-1-6")
                    if (((hedefKonum[1] - oynanacakTasKonum[1]) == 1) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        for (var i = ++oynanacakTasKonum[1]; i <= hedefKonum[1]; i++) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if (musaitlik !== "bosDegil") {
                            document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                            document.getElementById(oynanacakTasKonum).innerHTML = "";
                            hamleSayisi++;
                            console.log(hamleSayisi);
                            hamleSesi.play();
                        }
                    }

                    //TAŞ YEME DURUMU İÇİN
                    else if ((hedefKonum[1] - oynanacakTasKonum[1] == 1) && (((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == 1) || ((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == -1)) && (hedefKonum.innerHTML !== "") && (document.getElementById(hedefKonum).innerHTML.includes("black"))) {
                        console.log("buraya geliiii")
                        document.getElementById(hedefKonum).innerHTML = "";
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        oynanacakTas = "";
                        hamleSesi.play();
                    }
                }

                if (hedefKonum[1] == 8) {
                    document.getElementById("whiteUpdatePawn").style.display = "flex";
                    whiteUpdatePawn(toPawn);
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if (oynanacakTasKonum[1] == 7) {
                    if (((hedefKonum[1] - oynanacakTasKonum[1] == -2) || (hedefKonum[1] - oynanacakTasKonum[1] == -1)) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        for (var i = (oynanacakTasKonum[1] - 1); i >= hedefKonum[1]; i--) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if (musaitlik !== "bosDegil") {
                            document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                            document.getElementById(oynanacakTasKonum).innerHTML = "";
                            hamleSayisi++;
                            console.log(hamleSayisi);
                            hamleSesi.play();
                        }
                    }
                    //TAŞ YEME DURUMU İÇİN
                    else if ((hedefKonum[1] - oynanacakTasKonum[1] == -1) && (((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == 1) || ((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == -1)) && (hedefKonum.innerHTML !== "") && (document.getElementById(hedefKonum).innerHTML.includes("white"))) {
                        console.log("buraya geliiii")
                        document.getElementById(hedefKonum).innerHTML = "";
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        oynanacakTas = "";
                        hamleSesi.play();
                    }
                }
                else {
                    if ((hedefKonum[1] - oynanacakTasKonum[1] == -1) && (hedefKonum[0] == oynanacakTasKonum[0])) {
                        for (var i = (oynanacakTasKonum[1] - 1); i >= hedefKonum[1]; i--) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if (musaitlik !== "bosDegil") {
                            document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                            document.getElementById(oynanacakTasKonum).innerHTML = "";
                            hamleSayisi++;
                            console.log(hamleSayisi);
                            hamleSesi.play();
                        }
                    }
                    //TAŞ YEME DURUMU İÇİN
                    else if (((hedefKonum[1] - oynanacakTasKonum[1]) == -1) && (((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == 1) || ((hedefKonum[0].charCodeAt(0) - oynanacakTasKonum[0].charCodeAt(0)) == -1)) && (hedefKonum.innerHTML !== "") && (document.getElementById(hedefKonum).innerHTML.includes("white"))) {
                        console.log("buraya geliiii")
                        document.getElementById(hedefKonum).innerHTML = "";
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        oynanacakTas = "";
                        hamleSesi.play();
                    }
                }
            }

            break;
        case 'rook':
            if ((renk == "white") && (hamleSayisi % 2 == 0)) {
                if (hedefKonum[0] == oynanacakTasKonum[0]) { //AYNI SÜTÜNDA HAREKET
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {//YUKARI YÖNDE HAREKETİ KONTROL ET
                        for (var i = ++oynanacakTasKonum[1]; i <= (--hedefKonum[1]); i++) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//AŞAĞI YÖNDE HAREKETİ KONTROL ET
                        for (var i = (oynanacakTasKonum[1] - 1); i >= (++hedefKonum[1]); i--) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    if (musaitlik !== "bosDegil") { //------------------TAS YEME DAHİL------------------
                        /* if(hedefKonum.innerHTML == !""){
                            yenilenTas.add = hedefKonum.innerHTML;
                        }*/
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        hamleSesi.play();
                    }
                }

                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) { //AYNI SATIRDA HAREKET
                    if (oynanacakTasKonum[0].charCodeAt(0) < hedefKonum[0].charCodeAt(0)) { // sağı kontol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (hedefKonum[0].charCodeAt(0) - 65); i++) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//solu kontrol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (hedefKonum[0].charCodeAt(0) - 63); i--) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") { //------------------TAS YEME DAHİL------------------
                        /* if(hedefKonum.innerHTML == !""){
                            yenilenTas.add = hedefKonum.innerHTML;
                        }*/
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }


                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if (hedefKonum[0] == oynanacakTasKonum[0]) { //AYNI SÜTUN
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {//YUKARI YÖNDE HAREKETİ KONTROL ET
                        for (var i = ++oynanacakTasKonum[1]; i <= (--hedefKonum[1]); i++) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//AŞAĞI YÖNDE HAREKETİ KONTROL ET
                        for (var i = (oynanacakTasKonum[1] - 1); i >= (++hedefKonum[1]); i--) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) { // AYNI SATIRDA HAREKET
                    if (oynanacakTasKonum[0].charCodeAt(0) < hedefKonum[0].charCodeAt(0)) { // sağı kontol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (hedefKonum[0].charCodeAt(0) - 65); i++) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//solu kontrol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (hedefKonum[0].charCodeAt(0) - 63); i--) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
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
            if ((renk == "white") && (hamleSayisi % 2 == 0)) {
                if ((oynanacakTasKonumToChar - hedefKonumToChar == 2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();

                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == 1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if ((oynanacakTasKonumToChar - hedefKonumToChar == 2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == 1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();

                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
            }
            break;
        case 'bishop':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            if ((renk == "white") && (hamleSayisi % 2 == 0)) {
                //SOL ALTTAN SAĞ ÜSTE ve tersi tarafa DOĞRU GİDEN
                if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    //SOL ALTTAN SAĞ ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SAĞ ÜSTTEN SOL ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (++hedefKonum[1]); i--, j--) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }


                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    //SAĞ ALLTAN SOL ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SOL ÜSTTEN SAĞ ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i >= (++hedefKonum[1]); i--, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    //SOL ALTTAN SAĞ ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SAĞ ÜSTTEN SOL ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (++hedefKonum[1]); i--, j--) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                    //Mesajımı almıştır o...
                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    //SAĞ ALLTAN SOL ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SOL ÜSTTEN SAĞ ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i >= (++hedefKonum[1]); i--, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
            }
            break;
        case 'queen':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            if ((renk == "white") && (hamleSayisi % 2 == 0)) {
                //KALE BENZERİ HAREKET
                if (hedefKonum[0] == oynanacakTasKonum[0]) {
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {//YUKARI YÖNDE HAREKETİ KONTROL ET
                        for (var i = ++oynanacakTasKonum[1]; i <= (--hedefKonum[1]); i++) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//AŞAĞI YÖNDE HAREKETİ KONTROL ET
                        for (var i = (oynanacakTasKonum[1] - 1); i >= (++hedefKonum[1]); i--) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }

                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) {
                    if (oynanacakTasKonum[0].charCodeAt(0) < hedefKonum[0].charCodeAt(0)) { // sağı kontol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (hedefKonum[0].charCodeAt(0) - 65); i++) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//solu kontrol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (hedefKonum[0].charCodeAt(0) - 63); i--) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }

                // FİL BENZERİ HAREKET
                else if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    //SOL ALTTAN SAĞ ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SAĞ ÜSTTEN SOL ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (++hedefKonum[1]); i--, j--) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    //SAĞ ALLTAN SOL ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SOL ÜSTTEN SAĞ ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i >= (++hedefKonum[1]); i--, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                // KALE BENZERİ HAREKET
                if (hedefKonum[0] == oynanacakTasKonum[0]) { //AYNI SÜTUN
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {//YUKARI YÖNDE HAREKETİ KONTROL ET
                        for (var i = ++oynanacakTasKonum[1]; i <= (--hedefKonum[1]); i++) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//AŞAĞI YÖNDE HAREKETİ KONTROL ET
                        for (var i = (oynanacakTasKonum[1] - 1); i >= (++hedefKonum[1]); i--) {
                            if (document.getElementById(oynanacakTasKonum[0] + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
                else if ((hedefKonum[0] !== oynanacakTasKonum[0]) && hedefKonum[1] == oynanacakTasKonum[1]) {
                    if (oynanacakTasKonum[0].charCodeAt(0) < hedefKonum[0].charCodeAt(0)) { // sağı kontol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (hedefKonum[0].charCodeAt(0) - 65); i++) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }
                    else {//solu kontrol et
                        for (var i = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (hedefKonum[0].charCodeAt(0) - 63); i--) {
                            if (document.getElementById(String.fromCharCode(i + 64) + oynanacakTasKonum[1]).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
                // FİL BENZERİ HAREKET

                //SOL ALTTAN SAĞ ÜSTE ve tersi tarafa DOĞRU GİDEN
                if ((oynanacakTasKonumToChar - oynanacakTasKonum[1]) == (hedefKonumToChar - hedefKonum[1])) {
                    //SOL ALTTAN SAĞ ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SAĞ ÜSTTEN SOL ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i >= (++hedefKonum[1]); i--, j--) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        } if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
                else if (((hedefKonumToChar < oynanacakTasKonumToChar) || (hedefKonumToChar > oynanacakTasKonumToChar)) && (oynanacakTasKonumToChar - hedefKonumToChar) == (hedefKonum[1] - oynanacakTasKonum[1])) {
                    //SAĞ ALLTAN SOL ÜSTE
                    if (oynanacakTasKonum[1] < hedefKonum[1]) {
                        for (var i = ++oynanacakTasKonum[1], j = (oynanacakTasKonum[0].charCodeAt(0) - 65); i <= (--hedefKonum[1]); i++, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((++oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }
                    else { //SOL ÜSTTEN SAĞ ALTA
                        for (var i = (oynanacakTasKonum[1] - 1), j = (oynanacakTasKonum[0].charCodeAt(0) - 63); i >= (++hedefKonum[1]); i--, j++) {
                            if (document.getElementById(String.fromCharCode(j + 64) + i).innerHTML !== "") {
                                var musaitlik = "bosDegil";
                            }
                        }
                        if ((--oynanacakTasKonum[1]) == hedefKonum[1]) { //PEŞ PEŞE GELEN ÇAPRAZ İKİ TAS ARASINDA BİR TAŞ YOKSA  
                            musaitlik = "";
                        }
                    }

                    if (musaitlik !== "bosDegil") {
                        document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                    }
                }
            }
            break;
        case 'king':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            if ((renk == "white") && (hamleSayisi % 2 == 0)) {
                if ((hedefKonumToChar - oynanacakTasKonumToChar == -1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((hedefKonumToChar == oynanacakTasKonumToChar) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((hedefKonumToChar - oynanacakTasKonumToChar == 1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if ((hedefKonumToChar - oynanacakTasKonumToChar == -1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((hedefKonumToChar == oynanacakTasKonumToChar) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
                else if ((hedefKonumToChar - oynanacakTasKonumToChar == 1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                }
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
        if ((document.getElementById(konum).innerHTML !== "") && (document.getElementById(konum).innerHTML.includes("white"))) { //Taş seçildi mi?
            hedefKonum = "";
            oynanacakTas = document.getElementById(konum).innerHTML;
            tasTurBelirle(konum);
            if (oynanacakTas.includes("white")) {
                console.log(oynanacakTas);
                oynanacakTasKonum = konum;
            }
        }
        else {
            hedefKonum = konum;
            console.log("Hedef: " + hedefKonum);
        }
        console.log(hedefKonum);
        console.log("kod içine girdik-1-1")
        tasHareket(tasTuru);
    }
    //------Siyah------
    else {
        if ((document.getElementById(konum).innerHTML !== "") && (document.getElementById(konum).innerHTML.includes("black"))) { //Taş seçildi mi?
            hedefKonum = "";
            oynanacakTas = document.getElementById(konum).innerHTML;
            tasTurBelirle(konum);
            if (oynanacakTas.includes("black")) {
                console.log(oynanacakTas);
                oynanacakTasKonum = konum;
            }
        }
        else {
            hedefKonum = konum;
            console.log("Hedef: " + hedefKonum);
        }

        tasHareket(tasTuru);
    }

}
