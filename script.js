//BALL
var datumpje = new Date();
var uurtje = datumpje.getHours();
var zon = document.getElementById("zon");
var maan = document.getElementById("maan");

if(uurtje >= 6 && uurtje < 18){
	maan.classList.remove("block");
	zon.classList.remove("none");

	zon.classList.add("block");
	maan.classList.add("none");
}else{
	maan.classList.remove("none");
	zon.classList.remove("block");

	maan.classList.add("block");
	zon.classList.add("none");
	
}


//KLOK
function initClock() {

	renderClock();

	//per seconden
	setInterval(renderClock, 1000);
}

function renderClock() {
    var clock = document.getElementById('klok');
    var time  = getCurrentTime(new Date());

    clock.innerHTML = time['hours'] + ':' +  time['minutes'] + ':' + time['seconds'];
}

function getCurrentTime(date) {
	var time = [];

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();

	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	if (time['seconds'] < 10) {
		time['seconds'] = '0' + time['seconds'];
	}

	return time;
}

initClock();


//VANDAAG
var today = new Date();
var dag = ['Maandag', 'Dinsdag', 'Woensdag', 'Dondergdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

document.getElementById('vandaag').innerHTML = dag[today.getDay()-1];


//SPENT DAYS
function showDaysSpend() {


var now = new Date(); //datum van vandaag
var vertrekDatum = new Date(2022,12,01); // de computer moet wel de huidige tijd veranderen naar het jaar 2023
var day = 24 * 60 * 60 * 1000; // uren * minuten * seconden * miliseconden

var days = Math.abs((now.getTime() - vertrekDatum.getTime()) / day);
document.getElementById('dagen').innerHTML = Math.round(days);
}

showDaysSpend();


//DATUM
var vandaag = new Date();
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
var jaar = vandaag.getFullYear();

document.getElementById('datum').innerHTML = vandaag.getDate() + ' ' + maanden[vandaag.getMonth()] + ' ' + jaar;



//Verschil tussen Aarde en Mars
var aardeTijd = new Date(2023, 06, 01); //reizen duurt 7 maanden, aarde tijd
var marsTijd = new Date(); 

var difference = aardeTijd.getTime() - marsTijd.getTime();
var diffDays = difference / 1000 / 60 / 60 / 24 ;

document.getElementById('dagenVerschil').innerHTML = diffDays;

//Temperatuur
var temp = new Date();
var uur = temp.getHours();
var temperatuur = document.getElementById('temperatuur');
if(uur >= 0 && uur < 6){  
	temperatuur.innerHTML='-60 &#8451'; //temperatuur voor 6u in de ochtend
} else if (uur >= 6 && uur < 12){
	temperatuur.innerHTML='-52 &#8451'; // temperatuur voor 12u in de middag
} else if (uur >= 12 && uur < 18){
	temperatuur.innerHTML='-53 &#8451'; // temperatuur voor 6u in de middag
} else if (uur >= 18){
	temperatuur.innerHTML='-51 &#8451'; // tempertuur na 6u in de middag
}


//Animatie Elon Musk

var mainHeading = document.getElementById('elon');

document.getElementById('playButton').onclick = function(){
	mainHeading.classList.add('changesSize');
};

/*
Manier 1
document.getElementById('backButton').onclick = function(){
	mainHeading.classList.add('changesSizeReverse');
};*/

/*Manier2*/
document.getElementById('backButton').onclick = function(){
	mainHeading.classList.remove('changesSize');
};

//var elon = document.getElementById('elon');

//document.getElementById('playButton').onclick = function(){
//	elon.style.animationPlayState = 'running';
//};




