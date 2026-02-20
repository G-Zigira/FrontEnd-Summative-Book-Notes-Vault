import { renderBooks } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const editSearch = document.getElementById("editSearch");


function filter(q) {
  const query = q.toLowerCase();
  renderBooks(undefined, query);
}


searchInput.addEventListener("input", e => filter(e.target.value));
editSearch.addEventListener("input", e => filter(e.target.value));
