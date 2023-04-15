const cards = document.querySelectorAll(".my-card");

document.querySelector(".my-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("my-card")) {
    cards.forEach((card) => card.classList.remove("active"));
    event.target.classList.add("active");
  }
});
