// Funzione per mostrare/nascondere il menu a tendina
function CambiaLingua() {
    var dropdown = document.getElementById("Menucambio");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Chiudi il menu a tendina se si fa clic al di fuori di esso
window.onclick = function(event) {
    if (!event.target.matches('.change img')) {
        var dropdowns = document.getElementsByClassName("cambiolingua");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

// Funzione per mostrare/nascondere il menu a tendina
function Menu() {
    var dropdown = document.getElementById("Menu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Chiudi il menu a tendina se si fa clic al di fuori di esso
window.onclick = function(event) {
    if (!event.target.matches('.menu img')) {
        var dropdowns = document.getElementsByClassName("menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var accedi = document.getElementById("accedi"); 
    var loggedIn = localStorage.getItem("loggedIn");
    var attivi = document.getElementById("attivi");
    var attivo = document.getElementById("attivo");
    var compra = document.getElementById("compra");
    var accedii = document.getElementById("accedii");
    var registrati = document.getElementById("registrati");
    var tessera = localStorage.getItem("tessera");
    var scadenza = localStorage.getItem("scadenza");

    if(loggedIn === "false"){
        accedi.style.display = "block";
        accedii.style.display = "block";
        registrati.style.display = "block";    
        attivi.style.display = "none";
        attivo.style.display = "none";
        compra.style.display = "none";
    }   
});

    





