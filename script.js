const startbutton = document.getElementById("start-button");
const quesText = document.getElementById("question-text");
const quesStatus = document.getElementById("question-status");

startbutton.onclick = quizPlay;

function quizPlay() {
    
    $("#start-button").hide();
    
    document.getElementById("timer").innerHTML = 90;
    
    var seconds = document.getElementById("timer").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds + " seconds";
        if (seconds <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "Time's up!";
        }
    }, 1000);

    for (var i = 0; i < questions.length; i++) {
        quesText.innerHTML = "<hr>" + questions[i].title + "<br>";
        var choices = questions[i].choices;
        for (var j = 0; j < choices.length; j++) {
            choices.forEach(makeButton);
            quesText.append(choices[j]);
        }
        // var answer = questions[i].answer;
        // console.log(answer.value);

    }

}

function makeButton(choices) {
    document.createElement("button");
    var button = document.getElementById("button")
    // button.innerHTML = 
}