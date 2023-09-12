var element = document.getElementById("fly");
function start(){
	element.style.position ="relative";
	element.style.left= (innerWidth/2)+"px";
	element.style.top = (innerHeight/2)+"px";
}
function testmove(hendelse){
	var bilde = document.getElementById("fly");
	var tastetrykk = hendelse.which || hendelse.keyCode;
	switch (tastetrykk) {
		case 37:
			moveleft();
			break;
		case 38:
			moveup();
			break;
		case 39:
			moveright();
			break;
		case 40:
			movedown();
			break;
		case 32:
			treff();
			break;
		case 9:
			nullstill();
			break;
		}
	}
function moveleft() {
	bilde.style.transform = "rotate(180deg)";
	element.style.left = parseInt(element.style.left)-5+"px";
}

function moveup() {
	bilde.style.transform = "rotate(270deg)";
	element.style.top = parseInt(element.style.top)-5+"px";
}

function moveright() {
	bilde.style.transform = "rotate(0deg)";
	element.style.left = parseInt(element.style.left)+5+"px";
}

function movedown() {
	bilde.style.transform = "rotate(90deg)";
	element.style.top = parseInt(element.style.top)+5+"px";
}

function testtreff() {
	treff();
}

window.onload = start;
	
	
	





	
		
		
		
		
		
		
		
	