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


function Sceglilinea() {
    var lineas = document.getElementById("Linea");
    lineas.style.display = (lineas.style.display === "none" || lineas.style.display === "") ? "block" : "none";
}

function nondisp(){
    alert("ATTENZIONE! Essendo una versione Alpha del sito questa fermata non è disponibile,le uniche linee disponibili sono le fermate di via verdi. Grazie e buona permaneza sul sito  -Atbtrack Team")
}



  