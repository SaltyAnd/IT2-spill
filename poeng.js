var flyposX;
var flyposY;
var epleposX;
var epleposY;
var poengsum = 0;
var death_animation_time = 1000; //1 second


function treff(){
	flyposX = parseInt(element.style.left);
	flyposY = parseInt(element.style.top);

	epleposX = parseInt(eple.style.left);
	epleposY = parseInt(eple.style.top);

	/*
	flyposX = flyposX.slice(0,2);
	flyposX = Number(flyposX);
	flyposY = flyposY.slice(0,2);
	flyposY = Number(flyposY);

	epleposX = epleposX.slice(0,2);
	epleposX = Number(epleposX);
	epleposY = epleposY.slice(0,2);
	epleposY = Number(epleposY);
	*/

	if(flyposX + 40 >= epleposX && flyposX <= (epleposX+100) && 
	flyposY + 40 >= epleposY && flyposY <= (epleposY+100)) {
		poengsum++;
		document.getElementById("poengvisning").innerHTML = poengsum;
		console.log("treff registrert");
		console.log(flyposX, flyposY, epleposX, epleposY);
		epleflytt();
		
		//Death animation. Yes i do know this is overcomplicated and broken, but whatever
		death();
		setTimeout(function(){
			reincarnation();
		},death_animation_time);

		
	}
	
	//salert ("test");
	//finn pos. til fly.
	//finn pos til eple.
	//sammenlikne pos.
}

function death(){
	deathstyle = "animation-name: hpdown; animation-duration: 1s; animation-iteration-count: 1;";
	document.getElementById("eple").style =deathstyle;
	
}
function reincarnation(){
	deathstyle = "animation-name:NULL; animation-duration: 1s; animation-iteration-count: 0;";
	document.getElementById("eple").style =deathstyle;
}