// =====================================================
// 🌍 LM STUDY - SYSTÈME DE LANGUES
// =====================================================

const LM_LANGUES = {

    fr: {
        accueil: "Accueil",
        cours: "Cours",
        exercices: "Exercices",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profil",
        contact: "Contact",
        commencer: "Commencer",
        rechercher: "Rechercher",
        envoyer: "Envoyer",
        retour: "Retour",
        suivant: "Suivant",
        precedent: "Précédent",
        fermer: "Fermer",
        bienvenue: "Bienvenue sur LM STUDY",
        apprendre: "Apprendre aujourd'hui pour construire demain."
    },

    en: {
        accueil: "Home",
        cours: "Courses",
        exercices: "Exercises",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profile",
        contact: "Contact",
        commencer: "Start",
        rechercher: "Search",
        envoyer: "Send",
        retour: "Back",
        suivant: "Next",
        precedent: "Previous",
        fermer: "Close",
        bienvenue: "Welcome to LM STUDY",
        apprendre: "Learn today to build tomorrow."
    },

    es: {
        accueil: "Inicio",
        cours: "Cursos",
        exercices: "Ejercicios",
        quiz: "Quiz",
        dashboard: "Panel",
        profil: "Perfil",
        contact: "Contacto",
        commencer: "Comenzar",
        rechercher: "Buscar",
        envoyer: "Enviar",
        retour: "Volver",
        suivant: "Siguiente",
        precedent: "Anterior",
        fermer: "Cerrar",
        bienvenue: "Bienvenido a LM STUDY",
        apprendre: "Aprende hoy para construir el mañana."
    },

    it: {
        accueil: "Home",
        cours: "Corsi",
        exercices: "Esercizi",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profilo",
        contact: "Contatti",
        commencer: "Inizia",
        rechercher: "Cerca",
        envoyer: "Invia",
        retour: "Indietro",
        suivant: "Successivo",
        precedent: "Precedente",
        fermer: "Chiudi",
        bienvenue: "Benvenuto su LM STUDY",
        apprendre: "Impara oggi per costruire il domani."
    },

    pt: {
        accueil: "Início",
        cours: "Cursos",
        exercices: "Exercícios",
        quiz: "Quiz",
        dashboard: "Painel",
        profil: "Perfil",
        contact: "Contato",
        commencer: "Começar",
        rechercher: "Pesquisar",
        envoyer: "Enviar",
        retour: "Voltar",
        suivant: "Próximo",
        precedent: "Anterior",
        fermer: "Fechar",
        bienvenue: "Bem-vindo ao LM STUDY",
        apprendre: "Aprenda hoje para construir o amanhã."
    },

    zh: {
        accueil: "首页",
        cours: "课程",
        exercices: "练习",
        quiz: "测验",
        dashboard: "控制面板",
        profil: "个人资料",
        contact: "联系我们",
        commencer: "开始",
        rechercher: "搜索",
        envoyer: "发送",
        retour: "返回",
        suivant: "下一步",
        precedent: "上一步",
        fermer: "关闭",
        bienvenue: "欢迎来到 LM STUDY",
        apprendre: "今天学习，为明天创造未来。"
    },

    de: {
        accueil: "Startseite",
        cours: "Kurse",
        exercices: "Übungen",
        quiz: "Quiz",
        dashboard: "Dashboard",
        profil: "Profil",
        contact: "Kontakt",
        commencer: "Starten",
        rechercher: "Suchen",
        envoyer: "Senden",
        retour: "Zurück",
        suivant: "Weiter",
        precedent: "Zurück",
        fermer: "Schließen",
        bienvenue: "Willkommen bei LM STUDY",
        apprendre: "Lerne heute, um morgen deine Zukunft zu gestalten."
    },

    ar: {
        accueil: "الرئيسية",
        cours: "الدروس",
        exercices: "التمارين",
        quiz: "اختبار",
        dashboard: "لوحة التحكم",
        profil: "الملف الشخصي",
        contact: "اتصل بنا",
        commencer: "ابدأ",
        rechercher: "بحث",
        envoyer: "إرسال",
        retour: "رجوع",
        suivant: "التالي",
        precedent: "السابق",
        fermer: "إغلاق",
        bienvenue: "مرحباً بك في LM STUDY",
        apprendre: "تعلم اليوم لبناء مستقبل أفضل غداً."
    },

    sw: {
        accueil: "Nyumbani",
        cours: "Masomo",
        exercices: "Mazoezi",
        quiz: "Jaribio",
        dashboard: "Dashibodi",
        profil: "Wasifu",
        contact: "Mawasiliano",
        commencer: "Anza",
        rechercher: "Tafuta",
        envoyer: "Tuma",
        retour: "Rudi",
        suivant: "Ifuatayo",
        precedent: "Iliyotangulia",
        fermer: "Funga",
        bienvenue: "Karibu LM STUDY",
        apprendre: "Jifunze leo ili kujenga kesho."
    }
};


// =====================================================
// 🔄 APPLIQUER LA LANGUE
// =====================================================

function appliquerLangue(langue) {

    const traduction = LM_LANGUES[langue];

    if (!traduction) {
        langue = "fr";
    }

    const textes = LM_LANGUES[langue];

    // Tous les éléments possédant data-i18n
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const cle = element.getAttribute("data-i18n");

        if (textes[cle]) {
            element.textContent = textes[cle];
        }

    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const cle = element.getAttribute("data-i18n-placeholder");

        if (textes[cle]) {
            element.placeholder = textes[cle];
        }

    });

    // Direction arabe
    if (langue === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    document.documentElement.lang = langue;

    // Sauvegarder
    localStorage.setItem("lmStudyLangue", langue);

    console.log("🌍 LM STUDY - langue :", langue);
}


// =====================================================
// 🎛️ SELECTEUR DE LANGUE
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("languageSelect");

    if (!select) {
        console.log("ℹ️ Sélecteur de langue absent sur cette page.");
        return;
    }

    const langueSauvegardee =
        localStorage.getItem("lmStudyLangue") || "fr";

    select.value = langueSauvegardee;

    appliquerLangue(langueSauvegardee);

    select.addEventListener("change", function () {

        appliquerLangue(this.value);

    });console.log("🌍 languages.js fonctionne !");


});