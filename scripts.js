// CİHAZIN WİDTH DEĞERİNİ ALDIK
function ekranBoyutu() {
    var screenWidth = document.getElementById("body").clientWidth;
    screenWidth -= 10;

    blockWidth = screenWidth / 8;
    var style = document.createElement('style');
    style.type = 'text/css';
    document.head.appendChild(style);
    style.innerHTML = '@media screen and (max-width: 640px) {.table{ width: ' + screenWidth + 'px; height: ' + screenWidth + 'px;}.yesil{width: ' + blockWidth + 'px;height: ' + blockWidth + 'px;font-size: ' + (blockWidth * 0.7) + 'px;}.beyaz{width: ' + blockWidth + 'px;height: ' + blockWidth + 'px;font-size: ' + (blockWidth * 0.7) + 'px;}}'

}

ekranBoyutu();
setInterval(ekranBoyutu, 1000); //sayfa boyutunu sürekli güncellemek için


var hamleSesi = new Audio("hamle.mp3");

//----------SAYAC----------

var timeResult;
var minute;
var second;
var minuteText = "";
var secondText = "";
var eksik = -1;
var i = 0;

function sayac() {
    if (second == 0) {
        minute -= 1;
        second = 59;
    }

    if (minute < 10) {
        minuteText = "0"
    } else {
        minuteText = "";
    }

    if (second < 10 && second > -1) {
        secondText = "0";
    } else {
        secondText = "";
    }

    if (second == 1 && minute == 0) {
        timeResult = "00:00";
        eksik = 0
    }
    else {
        timeResult = minuteText + minute + ":" + secondText + second;
    }
    second += eksik;

    document.getElementById("player-" + ((i % 2) + 1) + "-time").textContent = timeResult;
}

sayac();
setInterval(sayac, 1000);

function hamleOynandi() {
    i += 1;
    console.log(i);
    result = document.getElementById("player-" + ((i % 2) + 1) + "-time").textContent;
    minute = parseInt(result[0] + result[1]);
    second = parseInt(result[3] + result[4]);
}




//-----------START--------------
function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("gameProperties").style.display = "flex";
}


var gameTime = "05:00";
//------------time--------------------
function setGameTime(thisTime) {
    switch (thisTime) {
        case 1:
            gameTime = "01:00";
            break;
        case 2:
            gameTime = "03:00";
            break;
        case 3:
            gameTime = "05:00";
            break;
        case 4:
            gameTime = "10:00";
            break;
        case 5:
            gameTime = "15:00";
            break;
        case 6:
            gameTime = "30:00";
            break;
    }
    for(let k = 1; k<=6 ;k++ ){
        document.getElementById("time-"+k).style.backgroundColor = "#5f2f17";
        document.getElementById("time-"+k).style.color = "white";
    }
    document.getElementById("time-" + thisTime).style.backgroundColor = "white";
    document.getElementById("time-" + thisTime).style.color = "black";

}

//-----------GAME PROPERTİES--------
function gameProperties() {
    var user1 = document.getElementById("player1Text").value.toUpperCase();
    var user2 = document.getElementById("player2Text").value.toUpperCase();
    console.log(user1)
    console.log(user2)
    if(user1 == "" && user2 == ""){
        document.getElementById("username-1-required").style.display = "block";
        document.getElementById("username-2-required").style.display = "block";
        return;
    }
    else if(user1 == ""){
        document.getElementById("username-1-required").style.display = "block";
        document.getElementById("username-2-required").style.display = "none";
        return;
    }
    else if(user2 == ""){
        document.getElementById("username-2-required").style.display = "block";
        document.getElementById("username-1-required").style.display = "none";
        return;
    }
    else{
        document.getElementById("username-1-required").style.display = "none";
        document.getElementById("username-2-required").style.display = "none";
    }


    document.getElementById("player-1-ID").textContent = user1
    document.getElementById("player-2-ID").textContent = user2
    document.getElementById("player-1-time").textContent = gameTime;
    document.getElementById("player-2-time").textContent = gameTime;
    timeResult = gameTime;
    minute = parseInt(timeResult[0] + timeResult[1]);
    second = parseInt(timeResult[3] + timeResult[4]);

    document.getElementById("gameProperties").style.display = "none";
    document.getElementById("table").style.display = "block";
    document.getElementById("player-1").style.display = "flex";
    document.getElementById("player-2").style.display = "flex";
}


