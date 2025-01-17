/*
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
*/
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.body.classList.add(`${currentTheme}-mode`);
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    const newTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", newTheme);
  });
});
