// jshint esversion:6

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr elemnet
  const row = document.createElement("tr");
  // Insert col
  row.innerHTML =
    "<td>" +
    book.title +
    "</td><td>" +
    book.author +
    "</td><td>" +
    book.isbn +
    "</td><td>" +
    '<a href="#" class="delete"></a></td>';
  // Append book to list
  list.appendChild(row);
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get from values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);
  // Clear input field
  ui.clearFields();

  e.preventDefault();
});
