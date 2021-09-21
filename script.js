const quizcontainer = document.getElementById('quiz');
const resultcontainer = document.getElementById('results');
const submitbutton= document.getElementById('submit');

function buildquiz(){}

function showresults(){}

buildquiz();

submitbutton.addEventListener('click, showresults');

const myquestions = [
        {
        question: "In Frozen, What is the name of the Reindeer?",
        answer: "Sven",
        options: {
           a: "Sven",
           b: "Olaf",
           c: "Steven",
           d: "Rudolph",
        },
    },
    
    {
        question: "In Jerry Maguire what is the iconic saying",
        answer: "Show me the Money!",
        options: {
           a: "Stand with me!",
           b: "No days off!",
           c: "Show me the Money!",
           d: "Give me everything you got!",
        },
    },
    {
        question: "Who plays the Main character in the Movie Drive",
        answer: "Ryan Gosling",
        options: {
           a: "Ryan Reynolds",
           b: "Brad Pitt",
           c: "Bradley Cooper",
           d: "Ryan Gosling",
        },
    },
    {
        numb: 4,
        question: "In the Movie Interstellar what is the name of Cooper's(Matthew Mconaughey) daughter?",
        answer: "Murph",
        options: {
           a: "Molly",
           b: "Meg",
           c: "Murph",
           d: "Missy",
        },
    },
    {
        question: "In Wolf of Wall Street what real life millionaire is it about?",
        answer: "Jordan Belfort",
        options: {
           a: "Jeff Bezos",
           b: "Elon Musk",
           c: "Bill Gates",
           d: "Jordan Belfort",
        },
    },
    {
        question: "Witch actor is not in the movie Inception",
        answer: "Jason Clarke",
        options: {
           a: "Leonardo DiCaprio",
           b: "Michael Caine",
           c: "Cillian Murphy",
           d: "Jason Clarke",
        },
    },
    
]