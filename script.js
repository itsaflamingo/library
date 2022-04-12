const bookInfo = document.getElementById("#book-info");
const overlay = document.getElementById('overlay');
const form = document.getElementById('form');
const newBookBtn = document.querySelector('#new-book-btn');
const main = document.querySelector('.main');
const deleteButton = document.querySelectorAll('.delete');
const body = document.querySelector('body');
let newBookDiv;

//new dynamic div when click "new Book" button

let bookCount = document.querySelector('#bookCounter'); 
let readCount = document.querySelector('#readCount');
let readDisplay = document.querySelector('#readDisplay');

//variables
let bookCounter = 0;
let bookReadCounterVar = 0;

//array containing items displayed in book divs
let myLibrary = [];

//when add book button is clickedf
newBookBtn.addEventListener('click', () => {
    addBookForm();
    addNewBook();
});

function addBookForm() {
    modal.classList.add('active');
    overlay.classList.add('active');
}
//how to close form without entering anything
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');

    modals.forEach(modal => {
        closeModal(modal);
    })
});

const closeModal = () => { 
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    
}


form.addEventListener('submit', (e) => submitFormInfo(e));

function Book(title, author, pages) {
  // the constructor...
  this.title,
  this.author,
  this.pages,

  this.info = function() {
    return(`${title}, ${author}, ${pages}`);
  }
}

function addBookToLibrary(Book) {
  // store new book objects into array
  myLibrary.push(Book.info());

}

//retrieve form information, place in array
function submitFormInfo(e) {

    e.preventDefault();

        //submit info into library

    let bookTitle = document.getElementById("title").value;  //get the value of an element by it's id
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;

    const newBook = new Book(bookTitle, bookAuthor, bookPages);
    addBookToLibrary(newBook);

    //call function to separate myLibrary info and display in div

    addNewBook(bookTitle, bookAuthor, bookPages);
}

//Displays title, author, pages in dynamically added div 
function addNewBook(bookTitle, bookAuthor, bookPages) {

    newShowBook = document.createElement('div');
    newShowBook.classList.add("book");
    newBackground = document.createElement('div');
    newBackground.classList.add('book-background');
    newReadButton = document.createElement('button');
    newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add('delete');

    newReadButton.innerText="Read";
    newDeleteButton.innerText="Delete";

    buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttons');

    titlePara=document.createElement('p');
    authorPara = document.createElement('p');
    pagePara = document.createElement('p');

    if(bookTitle !== undefined && bookAuthor !== undefined && bookPages !== undefined){

        //displays info inside div
        title = document.createTextNode(`Title: ${bookTitle}`);
        author = document.createTextNode(`Author: ${bookAuthor}`);
        pages = document.createTextNode(`Pages:${bookPages}`);

    
    //creates divs    
    let divList = document.querySelectorAll('.book');
    divList.forEach(book => {

        main.appendChild(newShowBook);

        newShowBook.appendChild(newBackground);
        newBackground.appendChild(titlePara);
        newBackground.appendChild(authorPara);
        newBackground.appendChild(pagePara);

        titlePara.appendChild(title);
        pagePara.appendChild(pages);
        authorPara.appendChild(author);
        
        //Buttons
        newShowBook.appendChild(buttonDiv);
        buttonDiv.appendChild(newReadButton);   
        buttonDiv.appendChild(newDeleteButton);
        newDeleteButton.setAttribute('id', 'delete');
        newReadButton.setAttribute('id', 'readCount');
        
    })

    clearSubmitForm();
    totalBookCounter();
}

}

//resets form after submit button is clicked.
function clearSubmitForm() {
    form.reset();
}

//raises book counter by 1 each time book is added. 
let totalBookCounter = () => {
        bookCounter++;
        bookCount.innerText=`Number of books: ${bookCounter}`;
}
booksReadCounter = () => {
    bookReadCounterVar++;
    readDisplay.innerText=`Books read: ${bookReadCounterVar}`
}

body.addEventListener('click', (e) => delReadButton(e));

function delReadButton(e) {
    if (e.target.id == "readCount"){
        return booksReadCounter();
    }
    else if (e.target.id == "delete") {

        e.target.parentElement.parentElement.remove();

    }
}


