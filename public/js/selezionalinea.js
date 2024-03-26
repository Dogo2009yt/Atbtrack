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
function Sceglidirezione() {
    var direzione = document.getElementById("direzione");
    direzione.style.display = (direzione.style.display === "none" || direzione.style.display === "") ? "block" : "none";
}




function Linea27(){
    var lineas = document.getElementById("Linea");
    var scelta1 = document.getElementById("scelta1");
    var scelta2 = document.getElementById("scelta2");
    var scelta3 = document.getElementById("scelta3");
    var scelta4 = document.getElementById("scelta4");
    var scelta5 = document.getElementById("scelta5");
    var scelta6 = document.getElementById("scelta6");
    var scritta = document.getElementById("lineascelta");
    var menu = document.getElementById("direzione");
    scritta.textContent = "Hai scelto la linea 27";
    var Direzione = document.getElementById("rettdirezione");
    lineas.style.display = "none";
    Direzione.style.display = "block";
    direzione.style.display = "none";
    scelta1.textContent = "NEMBRO";
    scelta2.textContent = "ALBANO S. ALESSANDRO";
    scelta3.textContent = " ";
    scelta4.textContent = " ";
    scelta5.textContent = " ";
    scelta6.textContent = " ";
    menu.style.top = "-145px";
    menu.style.height = "90px";
}
function Linea21(){
    var scelta1 = document.getElementById("scelta1");
    var scelta2 = document.getElementById("scelta2");
    var scelta3 = document.getElementById("scelta3");
    var scelta4 = document.getElementById("scelta4");
    var scelta5 = document.getElementById("scelta5");
    var scelta6 = document.getElementById("scelta6");
    var menu = document.getElementById("direzione");
    var lineas = document.getElementById("Linea");
    var direzione = document.getElementById("direzione");
    var scritta = document.getElementById("lineascelta");
    scritta.textContent = "Hai scelto la linea 21";
    var Direzione = document.getElementById("rettdirezione");
    lineas.style.display = "none"
    Direzione.style.display = "block";
    direzione.style.display = "none";
    scelta1.textContent = "S. Vigilio";
    scelta2.textContent = "Colle Aperto";
    scelta3.style.display = "none";
    scelta4.style.display = "none";
    scelta5.style.display = "none";
    scelta6.style.display = "none";
    menu.style.top = "-130px";
    menu.style.height = "120px";
    function click1() {
        if (scelta1.textContent.trim().toLowerCase() === "s. vigilio") {
            console.log(scelta1);
            window.location.href = "/linea21svigilio";
        } else {
            console.log("Il testo non è 'S. Vigilio'");
            // Puoi aggiungere ulteriori azioni o messaggi di avviso qui se necessario
        }
    }
    function click2() {
        if (scelta2.textContent.trim().toLowerCase() === "colle aperto") {
            console.log(scelta1);
            window.location.href = "/linea21colleaperto";
        }
    }
    
    // Assegna la funzione click1 all'evento di click dell'elemento scelta1
        scelta1.addEventListener("click", click1);
        scelta2.addEventListener("click",click2);
}
function nondisp(){
    alert("ATTENZIONE! Essendo una versione Alpha del sito questa linea non è disponibile,le uniche linee disponibili sono le linee 21 e 27. Grazie e buona permaneza sul sito  -Atbtrack Team")
}



  