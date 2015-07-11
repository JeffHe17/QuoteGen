//Javascript Page. July 2015


//Collection of quotes
var sadQuotes = ["a", "b", "c", "d", "e", "f"]; 
var boredQuotes = ["a", "b", "c", "d", "e", "f"];

//Prevents repeats
var usedSad = [];
var usedBored = [];


//Generates sad Quotes
function sad(){
	var result = document.getElementById("result");
	result.innerHTML = " ";
	var index = random(0, sadQuotes.length - 1);

	if(usedSad.length == sadQuotes.length){
		usedSad = [];
	}

	if (usedSad.indexOf(index) == -1){

		result.innerHTML = result.innerHTML + sadQuotes[index];

		usedSad.push(index);
		return sadQuotes[index];
	} else {
		sad();
	}

}


//Generates bored Quotes
function bored(){
	var result = document.getElementById("result");
	result.innerHTML = " ";
	var index = random(0, boredQuotes.length - 1);
	
	if(usedBored.length == boredQuotes.length){
		usedBored = [];
	}

	if (usedBored.indexOf(index) == -1){
		result.innerHTML = result.innerHTML + boredQuotes[index];
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
