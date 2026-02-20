# 📚 BookVault

BookVault is a lightweight personal digital library built using **pure HTML, CSS, and JavaScript**.  
It allows users to add, organize, search, and manage books while supporting dark mode and responsive layouts across devices.
---

## ✨ Features

- Add books with title, author, genre, pages and date
- Upload PDF or TXT files and open them in a new tab
- Search books by title or author
- Edit and delete existing books
- Light and dark mode toggle
- Persistent storage using browser LocalStorage
- Responsive design
- Visual statistics dashboard
- Toast notifications
---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties / Variables)
- JavaScript
- Browser LocalStorage
---

## 📂 Project Structure

BookVault/
│
├── index.html
│
├── styles/
│ └── main.css
│
├── scripts/
│ ├── app.js
│ ├── ui.js
│ ├── search.js
│ ├── storage.js
│ ├── state.js
│ └── validator.js
│
├── images/
│ ├── logo.png
│ └── image.png
│
├── seed.json
│
└── README.md


---

## 🚀 How to Run the Project

1. Download or clone the repository
2. Open the project folder in VS Code
3. Run `index.html` using:
   - Live Server extension (recommended), or
   - Double-click the file to open it in a browser

No installation or build steps are required.

---

## 💾 Data Storage

- Book metadata is stored using **LocalStorage**
- Uploaded files are handled using browser-generated object URLs
- Data persists between page reloads
- `seed.json` 

## 👤 Author

**Zigira Luc Guevara**

## 📄 License

This project is for educational purposes only.
