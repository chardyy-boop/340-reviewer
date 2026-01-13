const questions = [
    {
        question: "What is the value of k to make the expression kx² – 3kx + 9 a perfect square?",
        options: ["2", "4", "3", "5"],
        correct: 1
    },
    {
        question: "Which of the following is the standard acceleration due to gravity in the English unit?",
        options: ["980.66 fps²", "32.2 fps²", "9.8066 fps²", "32.2 ips²"],
        correct: 1
    },
    {
        question: "Two times the mother's age is 8 more than six times her daughter's age. Ten years ago, the sum of their age was 44. What is the daughter's age?",
        options: ["15 yrs old", "18 yrs old", "12 yrs old", "16 yrs old"],
        correct: 0
    },
    {
        question: "How many terms of the sequence -9, -6, -3, ..... must be taken so that the sum is 66?",
        options: ["11", "6", "4", "9"],
        correct: 0
    },
    {
        question: "A farmer is to plant rice in a rectangular field 30 m by 40 m. He started on the edge and plant around the perimeter. How wide a strip should he plant for each side in order to do half the work?",
        options: ["5 m", "2.5 m", "3 m", "5.5 m"],
        correct: 0
    },
    {
        question: "There are 6 geometric means between 4 and 8748. Find the sum of all terms.",
        options: ["12310", "12130", "13210", "13120"],
        correct: 3
    },
    {
        question: "Find the root mean square of 11, 23 and 35.",
        options: ["25", "27", "26", "24"],
        correct: 0
    },
    {
        question: "Determine the distance travelled by a particle between a time interval of 0.2 sec to 0.3 second if its velocity is v = 12t⁴ + 7/t, where v is in cm/s and t in seconds.",
        options: ["3.75 cm", "2.84 cm", "2.75 cm", "3.84 cm"],
        correct: 1
    },
    {
        question: "A pole cast a shadow 15 m long when the angle of elevation of the sun is 61°. If the pole has lean 15° from the vertical directly toward the sun, what is the length of the pole?",
        options: ["54.23 m", "48.64 m", "36.84 m", "64.84 m"],
        correct: 0
    },
    {
        question: "What is the supplement of an angle whose complement is 62°?",
        options: ["152°", "118°", "28°", "60°"],
        correct: 0
    },
    {
        question: "A certain angle has a supplementary five times its compliment. What is the angle?",
        options: ["186°", "168.5°", "67.5°", "157.5°"],
        correct: 2
    },
    {
        question: "Water is pouring into a swimming pool. After t hours, there are t + √t gallons in the pool. At what rate, in GPM is water pouring into the pool when t = 9 hours?",
        options: ["0.0194", "1.167", "1.235", "3.6"],
        correct: 0
    },
    {
        question: "From the top of tower A, the angle of elevation of the top of the tower B is 46°. From the foot of tower B to the foot of tower A is 28°. Both towers are on a level ground. If the height of tower B is 120 m, how high is tower A?",
        options: ["40.7 m", "44.1 m", "42.3 m", "38.6 m"],
        correct: 0
    },
    {
        question: "Think of a number. Double the number. Subtract 6 from the result and divide the answer by 2. The quotient will be 20. What is the number you think?",
        options: ["12", "20", "23", "32"],
        correct: 2
    },
    {
        question: "Determine the absolute value of resultant vector of the following vectors: F₁ = 4i + 7j + 6k; F₂ = 9i + 2j + 11k; F₃ = 5i – 3j – 8k.",
        options: ["21", "18", "25", "9"],
        correct: 0
    },
    {
        question: "The volume of the cube is increasing at a rate of 5 cu. m per minute. Determine the rate at which the surface area is increasing in m²/min, when its side is 10 m.",
        options: ["½", "1.75", "1.5", "2"],
        correct: 3
    },
    {
        question: "Determine the accumulated value of P2000.00 in 5 years if it is invested at 11% compounded quarterly.",
        options: ["P3,440.00", "P3,404.00", "P3,044.00", "P4,304.00"],
        correct: 0
    },
    {
        question: "What is the effective rate equivalent of 12% compounded quarterly?",
        options: ["12.55%", "12.98%", "11.55%", "13%"],
        correct: 0
    },
    {
        question: "A man borrowed P2,000.00 from a bank and agreed to pay the loan at the end of one year. The bank discounted the loan and give P1950 in cash. Determine the rate of discount.",
        options: ["3.75%", "3.12%", "2.5%", "1.2%"],
        correct: 2
    },
    {
        question: "Find the voltage drop to move 2 C of charge from point A to point B that requires -30 Joules of energy.",
        options: ["-15 V", "-5 V", "15 V", "5 V"],
        correct: 0
    },
    {
        question: "If z = √(1 - √(1 - √(1 - ...))), what is the value of z?",
        options: ["0.453", "0.618", "0.816", "0.681"],
        correct: 1
    },
    {
        question: "Solve the value of x from the following equation: x^{x^{x^{...}}} = 10.",
        options: ["1.258925", "1.85925", "1.892525", "1.528925"],
        correct: 0
    },
    {
        question: "If vector A is 10 units and vector B, which makes 60° with vector A, is 20 units. What is the difference of vectors A and B?",
        options: ["15.34 units", "13.45 units", "13.45 units", "17.32 units"],
        correct: 3
    },
    {
        question: "It is now between 3 and 4 o'clock. In twenty minutes, the minute hand will be as much as the hour hand as it is behind it. What is the time now?",
        options: ["3:06.36", "3:36.06", "3:03.66", "3:30.66"],
        correct: 0
    },
    {
        question: "Determine the value of ∫_{-1}^{1} (x³ + x⁵ + sin x)dx",
        options: ["0", "3.1416", "1.75", "infinity"],
        correct: 0
    },
    {
        question: "Determine the diameter of a circle, x² + y² – 6x + 4y – 12 = 0.",
        options: ["9 units", "11 units", "12 units", "10 units"],
        correct: 3
    },
    {
        question: "If x varies directly as y and inversely as z, and x = 14 when y = 7 and z = 2, find the value of x when z = 4 and y = 16.",
        options: ["12", "18", "14", "16"],
        correct: 3
    },
    {
        question: "Determine the absolute value of the complex number 3 + 4i.",
        options: ["4", "8", "5", "6"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizBody = document.getElementById('quiz-body');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const questionCountSpan = document.getElementById('question-count');
const resultContainer = document.getElementById('result-container');
const quizHeader = document.querySelector('.quiz-header');
const quizFooter = document.querySelector('.quiz-footer');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
    updateProgress();
}

function showQuestion(questionData) {
    // Clear previous content
    quizBody.innerHTML = '';
    nextBtn.disabled = true;

    // Create Question Element
    const questionEl = document.createElement('h2');
    questionEl.innerHTML = `${currentQuestionIndex + 1}. ${questionData.question}`;
    quizBody.appendChild(questionEl);

    // Create Options Container
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options-list');

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = option; // Changed to innerHTML for potential formatting support
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, index));
        optionsDiv.appendChild(button);
    });

    quizBody.appendChild(optionsDiv);

    // Update footer info
    questionCountSpan.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function selectOption(selectedButton, selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    // Disable all buttons after selection
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuestion.correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        // Highlight the correct answer
        buttons[currentQuestion.correct].classList.add('correct');
    }

    nextBtn.disabled = false;
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    updateProgress();

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
});

function showResults() {
    quizBody.classList.add('hidden');
    quizFooter.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    // 100% progress
    progressBar.style.width = '100%';

    const percentage = (score / questions.length) * 100;
    let message = '';

    if (percentage === 100) {
        message = "Perfect Score! You're a genius! 🎉";
    } else if (percentage >= 50) {
        message = "Good job! Keep practicing. 👍";
    } else {
        message = "Better luck next time. Don't give up! 💪";
    }

    resultContainer.innerHTML = `
        <div class="score-display">${score} / ${questions.length}</div>
        <p class="result-msg">${message}</p>
        <button class="btn primary-btn" onclick="location.reload()">Restart Quiz</button>
    `;
}

// Initialize
startQuiz();
