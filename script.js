//BALL
var mainHeading = document.getElementById('bal');

mainHeading.classList.add('changesSize');



//KLOK
function initClock() {

	renderClock();

	//per seconden
	setInterval(renderClock, 1000);
}

function renderClock() {
    var clock = document.getElementById('klok');
    var time  = getCurrentTime(new Date());
    var sep   = flashSeperator(time['seconds']);

    clock.innerHTML = time['hours'] + sep +  time['minutes'] + sep + time['seconds'];
}

function flashSeperator(seconds) {
	var sepClass = '';

	//toggle
	if (seconds % 3 === 1) {
		sepClass = ' class="puntjes"';
	}

	return '<span' + sepClass + '">:</span>';
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




//SPENT DAYS
function showDaysSpend() {


var now = new Date(); //datum van vandaag
var vertrekDatum = new Date(2022,12,01); // de computer moet wel de huidige tijd veranderen naar het jaar 2023
var day = 24 * 60 * 60 * 1000; // uren * minuten * seconden * miliseconden

var days = Math.abs((now.getTime() - vertrekDatum.getTime()) / day);
document.getElementById('dagen').innerHTML = Math.round(days);
}

// start
showDaysSpend();




//DATUM
var today = new Date();
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
var jaar = today.getFullYear();

document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + jaar;



//Verschil tussen Aarde en Mars
var aardeTijd = new Date(2023, 06, 01); //reizen duurt 7 maanden, aarde tijd
var marsTijd = new Date(); 

var difference = aardeTijd.getTime() - marsTijd.getTime();
var diffDays = difference / 1000 / 60 / 60 / 24 ;

document.getElementById('dagenVerschil').innerHTML = diffDays;