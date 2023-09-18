const eple = document.getElementById("eple");

const max_time_delay = 5000;

function start() {
	eple.style.left = (innerWidth/2) + "px";
	eple.style.top = (innerHeight/2) + "px";
}

function epleflytt() {
	eple.style.left = Math.floor(Math.random()*(innerWidth - 200)) + 50 +"px";
	eple.style.top = Math.floor(Math.random()*(innerHeight - 200)) + 50 +"px";
}

function speed() {
	
}

function AI_difficulty(current_points, max_time_delay){
	//Difficulty level: 0 = Easy |  1 = Normal | 2 = Hard | 3 = Unplayeable
	//Difficulty level 0 does not change speed of apple

	//Easy
	if(current_points < 2){
		setInterval(epleflytt,max_time_delay);
	}

	//Normal
	if(current_points >= 2){
		setInterval(epleflytt,max_time_delay - 50);
	}
	else if(current_points >= 4){
		setInterval(epleflytt,max_time_delay - 100);
	}
	else if(current_points >= 6){
		setInterval(epleflytt,max_time_delay - 200);
	}
	else if(current_points >= 8){
		setInterval(epleflytt,max_time_delay - 400);
	}
	
	//Hard
	if(current_points >= 10){
		setInterval(epleflytt,max_time_delay - 600);
	}
	else if(current_points >= 12){
		setInterval(epleflytt,max_time_delay - 800);
	}
	else if(current_points >= 14){
		setInterval(epleflytt,max_time_delay - 1000);
	}
	else if(current_points >= 16){
		setInterval(epleflytt,max_time_delay - 1200);
	}
	else if(current_points >= 18){
		setInterval(epleflytt,max_time_delay - 1400);
	}

	//Unplayeable
	if(current_points >= 20){
		setInterval(epleflytt,max_time_delay - 1600);
	}
	else if(current_points >= 22){
		setInterval(epleflytt,max_time_delay - 1800);
	}
	else if(current_points >= 24){
		setInterval(epleflytt,max_time_delay - 2000);
	}
	else if(current_points >= 25){
		return max_time_delay - 2500;
	}
}

