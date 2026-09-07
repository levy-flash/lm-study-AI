const quizData = {

    math: {
        name: "📐 Mathématiques",
        questions: [
            {
                question: "Combien font 8 × 7 ?",
                answers: ["54", "56", "64", "48"],
                correct: 1
            },
            {
                question: "Quelle est la valeur de x dans 2x + 6 = 14 ?",
                answers: ["2", "3", "4", "5"],
                correct: 2
            },
            {
                question: "Combien font 15 + 27 ?",
                answers: ["32", "40", "42", "45"],
                correct: 2
            }
        ]
    },

    physique: {
        name: "⚡ Physique",
        questions: [
            {
                question: "Quelle est l'unité SI de la force ?",
                answers: ["Joule", "Newton", "Watt", "Pascal"],
                correct: 1
            },
            {
                question: "Quelle grandeur se mesure en volts ?",
                answers: ["Courant électrique", "Tension électrique", "Résistance", "Puissance"],
                correct: 1
            },
            {
                question: "Quelle est la vitesse approximative de la lumière dans le vide ?",
                answers: ["300 000 km/s", "30 000 km/s", "3 000 km/s", "3 000 000 km/s"],
                correct: 0
            }
        ]
    },

    chimie: {
        name: "🧪 Chimie",
        questions: [
            {
                question: "Quelle est la formule chimique de l'eau ?",
                answers: ["CO₂", "O₂", "H₂O", "NaCl"],
                correct: 2
            },
            {
                question: "Quel est le symbole chimique de l'oxygène ?",
                answers: ["O", "Ox", "Og", "C"],
                correct: 0
            },
            {
                question: "Quel est le symbole chimique du sodium ?",
                answers: ["S", "So", "Na", "Sd"],
                correct: 2
            }
        ]
    },

    biologie: {
        name: "🧬 Biologie",
        questions: [
            {
                question: "Quelle est l'unité fondamentale du vivant ?",
                answers: ["L'organe", "La cellule", "Le tissu", "Le système"],
                correct: 1
            },
            {
                question: "Quel organe pompe le sang dans le corps humain ?",
                answers: ["Le foie", "Le poumon", "Le cœur", "Le rein"],
                correct: 2
            },
            {
                question: "Quel gaz les plantes utilisent-elles principalement pour la photosynthèse ?",
                answers: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"],
                correct: 2
            }
        ]
    },

    informatique: {
        name: "💻 Informatique",
        questions: [
            {
                question: "Que signifie CPU ?",
                answers: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Program Utility",
                    "Computer Processing User"
                ],
                correct: 0
            },
            {
                question: "Quel langage est principalement utilisé pour structurer une page web ?",
                answers: ["HTML", "Python", "SQL", "C"],
                correct: 0
            },
            {
                question: "Quel composant conserve les données même lorsque l'ordinateur est éteint ?",
                answers: ["RAM", "SSD", "CPU", "Ventilateur"],
                correct: 1
            }
        ]
    },

    francais: {
        name: "🇫🇷 Français",
        questions: [
            {
                question: "Quel est le contraire de « rapide » ?",
                answers: ["Lent", "Fort", "Grand", "Court"],
                correct: 0
            },
            {
                question: "Quel mot est un verbe ?",
                answers: ["Maison", "Courir", "Bleu", "Rapidement"],
                correct: 1
            },
            {
                question: "Quel est le pluriel de « cheval » ?",
                answers: ["Chevals", "Chevaux", "Chevaus", "Chevales"],
                correct: 1
            }
        ]
    },

    anglais: {
        name: "🇬🇧 Anglais",
        questions: [
            {
                question: "Que signifie « book » en français ?",
                answers: ["Table", "Livre", "Stylo", "Maison"],
                correct: 1
            },
            {
                question: "Quelle est la traduction de « Bonjour » ?",
                answers: ["Goodbye", "Thanks", "Hello", "Please"],
                correct: 2
            },
            {
                question: "Quel est le pluriel de « child » ?",
                answers: ["Childs", "Childes", "Children", "Childrens"],
                correct: 2
            }
        ]
    },

    histoire: {
        name: "🌍 Histoire-Géographie",
        questions: [
            {
                question: "Quel est le plus grand continent du monde par superficie ?",
                answers: ["Afrique", "Europe", "Asie", "Océanie"],
                correct: 2
            },
            {
                question: "Quelle est la capitale du Cameroun ?",
                answers: ["Douala", "Yaoundé", "Bafoussam", "Garoua"],
                correct: 1
            },
            {
                question: "Sur quel continent se trouve le Cameroun ?",
                answers: ["Asie", "Afrique", "Europe", "Amérique"],
                correct: 1
            }
        ]
    },

    philosophie: {
        name: "🧠 Philosophie",
        questions: [
            {
                question: "Quel philosophe est associé à la célèbre formule « Je pense, donc je suis » ?",
                answers: ["Platon", "Aristote", "Descartes", "Socrate"],
                correct: 2
            },
            {
                question: "La philosophie cherche notamment à développer :",
                answers: [
                    "La réflexion critique",
                    "La mémoire uniquement",
                    "La force physique",
                    "La vitesse"
                ],
                correct: 0
            },
            {
                question: "Socrate est un philosophe de quelle période ?",
                answers: [
                    "Antiquité",
                    "Moyen Âge",
                    "Époque moderne",
                    "Époque contemporaine"
                ],
                correct: 0
            }
        ]
    },

    culture: {
        name: "🌎 Culture générale",
        questions: [
            {
                question: "Combien y a-t-il généralement de continents dans le modèle scolaire à sept continents ?",
                answers: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Quelle planète est la plus proche du Soleil ?",
                answers: ["Vénus", "Mars", "Mercure", "Jupiter"],
                correct: 2
            },
            {
                question: "Quel est le plus grand océan de la Terre ?",
                answers: [
                    "Océan Atlantique",
                    "Océan Indien",
                    "Océan Arctique",
                    "Océan Pacifique"
                ],
                correct: 3
            }
        ]
    }
};


