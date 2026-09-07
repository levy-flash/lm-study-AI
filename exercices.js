/* =========================================================
   LM STUDY
   SYSTÈME D'EXERCICES
   12 MATIÈRES × 3 NIVEAUX × 10 EXERCICES
   ========================================================= */


/* =========================================================
   BASE DES EXERCICES
   ========================================================= */

const exercicesData = {

    "Mathématiques": {

        facile: [
            ["Combien font 5 + 7 ?", "12"],
            ["Combien font 9 - 4 ?", "5"],
            ["Combien font 6 × 3 ?", "18"],
            ["Combien font 20 ÷ 4 ?", "5"],
            ["Quel est le double de 8 ?", "16"],
            ["Combien font 15 + 5 ?", "20"],
            ["Combien font 30 - 12 ?", "18"],
            ["Combien font 7 × 2 ?", "14"],
            ["Quel est le carré de 5 ?", "25"],
            ["Combien font 100 ÷ 10 ?", "10"]
        ],

        moyen: [
            ["Résous : 2x + 4 = 12", "4"],
            ["Résous : 3x = 21", "7"],
            ["Quel est 20% de 150 ?", "30"],
            ["Calcule : 15 × 8", "120"],
            ["Calcule : 144 ÷ 12", "12"],
            ["Quel est le périmètre d'un carré de côté 5 cm ?", "20"],
            ["Calcule : 25²", "625"],
            ["Résous : x - 9 = 15", "24"],
            ["Calcule : 3 × (4 + 5)", "27"],
            ["Quel est 3/4 de 100 ?", "75"]
        ],

        difficile: [
            ["Résous : 5x - 10 = 40", "10"],
            ["Résous : 4x + 8 = 32", "6"],
            ["Calcule : 12² + 5²", "169"],
            ["Développe : 3(x + 4)", "3x+12"],
            ["Résous : 2x + 5 = 3x - 7", "12"],
            ["Calcule : 15% de 240", "36"],
            ["Quel est le discriminant de x² - 5x + 6 ?", "1"],
            ["Résous : x² = 81 (solution positive)", "9"],
            ["Calcule : 2³ × 2⁴", "128"],
            ["Si f(x)=2x+3, combien vaut f(7) ?", "17"]
        ]
    },


    "Physique": {

        facile: [
            ["Quelle est l'unité de la force ?", "newton"],
            ["Quelle est l'unité de la tension électrique ?", "volt"],
            ["Quelle est l'unité de l'intensité électrique ?", "ampère"],
            ["Quelle est l'unité de la résistance ?", "ohm"],
            ["Quelle est l'unité de la puissance ?", "watt"],
            ["Quelle est l'unité de l'énergie ?", "joule"],
            ["Quelle est la vitesse de la lumière approximativement ?", "300000000"],
            ["Quel appareil mesure la tension ?", "voltmètre"],
            ["Quel appareil mesure l'intensité ?", "ampèremètre"],
            ["Quelle est l'unité de la masse ?", "kilogramme"]
        ],

        moyen: [
            ["U = R × I. Si R=10Ω et I=2A, U vaut ?", "20"],
            ["Une voiture parcourt 100 km en 2 h. Vitesse ?", "50"],
            ["P = U × I. Si U=10V et I=3A, P vaut ?", "30"],
            ["F = m × a. Si m=5kg et a=2m/s², F vaut ?", "10"],
            ["Combien de secondes dans 2 minutes ?", "120"],
            ["Une distance de 60m parcourue en 10s donne quelle vitesse ?", "6"],
            ["Quelle énergie possède un objet en mouvement ?", "cinétique"],
            ["Quel phénomène attire les objets vers la Terre ?", "gravité"],
            ["Quelle est l'unité de fréquence ?", "hertz"],
            ["Quel type d'énergie possède une pile ?", "chimique"]
        ],

        difficile: [
            ["Si R=20Ω et I=0,5A, U vaut ?", "10"],
            ["Un objet de 10kg accélère à 3m/s². Force ?", "30"],
            ["P=UI. U=220V et I=2A. P ?", "440"],
            ["Une voiture roule à 72 km/h. Vitesse en m/s ?", "20"],
            ["E=P×t. P=100W pendant 10s. E ?", "1000"],
            ["Si U=24V et R=6Ω, I vaut ?", "4"],
            ["Quelle est l'accélération de la pesanteur approximative ?", "9.8"],
            ["Un objet parcourt 200m en 20s. Vitesse ?", "10"],
            ["Si P=600W et U=120V, I vaut ?", "5"],
            ["Quelle loi relie tension, résistance et intensité ?", "ohm"]
        ]
    },


    "Chimie": {

        facile: [
            ["Quelle est la formule de l'eau ?", "h2o"],
            ["Quelle est la formule du dioxyde de carbone ?", "co2"],
            ["Quel élément possède le symbole O ?", "oxygène"],
            ["Quel élément possède le symbole H ?", "hydrogène"],
            ["Quel élément possède le symbole C ?", "carbone"],
            ["Combien d'atomes contient H2O ?", "3"],
            ["Quel est le symbole du sodium ?", "na"],
            ["Quel est le symbole du fer ?", "fe"],
            ["Quel est le symbole de l'or ?", "au"],
            ["Quel gaz respirons-nous principalement ?", "oxygène"]
        ],

        moyen: [
            ["Combien d'atomes d'hydrogène dans H2O ?", "2"],
            ["Combien d'atomes d'oxygène dans CO2 ?", "2"],
            ["Quel est le pH d'une solution neutre ?", "7"],
            ["Une solution de pH 3 est-elle acide ou basique ?", "acide"],
            ["Une solution de pH 11 est-elle acide ou basique ?", "basique"],
            ["Quel gaz est produit lors de certaines combustions ?", "co2"],
            ["Quel est le symbole du potassium ?", "k"],
            ["Quelle particule porte une charge négative ?", "électron"],
            ["Quelle particule porte une charge positive dans le noyau ?", "proton"],
            ["Quelle particule est neutre ?", "neutron"]
        ],

        difficile: [
            ["Combien de molécules dans 2H2O ?", "2"],
            ["Quel est le produit de HCl + NaOH ?", "nacl"],
            ["Combien d'atomes au total dans C6H12O6 ?", "24"],
            ["Quelle est la masse molaire approximative de H2O ?", "18"],
            ["Quel est le nombre d'oxydation de O dans H2O ?", "-2"],
            ["Quel est le nombre d'atomes dans 3CO2 ?", "9"],
            ["Quel gaz est nécessaire à la combustion ?", "oxygène"],
            ["Quel type de réaction produit généralement du sel et de l'eau ?", "neutralisation"],
            ["Quelle est la formule de l'acide sulfurique ?", "h2so4"],
            ["Quelle est la formule de l'ammoniac ?", "nh3"]
        ]
    },


    "Biologie": {

        facile: [
            ["Quelle est l'unité de base du vivant ?", "cellule"],
            ["Quel organe pompe le sang ?", "coeur"],
            ["Quel organe permet principalement de respirer ?", "poumons"],
            ["Quel organe commande le système nerveux ?", "cerveau"],
            ["Combien de jambes possède normalement un humain ?", "2"],
            ["Quel liquide circule dans les vaisseaux sanguins ?", "sang"],
            ["Quel organe produit l'urine ?", "rein"],
            ["Quel organe permet la digestion principale ?", "estomac"],
            ["Quelle molécule transporte l'oxygène dans le sang ?", "hémoglobine"],
            ["Quel système permet la respiration ?", "système respiratoire"]
        ],

        moyen: [
            ["Quel organite produit principalement l'énergie cellulaire ?", "mitochondrie"],
            ["Quel pigment donne sa couleur verte aux plantes ?", "chlorophylle"],
            ["Quel processus permet aux plantes de produire leur nourriture ?", "photosynthèse"],
            ["Quel organe filtre le sang ?", "rein"],
            ["Quel système transporte le sang ?", "système circulatoire"],
            ["Quelle molécule contient l'information génétique ?", "adn"],
            ["Combien de chromosomes possède normalement une cellule humaine ?", "46"],
            ["Quel organe produit la bile ?", "foie"],
            ["Quel système protège le corps contre les microbes ?", "système immunitaire"],
            ["Quel gaz les plantes absorbent-elles pour la photosynthèse ?", "co2"]
        ],

        difficile: [
            ["Combien de paires de chromosomes possède l'humain ?", "23"],
            ["Quel est le rôle principal des ribosomes ?", "synthèse des protéines"],
            ["Quelle molécule transporte l'information génétique ?", "adn"],
            ["Quel processus divise une cellule en deux cellules identiques ?", "mitose"],
            ["Quel processus produit les cellules sexuelles ?", "méiose"],
            ["Quelle base azotée est présente dans l'ADN mais pas dans l'ARN ?", "thymine"],
            ["Quel organite réalise la photosynthèse ?", "chloroplaste"],
            ["Quel est le rôle de l'ARN messager ?", "transporter l'information"],
            ["Quel système contrôle les hormones ?", "système endocrinien"],
            ["Quel phénomène permet le passage des molécules à travers une membrane selon leur gradient ?", "diffusion"]
        ]
    },


    "Informatique": {

        facile: [
            ["Que signifie CPU ?", "central processing unit"],
            ["Que signifie RAM ?", "random access memory"],
            ["Quel appareil permet de saisir du texte ?", "clavier"],
            ["Quel appareil permet de déplacer le curseur ?", "souris"],
            ["Quel périphérique affiche les informations ?", "écran"],
            ["Que signifie USB ?", "universal serial bus"],
            ["Quel système d'exploitation est développé par Microsoft ?", "windows"],
            ["Quel système d'exploitation est développé par Apple pour Mac ?", "macos"],
            ["Qu'est-ce qu'un fichier ?", "donnée"],
            ["Qu'est-ce qu'un dossier ?", "conteneur de fichiers"]
        ],

        moyen: [
            ["Que signifie HTML ?", "hypertext markup language"],
            ["Que signifie CSS ?", "cascading style sheets"],
            ["Que signifie URL ?", "uniform resource locator"],
            ["Que signifie HTTP ?", "hypertext transfer protocol"],
            ["Quel langage est utilisé pour programmer le comportement d'une page web ?", "javascript"],
            ["Quel périphérique stocke les données ?", "disque"],
            ["Qu'est-ce qu'un navigateur ?", "logiciel"],
            ["Qu'est-ce qu'une adresse IP ?", "adresse réseau"],
            ["Quel protocole est utilisé pour envoyer des emails ?", "smtp"],
            ["Quel protocole permet de récupérer des pages web ?", "http"]
        ],

        difficile: [
            ["Que signifie DNS ?", "domain name system"],
            ["Que signifie TCP ?", "transmission control protocol"],
            ["Que signifie IP ?", "internet protocol"],
            ["Quel système permet de gérer les ressources d'un ordinateur ?", "système d'exploitation"],
            ["Qu'est-ce qu'un algorithme ?", "suite d'instructions"],
            ["Qu'est-ce qu'une base de données ?", "ensemble de données"],
            ["Que signifie SQL ?", "structured query language"],
            ["Quel protocole sécurise généralement HTTP ?", "https"],
            ["Qu'est-ce qu'une adresse MAC ?", "adresse matérielle"],
            ["Quel composant exécute les instructions d'un programme ?", "processeur"]
        ]
    },


    "Programmation": {

        facile: [
            ["Quel langage structure une page web ?", "html"],
            ["Quel langage donne du style à une page web ?", "css"],
            ["Quel langage rend une page interactive ?", "javascript"],
            ["Quel symbole termine souvent une instruction JavaScript ?", ";"],
            ["Quel mot permet de déclarer une variable moderne en JavaScript ?", "let"],
            ["Quel mot permet de créer une constante ?", "const"],
            ["Quel mot permet de créer une fonction ?", "function"],
            ["Quel symbole représente une égalité stricte en JavaScript ?", "==="],
            ["Quelle structure répète une instruction ?", "boucle"],
            ["Qu'est-ce qu'une variable ?", "conteneur de donnée"]
        ],

        moyen: [
            ["Quelle boucle utilise souvent i++ ?", "for"],
            ["Quelle instruction permet une condition ?", "if"],
            ["Quelle instruction gère un autre cas ?", "else"],
            ["Quelle méthode ajoute un élément à un tableau JavaScript ?", "push"],
            ["Quelle méthode supprime le dernier élément ?", "pop"],
            ["Quelle méthode transforme une chaîne en minuscules ?", "tolowercase"],
            ["Quelle propriété donne la longueur d'un tableau ?", "length"],
            ["Quel symbole représente le ET logique ?", "&&"],
            ["Quel symbole représente le OU logique ?", "||"],
            ["Quelle fonction affiche un message dans la console ?", "console.log"]
        ],

        difficile: [
            ["Quel objet représente la page HTML en JavaScript ?", "document"],
            ["Quelle méthode sélectionne un élément par son ID ?", "getelementbyid"],
            ["Quelle méthode sélectionne plusieurs éléments avec un sélecteur ?", "queryselectorall"],
            ["Quel événement correspond à un clic ?", "click"],
            ["Quelle méthode permet d'ajouter un écouteur d'événement ?", "addeventlistener"],
            ["Quel format de données est très utilisé avec les API ?", "json"],
            ["Quelle méthode convertit JSON en objet JavaScript ?", "json.parse"],
            ["Quelle méthode convertit un objet en JSON ?", "json.stringify"],
            ["Quelle fonction permet d'attendre une promesse ?", "await"],
            ["Quel mot-clé accompagne généralement await ?", "async"]
        ]
    },


    "Français": {

        facile: [
            ["Quel est le pluriel de cheval ?", "chevaux"],
            ["Quel est le féminin de acteur ?", "actrice"],
            ["Quel est le contraire de grand ?", "petit"],
            ["Quel est le synonyme de heureux ?", "content"],
            ["Complète : Je ___ étudiant.", "suis"],
            ["Quel est le pluriel de journal ?", "journaux"],
            ["Quel est le féminin de heureux ?", "heureuse"],
            ["Quel est le contraire de rapide ?", "lent"],
            ["Quel est le verbe dans : Paul mange une pomme ?", "mange"],
            ["Quel est le nom dans : La maison est grande ?", "maison"]
        ],

        moyen: [
            ["Conjugue 'être' au présent avec 'nous'.", "sommes"],
            ["Conjugue 'avoir' au présent avec 'ils'.", "ont"],
            ["Quel est le participe passé de prendre ?", "pris"],
            ["Quel est le participe passé de voir ?", "vu"],
            ["Quel est le contraire de difficile ?", "facile"],
            ["Quel est le synonyme de commencer ?", "débuter"],
            ["Quel temps utilise 'je mangeais' ?", "imparfait"],
            ["Quel temps utilise 'j'ai mangé' ?", "passé composé"],
            ["Quel est le pluriel de travail ?", "travaux"],
            ["Quel est le pluriel de œil ?", "yeux"]
        ],

        difficile: [
            ["Quel est le participe passé de résoudre ?", "résolu"],
            ["Quel est le participe passé de naître ?", "né"],
            ["Quel est le subjonctif présent de 'être' avec je ?", "sois"],
            ["Quel est le subjonctif présent de 'avoir' avec tu ?", "aies"],
            ["Quel est le conditionnel présent de venir avec je ?", "viendrais"],
            ["Quel est le futur simple de faire avec nous ?", "ferons"],
            ["Quel est le plus-que-parfait de manger avec je ?", "avais mangé"],
            ["Quel est le participe passé de acquérir ?", "acquis"],
            ["Quel est le contraire de explicite ?", "implicite"],
            ["Quel est le nom dérivé de décider ?", "décision"]
        ]
    },


    "Anglais": {

        facile: [
            ["Traduire 'chat' en anglais.", "cat"],
            ["Traduire 'maison' en anglais.", "house"],
            ["Traduire 'livre' en anglais.", "book"],
            ["Traduire 'bonjour' en anglais.", "hello"],
            ["Traduire 'merci' en anglais.", "thank you"],
            ["Traduire 'eau' en anglais.", "water"],
            ["Traduire 'école' en anglais.", "school"],
            ["Traduire 'ami' en anglais.", "friend"],
            ["Traduire 'chien' en anglais.", "dog"],
            ["Traduire 'voiture' en anglais.", "car"]
        ],

        moyen: [
            ["Complète : I ___ a student.", "am"],
            ["Complète : She ___ happy.", "is"],
            ["Complète : They ___ students.", "are"],
            ["Past of 'go' ?", "went"],
            ["Past of 'eat' ?", "ate"],
            ["Past of 'see' ?", "saw"],
            ["Plural of 'child' ?", "children"],
            ["Plural of 'man' ?", "men"],
            ["Opposite of 'easy' ?", "difficult"],
            ["Opposite of 'old' ?", "young"]
        ],

        difficile: [
            ["Past participle of 'write' ?", "written"],
            ["Past participle of 'break' ?", "broken"],
            ["Past participle of 'choose' ?", "chosen"],
            ["Past participle of 'speak' ?", "spoken"],
            ["Past participle of 'drive' ?", "driven"],
            ["Comparative of 'good' ?", "better"],
            ["Superlative of 'good' ?", "best"],
            ["Past of 'begin' ?", "began"],
            ["Past participle of 'begin' ?", "begun"],
            ["Past of 'teach' ?", "taught"]
        ]
    },


    "Espagnol": {

        facile: [
            ["Traduire 'bonjour'.", "hola"],
            ["Traduire 'merci'.", "gracias"],
            ["Traduire 'maison'.", "casa"],
            ["Traduire 'livre'.", "libro"],
            ["Traduire 'école'.", "escuela"],
            ["Traduire 'ami'.", "amigo"],
            ["Traduire 'eau'.", "agua"],
            ["Traduire 'chien'.", "perro"],
            ["Traduire 'chat'.", "gato"],
            ["Traduire 'au revoir'.", "adios"]
        ],

        moyen: [
            ["Je suis = ?", "soy"],
            ["Tu es = ?", "eres"],
            ["Il est = ?", "es"],
            ["Nous sommes = ?", "somos"],
            ["Ils sont = ?", "son"],
            ["J'ai = ?", "tengo"],
            ["Tu as = ?", "tienes"],
            ["Merci beaucoup = ?", "muchas gracias"],
            ["Bonne nuit = ?", "buenas noches"],
            ["Bonjour le matin = ?", "buenos dias"]
        ],

        difficile: [
            ["Passé simple de 'tener' avec yo ?", "tuve"],
            ["Passé simple de 'estar' avec yo ?", "estuve"],
            ["Passé simple de 'hacer' avec yo ?", "hice"],
            ["Passé simple de 'decir' avec yo ?", "dije"],
            ["Participe passé de 'escribir' ?", "escrito"],
            ["Participe passé de 'ver' ?", "visto"],
            ["Participe passé de 'hacer' ?", "hecho"],
            ["Participe passé de 'abrir' ?", "abierto"],
            ["Comparatif : plus grand que = ?", "más grande que"],
            ["Très important = ?", "muy importante"]
        ]
    },


    "Histoire-Géographie": {

        facile: [
            ["Quelle est la capitale du Cameroun ?", "yaoundé"],
            ["Sur quel continent se trouve le Cameroun ?", "afrique"],
            ["Quelle est la capitale de la France ?", "paris"],
            ["Quelle est la capitale du Nigeria ?", "abuja"],
            ["Quelle est la capitale du Ghana ?", "accra"],
            ["Quel est le plus grand continent ?", "asie"],
            ["Quel est le plus grand océan ?", "pacifique"],
            ["Combien y a-t-il de continents généralement enseignés ?", "7"],
            ["Quel pays a pour capitale Rome ?", "italie"],
            ["Quel pays a pour capitale Madrid ?", "espagne"]
        ],

        moyen: [
            ["En quelle année commence la Seconde Guerre mondiale ?", "1939"],
            ["En quelle année se termine la Seconde Guerre mondiale ?", "1945"],
            ["En quelle année commence la Première Guerre mondiale ?", "1914"],
            ["En quelle année se termine la Première Guerre mondiale ?", "1918"],
            ["Quel fleuve traverse l'Égypte ?", "nil"],
            ["Quel désert se trouve en Afrique du Nord ?", "sahara"],
            ["Quel est le plus grand pays d'Afrique par superficie ?", "algérie"],
            ["Quelle mer sépare l'Europe et l'Afrique ?", "méditerranée"],
            ["Quelle est la capitale du Kenya ?", "nairobi"],
            ["Quelle est la capitale de l'Éthiopie ?", "addis-abeba"]
        ],

        difficile: [
            ["En quelle année a lieu la Révolution française ?", "1789"],
            ["Quel traité met fin à la Première Guerre mondiale ?", "versailles"],
            ["Quelle civilisation a construit Machu Picchu ?", "inca"],
            ["Quelle civilisation a construit les pyramides de Gizeh ?", "égypte"],
            ["Quel empire avait pour capitale Constantinople ?", "byzantin"],
            ["Quel explorateur atteint les Amériques en 1492 ?", "christophe colomb"],
            ["Quel canal relie la Méditerranée à la mer Rouge ?", "suez"],
            ["Quel est le plus long fleuve d'Afrique ?", "nil"],
            ["Quelle est la capitale du Rwanda ?", "kigali"],
            ["Quelle est la capitale de la Tanzanie ?", "dodoma"]
        ]
    },


    "Philosophie": {

        facile: [
            ["Qui a dit 'Je pense, donc je suis' ?", "descartes"],
            ["Qu'est-ce que la philosophie ?", "amour de la sagesse"],
            ["Qui était Socrate ?", "philosophe"],
            ["Qui était Platon ?", "philosophe"],
            ["Qui était Aristote ?", "philosophe"],
            ["Qu'est-ce que la vérité ?", "conformité au réel"],
            ["Qu'est-ce que la liberté ?", "capacité de choisir"],
            ["Qu'est-ce que la justice ?", "équité"],
            ["Qu'est-ce que la morale ?", "règles du bien et du mal"],
            ["Qu'est-ce que la raison ?", "faculté de penser"]
        ],

        moyen: [
            ["Quel philosophe a écrit 'Le Contrat social' ?", "rousseau"],
            ["Quel philosophe est associé à l'impératif catégorique ?", "kant"],
            ["Quel philosophe a écrit 'Le Prince' ?", "machiavel"],
            ["Quel philosophe est associé à la dialectique ?", "hegel"],
            ["Quel philosophe est associé à l'existentialisme ?", "sartre"],
            ["Qu'est-ce que l'empirisme ?", "connaissance par expérience"],
            ["Qu'est-ce que le rationalisme ?", "primat de la raison"],
            ["Qu'est-ce que le déterminisme ?", "causalité nécessaire"],
            ["Qu'est-ce que l'éthique ?", "réflexion morale"],
            ["Qu'est-ce que la métaphysique ?", "étude des principes fondamentaux"]
        ],

        difficile: [
            ["Quel philosophe est l'auteur de la Critique de la raison pure ?", "kant"],
            ["Quel philosophe développe la dialectique du maître et de l'esclave ?", "hegel"],
            ["Quel philosophe écrit 'Ainsi parlait Zarathoustra' ?", "nietzsche"],
            ["Quel philosophe développe la psychanalyse ?", "freud"],
            ["Quel philosophe écrit 'Le Deuxième Sexe' ?", "simone de beauvoir"],
            ["Quel courant affirme que l'existence précède l'essence ?", "existentialisme"],
            ["Qu'est-ce que l'épistémologie ?", "étude de la connaissance"],
            ["Qu'est-ce que l'ontologie ?", "étude de l'être"],
            ["Qu'est-ce que le scepticisme ?", "doute méthodique"],
            ["Qu'est-ce que l'utilitarisme ?", "recherche du plus grand bien"]
        ]
    },


    "Économie": {

        facile: [
            ["Qu'est-ce qu'un salaire ?", "rémunération"],
            ["Qu'est-ce qu'un marché ?", "lieu d'échange"],
            ["Qu'est-ce qu'un prix ?", "valeur monétaire"],
            ["Qu'est-ce qu'un consommateur ?", "personne qui achète"],
            ["Qu'est-ce qu'un producteur ?", "personne qui produit"],
            ["Qu'est-ce qu'une entreprise ?", "organisation productive"],
            ["Qu'est-ce qu'un bien ?", "produit économique"],
            ["Qu'est-ce qu'un service ?", "prestation"],
            ["Qu'est-ce que l'argent ?", "moyen d'échange"],
            ["Qu'est-ce qu'une dépense ?", "somme utilisée"]
        ],

        moyen: [
            ["Qu'est-ce que l'offre ?", "quantité proposée"],
            ["Qu'est-ce que la demande ?", "quantité demandée"],
            ["Qu'est-ce que l'inflation ?", "hausse générale des prix"],
            ["Qu'est-ce que le chômage ?", "absence d'emploi"],
            ["Qu'est-ce que le PIB ?", "produit intérieur brut"],
            ["Qu'est-ce qu'un impôt ?", "prélèvement obligatoire"],
            ["Qu'est-ce qu'une banque ?", "institution financière"],
            ["Qu'est-ce qu'un investissement ?", "dépense productive"],
            ["Qu'est-ce qu'un crédit ?", "somme prêtée"],
            ["Qu'est-ce qu'une exportation ?", "vente à l'étranger"]
        ],

        difficile: [
            ["Que mesure le PIB ?", "production intérieure"],
            ["Qu'est-ce que la déflation ?", "baisse générale des prix"],
            ["Qu'est-ce que la stagflation ?", "inflation avec stagnation"],
            ["Qu'est-ce que la politique monétaire ?", "action sur la monnaie"],
            ["Qu'est-ce que la politique budgétaire ?", "action sur dépenses et recettes publiques"],
            ["Qu'est-ce que la balance commerciale ?", "exportations moins importations"],
            ["Qu'est-ce qu'une récession ?", "baisse de l'activité économique"],
            ["Qu'est-ce qu'un monopole ?", "marché avec un seul vendeur"],
            ["Qu'est-ce qu'un oligopole ?", "marché avec quelques vendeurs"],
            ["Qu'est-ce que la productivité ?", "production par unité de facteur"]
        ]
    }

};


