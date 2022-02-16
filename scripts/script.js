var modo = "normal";
var button;

function cambiarModo() {
  let elementos = document.getElementsByClassName("change");

  if (modo == "normal") {
    modo = "dyslexic";
    button.innerText = "Normal";
    button.setAttribute("class", "normal-mode");
    for (let elemento of elementos) {
      elemento.setAttribute("class", "change dyslexic-mode");
    }
  } else {
    mode = "normal";
    button.innerText = "Dyslexic";
    button.setAttribute("class", "dyslexic-mode");
    for (let elemento of elementos) {
      elemento.setAttribute("class", "change");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  button = document.getElementById("change_button");

  button.innerText = "Dyslexic";
  button.setAttribute("class", "dyslexic-mode");

  button.addEventListener("click", cambiarModo);
});
