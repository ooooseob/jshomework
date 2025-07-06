// const container = document.querySelector(".accordion-container");
// const header = container.querySelector(".accordion-header .btn");
// const content = container.querySelector(".accordion-content");

// console.log(header);
// console.log(content);

// header.addEventListener("click", () => {
//   container.classList.toggle("is-open");
//   content.classList.toggle("is-open");
// });

const containers = Array.from(document.querySelectorAll('.accordion-container'));

containers.forEach((accordion) => {
  const button = accordion.querySelector('.accordion-header .btn');

  button.addEventListener('click', () => {
    accordion.classList.toggle('is-open');
  });
});
