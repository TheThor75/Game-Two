let humberger = document.getElementById("hamburger");
let navbar = document.getElementById("navbar");
let titre = document.getElementById("titre1");
let lastScrollY = window.scrollY;
const headers = document.querySelector(".header");
let rappeltitre = titre.textContent;
titre.textContent = "";

humberger.addEventListener("click", function (e) {
  e.stopPropagation();
  humberger.classList.toggle("active");
  navbar.classList.toggle("active");
});

window.onload = function () {
  window.document.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY) {
      headers.classList.add("hidden");
    } else {
      headers.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });

  document.body.addEventListener("click", function (e) {
    e.stopPropagation();
    humberger.classList.remove("active");
    navbar.classList.remove("active");
  });

  for (let i = 0; i < rappeltitre.length; i++) {
    setTimeout(function () {
      titre.textContent = rappeltitre.substring(0, i);
    }, i * 100);
  }
};
let ratio = 0.1;
let option = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

//Effet d'apparition progressif des éléments lors du scroll
let effets = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("effet-visible");
      /* entry.target.classList.add("bare");*/
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(effets, option);
document.querySelectorAll(".effet").forEach(function (r) {
  observer.observe(r);
});
