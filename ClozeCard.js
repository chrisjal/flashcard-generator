let BasicCard = require("./BasicCard.js");

let ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = function() {
		// Check to see if the entered text contains the cloze text
		if (this.text.includes(this.cloze)) {
			// returns value of text with the cloze value replaced with the string "..."
			return this.text.replace(this.cloze, "...");
		}
		else {
			// If cloze text is not in entered text, console log the error
			console.log("The cloze deletion does not appear in the input text!");
		}
	};
	this.fullText = text;
};

// BasicCard Testing
// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// "George Washington"
// console.log(firstPresident.back); 

// ClozeCard testing
// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
// console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
// Clozecard.partial is a function in the constructor and needs to be called to provide a value
// console.log(firstPresidentCloze.partial());

// "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work" (undefined)
// var brokenCloze = new ClozeCard("This doesn't work", "oops");
// console.log(brokenCloze.partial());

module.exports = ClozeCard;