const nextButton = document.getElementById('next-button');
nextButton.disabled = true;

const quizData = [
    {question:"Which array method removes an element at the end of an array?", options: ["push()","pop()","shift()","unshift()"], answer: 1 },
    {question:"What is a loop?", options: ["a one-click operation", "a repeating operation", "an exit operation", "a start operation"], answer: 1 },
    {question:"In JS, what are brackets indicative of?", options: ["a function", "a standard procedure", "a block of text", "an array"], answer: 3},
    {question:"What does === mean in JS?", options: ["quality comparison", "inequality", "strict equality", "abstract equality"], answer: 2},
    {question:"What is JS used for?", options: ["create, control, animate", "supplement, contrive, implement", "snoop, droop, poop", "forge, conceal, reveal"], answer: 0}
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function displayCurrentQuestion() {
    
    answered = false;
    nextButton.disabled = true; // lock Next button

    const currentQ = quizData[currentQuestionIndex];

    // Question text + progress
    document.getElementById('question-box').innerHTML = `
        <h2>${currentQ.question}</h2>
        <p>Question ${currentQuestionIndex + 1} of ${quizData.length}</p>
    `;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;

        btn.addEventListener('click', () => selectOption(btn, index));

        optionsContainer.appendChild(btn);
    });
}

function selectOption(button, selectedIndex) {
    if (answered) return; // prevents double clicking
    answered = true;

    const currentQ = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options-container button');

    // lock all buttons
    buttons.forEach(btn => btn.disabled = true);

    // show correct answer
    buttons[currentQ.answer].style.backgroundColor = "green";
    buttons[currentQ.answer].style.color = "white";

    // if wrong then mark selected
    if (selectedIndex !== currentQ.answer) {
        button.style.backgroundColor = "red";
        button.style.color = "white";
    } else {
        score++;
    }

    // enable Next Button instead of auto-advancing
    nextButton.disabled = false;
}

// Next Button dynamic behavior
nextButton.addEventListener('click', nextQuestion);

nextButton.textContent = currentQuestionIndex === quizData.length -1 
? "Finish Quiz"
: "Next Question";

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayCurrentQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').innerText =
        `${score} / ${quizData.length}`;
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('score-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    displayCurrentQuestion();
}

// start app
displayCurrentQuestion();