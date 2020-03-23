


var numer = Math.floor(Math.random() * 5) + 1; //liczba pseudolosowa, floor zaokrągla w dół
//losowanie *5 - z 5 możliwych liczb i +1 zeby numerowanie od 1 o 5 a nie od 0 do 4
var timer1 = 0;
var timer2 = 0;


function schowaj()
{
    $("#slider").fadeOut(500);
}

function ustawslajd(nrslajdu)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj();
    setTimeout("zmienslajd()", 500);
}

function zmienslajd()
{
    numer++; if (numer > 5) numer = 1;

    var plik = "<img src = \"slajdy/slajd" + numer + ".jpg\" />";//lewy slash zeby dodac cudzyslow w srodku


    document.getElementById("slider").innerHTML = plik;

    $("#slider").fadeIn(500);


    timer1 = setTimeout("zmienslajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);
}

