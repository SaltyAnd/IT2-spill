var element = document.getElementById("fly");
function start(){
	element.style.position ="relative";
	element.style.left= (innerWidth/2)+"px";
	element.style.top = (innerHeight/2)+"px";
}
function testmove(hendelse){
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
	element.style.transform = "rotate(180deg)";
	element.style.left = parseInt(element.style.left)-10+"px";
}

function moveup() {
	element.style.transform = "rotate(270deg)";
	element.style.top = parseInt(element.style.top)-10+"px";
}

function moveright() {
	element.style.transform = "rotate(0deg)";
	element.style.left = parseInt(element.style.left)+10+"px";
}

function movedown() {
	element.style.transform = "rotate(90deg)";
	element.style.top = parseInt(element.style.top)+10+"px";
}

function testtreff() {
	treff();
}

window.onload = start;
	
	
	





	
		
		
		
		
		
		
		
	