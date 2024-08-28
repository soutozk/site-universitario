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

const cardsContainer = document.getElementById("cards-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const setsOfCards = [
  // Primeiro conjunto de 9 cards
  [
    ` <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/arquitetura.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/cienciasdacomputaçao.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/biomed.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/medicina.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/jornalimo.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/adiministraçao.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/design.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/farmacia.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/gastronomia.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>`,
  ],
  // Segundo conjunto de 9 cards
  [
    <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/nutri.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/vet.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/odonto.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/enfermagem.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/agronegocio.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/analisedesenvolvimentodesistemas.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/de3sign int].jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>

            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/cienciasconytabeis.png" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
            <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="/src/img/cienciasbio.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Elohin University launched the Green Campus Project in 2020
                </p>
              </div>
              <div class="buttom-cursos-pg">
                <a href="">plus</a>
              </div>
            </div>
  ],
];

let currentSetIndex = 0;

function updateCards() {
  cardsContainer.innerHTML = setsOfCards[currentSetIndex].join("");
}

// Evento de "avançar"
nextBtn.addEventListener("click", () => {
  currentSetIndex = (currentSetIndex + 1) % setsOfCards.length;
  updateCards();
});

// Evento de "voltar"
prevBtn.addEventListener("click", () => {
  currentSetIndex =
    (currentSetIndex - 1 + setsOfCards.length) % setsOfCards.length;
  updateCards();
});