let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


function startQuiz(subject) {

    currentQuiz = quizData[subject];

    if (!currentQuiz) {
        alert("Quiz indisponible.");
        return;
    }

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("subjects").style.display = "none";
    document.getElementById("quizArea").style.display = "block";
    document.getElementById("resultArea").style.display = "none";

    document.getElementById("subjectName").textContent = currentQuiz.name;

    afficherQuestion();
}


function afficherQuestion() {

    const question = currentQuiz.questions[currentQuestion];

    selectedAnswer = null;

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1}/${currentQuiz.questions.length}`;

    document.getElementById("scoreDisplay").textContent =
        `Score : ${score}`;

    document.getElementById("questionText").textContent =
        question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.onclick = function () {

            document.querySelectorAll(".answer").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            selectedAnswer = index;
        };

        answersContainer.appendChild(button);
    });
}


function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Choisis une réponse avant de continuer.");
        return;
    }

    const question = currentQuiz.questions[currentQuestion];

    if (selectedAnswer === question.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < currentQuiz.questions.length) {

        afficherQuestion();

    } else {

        afficherResultat();
    }
}


function afficherResultat() {

    document.getElementById("quizArea").style.display = "none";
    document.getElementById("resultArea").style.display = "block";

    const total = currentQuiz.questions.length;

    document.getElementById("finalScore").textContent =
        `${score} / ${total}`;

    let message = "";

    if (score === total) {
        message = "🏆 Excellent ! Toutes les réponses sont correctes.";
    } else if (score >= total / 2) {
        message = "👏 Bravo ! Continue tes efforts.";
    } else {
        message = "💪 Continue à apprendre et réessaie !";
    }

    document.getElementById("resultMessage").textContent = message;
}


function backToSubjects() {

    document.getElementById("subjects").style.display = "grid";
    document.getElementById("quizArea").style.display = "none";
    document.getElementById("resultArea").style.display = "none";

    currentQuiz = null;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
}