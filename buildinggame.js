let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("GAME WAS DRAW");
    msg.innerText ="GAME WAS DRAW . TRY AGAIN ";
    msg.style.backgroundColor = "blue";
}

const showWinner=(userWin , userChoice , CompChoice)=>{
    if (userWin){
        console.log("..YOU WIN..");
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText = (`..YOU WIN!..Your ${userChoice} beats ${CompChoice}`);
        msg.style.backgroundColor = "green"; 
    } else{
        console.log(".YOU LOSE.");
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText =(`..YOU LOSE..${CompChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red"; 
    }
}

const playGame =(userChoice) =>{
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = CompChoice==="paper"? false:true;
        }else if(userChoice === "paper"){
            userWin = CompChoice==="scissors"?false:true;
        }else{
            userWin = CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    } 

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});

