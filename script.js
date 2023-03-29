let myLibrary = [];

function Book(title, author, cover, pages, status) {
    this.title = title;
    this.author =  author;
    this.cover = cover;
    this.pages = pages;
    this.status = status;
}

const testBook = {
    title: "The Hobbit",
    author: "JRR Tolkien",
    pages: 400,
    cover: "https://4.bp.blogspot.com/-Qm7SYvrAabU/UPYIVCfLCBI/AAAAAAAAEwQ/b5fw-8ItJEY/s1600/Hobbit_75th.jpg",
    status: "Read"
};

myLibrary.push(testBook);

function populateLibrary() {
    const bookshelf = document.querySelector(".card-container");
    
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
    const newBook = Object.create(book);
// Take form inputs and apply them to the book properties
    newBook.title = title;
    newBook.author = author;
    newBook.cover = cover;
    newBook.pages = pages;
    newBook.status = status;
// Push the newly recreate book obect to the myLibrary arry
    myLibrary.push(newBook);
}
/*
document.getElementById("new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = // Acquire these values from the form inputs
    const author = //
    const cover = //
    const pages = //
    const status = //

    addBookToLibrary(title, author, cover, pages, status);
}); */

document.getElementById("new-book-btn").addEventListener("click", (event) => {
    document.getElementById("new-book-modal").style.display = "block";
});

document.getElementById("cancel-modal-btn").addEventListener("click", (event) => {
    document.getElementById("new-book-modal").style.display = "none";

    // THIS SHOULD ALSO ERASE ALL FORM DATA
});

window.addEventListener("click", (event) => {
    if(event.target === document.getElementById("new-book-modal")) {
        document.getElementById("new-book-modal").style.display = "none";
    }
});