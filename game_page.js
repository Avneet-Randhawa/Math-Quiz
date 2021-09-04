player_1_name = localStorage.getItem("Player1");
player_2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;

function send() {
    number_1 = document.getElementById("num_1").value;
    number_2 = document.getElementById("num_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    console.log("First No = " + number_1);
    console.log("Second No = " + number_2);

    question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input = "<br>Answer : <input type='number' id='input_check_box' >";
    button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input + button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check()  {
    answer = document.getElementById("input_check_box").value;
    answer = answer.toLowerCase();
    console.log("Answer is " + answer);
    
    if(answer == actual_answer){
        if(answer_turn == "player_2"){
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }
    if(answer != actual_answer){
        if(question_turn == "player_2"){
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
    }
    if(answer_turn == "player_2"){
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_1_name;
    }
    else{
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;
    }
    document.getElementById("output").innerHTML = "";
}
