import { load, save } from "./storage.js";


export let books = load();


export function addBook(book) {
  books.push(book);
  save(books);
}


export function deleteBook(id) {
  books = books.filter(b => b.id !== id);
  save(books);
}


export function updateBook(updated) {
  books = books.map(b => b.id === updated.id ? updated : b);
  save(books);
}
