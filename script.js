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

