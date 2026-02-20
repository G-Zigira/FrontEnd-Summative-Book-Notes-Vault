import { loadBooks, saveBooks, saveFile } from "./storage.js";


let books = await loadBooks();
let lastOpened = "—";
let editingId = null;


const grid = document.getElementById("booksGrid");
const totalBooks = document.getElementById("totalBooks");
const totalPages = document.getElementById("totalPages");
const topAuthor = document.getElementById("topAuthor");
const lastOpenedEl = document.getElementById("lastOpened");
const totalAuthors = document.getElementById("totalAuthors");


const form = document.getElementById("addForm");
const fileInput = document.getElementById("fileInput");
const editList = document.getElementById("editList");


const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);



function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}



export function renderBooks(list = books, query = "") {
  grid.innerHTML = "";


  const filtered = list.filter(b =>
    (b.title + b.author).toLowerCase().includes(query)
  );


  filtered.forEach(book => {
    const card = document.createElement("div");
    card.className = "bookcard";

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <small>${book.pages || 0} pages</small>
    `;

    card.onclick = () => {
      if (book.fileURL) window.open(book.fileURL, "_blank");
      lastOpened = book.title;
      renderStats();
    };

    grid.appendChild(card);
  });

  renderEditList(filtered);
}




export function renderStats() {
  totalBooks.textContent = books.length;
  totalPages.textContent = books.reduce((a, b) => a + (b.pages || 0), 0);

  const authors = books.map(b => b.author);
  totalAuthors.textContent = new Set(authors).size;

  const counts = {};
  authors.forEach(a => counts[a] = (counts[a] || 0) + 1);
  topAuthor.textContent =
    Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0] || "—";

  lastOpenedEl.textContent = lastOpened;
}




form.addEventListener("submit", e => {
  e.preventDefault();


  const file = fileInput.files[0];
  const url = file ? saveFile(file) : null;


  if (editingId) {
    const b = books.find(x => x.id === editingId);
    b.title = titleInput.value;
    b.author = authorInput.value;
    b.tag = tagInput.value;
    b.pages = Number(pagesInput.value);
    b.updatedAt = new Date().toISOString();
    if (url) b.fileURL = url;

    showToast("The Book has been updated");
    editingId = null;
  } else {
    const book = {
      id: "book_" + Date.now(),
      title: titleInput.value.trim(),
      author: authorInput.value.trim(),
      tag: tagInput.value.trim(),
      pages: Number(pagesInput.value),
      dateAdded: dateInput.value,
      fileURL: url,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    books.push(book);
    showToast("Anew Book has been added");
  }

  saveBooks(books);
  renderBooks();
  renderStats();
  form.reset();
});



function renderEditList(list = books) {

  editList.innerHTML = "";


  list.forEach(book => {

    const row = document.createElement("div");
    row.className = "editrow";

    row.innerHTML = `
      <strong>${book.title}</strong> – ${book.author}
      <button class="editbtn">Edit</button>
      <button class="deletebtn">Delete</button>
    `;


    row.querySelector(".deletebtn").onclick = () => {
      if (!confirm("Delete this book?")) return;
      books = books.filter(b => b.id !== book.id);
      saveBooks(books);
      renderBooks();
      renderStats();
      showToast("This Book has been deleted");
    };


    row.querySelector(".editbtn").onclick = () => {
      editingId = book.id;
      titleInput.value = book.title;
      authorInput.value = book.author;
      tagInput.value = book.tag;
      pagesInput.value = book.pages;
      dateInput.value = book.dateAdded;
      document.querySelector('[data-page="add"]').click();
      showToast("Your Book has been edited");
    };

    editList.appendChild(row);
  });
}




document.getElementById("sortAZ").onclick = () => {
  books.sort((a,b)=>a.title.localeCompare(b.title));
  saveBooks(books);
  renderBooks();
  showToast("The books have been sorted alphabetically");
};



document.getElementById("sortDate").onclick = () => {
  books.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  saveBooks(books);
  renderBooks();
  showToast("The books have been sorted by date");
};

renderBooks();
renderStats();
