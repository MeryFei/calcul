
const display = document.getElementById('display');

function Display(input) {
    display.value +=  input;
}

function calculate() {
    try {
         display.value = eval(display.value);
    } catch (error) {
        display.value = " nuh uh";
    }

}

function reset() {
    var display = document.getElementById('display');
    display.value ='';
}



// Fonction pour récupérer le nom d'utilisateur à partir de l'URL
function getUsernameFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}

// Afficher le message de bienvenue avec le nom d'utilisateur
var username = getUsernameFromURL();
var welcomeMsg = document.getElementById("wlcm");
welcomeMsg.textContent = "Welcome " + (username === "" ? 'Guest'+"," : username+",");
