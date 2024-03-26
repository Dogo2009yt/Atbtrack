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
    var pagamento = localStorage.getItem("pagamento");
var carta = localStorage.getItem("carta");
var scad = localStorage.getItem("scadenza");
var paga = document.getElementById("add");
var metodo = document.getElementById("met");
var scadenza = document.getElementById("scad");
var cart = document.getElementById("carta");
var aggiunta = localStorage.getItem("metodo");
var text = document.getElementById("text")


if(aggiunta === 'true'){
    text.textContent = "Modifica metodo di pagamento";
    paga.style.fontSize = "xx-large";
    paga.style.fontFamily = 'Bebas Neue', "sans-serif";
    paga.style.textAlign = "center";
    text.style.position = "relative";
    text.style.top = "20px";
    document.getElementById('pag').style.display = 'block';
    document.getElementById('pag').getElementsByTagName('p')[0].style.display = 'block';
    document.getElementById('pag').getElementsByTagName('p')[1].style.display = 'block';
    document.getElementById('pag').getElementsByTagName('p')[2].style.display = 'block';
    document.getElementById('pag').getElementsByTagName('p')[0].textContent = "Metodo di pagamento: " + pagamento;
    cart.textContent = "Carta n°: " + carta;
    document.getElementById('pag').getElementsByTagName('p')[2].innerHTML = "Scadenza: " + scad;
}else{
    text.textContent = "Aggiungi metodo di pagamento";
    document.getElementById('pag').style.display = 'block';
    document.getElementById('pag').getElementsByTagName('p')[0].style.display = 'none';
    document.getElementById('pag').getElementsByTagName('p')[1].style.display = 'none';
    document.getElementById('pag').getElementsByTagName('p')[2].style.display = 'none';
}
});
function add(){
    var risp = window.prompt("Inserisci il metodo di pagamento(Prepagata / Carta di credito) \nPer cancellare una carta (se inserita) premere annulla nelle seguenti domande")
    if(risp === ''){
        localStorage.setItem("metodo", "false");
    }
    localStorage.setItem("pagamento", risp);
    var risp1 = window.prompt("Inserisci la tua carta")
    if(risp1 === ''){
        localStorage.setItem("metodo", "false");
    }
    localStorage.setItem("carta", risp1);
    var risp2 = window.prompt("Inserisci la scadenza della tua carta")
    if(risp2 === ''){
        localStorage.setItem("metodo", "false");
    }
    localStorage.setItem("scadenza", risp2);
    localStorage.setItem("metodo", "true");
    window.location.href = "/metodipagamento";
}

