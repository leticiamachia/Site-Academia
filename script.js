function AddCarrinho(){
  alert("Item adicionado ao carrinho!");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-theme");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  body.classList.add("dark-mode");

  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-fill");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-sun-fill");
    }
  });
});

