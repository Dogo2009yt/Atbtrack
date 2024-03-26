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

function accedi() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var sbaglio = document.getElementById("slab");

    if (user === "Atbtrack" && password === "Prova") {
        localStorage.setItem("user", "Atbtrack");
        localStorage.setItem("email", "atbtrack@gmail.com");
        localStorage.setItem("password", password);
        localStorage.setItem("tessera", "1234");
        localStorage.setItem("scadenza", '0');
        localStorage.setItem("loggedIn", "true");
        window.location.href = "/";
    } else {
        sbaglio.style.display = "block";
        document.getElementById("pass").value = "";
    }
}
let state = "hidden"
const changeInput = () => {
    state == "hidden" ? document.getElementById("icona").src = "img/visible.png" : document.getElementById("icona").src = "img/hidden.png"
    state == "hidden" ? document.getElementById("pass").type = "text" : document.getElementById("pass").type = "password"

    state == "hidden" ? state = "visible" : state = "hidden"
}
document.addEventListener('DOMContentLoaded', function() {
    var larghezzaSchermo = window.innerWidth;
    if (larghezzaSchermo <= 480){
        var passwordText = document.getElementById("plab");
        var userText = document.getElementById("ulab");
        passwordText.textContent = "Password: ";
        userText.textContent = "Username: "
    }
});
