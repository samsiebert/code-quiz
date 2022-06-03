var startBtn = document.querySelector("#start-btn");


var questionObj = [
    {
        questionText: "Which of these is the symbol signifying the use of a class name?",
        options: ["1. #", "2. $", "3. *", "4. ."],
        answer: "4. ."
    },
    {
        questionText: "Bootstrap is associated most heavily with which of the following languages?",
        options: ["1. javascript", "2. css", "3. html", "4. python"],
        answer: "2. css"
    },
    {
        questionText: "Commonly used data types do not include:",
        options: ["1. alerts", "2. boolean", "3. string", "4. numbers"],
        answer: "1. alerts"
    }
];



var makeQuestions = function() {
    for ( var i = 0; i < questionObj.length; i ++) {
    // remove current body of page
    var body = document.querySelector("#page-body")
    var quizBody = document.querySelector("#quiz-body");
    quizBody.remove();

    //create question on page body
    var quizBodyEl = document.createElement("div");
    quizBodyEl.className = "quiz-body";
    quizBodyEl.id = "quiz-body"
    body.append(quizBodyEl);

    var quizQuestionEl = document.createElement("h1");
    quizQuestionEl.className = "quiz-question";
    quizQuestionEl.textContent = questionObj[0].questionText;
    quizBodyEl.append(quizQuestionEl);

    var quizAnswersEl = document.createElement("div");
    quizAnswersEl.className = "quiz-answers-el";
    quizAnswersEl.id = "quiz-answers-el";
    quizBodyEl.appendChild(quizAnswersEl);

    for (var i = 0; i < questionObj[0].options.length; i++ ) {
    var answerOptionsEl = document.createElement("button");
    answerOptionsEl.className = "option-button";
    answerOptionsEl.id = "option-button"
    answerOptionsEl.textContent = questionObj[0].options[i];
    quizAnswersEl.appendChild(answerOptionsEl);
    };    
    return;
}
    

};

var quiz = function() {
    makeQuestions();

};

//start quiz on click of start button
startBtn.addEventListener("click", quiz);
