document.addEventListener(`DOMContentLoaded`, () => {
  const switchTheme = document.getElementById("themeSwitch");
  const body = document.body;

  // Cargar preferencia guardada
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-bs-theme", savedTheme);
    switchTheme.checked = savedTheme === "dark";
  }

  // Evento de cambio
  switchTheme.addEventListener("change", () => {
    const newTheme = switchTheme.checked ? "dark" : "light";
    body.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

});