/* =========================================================
   VARIABLES
   ========================================================= */

let matiereActuelle = "";
let niveauActuel = "";
let exercicesActuels = [];
let exerciceActuel = 0;
let score = 0;
let exerciceDejaVerifie = false;


/* =========================================================
   AFFICHER LES EXERCICES D'UNE MATIÈRE
   ========================================================= */

function afficherExercices(matiere) {

    matiereActuelle = matiere;

    document.getElementById("matieresSection").style.display = "none";
    document.getElementById("exercicesListe").style.display = "block";

    document.getElementById("zoneExercice").style.display = "none";
    document.getElementById("resultatSection").style.display = "none";

    document.getElementById("matiereTitre").textContent = matiere;

    filtrerNiveau("facile");
}


/* =========================================================
   CHOISIR UN NIVEAU
   ========================================================= */

function filtrerNiveau(niveau) {

    niveauActuel = niveau;

    exercicesActuels =
        exercicesData[matiereActuelle][niveau];

    const liste =
        document.getElementById("listeExercices");

    liste.innerHTML = "";

    exercicesActuels.forEach((exercice, index) => {

        const card = document.createElement("div");

        card.className = "exercise-list-card";

        card.style.animationDelay =
            `${index * 0.08}s`;

        card.innerHTML = `

            <div class="exercise-card-number">
                ${index + 1}
            </div>

            <div class="exercise-card-content">

                <span>
                    Exercice ${index + 1}
                </span>

                <h3>
                    ${exercice[0]}
                </h3>

            </div>

            <button onclick="commencerExercice(${index})">

                Commencer

                <i class="fas fa-arrow-right"></i>

            </button>

        `;

        liste.appendChild(card);

    });

}


