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