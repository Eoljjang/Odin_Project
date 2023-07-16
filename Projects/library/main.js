let myLibrary = [];

// DOM Elements
let library = document.querySelector('.library');
let addBtn = document.querySelector('#addBook');
let userFormInput = document.querySelector("#userInputForm")

function book(title, author, length) {
    this.title = title;
    this.author = author;
    this.length = length;
}

function addBookToLibrary(book){
    let bookID = myLibrary.length + 1;
    book.id = bookID;
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary(){
    // We have to clear it every time we display, otherwise it'll REPEAT books.
    library.innerHTML = "";

    for (var i = 0; i < myLibrary.length; i++){
        let bookDiv = document.createElement("div");
        bookDiv.classList.add('book');

        // Create content for the book: Remember that the book has an ID. We just aren't showing it.
        var content = "<p><b>Title:</b> " + myLibrary[i].title + "</p>";
        content += "<p><b>Name:</b> " + myLibrary[i].author + "</p>";
        content += "<p><b>Length:</b> " + myLibrary[i].length + " pages</p>";
        bookDiv.innerHTML = content;

        // Delete button for the book
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener('click', deleteHandler(i)); // For each book, give it a delete handler which knows which index you're talking about. Upon click, runs.

        // Add to DOM
        bookDiv.appendChild(deleteBtn);
        library.appendChild(bookDiv);
    }
}

function deleteHandler(index){
    return function(){
        // Remove book object from library
        myLibrary.splice(index, 1);

        // Display the updated book list
        displayLibrary();
    }
}

function main(){
    // Add button -> Takes in information from the form.
    addBtn.addEventListener('click', function(event) {
        event.preventDefault();

        if (userFormInput.checkValidity()){
            // Retrieve values entered by user
            var title = document.querySelector("#title").value;
            var author = document.querySelector("#author").value;
            var length = document.querySelector("#length").value;

            // Make an object with those values
            var newBook = new book(title, author, length);
            addBookToLibrary(newBook); // Adds the book to the library, along with an associated index ID.
            userFormInput.reset();
        }
        else {
            alert("You must fill in all fields to add a book.");
        }
    });
}

main();