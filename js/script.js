//Javascript Page. July 2015


//Collection of quotes
var sadQuotes = ["Failure will never overtake me if my determination to succeed is strong enough.", 
				"Always do your best. What you plant now, you will harvest later.", 
					"It does not matter how slowly you go as long as you do not stop.", "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, 
					but by doing what you can to make grace happen... yourself, right now, right down here on Earth.", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."]; 
var boredQuotes = ["Just changed my Facebook name to ‘No one' so when I see stupid posts I can click like and it will say ‘No one likes this'.",
 "What's the difference between snowmen and snowladies? Snowballs", "I am a nobody, nobody is perfect, therefore I am perfect.", "How do you make holy water? You boil the hell out of it.", "What do you call a bear with no teeth? -- A gummy bear!"];


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
