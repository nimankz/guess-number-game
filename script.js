//global variables
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
//functions
function displayMassage(massage){
    document.querySelector(".message").textContent=massage;
}
function myFunction(){
    const guess= Number(document.querySelector(".guess").value);
    //when there isn't any number.
    if(!guess){
        displayMassage("🛑 No number!")
    }
    //when player wins.
    else if(guess=== secretNumber){
        displayMassage("🎉Correct number!")
        document.querySelector("body").style.backgroundColor=
            "#60b347";
        document.querySelector(".number").style.width="30rem";
        document.querySelector(".number").textContent=secretNumber;
        if(Number(document.querySelector(".highscore").textContent) < score){
            document.querySelector(".highscore").textContent = score;
        }
    }
    //when player gives wrong answer.
    else if (guess !== secretNumber){
        if (score>1){
            score --;
            displayMassage(guess > secretNumber ? "📈Too high!" :"📉Too low!")
            document.querySelector(".score").textContent=score;
        }
        else{
            displayMassage( "💥You lost the game!")
            document.querySelector(".score").textContent= "0";
        }

    }

}
function resetFunction(){
    score = 20;
    secretNumber =Math.trunc( Math.random()*20)+1;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".message").textContent= "Start guessing...";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";
    document.querySelector(".score").textContent= score;
    document.querySelector(".guess").value=" ";
}
//actions
document.querySelector(".check").addEventListener("click",myFunction);
document.querySelector(".again").addEventListener("click",resetFunction);