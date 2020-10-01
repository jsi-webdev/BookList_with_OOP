// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function (book) {
  // list element to append book
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

  list.appendChild(row);
};

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.classList.add("alert");
  div.classList.add(`${className}`);
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  // Get form
  const form = document.querySelector("#book-form");
  // Insert alert
  container.insertBefore(div, form);
  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};