var hamleSayisi = 0;
var tasTuru;
var renk;
var oynanacakTasKonumToChar;
var hedefKonumToChar;
var beyazSagKaleHareketSayisi = 0;
var beyazSolKaleHareketSayisi = 0;
var beyazSahHareketSayisi = 0;
var siyahSagKaleHareketSayisi = 0;
var siyahSolKaleHareketSayisi = 0;
var siyahSahHareketSayisi = 0;

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
                            hamleOynandi();
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
                        hamleOynandi();

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
                            hamleOynandi();
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
                        hamleOynandi();
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
                            hamleOynandi();
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
                        hamleOynandi();
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
                            hamleOynandi();
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
                        hamleOynandi();
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
                        if (oynanacakTas.includes("left")) {
                            beyazSolKaleHareketSayisi++;
                        }
                        else if (oynanacakTas.includes("right")) {
                            beyazSagKaleHareketSayisi++;
                        }
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        hamleSesi.play();
                        hamleOynandi();
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
                        if (oynanacakTas.includes("left")) {
                            beyazSolKaleHareketSayisi++;
                        }
                        else if (oynanacakTas.includes("right")) {
                            beyazSagKaleHareketSayisi++;
                        }
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                        hamleOynandi();
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
                        if (oynanacakTas.includes("left")) {
                            siyahSolKaleHareketSayisi++;
                        }
                        else if (oynanacakTas.includes("right")) {
                            siyahSagKaleHareketSayisi++;
                        }
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                        hamleOynandi();
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
                        if (oynanacakTas.includes("left")) {
                            siyahSolKaleHareketSayisi++;
                        }
                        else if (oynanacakTas.includes("right")) {
                            siyahSagKaleHareketSayisi++;
                        }
                        document.getElementById(oynanacakTasKonum).innerHTML = "";
                        hamleSayisi++;
                        console.log(hamleSayisi);
                        hamleSesi.play();
                        hamleOynandi();
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
                    hamleOynandi();

                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == 1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if ((oynanacakTasKonumToChar - hedefKonumToChar == 2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == 1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();

                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -1) && ((oynanacakTasKonum[1] - hedefKonum[1] == -2) || (oynanacakTasKonum[1] - hedefKonum[1] == +2))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((oynanacakTasKonumToChar - hedefKonumToChar == -2) && ((oynanacakTasKonum[1] - hedefKonum[1] == -1) || (oynanacakTasKonum[1] - hedefKonum[1] == +1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
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
                        hamleOynandi();
                    }
                }
            }
            break;
        case 'king':
            oynanacakTasKonumToChar = parseInt(oynanacakTasKonum[0].charCodeAt(0)) - 64;
            if (hedefKonum !== "") {
                hedefKonumToChar = parseInt(hedefKonum[0].charCodeAt(0)) - 64;
            }
            if ((renk == "white") && (hamleSayisi % 2 == 0)) { // ŞAHIN BİR ALT SATIRI
                if ((hedefKonumToChar - oynanacakTasKonumToChar == -1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    beyazSahHareketSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                } // ŞAHIN OLDUĞU SATIR
                else if ((hedefKonumToChar == oynanacakTasKonumToChar) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    beyazSahHareketSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                } // ŞAHIN BİR ÜST SATIRI
                else if ((hedefKonumToChar - oynanacakTasKonumToChar == 1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    beyazSahHareketSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((hedefKonum == "C1") && (document.getElementById("A1").innerHTML.includes("left")) && (beyazSolKaleHareketSayisi == 0) && (beyazSahHareketSayisi == 0) && (document.getElementById("B1", "C1", "D1").innerHTML == "")) {
                    document.getElementById("D1").innerHTML = document.getElementById("A1").innerHTML;
                    document.getElementById("A1").innerHTML = "";
                    document.getElementById("C1").innerHTML = document.getElementById("E1").innerHTML;
                    document.getElementById("E1").innerHTML = "";
                    beyazSahHareketSayisi++;
                    hamleSayisi++;
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((hedefKonum == "G1") && (document.getElementById("H1").innerHTML.includes("right")) && (beyazSagKaleHareketSayisi == 0) && (beyazSahHareketSayisi == 0) && (document.getElementById("F1", "G1").innerHTML == "")) {
                    document.getElementById("F1").innerHTML = document.getElementById("H1").innerHTML;
                    document.getElementById("H1").innerHTML = "";
                    document.getElementById("G1").innerHTML = document.getElementById("E1").innerHTML;
                    document.getElementById("E1").innerHTML = "";
                    beyazSahHareketSayisi++;
                    hamleSayisi++;
                    hamleSesi.play();
                    hamleOynandi();
                }
            }
            else if ((renk == "black") && (hamleSayisi % 2 == 1)) {
                if ((hedefKonumToChar - oynanacakTasKonumToChar == -1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    siyahSahHareketSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((hedefKonumToChar == oynanacakTasKonumToChar) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    siyahSahHareketSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((hedefKonumToChar - oynanacakTasKonumToChar == 1) && (((hedefKonum[1] - oynanacakTasKonum[1]) >= -1) && ((hedefKonum[1] - oynanacakTasKonum[1]) <= 1))) {
                    document.getElementById(hedefKonum).innerHTML = oynanacakTas;
                    document.getElementById(oynanacakTasKonum).innerHTML = "";
                    hamleSayisi++;
                    siyahSahHareketSayisi++;
                    console.log(hamleSayisi);
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((hedefKonum == "C8") && (document.getElementById("A8").innerHTML.includes("left")) && (siyahSolKaleHareketSayisi == 0) && (siyahSahHareketSayisi == 0) && (document.getElementById("B8", "C8", "D8").innerHTML == "")) {
                    document.getElementById("D8").innerHTML = document.getElementById("A8").innerHTML;
                    document.getElementById("A8").innerHTML = "";
                    document.getElementById("C8").innerHTML = document.getElementById("E8").innerHTML;
                    document.getElementById("E8").innerHTML = "";
                    siyahSahHareketSayisi++;
                    hamleSayisi++;
                    hamleSesi.play();
                    hamleOynandi();
                }
                else if ((hedefKonum == "G8") && (document.getElementById("H8").innerHTML.includes("right")) && (siyahSagKaleHareketSayisi == 0) && (siyahSahHareketSayisi == 0) && (document.getElementById("F8", "G8").innerHTML == "")) {
                    document.getElementById("F8").innerHTML = document.getElementById("H8").innerHTML;
                    document.getElementById("H8").innerHTML = "";
                    document.getElementById("G8").innerHTML = document.getElementById("E8").innerHTML;
                    document.getElementById("E8").innerHTML = "";
                    siyahSahHareketSayisi++;
                    hamleSayisi++;
                    hamleSesi.play();
                    hamleOynandi();
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
