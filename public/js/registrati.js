

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


function accedi() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("email").value;

    if (user === "" || password === "" || email === "") {
        alert("Compila tutti i campi per registrarti!")
    }
    else{
        localStorage.setItem("user", user);
        localStorage.setItem("loggedIn", "true");
        window.location.href = "/";
        
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
        var emailText = document.getElementById("elab");
        passwordText.textContent = "Password: ";
        userText.textContent = "Username: "
        emailText.textContent = "Email: "
    }
});
