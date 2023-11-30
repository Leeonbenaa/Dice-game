

function rollDice() {
    var randomNumber=Math.random();
randomNumber=randomNumber*6;
randomNumber=Math.floor(randomNumber)+1;


var radnomImg="dice"+randomNumber+".png";
var randomSource="images/"+radnomImg;

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var radnomImg2="dice"+randomNumber2+".png";
var randomSource2="images/"+radnomImg2;

document.querySelectorAll("img")[0].setAttribute("src",randomSource);


document.querySelectorAll("img")[1].setAttribute("src",randomSource2);
var h1Change=document.querySelector("h1");

if(randomNumber>randomNumber2){
h1Change.textContent="Player1 Wins!";
}
else if(randomNumber2>randomNumber){
    h1Change.textContent="Player2 Wins!";
}
else{
    h1Change.textContent="Draw!";
}
}