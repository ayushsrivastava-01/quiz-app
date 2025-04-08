const questions = [
    {
        question: "Who is known as the father of plastic surgery?",
        answers: [
            {text: "Nagarjuna", correct: false},
            {text: "Sushruta", correct: true},
            {text: "Ashoka", correct: false},
            {text: "Aryabhatta", correct: false},
        ]    
    },
    {
        question: "Which is the world's largest continent?",
        answers: [
            {text: "Europe", correct: false},
            {text: "Australia", correct: false},
            {text: "Asia", correct: true},
            {text: "Antarctica", correct: false},
        ]
    },
    {
        question: "Find the odd one out?",
        answers: [
            {text: "Apple", correct: false},
            {text: "Mango", correct: false},
            {text: "Grapes", correct: false},
            {text: "Potato", correct: true},
        ]
    },
    {
        question: "Who was India's first Prime Minister?",
        answers: [
            {text: "Mahatma Gandhi", correct: false},
            {text: "Chandra Shekhar Azad", correct: false},
            {text: "Pt.Jawaharlal Nehru", correct: true},
            {text: "Dr.Rajendra Prasad", correct: false},
        ]
    },
    {
        question: "Which country is the world's most populous country?",
        answers: [
            {text: "India", correct: true},
            {text: "China", correct: false},
            {text: "Australia", correct: false},
            {text: "America", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();