/* =========================================================
   COMMENCER UN EXERCICE
   ========================================================= */

function commencerExercice(index) {

    exerciceActuel = index;
    score = 0;
    exerciceDejaVerifie = false;

    document.getElementById("exercicesListe").style.display = "none";

    document.getElementById("zoneExercice").style.display = "block";

    afficherExercice();
}


/* =========================================================
   AFFICHER L'EXERCICE
   ========================================================= */

function afficherExercice() {

    const exercice =
        exercicesActuels[exerciceActuel];

    document.getElementById("numeroQuestion").textContent =
        `Question ${exerciceActuel + 1}`;

    document.getElementById("progression").textContent =
        `Exercice ${exerciceActuel + 1} / ${exercicesActuels.length}`;

    document.getElementById("questionTexte").textContent =
        exercice[0];

    const badge =
        document.getElementById("niveauBadge");

    badge.textContent =
        niveauActuel.toUpperCase();

    badge.className =
        `niveau-badge ${niveauActuel}`;

    document.getElementById("reponseUtilisateur").value = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className =
        "feedback";

    document.getElementById("verifierBtn").style.display =
        "inline-flex";

    document.getElementById("suivantBtn").style.display =
        "none";

    exerciceDejaVerifie = false;

    /* Animation */

    const box =
        document.querySelector(".exercise-box-new");

    box.classList.remove("exercise-change");

    void box.offsetWidth;

    box.classList.add("exercise-change");
}


