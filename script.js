const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read; // if the book is already read or not
}

function addBookToLibrary(name, author, pages, read) {
    book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".showDialogButton");
const closeButton = document.querySelector(".closeDialogButton");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});


const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
    const readNoInput = document.getElementById("readNo");
    if (readNoInput.checked)
        addBookToLibrary(nameInput.value, authorInput.value, parseInt(pagesInput.value), false);
    else
        addBookToLibrary(nameInput.value, authorInput.value, parseInt(pagesInput.value), true);
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    row.classList.add("book-" + (myLibrary.length - 1).toString());
    const tdName = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td");
    const tdDelete = document.createElement("td");
    const deleteBookButton = document.createElement("button");
    deleteBookButton.type = "button";
    deleteBookButton.classList.add("deleteBookButton");
    deleteBookButton.textContent = "Delete";
    tdDelete.appendChild(deleteBookButton);
    row.appendChild(tdName);
    row.appendChild(tdAuthor);
    row.appendChild(tdPages);
    row.appendChild(tdRead);
    row.appendChild(tdDelete);
    table.appendChild(row);
    tdName.textContent = myLibrary[myLibrary.length - 1].name;
    tdAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    tdPages.textContent = myLibrary[myLibrary.length - 1].pages;
    if (myLibrary[myLibrary.length - 1].read === true)
        tdRead.textContent = "Yes";
    else
        tdRead.textContent = "No";
    form.reset();
    deleteBookButton.addEventListener("click", event => {
        const bookNumber = parseInt(event.target.parentElement.parentElement.classList[0].slice(-1));
        event.target.parentElement.parentElement.remove();
        myLibrary.splice(bookNumber, 1); 
    });
});

