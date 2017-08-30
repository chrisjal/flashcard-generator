var BasicCard = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
};

// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.


// Test utilities
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
// console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;