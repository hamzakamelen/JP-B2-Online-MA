var currentQuestion = document.getElementById("currentQuestion")
var totalQuestion = document.getElementById("totalQuestion")
var displayQuestion = document.getElementById("displayQuestion")
var options = document.getElementById("options")
var currentIndex = 0
var marks = 0

var questions = [
    {
        question: "HTML Stands For _________",
        options: [
            "Anchor Text Language",
            "HTML",
            "Case Cading Style Sheet",
            "HyperText markup language",
        ],
        correctAns: "HyperText markup language",
    },
    {
        question: "CSS Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "HTML Stands For _________",
        options: [
            "Anchor Text Language",
            "HTML",
            "Case Cading Style Sheet",
            "HyperText markup language",
        ],
        correctAns: "HyperText markup language",
    },
    {
        question: "JS Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "DOM Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "RAM Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "ROM Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

function startQuiz() {
    totalQuestion.innerHTML = questions.length
    currentQuestion.innerHTML = currentIndex + 1
    displayQuestion.innerHTML = questions[currentIndex].question
    options.innerHTML = ''
    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        options.innerHTML += `
        <button 
        onclick="CheckAns(
        '${questions[currentIndex].options[i]}',
        '${questions[currentIndex].correctAns}')">
        ${questions[currentIndex].options[i]}
        </button>
        `
    }
}

startQuiz()

function NextQuestion() {
    if (currentIndex + 1 == questions.length) {
        alert(`Marks: ${marks}`)
    } else {
        currentIndex++
        startQuiz()
    }
}

function CheckAns(selectedAns, correctAns) {
    if (selectedAns == correctAns) {
        marks++
    }
    console.log(marks);
    NextQuestion()
}