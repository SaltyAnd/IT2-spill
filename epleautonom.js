const eple = document.getElementById("eple");

function start() {
	eple.style.left = (innerWidth/2) + "px";
	eple.style.top = (innerHeight/2) + "px";
}

function epleflytt() {
	eple.style.left = Math.floor(Math.random()*(innerWidth - 200)) + 50 +"px";
	eple.style.top = Math.floor(Math.random()*(innerHeight - 200)) + 50 +"px";
}

