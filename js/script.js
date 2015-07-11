//Javascript Page. July 2015


//Collection of quotes
var sadQuotes = ["a", "b", "c", "d", "e"]; 
var boredQuotes = ["a", "b", "c", "d", "e"];

var usedSad = [];
var usedBored = [];
//Generates sad Quotes
function sad(){
	var index = random(0, sadQuotes.length - 1);
	usedSad.push(index);

	if(usedSad.length == sadQuotes.length){
		usedSad = [];
	}
	return sadQuotes[index];
}


//Generates bored Quotes
function bored(){
	var index = random(0, boredQuotes.length - 1);
	usedBored.push(index);

	if(usedBored.length == boredQuotes.length){
		usedBored = [];
	}
	return boredQuotes[index];
}


//Generates a random int between min and max inclusive
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
