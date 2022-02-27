   
// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.tscore = 0;
        this.scoreA = 0;
        this.scoreB = 0;
        this.scoreC = 0;
        this.scoreD = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.tscore++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        "IF YOU HAD ACCESS TO TIME MACHINE, WOULD YOU RATHER TRAVEL TO:",
         ["THE PAST","TO NEW PLACES,NOT IN TIME","THE FUTURE","I'D SELL IT"]
    ),
    new Question(
        "WHAT SOUNDS LIKE THE WORST IDEA TO YOU?", ["YOU CAN’T CHOOSE OUTFIT","GIVE AWAY YOUR SOCIAL MEDIA","TRAVELING TO THE SAME PLACE",
        "ANNOYING BOSS"]
    ),
    new Question(
        "YOU FEEL HAPPIEST WHEN YOU:",["CREATE SOMETHING","SOLVE FRIENDS PROBLEM","SOLVE TECHNICAL ISSUE","PERFORM ON STAGE"]

    ),
    new Question(
        "YOUR FRIENDS WILL BE AT YOUR PLACE IN 30 MINUTES, YOUR ACTIONS?",["GOTTA PICK THE RIGHT MUSIC","LET’S SEE WHAT I CAN COOK",
        "CLEAN UP ASAP","GUESTS? I DON’T THINK SO"]

    ),
    new Question(
        "YOU JUST WON UNLIMITED ACCESS TO YOUR FAVORITE RIDE AT THE FUNFAIR, WHAT IS IT GOING TO BE?",["I’D SWAP IT FOR CRAFT MATERIALS",
        "MERRY GO ROUND","ROLLER COASTER","BUMPER CARS"]

    ),
    new Question(
        "DESCRIBE YOUR IDEAL WORKOUT.",["A.	YOGA IS LIFE ","I RUN","GYM","NO WORKOUT AT ALL"]
    ),
    new Question(
        "HOW MUCH TIME DO YOU SPEND ON SOCIAL MEDIA DAILY?",["ABOUT 3 HOURS A DAY","24 HOURS A DAY 7 DAYS A WEEK ","I DON’T HAVE TIME FOR THAT ",
        "NOT MORE THAN 1 HOUR "]
    ),
     new Question(
        "WHICH PLACE WOULD YOU RATHER LIKE TO BE IN NOW?",["TRAFFIC LANE","AT A REMOTE BEACH WATCHING SUNSET ","BE INDOORS WATCHING RAIN AND LIGHTNING","BE IN A CROWD"]
    ),
    new Question(
        "YOU DECIDE TO PAINT THE WALLS IN YOUR ROOM FOR A CHANGE. IS IT GOING TO BE?",["VARIETY OF COLOURS","GREEN","BLUE","GREY"]
    ),
    new Question(
        "TIME TO FILL THAT EMPTY WALL WITH. WILL YOU GO WITH:",["A PHOTO COLLAGE","A FAVOURITE QUOTE","ABSTRACT AND SIMPLE ART","SOMETHING WORK RELATED"]
    ),
    new Question(
        "YOU GOT A SURPRISE BONUS AT WORK, HOW ARE YOU GOING TO SPEND IT?",["DESIGNER OUTLET","I’LL THROW A PARTY","PRIVATE JET","I WILL INVEST IT"]
    ),
    new Question(
        "DESCRIBE THE PERFECT OFFICE SPACE FOR YOU.",["AN INFORMAL LOUNGE","MY FAVOURITE COFFEE SHOP","A CUBICLE","MY OWN BIG OFFICE OR WORKSHOP"]
    ),
    new Question(
        "WOULD YOU RATHER BE A:",["ALWAYS HAPPY BUT POOR","AN UNRECOGNIZED HERO","A WORLD CLASS VILLAIN","RICHEST ONE BUT FOREVER ALONE"]
    ),
    new Question(
        "WHATS YOUR FAVORITE DESSERT?",["SUNDAE","BROWNIES","FANCY CAKE","SALAD"]
    ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 14;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();
