const head = document.querySelectorAll(".head");
const body = document.querySelectorAll(".body");

if (head) {
  for (let index = 0; index < head.length; index++) {
    head[index].addEventListener("click", (e) => {
      const element2 = body[index];

      element2.classList.toggle("active");
    });
  }
}
