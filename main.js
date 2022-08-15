function adduser() {
   var player1_name =  document.getElementById("player1_name").value;
   var player2_name = document.getElementById("player2_name").value;
   
   localStorage.setItem("player1_name", player1_name);
   localStorage.setItem("player2_name", player2_name);
   document.getElementById("player1_name").innerHTML=player1_name;
   document.getElementById("player2_name").innerHTML=player2_name;
   
   window.location="game_page.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML=player1_name +" : ";
document.getElementById("player2_name").innerHTML=player2_name +" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send() {
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1)*parseInt(number2);

   question_row = "<h4>" + number1 + "X" + number2;
   answer_row = " <br>Answer : <input type=text id='input_check_box'>";
   check_button = "<br> <br> <button onClick='check()' id='check-button'> Check </button>"
   row = question_row+answer_row+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("number1").value="";
   document.getElementById("number2").value="";
}

