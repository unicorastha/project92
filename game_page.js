player1_name = localstorage.getitem("player1_name")
player2_name = localstorage.getitem("player2_name")
 
player1_score =0;
player2_score =0;

document.getElementById("player1_name").innerHTML = player1_name +" : "
document.getElementById("player2_name").innerHTML = player2_name +" : "

document.getElementById("player1_score").innerHTML =player1_score;
document.getElementById("player1_score").innerHTML =player1_score;

document.getElementById("player_question").innerHTML="question turn -"+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn -"+ player2_name;


function send(){
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number)*parseInt(number2);
}

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case -" +answer);
    if(answer==word)
    {

        if(answer_turn=="player1")
        {
            player1_score=player_score+1;
            document.getElementById("player1_score").innerHTML =update_player1_score;
        }
        else
        {
            player2_score=player_score+1;
            document.getElementById("player1_score").innerHTML =update_player2_score;
        }


    }


if(question_turn=="player_1")
{
    question_turn="player2"
    document.getElementById("player_question").innerHTML ="question turn -"+ player2_name;

}
else
{
    question_turn="player1"
    document.getElementById("player_question").innerHTML ="question turn -"+ player1_name;

}

if(answer_turn=="player_1")
{
    answer_turn="player2"
    document.getElementById("player_question").innerHTML ="answer turn -"+ player2_name;

}
else
{
    answer_turn="player1"
    document.getElementById("player_question").innerHTML ="answer turn -"+ player1_name;

}
document.getElementById("output").innerHTML ="";
}
