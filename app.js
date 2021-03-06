// import { http } from "./http";
// import { ui } from "./ui";
// import { Book } from "./book";
// const Book = require(__dirname + "/book.js");
// const UI = require(__dirname + "/ui.js");
// 이상하네

// DOM Load Event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listener for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Add to LS
    Store.addBook(book);
    // Show success
    ui.showAlert("Book Added!", "success");
    // Clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI
  const ui = new UI();
  // Delete book
  ui.deleteBook(e.target);
  // Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent); // isbn
  // Show message
  ui.showAlert("Book Removed", "success");
  e.preventDefault();
});
