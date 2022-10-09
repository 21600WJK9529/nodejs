//Shuffle cards
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Create an array of 52 cards
var cards = [];
var suits = ['H','D','S','C'];
var values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//Attach suits 1 at a time to each value in the values array till suits are exhausted
for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++) {
    cards.push(values[j] + suits[i]);
  }
}

// Shuffle the array of cards
cards = shuffle(cards);

//Checking deck
// for(i=0; i<cards.length; i++){
//     console.log(cards[i]);
// }

// Draw the first 5 cards, for additional hands, add vars for hand2, hand3, etc. slice values increment by 5
var hand = cards.slice(0,5);

// Sort the cards(Easier to grab high card)
hand.sort(function(a,b) {
  var valA = a.slice(0,-1);
  var valB = b.slice(0,-1);
  var numA = parseInt(valA);
  var numB = parseInt(valB);
  //deal with ace being high or low
  if (isNaN(numA)) {
    if (valA == 'A') {
      numA = 1;
    } else {
      numA = 10;
    }
  }
  if (isNaN(numB)) {
    if (valB == 'A') {
      numB = 1;
    } else {
      numB = 10;
    }
  }
  return numA - numB;
});

function evaluate(hand){
// Print the cards
console.log('Player 1: '+ hand);
//Checking hand
var flush = false;
var straight = false;
var pairs = false;
var threeOfAKind = false;
var fourOfAKind = false;
var fullHouse = false;
var straightFlush = false;
var highCard = false;
var twoPair = false;
var pair = false;

//evaluate if hand is a flush
for (var i = 0; i < hand.length - 1; i++) {
  if (hand[i].slice(-1) == hand[i+1].slice(-1)) {
    flush = true;
  } else {
    flush = false;
    break;
  }
}

//straight
for (var i = 0; i < hand.length - 1; i++) {
  var valA = hand[i].slice(0,-1);
  var valB = hand[i+1].slice(0,-1);
  var numA = parseInt(valA);
  var numB = parseInt(valB);
  //deal with ace being high or low
  if (isNaN(numA)) {
    if (valA == 'A') {
      numA = 1;
    } else {
      numA = 10;
    }
  }
  if (isNaN(numB)) {
    if (valB == 'A') {
      numB = 1;
    } else {
      numB = 10;
    }
  }
  if (numB - numA == 1) {
    straight = true;
  } else {
    straight = false;
    break;
  }
}

//pairs, three of a kind, four of a kind
var pairs = 0;
for (var i = 0; i < values.length; i++) {
  var valueCount = 0;
  for (var j = 0; j < hand.length; j++) {
    if (hand[j].slice(0,-1) == values[i]) {
      valueCount++;
    }
  }
  if (valueCount == 2) {
    pairs++;
  } else if (valueCount == 3) {
    threeOfAKind = true;
  } else if (valueCount == 4) {
    fourOfAKind = true;
  }
}

//full house
if (pairs == 1 && threeOfAKind == true) {
  fullHouse = true;

}

//straight flush
if (straight == true && flush == true) {
  straightFlush = true;

}  

//high card
if(flush == false && straight == false && pairs == 0 && threeOfAKind == false && fourOfAKind == false && fullHouse == false && straightFlush == false){
    var highCard = true;
}

//pair
if(pairs==1){
    pair = true;
}

//two pair
if(pairs==2){
    twoPair = true;
}

//print if true
strengths = [straightFlush, fourOfAKind, fullHouse, flush, straight, threeOfAKind, twoPair, pair, highCard];

for(i=0; i<strengths.length; i++){
    if(strengths[i]==true){
        switch(i){
            case 0:
                console.log("Straight Flush");
                return "Straight Flush";
                
            case 1:
                console.log("Four of a Kind");
                return "Four of a Kind";
                
            case 2:
                console.log("Full House");
                return "Full House";
                
            case 3:
                console.log("Flush");
                return "Flush";
                
            case 4:
                console.log("Straight");
                return "Straight";
                
            case 5:
                console.log("Three of a Kind");
                 return "Three of a Kind";
                
            case 6:
                console.log("Two Pair");
                 return "Two Pair";
                
            case 7:
                console.log("Pair");
                 return "Pair";
                
            case 8:
                console.log("High Card");
                 return "High Card";
                
        }
    }
  }

}
module.exports = evaluate;



