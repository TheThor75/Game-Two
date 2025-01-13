let humberger = document.getElementById("hamburger");
let navbar = document.getElementById("navbar");
let titre = document.getElementById("titre1");

let rappeltitre = titre.textContent;
titre.textContent = "";

humberger.addEventListener("click", function (e) {
  e.stopPropagation();
  humberger.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.body.addEventListener("click", function () {
  humberger.classList.remove("active");
  navbar.classList.remove("active");
});

window.onload = function () {
  setTimeout(function () {
    for (let i = 0; i < rappeltitre.length; i++) {
      setTimeout(function () {
        titre.textContent = rappeltitre.substring(0, i);
      }, i * 100);
    }
  }, 200);
};
