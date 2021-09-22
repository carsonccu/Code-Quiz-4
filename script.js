const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById("question")
var correctAnswer = document.getElementById("correct-answer")
var wrongAnswer = document.getElementById("wrong-answer")
var gameOver = document.getElementById("game-over")
var localScore = document.getElementById("local-score")
var timeLeft = document.getElementById("timer-text")
var questionText = document.getElementById("questions");
var currentindex = 0
var timeLeft = 120

const myquestions = [
    {
        question: "In Frozen, What is the name of the Reindeer?",
        options: ["Sven", "Olaf", "Steven", "Rudolph"],
        answer: "Sven"
    },
    {
        question: "In Jerry Maguire what is the iconic saying",
        options: ["Stand with me!", "No days off!", "Show me the Money!", "Give me evertything you got!"],
        answer: "Show me the Money"
    },
    {
        question: "Who plays the Main character in the Movie Drive",
        options: ["Ryan Reynolds", "Brad pitt", "Bradley Cooper", "Ryan Gosling"],
        answer: "Ryan Gosling"
    },
    {
        question: "In the Movie Interstellar what is the name of Cooper's(Matthew Mconaughey) daughter?",
        options: ["Molly", "Meg", "Murph", "Missy",],
        answer: "Murph"
    },
    {
        question: "Witch actor is not in the movie Inception",
        options: ["Leonardo DiCaprio", "Michael Caine", "Cillian Murphy", "Jason Clarke"],
        answer: "Jason Clarke"
    },

]

startButton.addEventListener('click', startQuiz)



function startQuiz() {
    startButton.classList.add('hide')
    // for (var i=0; i < myquestions[currentindex].options.length; i++){
    //     console.log()
    // }
    questionContainer.classList.remove('hide')
    showQuestion()
}
function showQuestion() {
    var question = myquestions[currentindex]
    questionElement.innerText = question.question
    // for (var i=0; i <qestion.options.length; i++){
    //     console.log()
    question.options.forEach(option => {
        console.log(option, question.answer, option === question.answer)
        const button = document.createElement("button")
        button.innerText = option
        button.classList.add("btn")
        if (question.answer === option) {
            button.dataset.correct = ("correct")
        }
        button.addEventListener("click", selectAnswer)
        questionContainer.appendChild(button)
    })
}


function timer() { }

function selectAnswer(event) {
    var correctAnswer = event.target.dataset.correct
    if (correctAnswer) {
        console.log("correctAnswer")
    } else {
        console.log("wrongAnswer")
    }
    currentindex++
    showQuestion()
}

function checkAnswer() { }

function finalscore() { }
















// function startGame(){
    //     startButton.classList.add('hide')
    //     shuffledQuestions = myquestions.sort(()=> Math.random()-.5)
    //     currentQuestionIndex=0
    //     questionContainer.classList.remove('hide')
    //     setnextQuestion()
    // }
    // function setnextQuestion(){
    //     showQuestion(shuffledQuestions[currentQuestionIndex])

    // function showQuestion(question){
    //     questionElement.innerText = question.question
    //     question.answers.forEach(answer => {
    //     const button = document.createElement("button")
    //     button.innerText= answer.text
    //     button.classList.add("btn")
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener("click", selectAnswer)
    //     answerElement.appendChild(button)
    //     })

    // }
    // function selectAnswer(){
    // }
