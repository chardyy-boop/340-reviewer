const questions = [
    {
        question: "Which of the following mechanism represents an inversion of a slider crank chain?",
        options: ["Oldham’s coupling", "Whitworth quick return mechanism", "Elliptical trammel", "Pantograph mechanism"],
        correct: 1
    },
    {
        question: "What is a unique form of cast iron with worm shaped graphite particles?",
        options: ["Wrough iron", "Compacted graphite iron", "Mottled Cast iron", "Malleable Cast Iron"],
        correct: 1
    },
    {
        question: "What is the process of making Bolt heads by forging?",
        options: ["Fullering", "Drifting", "Swagging", "Upsetting"],
        correct: 3
    },
    {
        question: "What do you call the difference between the higher limit and lower limit of size?",
        options: ["Allowance", "Deviation", "Tolerance", "Interference Zone"],
        correct: 2
    },
    {
        question: "Which of the following is the major alloying element in invar?",
        options: ["Copper", "Vanadium", "Nickel", "Aluminum"],
        correct: 1
    },
    {
        question: "Which of the following is available in five slightly different nominal composition for applications which require high strength, good fabricating and fusing qualities, immunity to rust, free machining and a corrosion resistance equivalent to copper?",
        options: ["Everdur", "Silicon", "Dynavar", "Titanium"],
        correct: 0
    },
    {
        question: "Which of the following superalloys is age-hardenable",
        options: ["Stellite", "Incoloy", "Nimonic", "Inconel"],
        correct: 2
    },
    {
        question: "__________ is the range of working temperature for soldering process",
        options: ["350 C to 480 C", "60 C to 120 C", "220 C to 300 C", "180 C to 250 C"],
        correct: 3
    },
    {
        question: "How are fullers used?",
        options: ["Holding the workpiece", "Decreasing the length of the workpiece", "Forming Necks or grooves on cross section of a job", "Supporting the workpiece"],
        correct: 2
    },
    {
        question: "Which of the following is an example of drilling",
        options: ["Abrasive Cutting", "Oblique Cutting", "Orthogonal Cutting", "Simple Cutting"],
        correct: 1
    },
    {
        question: "__________ is also known as tube mills and are commonly used for wat grinding",
        options: ["Agitator ball mills", "Ring roller mills", "Mechanical impact mills", "Disk mills"],
        correct: 0
    },
    {
        question: "Which of the following device is used for transmitting energy in CNC Machine tools",
        options: ["Recirculating ball screw and nut assembly", "Screw and Nut Assembly", "Pulley and Belt", "Gears"],
        correct: 0
    },
    {
        question: "Aluminum is particularly satisfactory for applications requiring all of the following characteristics except __________",
        options: ["Good thermal Conductivity", "High Strength", "Good Electrical Conductivity", "Low Weight"],
        correct: 1
    },
    {
        question: "____________ Is a polymer of chloroprene of the monovinyl acetylene type.",
        options: ["Butane styrene", "Butyl", "Natural Rubber", "Neoprene"],
        correct: 3
    },
    {
        question: "Why are Plasticizers added to plastics?",
        options: ["To increase flexibility of materials", "To enhance cross linking", "To increase ductility of materials", "To increase melting point"],
        correct: 0
    },
    {
        question: "A planer mechanism has 8 links and 10 rotary joints. Using a Gubler’s criterion, calculate the number of degree of freedom of the mechanism.",
        options: ["1", "2", "0", "3"],
        correct: 0
    },
    {
        question: "The Train Value of a Gear Train is__________",
        options: ["Equal to the speed ratio", "Double the speed ratio", "Half of the speed ratio", "Reciprocal of the speed ratio"],
        correct: 3
    },
    {
        question: "It is an age wrought iron which has mechanical properties comparable to those of heat treated alloy steel of the same order of hardness and resistance to corrosion similar to that of monel. What is this alloy of Nickel?",
        options: ["R Monel", "S Monel", "KR Monel", "K Monel"],
        correct: 2
    },
    {
        question: "Kevlar epoxy composite is widely used in ___________",
        options: ["Interior decoration", "Navy", "aerospace", "Automobiles"],
        correct: 3
    },
    {
        question: "An interrupted quenching process resulting in an austenite to martensite transition is _______.",
        options: ["Normalizing", "Martempering", "Austenitizing", "Austempering"],
        correct: 1
    },
    {
        question: "When crank rotates with uniform speed, it has _________ acceleration only.",
        options: ["Tangential", "Radial", "coriolis", "Gyroscopic"],
        correct: 1
    },
    {
        question: "Hand shears can be used for cutting sheets up to _________",
        options: ["0.2 mm", "0.8 mm", "0.4 mm", "1.6 mm"],
        correct: 3
    },
    {
        question: "The moment diagram for a cantilever beam subjected to bending moment at the end of beam will be ________.",
        options: ["Rectangle", "Triangle", "elliptical", "Cubic parabola"],
        correct: 0
    },
    {
        question: "For a simply supported beam on two end support the bending moment is maximum",
        options: ["Usually on the supports", "Always at midspan", "Where there is No Shear", "Where the deflection is Maximum"],
        correct: 2
    },
    {
        question: "Generally, In case of pure bending moment is constant throughout and the shear force is ",
        options: ["Maximum always", "Parabolic in shape", "Always zero", "Having a unit value"],
        correct: 2
    },
    {
        question: "Which type of key is used for mounting shifting gears in gear boxes?",
        options: ["Spline", "Saddle", "Square", "Flat"],
        correct: 0
    },
    {
        question: "Hard shifting of gears is due to",
        options: ["Leakage of oil from gear box", "Worn out splines on the main shaft", "High speed", "Over loading"],
        correct: 1
    },
    {
        question: "Which of the following key is preferred for the condition when a large amount of impact type torque is to be transmitted in both direction of rotation?",
        options: ["Woodruff Key", "Feather Key", "Gib-head Key", "Tangent Key"],
        correct: 3
    },
    {
        question: "Guest’s Theory of failure is applicable for following type of materials ",
        options: ["Brittle", "Ductile", "Elastic", "Plastic"],
        correct: 1
    },
    {
        question: "Rankine Theory of failures is applicable for the following type of materials ",
        options: ["Brittle", "Ductile", "Elastic", "Plastic"],
        correct: 0
    },
    {
        question: "In leaf springs, the longest leaf is known as?",
        options: ["Master leaf", "Lower leaf", "Upper leaf", "None of these"],
        correct: 0
    },
    {
        question: "For standard coarse threads of nut, the threads will be as strong in failure by shear as the bolt in tension, if the height of nut (h) is approximately",
        options: ["0.4 times", "0.6 times", "0.7 times", "0.8 times"],
        correct: 0
    },
    {
        question: "In the levers of first type, the mechanical advantage is ________ one.",
        options: ["Less than", "Equal to", "More than", "None of these"],
        correct: 2
    },
    {
        question: "Wahl's stress factor __________ very rapidly as the spring index decreases.",
        options: ["Increases", "Decreases", "Remain same", "None of these"],
        correct: 0
    },
    {
        question: "Stress Concentration factor is caused due to",
        options: ["Variation in properties of material from point to point in a member", "Pitting at points or areas at which loads on a member are applied", "Abrupt Change of Section", "All of the above"],
        correct: 3
    },
    {
        question: "Transverse fillet welded joints are designed for",
        options: ["Tensile strength", "Compressive strength", "Shear strength", "Bending strength"],
        correct: 0
    },
    {
        question: "The strap end of a connecting rod of steam engine is joined by",
        options: ["Gib of cotter joint", "Sleeve and cotter joint", "Spigot socket cotter joint", "Knuckle joint"],
        correct: 0
    },
    {
        question: "The angle of twist of shaft is",
        options: ["Directly proportional to (shaft diameter)²", "Inversely proportional to (shaft diameter)²", "Directly proportional to (shaft diameter)⁴", "Inversely proportional to (shaft diameter)⁴"],
        correct: 3
    },
    {
        question: "The columns whose slenderness ratio is less than 80, are known as",
        options: ["Short columns", "Long columns", "Weak columns", "Medium columns"],
        correct: 0
    },
    {
        question: "A lap joint is always in _________ shear.",
        options: ["Single", "Double", "Both A and B", "None of these"],
        correct: 0
    },
    {
        question: "When column is subjected to an eccentric load, the stress induced in the column will be ______",
        options: ["Both direct and bending stress", "Shearing stress only", "Bending stress only", "Direct stress only"],
        correct: 0
    },
    {
        question: "What is the results when mers join with a high degree of regularity in chain structure and mer orientation",
        options: ["Isotactic polymer", "Trans Mer", "Syndiotactic polymer", "Atactic polymer"],
        correct: 0
    },
    {
        question: "In order to get uniform thickness of the plate by rolling process, one provides",
        options: ["Camber on rolls", "Offset on rolls", "Hardening of rolls", "Antifriction Bearing"],
        correct: 0
    },
    {
        question: "Spring back metal forming depends on _______.",
        options: ["None of this", "Strain rate", "Modulus of elasticity", "Load Applied"],
        correct: 2
    },
    {
        question: "Fixing of both ends of simply supported beam that has only concentrated load at the midspan will increase the allowable load by ________.",
        options: ["200%", "25%", "100%", "50%"],
        correct: 3
    },
    {
        question: "What is the most suitable material in TIG welding process",
        options: ["Aluminum", "Plain Steels", "Alloy Steels", "Copper"],
        correct: 2
    },
    {
        question: "_______ is defined the localization of the high stresses due to the irregularities present in the component and abrupt changes to the cross section.",
        options: ["Strain Concentration", "Stress Concentration", "Stress behavior", "Strain behavior"],
        correct: 1
    },
    {
        question: "_______ is defined as the maximum stress to which a material can be subjected without fatigue, regardless of the number of cycles.",
        options: ["Endurance limit", "Fatigue Stress", "Hoop Stress", "Shear Stress"],
        correct: 0
    },
    {
        question: "A force which is gradually applied and does not change in magnitude and direction with respect to time is called ______.",
        options: ["Dynamic load", "Pressing Load", "Static Load", "Variable Load"],
        correct: 2
    },
    {
        question: "Notch Sensitivity varies between",
        options: ["1 - 100", "0-1", "0-10", "0.1 - 100"],
        correct: 1
    },
    {
        question: "Stress concentration in static loading having high influence in ____.",
        options: ["Malleable material", "Tough Material", "Ductile Materials", "Brittle Materials"],
        correct: 3
    },
    {
        question: "If the value of theoretical stress concentration is 1.0, then the value of fatigue stress concentration factor is equal to",
        options: ["0", "Infinite", "1", "0.5"],
        correct: 2
    },
    {
        question: "Which of the following is the ratio of the fatigue strength without a stress concentration to the fatigue stress with a stress concentration.",
        options: ["Wahl Factor", "Fatigue Stress Concentration Factor", "Reliability Factor", "Factor of Safety"],
        correct: 1
    },
    {
        question: "Surface hardening is desirable for a product that is subject to ______.",
        options: ["Fatigue", "High impact loads", "High Shear Loads", "High Tensile Loads"],
        correct: 0
    },
    {
        question: "Which type of gears are used for shaft axes having an offset?",
        options: ["Hypoid gear", "Spiral Bevel Gear", "Zerol Gear", "Mitre Gear"],
        correct: 0
    },
    {
        question: "The Distortion energy theory is known as _________.",
        options: ["Coulomb-Mohr Theory", "Maximum Shear Stress Theory", "Maximum Normal Stress Theory", "Von Mises Theory"],
        correct: 3
    },
    {
        question: "Which of the following is one of the best methods for increasing a spring fatigue’s life?",
        options: ["Stress Relieving", "Shotpeening", "Tempering", "Hardening"],
        correct: 1
    },
    {
        question: "A hard Material ___________",
        options: ["Yields little before breaking", "Shows high ultimate strength", "Shows Low ultimate strength", "Exhibit high modulus of elasticity"],
        correct: 3
    },
    {
        question: "Which of the following occurs whenever is a disconuity or non-uniformity in an object?",
        options: ["Stress Concentration factor", "Extreme shear stress", "Geometric Stress Concentration", "Fatigue Stress Concentration"],
        correct: 0
    },
    {
        question: "Mechanical impact device that accepts accept material smaller than approximately 4 inches.",
        options: ["Agitator Ball Mills", "Mechanical Impact mills", "Fine Impact Mills", "Ring Roller Mills"],
        correct: 1
    },
    {
        question: "Which of the following is a single crystal grown by vapor disposition?",
        options: ["Glass", "Roving", "Ceramics", "Whisker"],
        correct: 0
    },
    {
        question: "When more than one spring or resisting member shares the load, the relative stiffness is the _______.",
        options: ["Normal Stress", "Rigidity", "Stiffness", "Modulus of Elasticity"],
        correct: 3
    },
    {
        question: "The center to center distance between two consecutive rivets in a row, is called",
        options: ["Margin", "Pitch", "Back pitch", "Diagonal pitch"],
        correct: 1
    },
    {
        question: "The rated life of a bearing varies",
        options: ["Directly as load", "Inversely as square of load", "Inversely as cube of load", "Inversely as fourth power of load"],
        correct: 2
    },
    {
        question: "A cotter joint is used to connect two __________ rods.",
        options: ["Co-axial", "Perpendicular", "Parallel", "None of these"],
        correct: 0
    },
    {
        question: "What account for the backlash of spur gears?",
        options: ["Both module and pitch line velocity", "Pitch line velocity", "Module", "Tooth Profile"],
        correct: 0
    },
    {
        question: "In sulfuric acid, which of the following is suitable for handling acid in concentrations up to 50% and at a temperature including the boiling point?",
        options: ["Hastelloy B", "Inconel X", "Inconel", "Hastelloy A"],
        correct: 0
    },
    {
        question: "Which of the following thermit welding procedure welding procedures, produced high temperature?",
        options: ["The combustion of oxygen and acetylene", "Exothermal chemical reaction", "An electric arc", "An electrical reaction"],
        correct: 1
    },
    {
        question: "The angle between the line of stroke (line of motion of the follower) and the normal to the pitch curve at any point is preferred to as ______ angle.",
        options: ["Prime", "Cam", "Pressure", "Profile"],
        correct: 2
    },
    {
        question: "The Motion of a shaft in a circular hole is an example of ________",
        options: ["Successful Constraint", "Completely Constraint", "Free", "Incompletely Constraint"],
        correct: 3
    },
    {
        question: "Idler Pulley is used for",
        options: ["Increasing Velocity ratio", "For applying tension", "Changing direction of motion belt", "All of these"],
        correct: 1
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
        button.innerHTML = option;
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
