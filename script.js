const slides = [
    {
    image: "moto1.svg",
    text: "Scooter Elétrica Voltz EV1",
    },
    {
    image: "moto2.svg",
    text: "Honda CB 500X",
    },
];

function showSlide(slideIndex) {
    const view = document.querySelector(".navModel");
    const slide = slides[slideIndex];
    view.innerHTML = `
        <div class="model">
            <p class="nameModel"><b>${slide.text}</b></p>
            <img class="imgMoto" src="${slide.image}">
            <p>A partir de</p>
            <p class="price">R$ 619,90</p>
            <p class="time">Plano de 30 meses</p>
        </div>
    `;
}
const prevButton = document.querySelector(".navLeft");
const nextButton = document.querySelector(".navRight");

let slideIndex = 0;
showSlide(slideIndex);

prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

nextButton.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});
