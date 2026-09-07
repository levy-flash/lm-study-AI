/* =========================================================
   LM STUDY
   COURS DETAIL - TOUTES LES MATIERES
   ========================================================= */


/* =========================================================
   PARAMETRES DE L'URL
   ========================================================= */

const params = new URLSearchParams(window.location.search);

const matiereSelectionnee =
    params.get("matiere") || "Mathématiques";

const coursRecherche =
    params.get("cours") || "";


/* =========================================================
   BASE COMPLETE DES COURS
   ========================================================= */

const coursData = {

    /* =====================================================
       MATHEMATIQUES
       ===================================================== */

    "Mathématiques": {

        description:
            "Découvre les notions essentielles des mathématiques et progresse étape par étape.",

        lessons: [

            {
                title: "Les nombres réels",
                body: `
                    <h3>Définition</h3>
                    <p>
                        Les nombres réels regroupent les nombres rationnels
                        et irrationnels.
                    </p>

                    <h3>Exemples</h3>
                    <p>2, -5, 3,14 et √2 sont des nombres réels.</p>

                    <div class="formula-box">
                        ℝ = ensemble des nombres réels
                    </div>
                `
            },

            {
                title: "Les fractions",
                body: `
                    <h3>Définition</h3>
                    <p>
                        Une fraction représente le quotient de deux nombres.
                    </p>

                    <div class="formula-box">
                        a / b avec b ≠ 0
                    </div>

                    <p>
                        Exemple : 3/4 signifie trois quarts.
                    </p>
                `
            },

            {
                title: "Les puissances",
                body: `
                    <h3>Principe</h3>
                    <p>
                        Une puissance permet d'écrire plusieurs multiplications
                        identiques de manière compacte.
                    </p>

                    <div class="formula-box">
                        a² = a × a
                    </div>

                    <p>
                        Exemple : 5² = 25.
                    </p>
                `
            },

            {
                title: "Les racines carrées",
                body: `
                    <h3>Définition</h3>
                    <p>
                        La racine carrée d'un nombre positif est le nombre
                        qui, multiplié par lui-même, donne ce nombre.
                    </p>

                    <div class="formula-box">
                        √25 = 5
                    </div>
                `
            },

            {
                title: "Les équations",
                body: `
                    <h3>Principe</h3>
                    <p>
                        Résoudre une équation consiste à trouver la valeur
                        inconnue qui rend l'égalité vraie.
                    </p>

                    <div class="formula-box">
                        2x + 4 = 10<br>
                        2x = 6<br>
                        x = 3
                    </div>
                `
            },

            {
                title: "Les inéquations",
                body: `
                    <h3>Définition</h3>
                    <p>
                        Une inéquation compare deux expressions à l'aide de
                        &lt;, &gt;, ≤ ou ≥.
                    </p>

                    <div class="formula-box">
                        x + 2 &gt; 5<br>
                        x &gt; 3
                    </div>
                `
            },

            {
                title: "Les fonctions",
                body: `
                    <h3>Définition</h3>
                    <p>
                        Une fonction associe à chaque valeur d'entrée
                        une valeur de sortie.
                    </p>

                    <div class="formula-box">
                        f(x) = 2x + 1
                    </div>
                `
            },

            {
                title: "Fonction affine",
                body: `
                    <h3>Forme générale</h3>

                    <div class="formula-box">
                        f(x) = ax + b
                    </div>

                    <p>
                        a est le coefficient directeur et b est l'ordonnée
                        à l'origine.
                    </p>
                `
            },

            {
                title: "Les pourcentages",
                body: `
                    <h3>Calcul d'un pourcentage</h3>

                    <div class="formula-box">
                        Pourcentage = (partie / total) × 100
                    </div>

                    <p>
                        Exemple : 20 % de 250 = 50.
                    </p>
                `
            },

            {
                title: "La proportionnalité",
                body: `
                    <h3>Principe</h3>
                    <p>
                        Deux grandeurs sont proportionnelles lorsqu'elles
                        évoluent selon un même coefficient.
                    </p>

                    <div class="formula-box">
                        y = kx
                    </div>
                `
            },

            {
                title: "Les statistiques",
                body: `
                    <h3>Moyenne</h3>

                    <div class="formula-box">
                        Moyenne = somme des valeurs / nombre de valeurs
                    </div>

                    <p>
                        Les statistiques permettent d'étudier et de résumer
                        des données.
                    </p>
                `
            },

            {
                title: "La géométrie",
                body: `
                    <h3>Notions importantes</h3>

                    <p>
                        La géométrie étudie les figures, les longueurs,
                        les angles, les surfaces et les volumes.
                    </p>

                    <div class="formula-box">
                        Aire rectangle = longueur × largeur
                    </div>
                `
            },

            {
                title: "Le théorème de Pythagore",
                body: `
                    <h3>Dans un triangle rectangle</h3>

                    <div class="formula-box">
                        a² + b² = c²
                    </div>

                    <p>
                        c représente l'hypoténuse.
                    </p>
                `
            },

            {
                title: "La trigonométrie",
                body: `
                    <h3>Dans un triangle rectangle</h3>

                    <div class="formula-box">
                        sin(θ) = côté opposé / hypoténuse<br>
                        cos(θ) = côté adjacent / hypoténuse<br>
                        tan(θ) = côté opposé / côté adjacent
                    </div>
                `
            },

            {
                title: "Les dérivées",
                body: `
                    <h3>Définition</h3>

                    <p>
                        La dérivée permet notamment d'étudier les variations
                        d'une fonction.
                    </p>

                    <div class="formula-box">
                        Si f(x) = x² alors f'(x) = 2x
                    </div>
                `
            }

        ]
    },


    /* =====================================================
       PHYSIQUE
       ===================================================== */

    "Physique": {

        description:
            "Comprends les phénomènes physiques grâce aux lois, aux formules et aux expériences.",

        lessons: [

            {
                title: "Introduction à la physique",
                body: `
                    <h3>Qu'est-ce que la physique ?</h3>
                    <p>
                        La physique étudie les phénomènes naturels,
                        la matière, l'énergie et leurs interactions.
                    </p>
                `
            },

            {
                title: "Les unités de mesure",
                body: `
                    <p>
                        Le Système international utilise notamment le mètre,
                        le kilogramme et la seconde.
                    </p>

                    <div class="formula-box">
                        Longueur → m<br>
                        Masse → kg<br>
                        Temps → s
                    </div>
                `
            },

            {
                title: "La vitesse",
                body: `
                    <div class="formula-box">
                        v = d / t
                    </div>

                    <p>
                        v est la vitesse, d la distance et t le temps.
                    </p>

                    <p>
                        Exemple : 100 km parcourus en 2 h donnent
                        une vitesse moyenne de 50 km/h.
                    </p>
                `
            },

            {
                title: "Le mouvement",
                body: `
                    <p>
                        Un objet est en mouvement lorsque sa position
                        change par rapport à un référentiel.
                    </p>

                    <h3>Exemple</h3>
                    <p>
                        Une voiture qui se déplace sur une route est en mouvement
                        par rapport à la route.
                    </p>
                `
            },

            {
                title: "Les forces",
                body: `
                    <p>
                        Une force peut modifier le mouvement d'un objet
                        ou le déformer.
                    </p>

                    <div class="formula-box">
                        F = m × a
                    </div>
                `
            },

            {
                title: "La masse et le poids",
                body: `
                    <div class="formula-box">
                        P = m × g
                    </div>

                    <p>
                        Le poids est une force exercée par la gravité.
                    </p>
                `
            },

            {
                title: "Le travail d'une force",
                body: `
                    <p>
                        Le travail mesure l'énergie transférée par une force
                        lorsqu'un objet se déplace.
                    </p>

                    <div class="formula-box">
                        W = F × d
                    </div>
                `
            },

            {
                title: "L'énergie",
                body: `
                    <p>
                        L'énergie permet de produire une transformation
                        ou d'effectuer un travail.
                    </p>

                    <p>
                        Elle peut être mécanique, thermique, électrique,
                        chimique, etc.
                    </p>
                `
            },

            {
                title: "La pression",
                body: `
                    <div class="formula-box">
                        P = F / S
                    </div>

                    <p>
                        La pression correspond à une force exercée
                        sur une surface.
                    </p>
                `
            },

            {
                title: "La chaleur",
                body: `
                    <p>
                        La chaleur est un transfert d'énergie thermique
                        entre deux systèmes.
                    </p>
                `
            },

            {
                title: "La température",
                body: `
                    <p>
                        La température indique l'état thermique d'un corps.
                    </p>

                    <div class="formula-box">
                        Unité SI : kelvin (K)
                    </div>
                `
            },

            {
                title: "L'électricité",
                body: `
                    <p>
                        L'électricité concerne les charges électriques
                        et leurs déplacements.
                    </p>

                    <div class="formula-box">
                        I = intensité du courant<br>
                        U = tension<br>
                        R = résistance
                    </div>
                `
            },

            {
                title: "La loi d'Ohm",
                body: `
                    <div class="formula-box">
                        U = R × I
                    </div>

                    <p>
                        Exemple : si R = 10 Ω et I = 2 A,
                        alors U = 20 V.
                    </p>
                `
            },

            {
                title: "Les circuits électriques",
                body: `
                    <p>
                        Un circuit électrique permet au courant de circuler
                        lorsqu'il est fermé.
                    </p>

                    <p>
                        Il peut contenir une source, des conducteurs,
                        des interrupteurs et des récepteurs.
                    </p>
                `
            },

            {
                title: "La lumière",
                body: `
                    <p>
                        La lumière est un rayonnement électromagnétique
                        perceptible par l'œil humain.
                    </p>

                    <div class="formula-box">
                        c ≈ 3 × 10⁸ m/s
                    </div>
                `
            }

        ]
    },


    /* =====================================================
       CHIMIE
       ===================================================== */

    "Chimie": {

        description:
            "Explore la matière, les molécules, les réactions chimiques et les transformations.",

        lessons: [

            {
                title: "Introduction à la chimie",
                body: `
                    <p>
                        La chimie étudie la matière, sa composition,
                        ses propriétés et ses transformations.
                    </p>
                `
            },

            {
                title: "La matière",
                body: `
                    <p>
                        La matière est tout ce qui possède une masse
                        et occupe un volume.
                    </p>
                `
            },

            {
                title: "Les états de la matière",
                body: `
                    <p>
                        Les principaux états sont solide, liquide et gaz.
                    </p>
                `
            },

            {
                title: "Les atomes",
                body: `
                    <p>
                        Un atome est constitué d'un noyau et d'électrons.
                    </p>

                    <p>
                        Le noyau contient des protons et des neutrons.
                    </p>
                `
            },

            {
                title: "Les molécules",
                body: `
                    <p>
                        Une molécule est un assemblage d'atomes liés entre eux.
                    </p>

                    <div class="formula-box">
                        H₂O = eau
                    </div>
                `
            },

            {
                title: "Les éléments chimiques",
                body: `
                    <p>
                        Chaque élément chimique est caractérisé par son
                        numéro atomique.
                    </p>

                    <p>
                        Exemple : H représente l'hydrogène.
                    </p>
                `
            },

            {
                title: "Le tableau périodique",
                body: `
                    <p>
                        Le tableau périodique organise les éléments chimiques
                        selon leur numéro atomique et leurs propriétés.
                    </p>
                `
            },

            {
                title: "Les liaisons chimiques",
                body: `
                    <p>
                        Les atomes peuvent s'associer grâce à différentes
                        liaisons chimiques.
                    </p>
                `
            },

            {
                title: "Les réactions chimiques",
                body: `
                    <p>
                        Une réaction chimique transforme des réactifs
                        en produits.
                    </p>

                    <div class="formula-box">
                        Réactifs → Produits
                    </div>
                `
            },

            {
                title: "Équilibrage des équations",
                body: `
                    <p>
                        Une équation chimique doit respecter la conservation
                        des atomes.
                    </p>

                    <div class="formula-box">
                        2H₂ + O₂ → 2H₂O
                    </div>
                `
            },

            {
                title: "Les acides et les bases",
                body: `
                    <p>
                        Une solution acide possède un pH inférieur à 7.
                        Une solution basique possède un pH supérieur à 7.
                    </p>
                `
            },

            {
                title: "Le pH",
                body: `
                    <div class="formula-box">
                        pH &lt; 7 → acide<br>
                        pH = 7 → neutre<br>
                        pH &gt; 7 → basique
                    </div>
                `
            },

            {
                title: "Les solutions",
                body: `
                    <p>
                        Une solution est obtenue lorsqu'un soluté
                        est dissous dans un solvant.
                    </p>
                `
            },

            {
                title: "La concentration",
                body: `
                    <div class="formula-box">
                        C = m / V
                    </div>

                    <p>
                        C est la concentration massique,
                        m la masse du soluté et V le volume de solution.
                    </p>
                `
            },

            {
                title: "La chimie organique",
                body: `
                    <p>
                        La chimie organique étudie principalement
                        les composés contenant du carbone.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       BIOLOGIE
       ===================================================== */

    "Biologie": {

        description:
            "Découvre le fonctionnement des êtres vivants, des cellules et du corps humain.",

        lessons: [

            {
                title: "Introduction à la biologie",
                body: `
                    <p>
                        La biologie est la science qui étudie les êtres vivants
                        et leurs interactions.
                    </p>
                `
            },

            {
                title: "La cellule",
                body: `
                    <p>
                        La cellule est l'unité fondamentale de la vie.
                    </p>

                    <div class="formula-box">
                        Cellule = unité de base du vivant
                    </div>
                `
            },

            {
                title: "Le noyau cellulaire",
                body: `
                    <p>
                        Le noyau contient une grande partie de l'information
                        génétique de la cellule.
                    </p>
                `
            },

            {
                title: "La membrane cellulaire",
                body: `
                    <p>
                        La membrane contrôle les échanges entre la cellule
                        et son environnement.
                    </p>
                `
            },

            {
                title: "Le cytoplasme",
                body: `
                    <p>
                        Le cytoplasme est le milieu intérieur de la cellule
                        dans lequel se trouvent plusieurs organites.
                    </p>
                `
            },

            {
                title: "L'ADN",
                body: `
                    <p>
                        L'ADN contient l'information génétique
                        nécessaire au fonctionnement des organismes.
                    </p>
                `
            },

            {
                title: "Les chromosomes",
                body: `
                    <p>
                        Les chromosomes sont constitués d'ADN associé
                        à des protéines.
                    </p>
                `
            },

            {
                title: "La division cellulaire",
                body: `
                    <p>
                        La division cellulaire permet notamment la croissance
                        et le renouvellement des cellules.
                    </p>
                `
            },

            {
                title: "La nutrition",
                body: `
                    <p>
                        La nutrition permet à l'organisme d'obtenir
                        les matières et l'énergie nécessaires.
                    </p>
                `
            },

            {
                title: "La respiration",
                body: `
                    <p>
                        La respiration permet les échanges gazeux
                        nécessaires au fonctionnement de l'organisme.
                    </p>
                `
            },

            {
                title: "Le système digestif",
                body: `
                    <p>
                        Le système digestif transforme les aliments
                        et permet l'absorption des nutriments.
                    </p>
                `
            },

            {
                title: "Le cœur",
                body: `
                    <p>
                        Le cœur est un organe musculaire qui assure
                        la circulation du sang.
                    </p>
                `
            },

            {
                title: "Le système circulatoire",
                body: `
                    <p>
                        Le système circulatoire comprend notamment
                        le cœur et les vaisseaux sanguins.
                    </p>
                `
            },

            {
                title: "Le système nerveux",
                body: `
                    <p>
                        Le système nerveux permet de recevoir,
                        traiter et transmettre des informations.
                    </p>
                `
            },

            {
                title: "Les écosystèmes",
                body: `
                    <p>
                        Un écosystème comprend les êtres vivants
                        et leur environnement.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       INFORMATIQUE
       ===================================================== */

    "Informatique": {

        description:
            "Apprends les bases de l'informatique, du matériel aux logiciels et aux réseaux.",

        lessons: [

            {
                title: "Introduction à l'informatique",
                body: `
                    <p>
                        L'informatique est le domaine du traitement automatique
                        de l'information.
                    </p>
                `
            },

            {
                title: "L'ordinateur",
                body: `
                    <p>
                        Un ordinateur est une machine capable de recevoir,
                        traiter et produire des informations.
                    </p>
                `
            },

            {
                title: "Le processeur",
                body: `
                    <p>
                        Le processeur, ou CPU, exécute les instructions
                        des programmes.
                    </p>

                    <div class="formula-box">
                        CPU = Central Processing Unit
                    </div>
                `
            },

            {
                title: "La mémoire RAM",
                body: `
                    <p>
                        La mémoire RAM conserve temporairement les données
                        utilisées par les programmes.
                    </p>
                `
            },

            {
                title: "Le stockage",
                body: `
                    <p>
                        Les disques SSD et HDD permettent de conserver
                        les fichiers et les programmes.
                    </p>
                `
            },

            {
                title: "Les systèmes d'exploitation",
                body: `
                    <p>
                        Un système d'exploitation permet de gérer
                        les ressources d'un ordinateur.
                    </p>

                    <p>
                        Exemples : Windows, Linux et macOS.
                    </p>
                `
            },

            {
                title: "Les fichiers et dossiers",
                body: `
                    <p>
                        Les fichiers contiennent des données tandis que
                        les dossiers permettent de les organiser.
                    </p>
                `
            },

            {
                title: "Internet",
                body: `
                    <p>
                        Internet est un réseau mondial reliant
                        de nombreux réseaux et appareils.
                    </p>
                `
            },

            {
                title: "Les réseaux informatiques",
                body: `
                    <p>
                        Un réseau permet à plusieurs appareils
                        de communiquer entre eux.
                    </p>
                `
            },

            {
                title: "Les adresses IP",
                body: `
                    <p>
                        Une adresse IP permet d'identifier une interface
                        réseau sur un réseau.
                    </p>
                `
            },

            {
                title: "Les bases de données",
                body: `
                    <p>
                        Une base de données permet de stocker
                        et organiser des informations.
                    </p>
                `
            },

            {
                title: "Les algorithmes",
                body: `
                    <p>
                        Un algorithme est une suite d'étapes permettant
                        de résoudre un problème.
                    </p>
                `
            },

            {
                title: "La cybersécurité",
                body: `
                    <p>
                        La cybersécurité vise à protéger les systèmes,
                        les réseaux et les données.
                    </p>
                `
            },

            {
                title: "Les logiciels",
                body: `
                    <p>
                        Un logiciel est un ensemble de programmes permettant
                        à un ordinateur d'effectuer des tâches.
                    </p>
                `
            },

            {
                title: "L'intelligence artificielle",
                body: `
                    <p>
                        L'intelligence artificielle regroupe des techniques
                        permettant à des systèmes informatiques d'effectuer
                        certaines tâches nécessitant habituellement
                        des capacités humaines.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       PROGRAMMATION
       ===================================================== */

    "Programmation": {

        description:
            "Apprends à programmer et découvre les principales notions du développement logiciel.",

        lessons: [

            {
                title: "Introduction à la programmation",
                body: `
                    <p>
                        Programmer consiste à écrire des instructions
                        qu'un ordinateur peut exécuter.
                    </p>
                `
            },

            {
                title: "Les variables",
                body: `
                    <p>
                        Une variable permet de stocker une information.
                    </p>

                    <div class="code-box">
                        let age = 15;
                    </div>
                `
            },

            {
                title: "Les constantes",
                body: `
                    <div class="code-box">
                        const nom = "LM STUDY";
                    </div>

                    <p>
                        Une constante ne doit normalement pas être réassignée.
                    </p>
                `
            },

            {
                title: "Les types de données",
                body: `
                    <p>
                        JavaScript possède notamment les types string,
                        number, boolean, object et undefined.
                    </p>
                `
            },

            {
                title: "Les conditions",
                body: `
                    <div class="code-box">
                        if (age >= 18) {<br>
                        &nbsp;&nbsp;console.log("Majeur");<br>
                        }
                    </div>
                `
            },

            {
                title: "Les boucles",
                body: `
                    <p>
                        Les boucles permettent de répéter des instructions.
                    </p>

                    <div class="code-box">
                        for (let i = 0; i &lt; 5; i++) {<br>
                        &nbsp;&nbsp;console.log(i);<br>
                        }
                    </div>
                `
            },

            {
                title: "Les fonctions",
                body: `
                    <p>
                        Une fonction regroupe des instructions pouvant
                        être réutilisées.
                    </p>

                    <div class="code-box">
                        function bonjour() {<br>
                        &nbsp;&nbsp;console.log("Bonjour");<br>
                        }
                    </div>
                `
            },

            {
                title: "Les tableaux",
                body: `
                    <div class="code-box">
                        const nombres = [1, 2, 3, 4];
                    </div>

                    <p>
                        Un tableau permet de stocker plusieurs valeurs.
                    </p>
                `
            },

            {
                title: "Les objets",
                body: `
                    <div class="code-box">
                        const eleve = {<br>
                        &nbsp;&nbsp;nom: "Paul",<br>
                        &nbsp;&nbsp;age: 16<br>
                        };
                    </div>
                `
            },

            {
                title: "HTML",
                body: `
                    <p>
                        HTML permet de structurer le contenu d'une page web.
                    </p>

                    <div class="code-box">
                        &lt;h1&gt;LM STUDY&lt;/h1&gt;
                    </div>
                `
            },

            {
                title: "CSS",
                body: `
                    <p>
                        CSS permet de mettre en forme les pages web.
                    </p>

                    <div class="code-box">
                        h1 {<br>
                        &nbsp;&nbsp;font-size: 30px;<br>
                        }
                    </div>
                `
            },

            {
                title: "JavaScript",
                body: `
                    <p>
                        JavaScript permet d'ajouter de l'interactivité
                        aux pages web.
                    </p>
                `
            },

            {
                title: "DOM JavaScript",
                body: `
                    <p>
                        Le DOM permet à JavaScript de manipuler
                        les éléments HTML d'une page.
                    </p>

                    <div class="code-box">
                        document.getElementById("titre");
                    </div>
                `
            },

            {
                title: "Les événements",
                body: `
                    <p>
                        Les événements permettent de réagir aux actions
                        de l'utilisateur.
                    </p>

                    <div class="code-box">
                        button.addEventListener("click", fonction);
                    </div>
                `
            },

            {
                title: "Créer un projet web",
                body: `
                    <p>
                        Un projet web peut être organisé avec des fichiers
                        HTML, CSS et JavaScript.
                    </p>

                    <div class="code-box">
                        index.html<br>
                        css/style.css<br>
                        js/script.js
                    </div>
                `
            }

        ]
    },


    /* =====================================================
       FRANÇAIS
       ===================================================== */

    "Français": {

        description:
            "Améliore ton expression, ta grammaire, ton vocabulaire et ta compréhension du français.",

        lessons: [

            {
                title: "La phrase",
                body: `
                    <p>
                        Une phrase est un ensemble de mots organisé
                        autour d'un sens.
                    </p>
                `
            },

            {
                title: "Le nom",
                body: `
                    <p>
                        Le nom désigne une personne, un animal,
                        un objet ou une notion.
                    </p>
                `
            },

            {
                title: "Le déterminant",
                body: `
                    <p>
                        Le déterminant accompagne généralement un nom.
                    </p>

                    <p>
                        Exemples : le, la, les, un, une, des.
                    </p>
                `
            },

            {
                title: "Le verbe",
                body: `
                    <p>
                        Le verbe exprime généralement une action
                        ou un état.
                    </p>
                `
            },

            {
                title: "Le sujet",
                body: `
                    <p>
                        Le sujet indique qui réalise l'action du verbe.
                    </p>
                `
            },

            {
                title: "Le complément",
                body: `
                    <p>
                        Les compléments apportent des informations
                        supplémentaires dans la phrase.
                    </p>
                `
            },

            {
                title: "Le présent",
                body: `
                    <p>
                        Le présent peut exprimer une action actuelle,
                        une habitude ou une vérité générale.
                    </p>
                `
            },

            {
                title: "Le passé composé",
                body: `
                    <p>
                        Le passé composé se forme avec un auxiliaire
                        et le participe passé.
                    </p>
                `
            },

            {
                title: "L'imparfait",
                body: `
                    <p>
                        L'imparfait sert notamment à décrire
                        ou exprimer une habitude dans le passé.
                    </p>
                `
            },

            {
                title: "Le futur simple",
                body: `
                    <p>
                        Le futur simple permet de parler d'une action
                        qui se produira plus tard.
                    </p>
                `
            },

            {
                title: "Les accords",
                body: `
                    <p>
                        Les mots d'une phrase doivent respecter
                        certaines règles d'accord.
                    </p>
                `
            },

            {
                title: "Les homophones",
                body: `
                    <p>
                        Les homophones sont des mots qui se prononcent
                        de la même manière mais peuvent avoir des sens
                        ou des orthographes différents.
                    </p>
                `
            },

            {
                title: "Le vocabulaire",
                body: `
                    <p>
                        Le vocabulaire regroupe l'ensemble des mots
                        utilisés dans une langue.
                    </p>
                `
            },

            {
                title: "La compréhension de texte",
                body: `
                    <p>
                        Comprendre un texte consiste à identifier
                        ses informations principales et son sens.
                    </p>
                `
            },

            {
                title: "La rédaction",
                body: `
                    <p>
                        Une bonne rédaction doit être claire,
                        organisée et correctement ponctuée.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       ANGLAIS
       ===================================================== */

    "Anglais": {

        description:
            "Learn English vocabulary, grammar, pronunciation and everyday communication.",

        lessons: [

            {
                title: "Basic English",
                body: `
                    <h3>Greetings</h3>
                    <p>
                        Hello = Bonjour<br>
                        Good morning = Bonjour le matin<br>
                        Good evening = Bonsoir
                    </p>
                `
            },

            {
                title: "Introducing yourself",
                body: `
                    <p>
                        My name is... = Je m'appelle...
                    </p>
                `
            },

            {
                title: "The verb to be",
                body: `
                    <div class="formula-box">
                        I am<br>
                        You are<br>
                        He/She is<br>
                        We are<br>
                        They are
                    </div>
                `
            },

            {
                title: "The verb to have",
                body: `
                    <div class="formula-box">
                        I have<br>
                        You have<br>
                        He has<br>
                        She has
                    </div>
                `
            },

            {
                title: "Present simple",
                body: `
                    <p>
                        The present simple is used for habits
                        and general facts.
                    </p>
                `
            },

            {
                title: "Present continuous",
                body: `
                    <div class="formula-box">
                        am/is/are + verb-ing
                    </div>
                `
            },

            {
                title: "Past simple",
                body: `
                    <p>
                        The past simple is used for completed actions
                        in the past.
                    </p>
                `
            },

            {
                title: "Future",
                body: `
                    <div class="formula-box">
                        will + verb
                    </div>
                `
            },

            {
                title: "English vocabulary",
                body: `
                    <p>
                        book = livre<br>
                        house = maison<br>
                        school = école
                    </p>
                `
            },

            {
                title: "Family vocabulary",
                body: `
                    <p>
                        father = père<br>
                        mother = mère<br>
                        brother = frère<br>
                        sister = sœur
                    </p>
                `
            },

            {
                title: "Numbers",
                body: `
                    <p>
                        one = 1<br>
                        two = 2<br>
                        three = 3<br>
                        ten = 10
                    </p>
                `
            },

            {
                title: "Days of the week",
                body: `
                    <p>
                        Monday, Tuesday, Wednesday, Thursday,
                        Friday, Saturday, Sunday.
                    </p>
                `
            },

            {
                title: "Questions",
                body: `
                    <p>
                        What? = Quoi ?<br>
                        Where? = Où ?<br>
                        When? = Quand ?<br>
                        Why? = Pourquoi ?
                    </p>
                `
            },

            {
                title: "Adjectives",
                body: `
                    <p>
                        big = grand<br>
                        small = petit<br>
                        beautiful = beau/belle
                    </p>
                `
            },

            {
                title: "Everyday conversation",
                body: `
                    <p>
                        English can be practiced through simple
                        everyday conversations.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       HISTOIRE-GEOGRAPHIE
       ===================================================== */

    "Histoire-Géographie": {

        description:
            "Découvre les grandes périodes historiques, les territoires et les sociétés.",

        lessons: [

            {
                title: "Introduction à l'histoire",
                body: `
                    <p>
                        L'histoire étudie les événements et les sociétés
                        du passé.
                    </p>
                `
            },

            {
                title: "La préhistoire",
                body: `
                    <p>
                        La préhistoire correspond à la période précédant
                        l'apparition de l'écriture.
                    </p>
                `
            },

            {
                title: "L'Antiquité",
                body: `
                    <p>
                        L'Antiquité comprend notamment les civilisations
                        grecques et romaines.
                    </p>
                `
            },

            {
                title: "Le Moyen Âge",
                body: `
                    <p>
                        Le Moyen Âge est une période historique située
                        entre l'Antiquité et les Temps modernes.
                    </p>
                `
            },

            {
                title: "Les Temps modernes",
                body: `
                    <p>
                        Cette période comprend notamment la Renaissance
                        et les grandes explorations.
                    </p>
                `
            },

            {
                title: "La Révolution française",
                body: `
                    <p>
                        La Révolution française débute en 1789
                        et transforme profondément la société française.
                    </p>
                `
            },

            {
                title: "La révolution industrielle",
                body: `
                    <p>
                        La révolution industrielle transforme
                        la production et les sociétés grâce aux machines.
                    </p>
                `
            },

            {
                title: "La Première Guerre mondiale",
                body: `
                    <p>
                        La Première Guerre mondiale se déroule
                        de 1914 à 1918.
                    </p>
                `
            },

            {
                title: "La Seconde Guerre mondiale",
                body: `
                    <p>
                        La Seconde Guerre mondiale se déroule
                        de 1939 à 1945.
                    </p>
                `
            },

            {
                title: "La décolonisation",
                body: `
                    <p>
                        La décolonisation correspond au processus
                        d'accession à l'indépendance de nombreux territoires.
                    </p>
                `
            },

            {
                title: "L'Afrique",
                body: `
                    <p>
                        L'Afrique est le deuxième plus grand continent
                        du monde par sa superficie et sa population.
                    </p>
                `
            },

            {
                title: "Le Cameroun",
                body: `
                    <p>
                        Le Cameroun se situe en Afrique centrale.
                        Sa capitale politique est Yaoundé.
                    </p>
                `
            },

            {
                title: "Les continents",
                body: `
                    <p>
                        Les continents sont de vastes ensembles
                        de terres émergées.
                    </p>
                `
            },

            {
                title: "Les climats",
                body: `
                    <p>
                        Le climat décrit les conditions atmosphériques
                        moyennes d'une région sur une longue période.
                    </p>
                `
            },

            {
                title: "La population mondiale",
                body: `
                    <p>
                        La répartition de la population mondiale
                        est très inégale selon les régions.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       PHILOSOPHIE
       ===================================================== */

    "Philosophie": {

        description:
            "Développe ta réflexion critique et découvre les grandes questions philosophiques.",

        lessons: [

            {
                title: "Introduction à la philosophie",
                body: `
                    <p>
                        La philosophie cherche à réfléchir de manière
                        rationnelle sur les grandes questions humaines.
                    </p>
                `
            },

            {
                title: "La pensée critique",
                body: `
                    <p>
                        La pensée critique consiste à analyser
                        les informations et les arguments avant de conclure.
                    </p>
                `
            },

            {
                title: "La vérité",
                body: `
                    <p>
                        La vérité désigne ce qui correspond à la réalité
                        ou à ce qui est considéré comme vrai.
                    </p>
                `
            },

            {
                title: "La liberté",
                body: `
                    <p>
                        La liberté est une notion centrale de la philosophie.
                        Elle concerne notamment la capacité de choisir et d'agir.
                    </p>
                `
            },

            {
                title: "La conscience",
                body: `
                    <p>
                        La conscience permet notamment à l'être humain
                        de prendre connaissance de lui-même et du monde.
                    </p>
                `
            },

            {
                title: "Le bonheur",
                body: `
                    <p>
                        Le bonheur est une réflexion importante
                        concernant la vie bonne et l'accomplissement humain.
                    </p>
                `
            },

            {
                title: "La justice",
                body: `
                    <p>
                        La justice concerne les principes permettant
                        d'organiser équitablement la société.
                    </p>
                `
            },

            {
                title: "La morale",
                body: `
                    <p>
                        La morale étudie notamment les principes
                        permettant de distinguer le bien du mal.
                    </p>
                `
            },

            {
                title: "La raison",
                body: `
                    <p>
                        La raison permet de construire des raisonnements
                        et d'examiner les arguments.
                    </p>
                `
            },

            {
                title: "Le devoir",
                body: `
                    <p>
                        Le devoir désigne ce qu'une personne considère
                        comme une obligation morale.
                    </p>
                `
            },

            {
                title: "Le travail",
                body: `
                    <p>
                        Le travail transforme la nature et participe
                        à l'organisation de la vie humaine.
                    </p>
                `
            },

            {
                title: "La science",
                body: `
                    <p>
                        La science cherche à produire des connaissances
                        fondées sur des méthodes rigoureuses.
                    </p>
                `
            },

            {
                title: "L'État",
                body: `
                    <p>
                        L'État est une organisation politique
                        exerçant son autorité sur un territoire.
                    </p>
                `
            },

            {
                title: "Descartes",
                body: `
                    <p>
                        René Descartes est un philosophe majeur
                        de la pensée moderne.
                    </p>
                `
            },

            {
                title: "Argumentation philosophique",
                body: `
                    <p>
                        Une dissertation philosophique doit présenter
                        une problématique, des arguments et une conclusion.
                    </p>
                `
            }

        ]
    },


    /* =====================================================
       ECONOMIE
       ===================================================== */

    "Économie": {

        description:
            "Comprends les mécanismes économiques, les marchés, les entreprises et la société.",

        lessons: [

            {
                title: "Introduction à l'économie",
                body: `
                    <p>
                        L'économie étudie notamment la production,
                        la distribution et la consommation des ressources.
                    </p>
                `
            },

            {
                title: "Les besoins",
                body: `
                    <p>
                        Les besoins correspondent à ce que les individus
                        cherchent à satisfaire.
                    </p>
                `
            },

            {
                title: "Les biens et services",
                body: `
                    <p>
                        Un bien est généralement matériel tandis qu'un service
                        correspond à une prestation.
                    </p>
                `
            },

            {
                title: "La production",
                body: `
                    <p>
                        La production consiste à créer des biens
                        ou des services.
                    </p>
                `
            },

            {
                title: "La consommation",
                body: `
                    <p>
                        La consommation correspond à l'utilisation
                        de biens et de services pour satisfaire des besoins.
                    </p>
                `
            },

            {
                title: "Le marché",
                body: `
                    <p>
                        Un marché met en relation des offreurs
                        et des demandeurs.
                    </p>
                `
            },

            {
                title: "L'offre et la demande",
                body: `
                    <p>
                        L'offre représente les quantités proposées
                        tandis que la demande représente les quantités
                        recherchées.
                    </p>
                `
            },

            {
                title: "Le prix",
                body: `
                    <p>
                        Le prix est une valeur monétaire attribuée
                        à un bien ou un service.
                    </p>
                `
            },

            {
                title: "Le salaire",
                body: `
                    <p>
                        Le salaire est une rémunération versée
                        en contrepartie d'un travail.
                    </p>
                `
            },

            {
                title: "L'entreprise",
                body: `
                    <p>
                        Une entreprise produit généralement des biens
                        ou services afin de répondre à une demande.
                    </p>
                `
            },

            {
                title: "La monnaie",
                body: `
                    <p>
                        La monnaie facilite les échanges et sert notamment
                        d'unité de compte et de réserve de valeur.
                    </p>
                `
            },

            {
                title: "L'inflation",
                body: `
                    <p>
                        L'inflation correspond à une augmentation générale
                        et durable du niveau des prix.
                    </p>
                `
            },

            {
                title: "Le chômage",
                body: `
                    <p>
                        Le chômage concerne les personnes sans emploi
                        qui sont disponibles et recherchent un emploi,
                        selon la définition statistique utilisée.
                    </p>
                `
            },

            {
                title: "La croissance économique",
                body: `
                    <p>
                        La croissance économique désigne l'augmentation
                        de la production de biens et services d'une économie.
                    </p>
                `
            },

            {
                title: "Le commerce international",
                body: `
                    <p>
                        Le commerce international correspond aux échanges
                        de biens et services entre pays.
                    </p>
                `
            }

        ]
    }

};


/* =========================================================
   VARIABLES
   ========================================================= */

let coursActuel = null;
let leconActuelle = 0;


/* =========================================================
   CHARGER LE COURS
   ========================================================= */

function chargerCours() {

    coursActuel = coursData[matiereSelectionnee];

    if (!coursActuel) {

        document.getElementById("courseTitle").textContent =
            "Cours introuvable";

        document.getElementById("courseDescription").textContent =
            "La matière demandée n'existe pas.";

        document.getElementById("lessonsGrid").innerHTML = `
            <div class="empty-course">
                <i class="fas fa-circle-exclamation"></i>
                <h3>Matière introuvable</h3>
                <p>
                    Retourne à la page des cours et sélectionne
                    une matière disponible.
                </p>
            </div>
        `;

        return;
    }


    /* TITRE */

    document.getElementById("courseTitle").textContent =
        matiereSelectionnee;

    document.getElementById("courseDescription").textContent =
        coursActuel.description;

    document.getElementById("introTitle").textContent =
        "Apprendre " + matiereSelectionnee;

    document.getElementById("introText").textContent =
        coursActuel.description;


    /* AFFICHER LES LEÇONS */

    afficherLecons(coursActuel.lessons);


    /* OUVRIR AUTOMATIQUEMENT LE COURS DEMANDÉ */

    if (coursRecherche.trim()) {

        const recherche =
            normaliser(coursRecherche);

        const index =
            coursActuel.lessons.findIndex(
                lesson =>
                    normaliser(lesson.title) === recherche
            );

        if (index !== -1) {

            leconActuelle = index;

            afficherLeconActuelle();
        }
    }
}


/* =========================================================
   AFFICHER LES LEÇONS
   ========================================================= */

function afficherLecons(lessons) {

    const grid =
        document.getElementById("lessonsGrid");

    grid.innerHTML = "";

    if (!lessons || lessons.length === 0) {

        grid.innerHTML = `
            <div class="empty-course">
                <i class="fas fa-book"></i>
                <h3>Aucune leçon disponible</h3>
                <p>
                    Les leçons de cette matière seront bientôt disponibles.
                </p>
            </div>
        `;

        return;
    }


    lessons.forEach((lesson) => {

        const indexOriginal =
            coursActuel.lessons.indexOf(lesson);

        const numero =
            String(indexOriginal + 1).padStart(2, "0");

        const card =
            document.createElement("div");

        card.className = "lesson-card";

        card.innerHTML = `

            <div class="lesson-card-number">
                ${numero}
            </div>

            <div class="lesson-card-icon">
                <i class="fas fa-book-open"></i>
            </div>

            <div class="lesson-card-content">

                <span>LEÇON ${numero}</span>

                <h3>
                    ${lesson.title}
                </h3>

                <p>
                    Découvre cette leçon et progresse
                    avec LM STUDY.
                </p>

            </div>

            <button
                onclick="ouvrirLecon(${indexOriginal})">

                Commencer

                <i class="fas fa-arrow-right"></i>

            </button>

        `;

        grid.appendChild(card);
    });
}


/* =========================================================
   OUVRIR UNE LEÇON
   ========================================================= */

function ouvrirLecon(index) {

    if (
        !coursActuel ||
        !coursActuel.lessons[index]
    ) {
        return;
    }

    leconActuelle = index;

    afficherLeconActuelle();
}


/* =========================================================
   AFFICHER LA LEÇON ACTUELLE
   ========================================================= */

function afficherLeconActuelle() {

    const lesson =
        coursActuel.lessons[leconActuelle];

    if (!lesson) {
        return;
    }


    const viewer =
        document.getElementById("lessonViewer");

    const number =
        document.getElementById("lessonNumber");

    const title =
        document.getElementById("lessonTitle");

    const body =
        document.getElementById("lessonBody");


    number.textContent =
        String(leconActuelle + 1).padStart(2, "0");

    title.textContent =
        lesson.title;

    body.innerHTML =
        lesson.body;


    ajouterNavigation();


    viewer.style.display = "flex";

    viewer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================================================
   NAVIGATION PRECEDENT / SUIVANT
   ========================================================= */

function ajouterNavigation() {

    const lessonContent =
        document.querySelector(".lesson-content");

    if (!lessonContent) {
        return;
    }


    const ancienneNavigation =
        document.querySelector(".lesson-navigation");

    if (ancienneNavigation) {
        ancienneNavigation.remove();
    }


    const navigation =
        document.createElement("div");

    navigation.className =
        "lesson-navigation";


    const boutonPrecedent =
        document.createElement("button");

    boutonPrecedent.className =
        "lesson-nav-btn previous";

    boutonPrecedent.innerHTML =
        `<i class="fas fa-arrow-left"></i> Précédent`;

    boutonPrecedent.disabled =
        leconActuelle === 0;

    boutonPrecedent.onclick =
        leconPrecedente;


    const progression =
        document.createElement("span");

    progression.className =
        "lesson-progress-text";

    progression.textContent =
        `${leconActuelle + 1} / ${coursActuel.lessons.length}`;


    const boutonSuivant =
        document.createElement("button");

    boutonSuivant.className =
        "lesson-nav-btn next";

    boutonSuivant.innerHTML =
        `Suivant <i class="fas fa-arrow-right"></i>`;

    boutonSuivant.disabled =
        leconActuelle === coursActuel.lessons.length - 1;

    boutonSuivant.onclick =
        leconSuivante;


    navigation.appendChild(
        boutonPrecedent
    );

    navigation.appendChild(
        progression
    );

    navigation.appendChild(
        boutonSuivant
    );


    lessonContent.appendChild(
        navigation
    );
}


/* =========================================================
   LEÇON PRECEDENTE
   ========================================================= */

function leconPrecedente() {

    if (leconActuelle <= 0) {
        return;
    }

    leconActuelle--;

    afficherLeconActuelle();
}


/* =========================================================
   LEÇON SUIVANTE
   ========================================================= */

function leconSuivante() {

    if (
        leconActuelle >=
        coursActuel.lessons.length - 1
    ) {
        return;
    }

    leconActuelle++;

    afficherLeconActuelle();
}


/* =========================================================
   RECHERCHER UNE LEÇON
   ========================================================= */

function rechercherLecon() {

    if (!coursActuel) {
        return;
    }


    const input =
        document.getElementById("lessonSearch");

    const result =
        document.getElementById("searchResult");


    const recherche =
        normaliser(input.value);


    if (!recherche) {

        result.innerHTML = `
            <div class="search-warning">
                ⚠️ Écris le nom d'une leçon ou d'un chapitre.
            </div>
        `;

        afficherLecons(
            coursActuel.lessons
        );

        return;
    }


    const resultats =
        coursActuel.lessons.filter(
            lesson =>
                normaliser(lesson.title)
                    .includes(recherche)
        );


    if (resultats.length === 0) {

        result.innerHTML = `
            <div class="search-warning">
                ❌ Aucune leçon trouvée pour
                "<strong>${input.value}</strong>".
            </div>
        `;

        afficherLecons([]);

        return;
    }


    result.innerHTML = `
        <div class="search-success">
            ✅ ${resultats.length}
            leçon(s) trouvée(s).
        </div>
    `;


    afficherLecons(resultats);
}


/* =========================================================
   NORMALISER LE TEXTE
   ========================================================= */

function normaliser(texte) {

    return String(texte || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


/* =========================================================
   FERMER UNE LEÇON
   ========================================================= */

function fermerLecon() {

    const viewer =
        document.getElementById("lessonViewer");

    viewer.style.display =
        "none";
}


/* =========================================================
   RETOUR AUX COURS
   ========================================================= */

function retourCours() {

    window.location.href =
        "cours.html";
}


/* =========================================================
   ALLER AUX EXERCICES
   ========================================================= */

function allerExercices() {

    window.location.href =
        "exercices.html";
}


/* =========================================================
   ALLER AU QUIZ
   ========================================================= */

function allerQuiz() {

    window.location.href =
        "quiz.html";
}


/* =========================================================
   ALLER AU DASHBOARD
   ========================================================= */

function allerDashboard() {

    window.location.href =
        "dashboard.html";
}


/* =========================================================
   TOUCHE ECHAP
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            fermerLecon();
        }

        if (
            event.key === "ArrowRight" &&
            document.getElementById("lessonViewer").style.display !== "none"
        ) {
            leconSuivante();
        }

        if (
            event.key === "ArrowLeft" &&
            document.getElementById("lessonViewer").style.display !== "none"
        ) {
            leconPrecedente();
        }

    }
);


/* =========================================================
   RECHERCHE AVEC ENTER
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById("lessonSearch");

        if (input) {

            input.addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Enter") {

                        event.preventDefault();

                        rechercherLecon();
                    }

                }
            );
        }


        chargerCours();

    }
);
