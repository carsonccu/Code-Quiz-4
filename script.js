const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById("question")
const answerElement = document.getElementById("answer-button")
var correctAnswer = document.getElementById("correct-answer")
var wrongAnswer = document.getElementById("wrong-answer")
var gameOver = document.getElementById("game-over")
var localScore= document.getElementById("local-score")
var timeLeft = document.getElementById("timer-text")
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)


const myquestions = [
        {
        question: "In Frozen, What is the name of the Reindeer?",
        options: [ "Sven", "Olaf", "Steven", "Rudolph"],
           answer: "Sven"
        },
    {
        question: "In Jerry Maguire what is the iconic saying",
        options: ["Stand with me!", "No days off!", "Show me the Money!", "Give me evertything you got!"],
           answer: "Show me the Money"
    },
    {
        question: "Who plays the Main character in the Movie Drive",
        options: ["Ryan Reynolds","Brad pitt", "Bradley Cooper","Ryan Gosling"],
           answer: "Ryan Gosling"
    },
    {
        question: "In the Movie Interstellar what is the name of Cooper's(Matthew Mconaughey) daughter?",
        options: ["Molly","Meg","Murph","Missy",],
            answer:"Murph"
    },
    {
        question: "Witch actor is not in the movie Inception",
        options: ["Leonardo DiCaprio","Michael Caine","Cillian Murphy","Jason Clarke"],
            answer:"Jason Clarke"
    },
    
]

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