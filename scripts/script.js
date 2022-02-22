var modo = "normal";
var button, modes;

var num = 0;

function cambiarModo() {
    let elementos = document.getElementsByClassName("change");

    if (modo == "normal") {
        modo = "dyslexic";

        button.innerText = "Normal";
        button.setAttribute("class", "normal-mode");
        modes.setAttribute("class", "dyslexic-mode");
        for (let elemento of elementos) {
            elemento.setAttribute("class", "change dyslexic-mode");
        }
    } else {
        mode = "normal";

        button.innerText = "Dyslexic";
        button.setAttribute("class", "dyslexic-mode");
        modes.setAttribute("class", "normal-mode");

        for (let elemento of elementos) {
            elemento.setAttribute("class", "change normal-mode");
        }
    }
}

function chages_modes() {
    let body = document.getElementById("principal");
    if(num%2 == 0){
        

        body.setAttribute("class","container-fluid dark-mode");
    }else{
        body.setAttribute("class","container-fluid light-mode");
    }

}

document.addEventListener("DOMContentLoaded", function () {
    button = document.getElementById("change_button");

    button = document.getElementById("modes");

    button.innerText = "Dyslexic";
    button.setAttribute("class", "dyslexic-mode");

    button.addEventListener("click", cambiarModo);
});
