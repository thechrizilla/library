const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.getElementById('close-modal-button');
let myLibrary = [];

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function openModal() {

}

function closeModal() {

}

function addBookToLibrary() {
    newBook = new Book("Hunger Games", "Suzanne Collins", "374", true)
}

console.log(myLibrary)