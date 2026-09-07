// ======================================================
// 🌍 LM STUDY - SYSTÈME MULTILINGUE
// ======================================================

const traductions = {

    fr: {
        accueil: "Accueil",
        cours: "Cours",
        exercices: "Exercices",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profil",
        contact: "Contact",
        envoyer: "Envoyer",
        reflexion: "Réflexion...",
        bienvenue: "👋 Bonjour ! Je suis LM STUDY AI.",
        placeholder: "Exemple : Explique-moi la loi d'Ohm..."
    },

    en: {
        accueil: "Home",
        cours: "Courses",
        exercices: "Exercises",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profile",
        contact: "Contact",
        envoyer: "Send",
        reflexion: "Thinking...",
        bienvenue: "👋 Hello! I am LM STUDY AI.",
        placeholder: "Example: Explain Ohm's law to me..."
    },

    es: {
        accueil: "Inicio",
        cours: "Cursos",
        exercices: "Ejercicios",
        quiz: "Quiz",
        dashboard: "Panel",
        profil: "Perfil",
        contact: "Contacto",
        envoyer: "Enviar",
        reflexion: "Pensando...",
        bienvenue: "👋 ¡Hola! Soy LM STUDY AI.",
        placeholder: "Ejemplo: Explícame la ley de Ohm..."
    },

    it: {
        accueil: "Home",
        cours: "Corsi",
        exercices: "Esercizi",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profilo",
        contact: "Contatti",
        envoyer: "Invia",
        reflexion: "Sto pensando...",
        bienvenue: "👋 Ciao! Sono LM STUDY AI.",
        placeholder: "Esempio: Spiegami la legge di Ohm..."
    },

    pt: {
        accueil: "Início",
        cours: "Cursos",
        exercices: "Exercícios",
        quiz: "Quiz",
        dashboard: "Painel",
        profil: "Perfil",
        contact: "Contato",
        envoyer: "Enviar",
        reflexion: "Pensando...",
        bienvenue: "👋 Olá! Eu sou o LM STUDY AI.",
        placeholder: "Exemplo: Explique a lei de Ohm..."
    },

    de: {
        accueil: "Startseite",
        cours: "Kurse",
        exercices: "Übungen",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profil",
        contact: "Kontakt",
        envoyer: "Senden",
        reflexion: "Denke nach...",
        bienvenue: "👋 Hallo! Ich bin LM STUDY AI.",
        placeholder: "Beispiel: Erkläre mir das Ohmsche Gesetz..."
    },

    zh: {
        accueil: "首页",
        cours: "课程",
        exercices: "练习",
        quiz: "测验",
        dashboard: "控制面板",
        profil: "个人资料",
        contact: "联系我们",
        envoyer: "发送",
        reflexion: "思考中...",
        bienvenue: "👋 你好！我是 LM STUDY AI。",
        placeholder: "例如：请解释欧姆定律..."
    },

    ar: {
        accueil: "الرئيسية",
        cours: "الدروس",
        exercices: "التمارين",
        quiz: "اختبار",
        dashboard: "لوحة التحكم",
        profil: "الملف الشخصي",
        contact: "اتصل بنا",
        envoyer: "إرسال",
        reflexion: "جارٍ التفكير...",
        bienvenue: "👋 مرحباً! أنا LM STUDY AI.",
        placeholder: "مثال: اشرح لي قانون أوم..."
    },

    sw: {
        accueil: "Nyumbani",
        cours: "Masomo",
        exercices: "Mazoezi",
        quiz: "Jaribio",
        dashboard: "Dashibodi",
        profil: "Wasifu",
        contact: "Mawasiliano",
        envoyer: "Tuma",
        reflexion: "Inafikiria...",
        bienvenue: "👋 Habari! Mimi ni LM STUDY AI.",
        placeholder: "Mfano: Nielezee sheria ya Ohm..."
    }
};


// ======================================================
// 🌍 CHANGEMENT DE LANGUE
// ======================================================

