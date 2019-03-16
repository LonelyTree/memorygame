console.log("Up and running!");

var cards= [
{
	rank : "Queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png",
},
{
	rank : "Queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png",
},
{
	rank : "King",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png",
},
{	rank : "King",
	suit : "diamonds",
	cardImage : "images/King-of-diamonds.png",}
	];

var cardsInPlay=[]

//checks if both cards match
var checkForMatch = function() {
if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
	} else if (cardsInPlay.length === 2) {
	alert("Sorry, try again.");}}

//flips the cards
var flipCard = function(cardId){
console.log("User flipped " + cards[cardId].rank +"!");
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
checkForMatch();

}


flipCard(0);
flipCard(3);



