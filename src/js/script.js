window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");

    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
    navbar.classList.add("transparent");
  }
});

//animate

window.addEventListener("load", function () {
  // pull the class and animate the title and paragraph
  document.querySelector(".title-bg").classList.add("fade-in-up-title");
  document.querySelector(".paragraph-bg").classList.add("fade-in-up-paragraph");
});

//animate card
