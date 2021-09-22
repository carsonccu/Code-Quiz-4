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

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = myquestions.sort(()=> Math.random()-.5)
    currentQuestionIndex=0
    questionContainer.classList.remove('hide')
    setnextQuestion()
}
function setnextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText= answer.text
    button.classList.add("btn")
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerElement.appendChild(button)
    })
    
}
function selectAnswer(e){
}

const myquestions = [
        {
        question: "In Frozen, What is the name of the Reindeer?",
        answers: [
           {text: "a: Sven"},
           {text: "Olaf"},
           {text: "Steven"},
           {text: "Rudolph"},
        ]
        }
    ]
//         correctanswer:"a"
//     },
    
//     {
//         question: "In Jerry Maguire what is the iconic saying",
//         options: {
//            a: "Stand with me!",
//            b: "No days off!",
//            c: "Show me the Money!",
//            d: "Give me everything you got!",
//         },
//         correctanswer:"c" 
//     },
//     {
//         question: "Who plays the Main character in the Movie Drive",
//         options: {
//            a: "Ryan Reynolds",
//            b: "Brad Pitt",
//            c: "Bradley Cooper",
//            d: "Ryan Gosling",
//         },
//         correctanswer:"d"
//     },
//     {
//         numb: 4,
//         question: "In the Movie Interstellar what is the name of Cooper's(Matthew Mconaughey) daughter?",
//         options: {
//            a: "Molly",
//            b: "Meg",
//            c: "Murph",
//            d: "Missy",
//         },
//         correctanswer:"c"
//     },
//     {
//         question: "In Wolf of Wall Street what real life millionaire is it about?",
//         options: {
//            a: "Jeff Bezos",
//            b: "Elon Musk",
//            c: "Bill Gates",
//            d: "Jordan Belfort",
//         },
//         correctanswer:"d"
//     },
//     {
//         question: "Witch actor is not in the movie Inception",
//         options: {
//            a: "Leonardo DiCaprio",
//            b: "Michael Caine",
//            c: "Cillian Murphy",
//            d: "Jason Clarke",
//         },
//         correctanswer:"d"
//     },
    
// ]
}