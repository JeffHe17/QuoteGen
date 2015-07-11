//Javascript Page. July 2015


//Collection of quotes
var sadQuotes = ["a", "b", "c", "d", "e"]; 
var boredQuotes = ["a", "b", "c", "d", "e"];

//Prevents repeats
var usedSad = [];
var usedBored = [];

//Generates sad Quotes
function sad(){
	var index = random(0, sadQuotes.length - 1);

	if(usedSad.length == sadQuotes.length){
		usedSad = [];
	}

	if (usedSad.indexOf(index) == -1){
		usedSad.push(index);
		return sadQuotes[index];
	} else {
		sad();
	}

}


//Generates bored Quotes
function bored(){
	var index = random(0, boredQuotes.length - 1);
	
	if(usedBored.length == boredQuotes.length){
		usedBored = [];
	}

	if (usedBored.indexOf(index) == -1){
		usedBored.push(index);
		return boredQuotes[index];
	} else {
		bored();
	}
}


//Generates a random int between min and max inclusive
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
