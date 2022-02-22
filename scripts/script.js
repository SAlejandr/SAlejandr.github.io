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
        

        body.setAttribute("class","container-fluid h-100 dark-mode");
    }else{
        body.setAttribute("class","container-fluid h-100 light-mode");
    }
    num++;
}

document.addEventListener("DOMContentLoaded", function () {
    button = document.getElementById("change_button");

    modes = document.getElementById("modes");

    modes.innerText ="Dark/Light";

    button.innerText = "Dyslexic";
    button.setAttribute("class", "dyslexic-mode");

    button.addEventListener("click", cambiarModo);
    modes.addEventListener("click", chages_modes);
});
