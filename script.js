const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');

startButton.addEventListener('click', startQuiz)

function startQuiz(){}
    console.log('start')

function nextQuestion(){}

function selectAnswer(){}

const myquestions = [
        {
        question: "In Frozen, What is the name of the Reindeer?",
        options: {
           a: "Sven",
           b: "Olaf",
           c: "Steven",
           d: "Rudolph",
        },
        correctanswer:"a"
    },
    
    {
        question: "In Jerry Maguire what is the iconic saying",
        options: {
           a: "Stand with me!",
           b: "No days off!",
           c: "Show me the Money!",
           d: "Give me everything you got!",
        },
        correctanswer:"c" 
    },
    {
        question: "Who plays the Main character in the Movie Drive",
        options: {
           a: "Ryan Reynolds",
           b: "Brad Pitt",
           c: "Bradley Cooper",
           d: "Ryan Gosling",
        },
        correctanswer:"d"
    },
    {
        numb: 4,
        question: "In the Movie Interstellar what is the name of Cooper's(Matthew Mconaughey) daughter?",
        options: {
           a: "Molly",
           b: "Meg",
           c: "Murph",
           d: "Missy",
        },
        correctanswer:"c"
    },
    {
        question: "In Wolf of Wall Street what real life millionaire is it about?",
        options: {
           a: "Jeff Bezos",
           b: "Elon Musk",
           c: "Bill Gates",
           d: "Jordan Belfort",
        },
        correctanswer:"d"
    },
    {
        question: "Witch actor is not in the movie Inception",
        options: {
           a: "Leonardo DiCaprio",
           b: "Michael Caine",
           c: "Cillian Murphy",
           d: "Jason Clarke",
        },
        correctanswer:"d"
    },
    
]