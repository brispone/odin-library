let myLibrary = [];

function Book(title, author, cover, pages, status) {
    this.title = title;
    this.author =  author;
    this.cover = cover;
    this.pages = pages;
    this.status = status;
}

/*
const testBook = {
    title: "The Hobbit",
    author: "JRR Tolkien",
    pages: 400,
    cover: "https://4.bp.blogspot.com/-Qm7SYvrAabU/UPYIVCfLCBI/AAAAAAAAEwQ/b5fw-8ItJEY/s1600/Hobbit_75th.jpg",
    status: "Read"
};

myLibrary.push(testBook);
*/

function populateLibrary() {
    const bookshelf = document.querySelector(".card-container");

    bookshelf.innerHTML = ""; // Clear current books on screen to avoid duplication
    
    myLibrary.forEach((book) => {

        const newBookDiv = document.createElement("div");
        newBookDiv.className = "card";

        newBookDiv.innerHTML = `<img src='${book.cover}'/>` +
                               `Title: ${book.title}<br>` +
                               `Author: ${book.author}<br>` +
                               `${book.pages} pages<br>` +
                               `Status: ${book.status}`;

        bookshelf.append(newBookDiv);
    });
}


function addBookToLibrary(title, author, cover, pages, status) {
// Create new book object
    const newBook = Object.create(Book);
// Take form inputs and apply them to the book properties
    newBook.title = title;
    newBook.author = author;
    newBook.cover = cover;
    newBook.pages = pages;
    newBook.status = status;
// Push the newly recreate book obect to the myLibrary array
    myLibrary.push(newBook);
    populateLibrary();
}

document.getElementById("new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("book-title-input").value;
    const author = document.getElementById("book-author-input").value;
    const cover = document.getElementById("book-cover-input").value;
    const pages = document.getElementById("book-pages-input").value;
    const status = document.getElementById("book-status-input").value;

    addBookToLibrary(title, author, cover, pages, status);
    document.getElementById("new-book-modal").style.display = "none"; // Hide modal
    document.getElementById("new-book-form").reset(); // Clear the form
});

document.getElementById("new-book-btn").addEventListener("click", (event) => {
    document.getElementById("new-book-modal").style.display = "block"; // Show modal
});

document.getElementById("cancel-modal-btn").addEventListener("click", (event) => {
    document.getElementById("new-book-modal").style.display = "none"; // Hide modal
    document.getElementById("new-book-form").reset(); // Clear the form
});

window.addEventListener("click", (event) => {
    if(event.target === document.getElementById("new-book-modal")) {
        document.getElementById("new-book-modal").style.display = "none"; // Hide modal
    }
});