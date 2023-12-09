function rollDice(){
    return Math.floor(Math.random()*6);
}
function dice(){
    var d1 = rollDice();
    var d2 = rollDice();
    document.querySelector(".card-1 img").setAttribute("src",diceImages[d1]);
    document.querySelector(".card-2 img").setAttribute("src",diceImages[d2]);
    if(d1 === d2){
        document.querySelector(".title h1").textContent = "Draw";
    }
    else if(d1 > d2){
        document.querySelector(".title h1").textContent = "🎉Player-1 Wins🥳";
    }
    else{
        document.querySelector(".title h1").textContent = "🎉Player-2 Wins🥳";
    }
}
var diceImages = ["./assets/images/dice1.png",
                    "./assets/images/dice2.png",
                    "./assets/images/dice3.png",
                    "./assets/images/dice4.png",
                    "./assets/images/dice5.png",
                    "./assets/images/dice6.png"];

