const startbutton = document.getElementById("start-button");
const quesText = document.getElementById("question-text");
const quesStatus = document.getElementById("question-status");
const timer = document.getElementById("timer");
var scoresBtn = document.getElementById("scores");
var choices;
var answer;
var seconds;
var ansButton;
var nextQuestion = 0;

startbutton.onclick = quizPlay;

function quizPlay() {
    
    $("#start-button").hide();
    
    timer.innerHTML = 90;
    getQuestions();

    seconds = document.getElementById("timer").textContent;
    var countdown = setInterval(function() {
        seconds--;
        timer.textContent = seconds + " seconds";
        
        if (seconds <= 0) {
            clearInterval(countdown);
            timer.textContent = "Time's up!";
            $("#question-status").empty();
            quesText.innerHTML = "Thanks for playing!" + "<br>" + "Your score is " + 0 + "."
        }

        else if (nextQuestion === 6) {
            clearInterval(countdown);
            timer.textContent = "Congrats! Your score is " + seconds + ".";
            quesStatus.innerHTML = "";
            storeScores();
        }

    }, 1000);

}

function getQuestions() {

    choices = questions[nextQuestion].choices;
    answer = questions[nextQuestion].answer;

    quesText.innerHTML = "<hr>" + questions[nextQuestion].title + "<br>";
    chooseAnswer();

}

function chooseAnswer() {
    
    for (var j = 0; j < choices.length; j++) {
        ansButton = $("<button>");
        ansButton.addClass("btn btn-light");
        ansButton.text(choices[j]);
        $("#question-text").append(ansButton);
        
        ansButton.on("click", function(e) {
            
            if (e.target.innerText === answer) {
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

function storeScores() {
    var initials = prompt("Enter your initials to save your score:");
    localStorage.setItem(initials, seconds);
}

function highScores(initials, seconds) {
    scoresBtn.on("click", function() {
        quesText.innerHTML = localStorage.getItem(initials, seconds);
    });
}