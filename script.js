const startbutton = document.getElementById("start-button");
const quesText = document.getElementById("question-text");
const quesStatus = document.getElementById("question-status");
var choices;
var answer;
var seconds;
var ansButton;
var nextQuestion;

startbutton.onclick = quizPlay;

function quizPlay() {
    
    $("#start-button").hide();
    
    document.getElementById("timer").innerHTML = 90;
    getQuestions();

    seconds = document.getElementById("timer").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds + " seconds";
        
        if (seconds <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "Time's up!";
            $("#question-status").empty();
            quesText.innerHTML = "Thanks for playing!" + "<br>" + "Your score is " + 0 + "."
        }

    }, 1000);

}

function getQuestions() {
    // for (var i = 0; i < questions.length; i++) {
        nextQuestion = 0;
        choices = questions[nextQuestion].choices;
        answer = questions[nextQuestion].answer;

        quesText.innerHTML = "<hr>" + questions[nextQuestion].title + "<br>";
        chooseAnswer();

    // }
    console.log(answer);
}

function chooseAnswer() {
    for (var j = 0; j < choices.length; j++) {
        ansButton = $("<button>");
        ansButton.addClass("btn btn-light");
        ansButton.text(choices[j]);
        $("#question-text").append(ansButton);
        
        ansButton.on("click", function() {
            if (choices[j] === answer) {
                quesStatus.innerHTML = "<hr>" + "Correct!";
                quesText.innerHTML = "";
                nextQuestion++;
                getQuestions();
            }
    
            else {
                quesStatus.innerHTML = "<hr>" + "Wrong!";
                seconds -= 15;
            };

        });

    }
}