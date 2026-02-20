const KEY = "bookvault:data";


export async function loadBooks() {
  const saved = localStorage.getItem(KEY);
  if (saved) return JSON.parse(saved);



  const res = await fetch("seed.json");
  const data = await res.json();
  localStorage.setItem(KEY, JSON.stringify(data));
  return data;

}


export function saveBooks(data) {

  localStorage.setItem(KEY, JSON.stringify(data));
}


export function saveFile(file) {
  
  return URL.createObjectURL(file);
}
