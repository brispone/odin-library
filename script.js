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
    
    myLibrary.forEach((book, index) => {

        const newBookDiv = document.createElement("div");
        
        newBookDiv.className = "card";
        newBookDiv.dataset.index = index;

        newBookDiv.innerHTML = `<img class='cover-img' src='${book.cover ? book.cover : './images/book-cover-placeholder.png'}'/>` +
                               `"${book.title}"<br>` +
                               `by<br>` +
                               `${book.author}`;

        const deleteButton = document.createElement("img");
        deleteButton.className = 'delete-btn';
        deleteButton.src = './icons/trashcan.svg';
        deleteButton.addEventListener('click', (event) => {
            removeFromLibrary(event.target.parentNode.dataset.index);
        });

        newBookDiv.prepend(deleteButton);

        //create foooter
        const cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";
        cardFooter.innerHTML = `<span class="pg-count">${book.pages} pages</span>`;
        //create read/unread button w/ event listener
        const statusIcon = document.createElement("img");
        statusIcon.src = book.status ? './icons/read.svg' : './icons/unread.svg';

        statusIcon.addEventListener("click", (event) => {
            toggleStatus(event.target.parentNode.parentNode.dataset.index);
        });

        //append button to footer
        cardFooter.append(statusIcon);
        //append footer to card
        newBookDiv.append(cardFooter);

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

function removeFromLibrary(index) {
    myLibrary.splice(index, 1);
    populateLibrary();
}

function toggleStatus(index) {
    myLibrary[index].status = !myLibrary[index].status;
    populateLibrary();
}

document.getElementById("new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("book-title-input").value;
    const author = document.getElementById("book-author-input").value;
    const cover = document.getElementById("book-cover-input").value;
    const pages = document.getElementById("book-pages-input").value;
    const status = (document.getElementById("book-status-input").value === "true"); // will set it to true if the string is 'true', otherwise false

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