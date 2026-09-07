/* =========================================================
   LM STUDY - SYSTÈME DES COURS
   ========================================================= */


/* =========================================================
   RECHERCHE PRINCIPALE
   ========================================================= */

function rechercherCours() {

    const input =
        document.getElementById("courseSearch");

    if (!input) {
        return;
    }

    const recherche =
        input.value.trim().toLowerCase();

    const cartes =
        document.querySelectorAll(".course-card");

    let trouve = 0;

    cartes.forEach(carte => {

        const texte =
            (carte.dataset.search || "").toLowerCase();

        if (!recherche || texte.includes(recherche)) {

            carte.style.display = "block";
            trouve++;

        } else {

            carte.style.display = "none";

        }

    });


    const message =
        document.getElementById("searchMessage");

    if (!message) {
        return;
    }


    if (!recherche) {

        message.textContent = "";

        return;
    }


    if (trouve > 0) {

        message.innerHTML =
            `✅ ${trouve} résultat(s) trouvé(s).`;

    } else {

        message.innerHTML =
            `❌ Aucun cours trouvé pour "<strong>${recherche}</strong>".`;

    }

}


/* =========================================================
   TOUCHE ENTRÉE - RECHERCHE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const search =
        document.getElementById("courseSearch");

    if (search) {

        search.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                event.preventDefault();

                rechercherCours();

            }

        });

    }

});


/* =========================================================
   FILTRE DES MATIÈRES
   ========================================================= */

function filtrerCours(categorie, bouton) {

    const cartes =
        document.querySelectorAll(".course-card");

    const boutons =
        document.querySelectorAll(".filter");


    boutons.forEach(btn => {

        btn.classList.remove("active");

    });


    if (bouton) {

        bouton.classList.add("active");

    }


    cartes.forEach(carte => {

        const categorieCarte =
            carte.dataset.category;

        if (
            categorie === "Tous" ||
            categorieCarte === categorie
        ) {

            carte.style.display = "block";

        } else {

            carte.style.display = "none";

        }

    });

}


/* =========================================================
   OUVRIR UN COURS
   ========================================================= */

