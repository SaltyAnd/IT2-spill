const eple = document.getElementById("eple");

var current_points = poengsum;
var difficulty_level = 0;
var max_time_delay = 5000;

function start() {
	eple.style.left = (innerWidth/2) + "px";
	eple.style.top = (innerHeight/2) + "px";
}

function epleflytt() {
	eple.style.left = Math.floor(Math.random()*(innerWidth - 200)) + 50 +"px";
	eple.style.top = Math.floor(Math.random()*(innerHeight - 200)) + 50 +"px";
}


function AI_difficulty(current_points, difficulty_level, max_time_delay){
	//Difficulty level: 0 = Easy |  1 = Normal | 2 = Hard | 3 = Unplayeable
	//Difficulty level 0 does not change speed of apple

	//Easy
	if(difficulty_level == 0 ){
		return max_time_delay; 
	}

	//Normal 
	else if (difficulty_level == 1 ){
		if(current_points > 5){
			return max_time_delay - 50;
		}
		else if(current_points >= 10){
			return max_time_delay - 200;
		}
		else if(current_points >= 15){
			return max_time_delay - 500; 
		}
		else if(current_points >= 25){
			return max_time_delay - 800;
		}
	}
	
	//Hard
	else if (difficulty_level == 2){
		if(current_points > 5){
			return max_time_delay - 100;
		}
		else if(current_points >= 10){
			return max_time_delay - 400;
		}
		else if(current_points >= 15){
			return max_time_delay - 800; 
		}
		else if(current_points >= 25){
			return max_time_delay - 1200;
		}
	}

	//Unplayeable
	else if (difficulty_level == 3){
		if(current_points > 5){
			return max_time_delay - 400;
		}
		else if(current_points >= 10){
			return max_time_delay - 800;
		}
		else if(current_points >= 15){
			return max_time_delay - 1600; 
		}
		else if(current_points >= 25){
			return max_time_delay - 3200;
		}
	}
	
	setInterval(epleflytt,max_time_delay);
}

