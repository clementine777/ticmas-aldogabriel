var botones = document.querySelectorAll("li");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function (event) {
    // Obtener la información de la sección a la que se debe hacer scroll
    var seccion = this.getAttribute("data-scroll");

    // Hacer scroll a la sección correspondiente
    var seccionPos = document.querySelector(seccion).offsetTop;

    window.scrollTo({
      top: seccionPos,
      behavior: "smooth",
    });
  });
}
