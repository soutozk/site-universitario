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
  document.getElementById("animate1").classList.add("fade-in-up-title");
  document.getElementById("animate2").classList.add("fade-in-up-paragraph");
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
                  src="https://img.freepik.com/fotos-gratis/equipe-de-arquiteto-de-construcao-trabalhando-em-um-escritorio-na-planta_482257-4620.jpg?t=st=1724937743~exp=1724941343~hmac=3e6e11e7bc270e0ed60f76517eccfff6841808cf36d63444f350fa0854faeaa1&w=740"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="https://imperiowp.com.br/storage/2024/05/curl-error-696x464.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://img.freepik.com/fotos-gratis/retrato-de-uma-mulher-biologa-sorridente-analisando-organismos-geneticamente-modificados_482257-21597.jpg?t=st=1724938204~exp=1724941804~hmac=48110d75f648a927075d3db36953ebdcda1365b0610e0889fb25897ac83aa452&w=740" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://fusne.com/wp-content/uploads/2023/04/curso-faculdade-medicina-22.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://www.noarcomunicacao.com/wp-content/uploads/2024/06/group-people-taking-interview-outdoors-756x478.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="https://contactusrh.com.br/wp-content/uploads/2023/11/Departamento-pessoal-para-empresas-conheca-os-erros-mais-comuns-e-como-resolve-los-1024x683.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="https://lazersemfronteiras.com.br/wp-content/uploads/2023/08/alternativas-gratuitas-ao-Canva.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://img.freepik.com/fotos-gratis/farmaceutico-masculino-verificando-a-pressao-sanguinea-da-mulher_23-2150359152.jpg?t=st=1724938806~exp=1724942406~hmac=6f1270f403df79d5cdfabc4662e41831224b4c11c2f47205c4139b472a3e9003&w=740" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="https://comvcportal.com.br/images/noticias/117069/3940253a1cd7cf87020a5ecd0d4cd41c.jpg"
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
  ],
  // Segundo conjunto de 9 cards
  [
    ` <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="https://clinicawa.com.br/wp-content/uploads/2024/05/clinica-de-emagrecimento-1.webp"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="https://irisveterinaria.com.br/wp-content/uploads/2022/06/Como-tratar-%C3%BAlcera-de-c%C3%B3rnea-em-c%C3%A3es-1024x683.jpg"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://img.freepik.com/free-photo/young-female-patient-having-dental-procedure-orthodontist_23-2148985773.jpg?t=st=1724888149~exp=1724891749~hmac=a7b051c5e9ba3ba5bb0e1f7a09b5bffb8bcfbba16c73d70baf16cb771a359048&w=740" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://telemedicinamorsch.com.br/wp-content/uploads/2024/02/enfermeiro-do-trabalho-telemedicina-morsch.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    ` <div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="https://uenp.edu.br/media/k2/items/cache/19fcdc4270102c23208fae71d96c386a_L.jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img
                  class="img-curso-pg"
                  src="https://i0.wp.com/falandotech.com/wp-content/uploads/2023/10/divulgacao-freepik-ft18102023.jpg?w=660&ssl=1"
                  alt=""
                />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/de3sign int].jpg" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
              <div class="box-img-cursos">
                <img class="img-curso-pg" src="/src/img/cienciasconytabeis.png" alt="" />
              </div>
              <div class="texts-curso-box">
                <h1 class="title-curso-pg">Green Campus Project</h1>
                <p class="paragraph-curso-pg">
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,

    `<div class="cards-cursos-pg">
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
                  Learn from the Best, Transform Your Future.
                </p>
              
              <div class="btn-curso">
                <a href="">Secure Your Spot</a>
              </div>
             </div>
            </div>`,
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

//
//
//
//
//