/* =========================================================
   NORMALISATION
   ========================================================= */

function normaliser(texte) {

    return texte
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,!?;:'"]/g, "")
        .replace(/\s+/g, " ");

}


/* =========================================================
   VÉRIFIER
   ========================================================= */

function verifierExercice() {

    if (exerciceDejaVerifie) {
        return;
    }

    const reponse =
        normaliser(
            document.getElementById("reponseUtilisateur").value
        );

    if (!reponse) {

        document.getElementById("feedback").textContent =
            "⚠️ Écris d'abord une réponse.";

        return;
    }

    const bonneReponse =
        normaliser(
            exercicesActuels[exerciceActuel][1]
        );

    const feedback =
        document.getElementById("feedback");


    if (reponse === bonneReponse) {

        score++;

        feedback.textContent =
            "✅ Bonne réponse ! Bravo !";

        feedback.className =
            "feedback correct";

    } else {

        feedback.textContent =
            `❌ Mauvaise réponse. La bonne réponse était : ${exercicesActuels[exerciceActuel][1]}`;

        feedback.className =
            "feedback incorrect";
    }


    exerciceDejaVerifie = true;

    document.getElementById("verifierBtn").style.display =
        "none";

    document.getElementById("suivantBtn").style.display =
        "inline-flex";
}


