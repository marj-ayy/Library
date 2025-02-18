const myLibrary = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read; // if the book is already read or not
}

function addBookToLibrary(name, author, pages, read){
    book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

// addBookToLibrary("Harry Poter", "J. K. Rowlings", 400, true);
// addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 192, false);
// addBookToLibrary("A Short Story Of Humanity", "Y. N. Harari", 450, true);

// for(let i = 0; i < myLibrary.length; ++i){
//     const table = document.querySelector("table");
//     const row = document.createElement("tr");
//     const tdName = document.createElement("td");
//     const tdAuthor = document.createElement("td");
//     const tdPages = document.createElement("td");
//     const tdRead = document.createElement("td");
//     row.appendChild(tdName);
//     row.appendChild(tdAuthor);
//     row.appendChild(tdPages);
//     row.appendChild(tdRead);
//     table.appendChild(row);
//     tdName.textContent = myLibrary[i].name;
//     tdAuthor.textContent = myLibrary[i].author;
//     tdPages.textContent = myLibrary[i].pages;
//     if(myLibrary[i].read === true)
//         tdRead.textContent = "Yes";
//     else
//         tdRead.textContent = "No";
// }

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
    console.log(nameInput.value);
    if(readNoInput.checked)
        addBookToLibrary(nameInput.value, authorInput.value, pagesInput.value, false);
    else
        addBookToLibrary(nameInput.value, authorInput.value, pagesInput.value, true);
    console.log(myLibrary);
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td");
    row.appendChild(tdName);
    row.appendChild(tdAuthor);
    row.appendChild(tdPages);
    row.appendChild(tdRead);
    table.appendChild(row);
    tdName.textContent = myLibrary[myLibrary.length - 1].name;
    tdAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    tdPages.textContent = myLibrary[myLibrary.length - 1].pages;
    if(myLibrary[myLibrary.length - 1].read === true)
        tdRead.textContent = "Yes";
    else
        tdRead.textContent = "No";
    form.reset();
  });

