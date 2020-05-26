


var obj = document.querySelectorAll(".btn");


for(var i=0; i<obj.length ;i++){
  obj[i].addEventListener("click" , function(){
    var userChoice = this.innerHTML;
    var randomNo = Math.floor(Math.random() * 3);    // random no bw 0-2
    var choice = ["stone" , "paper" , "scissor"];
    var compChoice = choice[randomNo];
    document.querySelector(".user-img").setAttribute("src" , "images/" + userChoice.toLowerCase() + ".jpg");
    document.querySelector(".comp-img").setAttribute("src" , "images/" + compChoice + ".jpg");

    var userNo;
    if(userChoice == "Stone"){
      userNo = 0;
    }
    else if(userChoice == "Paper"){
      userNo = 1;
    }
    else if(userChoice == "Scissor"){
      userNo = 2;
    }

    console.log(userChoice);


    var res = checkWin(userNo , randomNo);
    console.log(res);
    if(res === 1){
      document.querySelector(".user-score").innerHTML++;
      document.querySelector(".status").innerHTML = "WIN";
    }
    if(res === -1){
      document.querySelector(".comp-score").innerHTML++;
      document.querySelector(".status").innerHTML = "LOST";
    }
    if(res === 0){
      document.querySelector(".status").innerHTML = "DRAW";
    }

  });
}

function checkWin(userChoice , compChoice) {
  console.log("here");
  if(userChoice % 3 == (compChoice + 1) % 3){
    return 1;
  }
  else if (userChoice % 3 == (compChoice + 2) % 3) {
    return -1;
  }
  else if(userChoice == compChoice){
    return 0;
  }

}