/* =========================================================
   EXERCICE SUIVANT
   ========================================================= */

function exerciceSuivant() {

    if (exerciceActuel < exercicesActuels.length - 1) {

        exerciceActuel++;

        afficherExercice();

    } else {

        afficherResultat();

    }

}


/* =========================================================
   RESULTAT
   ========================================================= */

function afficherResultat() {

    document.getElementById("zoneExercice").style.display =
        "none";

    document.getElementById("resultatSection").style.display =
        "flex";

    document.getElementById("scoreFinal").textContent =
        score;

    let message = "";

    if (score === 10) {

        message =
            "🏆 Score parfait ! Tu maîtrises très bien ce niveau.";

    } else if (score >= 7) {

        message =
            "🌟 Très bon travail ! Continue comme ça.";

    } else if (score >= 5) {

        message =
            "👍 Bon début ! Encore un peu d'entraînement.";

    } else {

        message =
            "💪 Ne baisse pas les bras. Révise le cours et réessaie.";

    }

    document.getElementById("resultMessage").textContent =
        message;
}


/* =========================================================
   RECOMMENCER
   ========================================================= */

function recommencerNiveau() {

    exerciceActuel = 0;
    score = 0;

    document.getElementById("resultatSection").style.display =
        "none";

    document.getElementById("zoneExercice").style.display =
        "block";

    afficherExercice();
}


/* =========================================================
   RETOUR AUX MATIÈRES
   ========================================================= */

function retourMatieres() {

    document.getElementById("exercicesListe").style.display =
        "none";

    document.getElementById("zoneExercice").style.display =
        "none";

    document.getElementById("resultatSection").style.display =
        "none";

    document.getElementById("matieresSection").style.display =
        "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   RETOUR À LA LISTE
   ========================================================= */

function retourListe() {

    document.getElementById("zoneExercice").style.display =
        "none";

    document.getElementById("resultatSection").style.display =
        "none";

    document.getElementById("exercicesListe").style.display =
        "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}