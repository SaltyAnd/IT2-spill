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

	if(flyposX + 80 >= epleposX && flyposX <= (epleposX+100) && 
	flyposY + 40 >= epleposY && flyposY <= (epleposY+100)) {
		poengsum++;
		document.getElementById("poengvisning").innerHTML = poengsum;
		console.log("treff registrert");
		console.log(flyposX, flyposY, epleposX, epleposY);
	
		AI_difficulty(poengsum, max_time_delay);
		
		//Death animation. Yes i do know this is overcomplicated and broken, but whatever
		death();
		setTimeout(function(){
			reincarnation();			
		},death_animation_time);

		
	}
	
}

function death(){
	//Death animation play
	const apple_style = document.getElementById('eple');
	apple_style.style.cssText += 'animation-name: hpdown; animation-duration:'+ death_animation_time/1000 +'s; animation-iteration-count: 1; transition: 0s';
	eple.style.left = Math.floor(Math.random()*(innerWidth - 200)) + 50 +"px";
	eple.style.top = Math.floor(Math.random()*(innerHeight - 200)) + 50 +"px";	
	
}
function reincarnation(){
	const apple_style = document.getElementById('eple');
	apple_style.style.cssText += 'animation-name: null; transition: 0.5s';
	
	//Death stop, run ai again
}