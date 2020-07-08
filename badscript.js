const startbutton = document.getElementById("start-button");
const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");
const question6 = document.getElementById("question-6");
var correctbutton = document.getElementById("correct");
var incorrectbutton = document.getElementById("incorrect");

document.addEventListener("load", hideQuestions);

function hideQuestions() {
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

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
    question1.style.display = "block";
    firstQuestion();
    secondQuestion();
    thirdQuestion();
}

function firstQuestion() {
    if (incorrectbutton.clicked === true) {
        console.log("1st question incorrect")
        incorrect;
    }
    else if (correctbutton.clicked === true) {
        console.log("1st question correct")
        correct();
        question1.style.display = "none";
        secondQuestion();
    }
}

function secondQuestion() {
    question2.style.display = "block";
    if (incorrectbutton.clicked === true) {
        console.log("2nd question incorrect")
        incorrect;
    }
    else if (correctbutton.clicked === true) {
        console.log("2nd question correct")
        correct();
        question2.style.display = "none";
        thirdQuestion();
    }
}

function thirdQuestion() {
    question3.style.display = "block";
    if (incorrectbutton.clicked === true) {
        incorrect;
    }
    else if (correctbutton.clicked === true) {
        correct();
        question3.style.display = "none";
        fourthQuestion();
    }
}

function fourthQuestion() {
    question4.style.display = "block";
    if (incorrectbutton.clicked === true) {
        incorrect;
    }
    else if (correctbutton.clicked === true) {
        correct();
        question4.style.display = "none";
        fifthQuestion();
    }
}

function fifthQuestion() {
    question5.style.display = "block";
    if (incorrectbutton.clicked === true) {
        incorrect;
    }
    else if (correctbutton.clicked === true) {
        correct();
        question5.style.display = "none";
        sixthQuestion();
    }
}

function sixthQuestion() {
    question6.style.display = "block";
    if (incorrectbutton.clicked === true) {
        incorrect;
    }
    else if (correctbutton.clicked === true) {
        correct();
        question6.style.display = "none";
    }
}

function incorrect() {
    document.getElementById("question-status").innerHTML = "<hr> Wrong!";
    // document.getElementById("timer").textContent =  countdown-15 + " seconds";
}

function correct() {
    document.getElementById("question-status").innerHTML = "<hr> Correct!";
}
