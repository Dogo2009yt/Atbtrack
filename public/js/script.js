window.onload = function() {
    var loggedIn = localStorage.getItem("loggedIn");
    var username = localStorage.getItem("user");
    var area = document.getElementById("area");
    var nome = document.getElementById("username");
    if (loggedIn === "true") {
        var accedi = document.getElementById("acc");
        var registrazione = document.getElementById("reg");
        registrazione.style.display = "none";
        accedi.style.display = "none";
        area.style.display = "block";
        nome.textContent = "Ciao " + username;

    }else{
        loggedIn = "false"
    }
};
function Menu() {
    var dropdown = document.getElementById("Menu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Chiudi il menu a tendina se si fa clic al di fuori di esso
window.addEventListener("click", function(event) {
    if (!event.target.closest('.menu')) {
        var dropdowns = document.getElementsByClassName("menuu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
});

function logout(){
    var loggedIn = localStorage.getItem("loggedIn");
    localStorage.setItem("loggedIn", "false");
    location.reload();
}