function ouvrirCours(matiere) {

    const viewer =
        document.getElementById("courseViewer");

    const title =
        document.getElementById("viewerTitle");

    const input =
        document.getElementById("specificCourse");

    const result =
        document.getElementById("courseResult");


    if (!viewer || !title) {

        console.error(
            "❌ LM STUDY : courseViewer ou viewerTitle introuvable."
        );

        return;
    }


    title.textContent =
        "Cours de " + matiere;


    viewer.style.display =
        "flex";


    if (input) {

        input.value = "";

    }


    if (result) {

        result.innerHTML = "";

    }


    viewer.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   LANCER / SÉLECTIONNER LE COURS
   ========================================================= */

function lancerCours() {

    const input =
        document.getElementById("specificCourse");

    const result =
        document.getElementById("courseResult");

    const viewerTitle =
        document.getElementById("viewerTitle");


    if (!input || !result || !viewerTitle) {

        console.error(
            "❌ LM STUDY : élément du cours introuvable."
        );

        return;
    }


    const cours =
        input.value.trim();


    const matiere =
        viewerTitle.textContent
            .replace("Cours de ", "")
            .trim();


    /* -----------------------------------------------------
       AUCUN CHAPITRE ÉCRIT
       ----------------------------------------------------- */

    if (!cours) {

        result.innerHTML = `

            <div class="course-launch-result">

                <div class="success-icon">
                    <i class="fas fa-book-open"></i>
                </div>

                <h3>
                    ${matiere}
                </h3>

                <p>
                    Tu peux consulter directement
                    tous les chapitres disponibles.
                </p>

                <button onclick="ouvrirPageCours()">

                    <i class="fas fa-arrow-right"></i>

                    Voir tous les chapitres

                </button>

            </div>

        `;

        return;
    }


    /* -----------------------------------------------------
       CHAPITRE ÉCRIT
       ----------------------------------------------------- */

    result.innerHTML = `

        <div class="course-launch-result">

            <div class="success-icon">
                <i class="fas fa-check"></i>
            </div>

            <h3>
                Cours sélectionné
            </h3>

            <p>
                Chapitre :
                <strong>${cours}</strong>
            </p>

            <p>
                Matière :
                <strong>${matiere}</strong>
            </p>

            <button onclick="ouvrirPageCours()">

                <i class="fas fa-arrow-right"></i>

                Accéder au cours

            </button>

        </div>

    `;

}


/* =========================================================
   OUVRIR LA PAGE DETAIL DU COURS
   ========================================================= */

function ouvrirPageCours() {

    const input =
        document.getElementById("specificCourse");

    const viewerTitle =
        document.getElementById("viewerTitle");


    if (!viewerTitle) {

        console.error(
            "❌ LM STUDY : viewerTitle introuvable."
        );

        return;
    }


    const cours =
        input
            ? input.value.trim()
            : "";


    const matiere =
        viewerTitle.textContent
            .replace("Cours de ", "")
            .trim();


    if (!matiere) {

        alert(
            "❌ Impossible de déterminer la matière."
        );

        return;
    }


    /*
       On transmet :
       - la matière
       - le chapitre s'il existe
    */

    let url =
        "cours-detail.html?matiere=" +
        encodeURIComponent(matiere);


    if (cours) {

        url +=
            "&cours=" +
            encodeURIComponent(cours);

    }


    console.log(
        "➡️ LM STUDY ouverture du cours :",
        url
    );


    window.location.href =
        url;

}


/* =========================================================
   RECHERCHE D'EXERCICES
   ========================================================= */

function ouvrirRechercheExercice() {

    window.location.href =
        "exercices.html";

}


/* =========================================================
   OUVRIR RECHERCHE COURS
   ========================================================= */

function ouvrirRechercheCours() {

    const section =
        document.querySelector(".courses-section");

    const input =
        document.getElementById("courseSearch");


    if (section) {

        window.scrollTo({

            top:
                section.offsetTop - 80,

            behavior:
                "smooth"

        });

    }


    if (input) {

        setTimeout(() => {

            input.focus();

        }, 400);

    }

}


/* =========================================================
   RESSOURCES
   ========================================================= */

function ouvrirRessources() {

    fermerSections();


    const section =
        document.getElementById("resourcesSection");


    if (!section) {

        return;

    }


    section.style.display =
        "flex";


    section.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   CHERCHER RESSOURCE
   ========================================================= */

function chercherRessource() {

    const input =
        document.getElementById("resourceSearch");

    const result =
        document.getElementById("resourceResult");


    if (!input || !result) {

        return;

    }


    const recherche =
        input.value.trim();


    if (!recherche) {

        result.innerHTML = `

            <div class="warning-message">

                ⚠️ Écris ce que tu recherches.

            </div>

        `;

        return;

    }


    result.innerHTML = `

        <div class="resource-result-box">

            <i class="fas fa-magnifying-glass"></i>

            <h3>
                Recherche : ${recherche}
            </h3>

            <p>
                LM STUDY recherche actuellement
                les ressources correspondant à ta demande.
            </p>

            <button onclick="ouvrirRechercheCours()">

                Voir les cours disponibles

            </button>

        </div>

    `;

}


/* =========================================================
   APPRENDRE
   ========================================================= */

function ouvrirApprendre() {

    fermerSections();


    const section =
        document.getElementById("learningSection");


    if (!section) {

        return;

    }


    section.style.display =
        "flex";


    section.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   CHERCHER APPRENTISSAGE
   ========================================================= */

function chercherApprentissage() {

    const input =
        document.getElementById("learningSearch");

    const result =
        document.getElementById("learningResult");


    if (!input || !result) {

        return;

    }


    const recherche =
        input.value.trim();


    if (!recherche) {

        result.innerHTML = `

            <div class="warning-message">

                ⚠️ Indique ce que tu veux apprendre.

            </div>

        `;

        return;

    }


    result.innerHTML = `

        <div class="resource-result-box">

            <i class="fas fa-lightbulb"></i>

            <h3>
                Objectif : ${recherche}
            </h3>

            <p>
                Nous allons préparer ton espace
                d'apprentissage pour ce sujet.
            </p>

            <button onclick="ouvrirRechercheCours()">

                Explorer les cours

            </button>

        </div>

    `;

}


/* =========================================================
   FERMER LE VISUALISEUR
   ========================================================= */

function fermerViewer() {

    const viewer =
        document.getElementById("courseViewer");


    if (viewer) {

        viewer.style.display =
            "none";

    }

}


/* =========================================================
   FERMER LES SECTIONS
   ========================================================= */

function fermerSections() {

    const resources =
        document.getElementById("resourcesSection");

    const learning =
        document.getElementById("learningSection");


    if (resources) {

        resources.style.display =
            "none";

    }


    if (learning) {

        learning.style.display =
            "none";

    }

}