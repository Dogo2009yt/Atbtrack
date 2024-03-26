var mongo = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
var url = "mongodb+srv://Diego:atbtrack@atbtrack.sondkpq.mongodb.net/";// Funzione per mostrare/nascondere il menu a tendina

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
        for (var i = 0; i < dropdowns.length; i++
            ) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function Sceglidur() {
    var lineas = document.getElementById("Abb");
    lineas.style.display = (lineas.style.display === "none" || lineas.style.display === "") ? "block" : "none";
}
function Sceglizona() {
    var lineas = document.getElementById("Zona");
    lineas.style.display = (lineas.style.display === "none" || lineas.style.display === "") ? "block" : "none";
}
function Settimanale(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var zone = document.getElementById("rettzona");
    var durata = document.getElementById("selezdur");
    durata.textContent = "Settimanale";
    menu.style.display = "none";
    zone.style.display = "block";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 14,50€";
    zona2.textContent = "2 Zona - 18,50€";
    zona3.textContent = "3 Zona - 23,00€";
    zona4.textContent = "4 Zona - 24,50€";
    zona5.textContent = "5 Zona - 28,00€";
    tutto.textContent = " ";
}

function Mensile(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    durata.textContent = "Mensile";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    zona1.textContent = "1 Zona - 36,00€";
    zona2.textContent = "2 Zona - 47,00€";
    zona3.textContent = "3 Zona - 58,00€";
    zona4.textContent = "4 Zona - 62,00€";
    zona5.textContent = "5 Zona - 70,00€";
    tutto.textContent = "Intera rete - 78,00€";
}
function Annuale(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    durata.textContent = "Annuale";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    zona1.textContent = "1 Zona - 325,00€";
    zona2.textContent = "2 Zona - 405,00€";
    zona3.textContent = "3 Zona - 474,00€";
    zona4.textContent = "4 Zona - 549,00€";
    zona5.textContent = "5 Zona - 623,00€";
    tutto.textContent = "Intera rete - 692,00€";
}
function Annualestud(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Annuale studenti";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 260,00€";
    zona2.textContent = "2 Zona - 324,00€";
    zona3.textContent = "3 Zona - 379,00€";
    zona4.textContent = "4 Zona - 439,00€";
    zona5.textContent = "5 Zona - 499,00€";
    tutto.textContent = "Intera rete - 554,00€ ";
}
function Annualecomuni(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    durata.textContent = "Annuale studenti residenti nei Comuni convenzionati";
    menu.style.display = "none";
    durata.style.fontSize = "Large"
    zona1.textContent = "1 Zona - 225,00€";
    zona2.textContent = "2 Zona - 279,00€";
    zona3.textContent = "3 Zona - 329,00€";
    zona4.textContent = "4 Zona - 389,00€";
    zona5.textContent = "5 Zona - 449,00€";
    tutto.textContent = "Intera rete - 504,00€";
}
function Under14(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Under14 e Over65 mensile";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 18,00€";
    zona2.textContent = "2 Zona - 23,50€";
    zona3.textContent = "3 Zona - 29,00€";
    zona4.textContent = "4 Zona - 31,00€";
    zona5.textContent = "5 Zona - 35,00€";
    tutto.textContent = "Intera rete - 39,00€";
}

function Under14ann(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Under14 e Over65 Annuale";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 162,50€";
    zona2.textContent = "2 Zona - 202,50€";
    zona3.textContent = "3 Zona - 237,00€";
    zona4.textContent = "4 Zona - 274,50€";
    zona5.textContent = "5 Zona - 311,50€";
    tutto.textContent = "Intera rete - 346,00€";
}
    function Junior(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Junior";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 10,00€";
    zona2.textContent = "2 Zona - 10,00€";
    zona3.textContent = "3 Zona - 10,00€";
    zona4.textContent = "4 Zona - 10,00€";
    zona5.textContent = "5 Zona - 10,00€";
    tutto.textContent = "Intera rete - 10,00€";
}
function Famiglia(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Famiglia";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 111,00€";
    zona2.textContent = "2 Zona - 138,00€";
    zona3.textContent = "3 Zona - 161,00€";
    zona4.textContent = "4 Zona - 187,00€";
    zona5.textContent = "5 Zona - 212,00€";
    tutto.textContent = "Intera rete - 235,00€";
}
function Annualeuni(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Annuale studenti università di Bergamo";
    menu.style.display = "none";
    durata.style.fontSize = "x-Large";
    zona1.textContent = "1 Zona - 200,00€";
    zona2.textContent = "2 Zona - 200,00€";
    zona3.textContent = "3 Zona - 200,00€";
    zona4.textContent = "4 Zona - 200,50€";
    zona5.textContent = "5 Zona - 200,00€";
    tutto.textContent = " ";
}
function Impersonale(){
    var zona1 = document.getElementById("1zona");
    var zona2 = document.getElementById("2zone");
    var zona3 = document.getElementById("3zone");
    var zona4 = document.getElementById("4zone");
    var zona5 = document.getElementById("5zone");
    var tutto = document.getElementById("tutto");
    var menu = document.getElementById("Abb");
    var durata = document.getElementById("selezdur");
    var zone = document.getElementById("rettzona");
    zone.style.display = "block";
    durata.textContent = "Impersonale";
    menu.style.display = "none";
    durata.style.fontSize = "xx-Large";
    zona1.textContent = "1 Zona - 507,00€";
    zona2.textContent = "2 Zona - 634,00€";
    zona3.textContent = "3 Zona - 761,00€";
    zona4.textContent = "4 Zona - 888,00€";
    zona5.textContent = "5 Zona - 1015,00€";
    tutto.textContent = "Intera rete - 1205,00€";
}
function zona1(){

}



