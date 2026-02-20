import { renderStats, renderBooks } from "./ui.js";
import "./search.js";


const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".navbtn");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});



renderStats();
renderBooks();


const themeBtn = document.getElementById("themeToggle");


themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});



if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
