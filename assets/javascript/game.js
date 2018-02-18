$(document).ready(function () {

$("#begin").on("click", function () { 
    debugger;
    trivia.begin();
})

$(document).on("click", "#end", function () { 
    trivia.end();
})
var audio = new Audio("assets/audio/Jeopardy.mp3");

var questions = [{
    question: "What is the word for a group of kittens?",
    choices: ["Clowder", "Gang", "Bundle", "Kindle"],
    correctAnswer: 3
}, {
    question: "What color of cat is most prone to deafness?",
    choices: ["Black", "White", "Orange", "Grey"],
    correctAnswer: 1
}, {
    question: "What kind of cat is typically female?",
    choices: ["Black", "White", "Calico", "Orane"],
    correctAnswer: 2
}, {
    question: "Cats have a unique print like the human's fingerprint, but where is it located??",
    choices: ["Nose", "Tongue", "Front paws", "Back paws"],
    correctAnswer: 0
}, {
    question: "How many muscles do cats use to move their ears?",
    choices: ["7", "42", "22", "4"],
    correctAnswer: 1
}, {
    question: "What animal's brain is a cat's most similar to?",
    choices: ["Mouse", "Rabbit", "Human", "Dog"],
    correctAnswer: 2
}, {
    question: "How many sounds can a cat make?",
    choices: ["10", "20", "50", "100"],
    correctAnswer: 3
}];

var trivia = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        trivia.counter--;
        $("#counter").html(trivia.counter);
        if (trivia.counter <= 0) {
            alert("Your Time is Up!");
            trivia.end();
        }
    },
    begin: function () {
        timer = setInterval(trivia.countdown, 1000);
        audio.play(); 
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>'); 
        $("#begin").remove(); 

        for (var i = 0; i < questions.length; i++) { 
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; a++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[a] + "'>'" + questions[i].answers[a]);
            }
        }
        $("#subwrapper").append('<br><br><button id="end">Finished!</button>')
    },
    end: function () { 
        $.each($("input[name='question-0']:checked"), function () { 
            if ($(this).val() === questions[0].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () { 
            if ($(this).val() === questions[1].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () { 
            if ($(this).val() === questions[2].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () { 
            if ($(this).val() === questions[3].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () { 
            if ($(this).val() === questions[4].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () { 
            if ($(this).val() === questions[5].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () { 
            if ($(this).val() === questions[6].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () { 
            if ($(this).val() === questions[7].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        this.result(); 
    },

    result: function () { 
        clearInterval(timer); 
        $("#subwrapper h2").remove(); 
        $("#subwrapper").html("<h2>You finished!</h2>");
        $("#subwrapper").append("<h3>Correct Answer: " + this.correct + "</h3>"); 
        $("#subwrapper").append("<h3>Incorrect Answer: " + this.incorrect + "</h3>"); 
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}
});