function changerLangue(langue) {

    const t = traductions[langue];

    if (!t) {
        console.error("❌ Langue inconnue :", langue);
        return;
    }

    // Mémoriser la langue choisie
    localStorage.setItem("lmStudyLangue", langue);

    // Navigation
    const liens = document.querySelectorAll("nav a");

    liens.forEach(lien => {

        const page = lien.getAttribute("href");

        if (!page) return;

        if (page.includes("index.html")) {
            lien.textContent = t.accueil;
        }

        else if (page.includes("cours.html")) {
            lien.textContent = t.cours;
        }

        else if (page.includes("exercices.html")) {
            lien.textContent = t.exercices;
        }

        else if (page.includes("quiz.html")) {
            lien.textContent = t.quiz;
        }

        else if (page.includes("dashboard.html")) {
            lien.textContent = t.dashboard;
        }

        else if (page.includes("profil.html")) {
            lien.textContent = t.profil;
        }

        else if (page.includes("contact.html")) {
            lien.textContent = t.contact;
        }
    });


    // Champ de question de LM STUDY AI
    const input = document.getElementById("aiQuestion");

    if (input) {
        input.placeholder = t.placeholder;
    }


    // Bouton envoyer
    const boutonAI = document.getElementById("askAI");

    if (boutonAI && !boutonAI.disabled) {

        boutonAI.innerHTML =
            '<i class="fas fa-paper-plane"></i> ' + t.envoyer;
    }


    // Message de bienvenue de l'IA
    const messageBienvenue =
        document.querySelector(".welcome-ai");

    if (messageBienvenue) {
        messageBienvenue.innerHTML =
            t.bienvenue;
    }


    // Direction du texte pour l'arabe
    if (langue === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    // Langue HTML
    document.documentElement.lang = langue;

    console.log("🌍 LM STUDY : langue changée →", langue);
}


// ======================================================
// 🔄 CHARGER LA LANGUE SAUVEGARDÉE
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const selectLangue =
        document.getElementById("languageSelect");

    const langueSauvegardee =
        localStorage.getItem("lmStudyLangue") || "fr";

    if (selectLangue) {

        selectLangue.value = langueSauvegardee;

        selectLangue.addEventListener("change", function () {

            changerLangue(this.value);

        });
    }

    changerLangue(langueSauvegardee);
});


// ======================================================
// 🤖 LM STUDY AI
// ======================================================

const userInput = document.getElementById("aiQuestion");
const btnEnvoyer = document.getElementById("askAI");
const chatBox = document.getElementById("aiResponse");

if (userInput && btnEnvoyer && chatBox) {

    function afficherMessage(auteur, texte) {

        const div = document.createElement("div");

        div.style.margin = "10px 0";

        const strong = document.createElement("strong");
        strong.textContent = auteur + " :";

        const contenu = document.createElement("span");
        contenu.textContent = " " + texte;

        div.appendChild(strong);
        div.appendChild(contenu);

        chatBox.appendChild(div);

        chatBox.scrollTop = chatBox.scrollHeight;
    }


    async function envoyerMessage() {

        const message = userInput.value.trim();

        if (!message) {
            return;
        }

        afficherMessage("👨‍🎓 Toi", message);

        userInput.value = "";

        btnEnvoyer.disabled = true;

        const langue =
            localStorage.getItem("lmStudyLangue") || "fr";

        const texteReflexion =
            traductions[langue]?.reflexion || "Réflexion...";

        btnEnvoyer.textContent = texteReflexion;


        try {

            const res = await fetch("/api/chat", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    message: message
                })

            });


            const data = await res.json();


            if (res.status === 429) {

                afficherMessage(
                    "🤖 LM STUDY AI",
                    "⚠️ La limite de demandes de l'IA est actuellement atteinte. Réessaie plus tard."
                );

                return;
            }


            if (!res.ok) {

                afficherMessage(
                    "🤖 LM STUDY AI",
                    "❌ Une erreur est survenue avec LM STUDY AI."
                );

                return;
            }


            if (data.answer) {

                afficherMessage(
                    "🤖 LM STUDY AI",
                    data.answer
                );

            } else {

                afficherMessage(
                    "🤖 LM STUDY AI",
                    "❌ L'IA n'a pas renvoyé de réponse."
                );
            }

        }

        catch (error) {

            console.error("❌ Erreur :", error);

            afficherMessage(
                "🤖 LM STUDY AI",
                "❌ Impossible de contacter le serveur."
            );

        }

        finally {

            btnEnvoyer.disabled = false;

            const langueActuelle =
                localStorage.getItem("lmStudyLangue") || "fr";

            const texteEnvoyer =
                traductions[langueActuelle]?.envoyer || "Envoyer";

            btnEnvoyer.innerHTML =
                '<i class="fas fa-paper-plane"></i> ' +
                texteEnvoyer;

            userInput.focus();
        }
    }


    btnEnvoyer.addEventListener(
        "click",
        envoyerMessage
    );


    userInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                envoyerMessage();
            }
        }
    );

}


// ======================================================
// 📝 ANCIENS EXERCICES
// ======================================================

function commencerExercice(numero) {

    const exercice =
        document.getElementById("exercice-" + numero);

    if (exercice) {

        exercice.style.display = "block";

        exercice.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        alert(
            "L'exercice n°" +
            numero +
            " est prêt à commencer !"
        );
    }
}


function verifierReponse(numero) {

    const champ =
        document.getElementById("reponse" + numero);

    const resultat =
        document.getElementById("resultat" + numero);

    if (!champ || !resultat) {
        return;
    }

    const reponse =
        champ.value.trim();


    if (numero === 1) {

        if (reponse === "3") {

            resultat.textContent =
                "✅ Bonne réponse !";

        } else {

            resultat.textContent =
                "❌ Essaie encore.";
        }
    }
}