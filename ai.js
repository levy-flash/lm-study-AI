const input = document.getElementById("aiMessage");
const chat = document.getElementById("chat");
const button = document.getElementById("sendButton");


button.addEventListener("click", sendMessage);


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


async function sendMessage() {

    const message = input.value.trim();

    if (!message) {
        return;
    }


    // Afficher la question de l'élève
    addMessage(
        message,
        "user"
    );


    // Vider le champ
    input.value = "";


    // Désactiver le bouton
    button.disabled = true;

    button.textContent = "Réflexion...";


    // Message temporaire
    const loading = addMessage(
        "LM STUDY AI réfléchit... ⏳",
        "ai"
    );


    try {

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });


        const data = await response.json();


        // Supprimer le message de chargement
        loading.remove();


        if (!response.ok) {

            throw new Error(
                data.error || "Erreur du serveur"
            );

        }


        // Afficher directement la réponse
        addMessage(
            data.answer,
            "ai"
        );


    } catch (error) {

        console.error(error);


        loading.remove();


        addMessage(
            "❌ Impossible de contacter LM STUDY AI. Vérifie que le serveur est démarré.",
            "ai"
        );

    }


    button.disabled = false;

    button.textContent = "Envoyer 🚀";

}


function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = `message ${type}`;


    const name = type === "ai"
        ? "🤖 LM STUDY AI"
        : "👨‍🎓 Toi";


    message.innerHTML = `
        <strong>${name}</strong>
        <p></p>
    `;


    message.querySelector("p").textContent = text;


    chat.appendChild(message);


    // Descendre automatiquement
    chat.scrollTop = chat.scrollHeight;


    return message;

}