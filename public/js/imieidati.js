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
var username = localStorage.getItem("user");
var email = localStorage.getItem("email");
function cambiamail(){
    var risposta = window.prompt("Ciao " + username + "\nSei sicuro di cambiare email? \nL'email attuale è " + email)
    if(risposta === 'si'){
        var mail = window.prompt("Ora scrivi la tua nuova email!")
        localStorage.setItem("email", mail);
        if(mail === ''){
            alert("L'email non è stata cambiata")
        }else{
            alert("L'email è stata cambiata a " + mail)
        }
    }else{
        alert("L'email non è stata cambiata")
    }
}
function cambiapass(){
    var risposta = window.prompt("Ciao " + username + "\nSei sicuro di cambiare password?")
    if(risposta === 'si'){
        var pass = window.prompt("Ora scrivi la tua nuova password!")
        localStorage.setItem("password", pass);
        if(pass === ''){
            alert("La password non è stata cambiata")
        }else{
            alert("La password è stata cambiata ")
        }
    }else{
        alert("La password non è stata cambiata")
    }
}
function pag(){
    window.location.href = "/metodipagamento";
}
