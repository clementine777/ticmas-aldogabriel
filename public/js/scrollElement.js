var botones = document.querySelectorAll("li");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function (event) {
    var seccion = this.getAttribute("data-scroll");

    var seccionPos = document.querySelector(seccion).offsetTop;

    window.scrollTo({
      top: seccionPos,
      behavior: "smooth",
    });
  });
}
