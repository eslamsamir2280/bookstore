// let books = [];
// function addbook() {
//   let id = document.getElementById("id").value;
//   let title = document.getElementById("title").value;
//   let author = document.getElementById("author").value;
//   let qty = document.getElementById("qty").value;
//   let price = document.getElementById("price").value;

//   // create a new book object
//   let newBook = { id, title, author, qty, price };
//   books.push(newBook);
//   console.log(books);
//   // add book to the bookstore
//   // replace this with your own code to add the book to your database or storage
//   console.log("New Book:", newBook);
// }
let bookList = []; // initialize an empty array to store books

function addbook() {
  const id = document.getElementById("id").value.trim(); // get the input field value and ignore any leading/trailing white spaces
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const qty = parseInt(document.getElementById("qty").value.trim(), 10); // convert the quantity value to integer
  const price = parseFloat(document.getElementById("price").value.trim()); // convert the price value to float

  // check if all required fields are filled
  if (!id || !title || !author || !qty || !price) {
    alert("Please fill all the fields!");
    return; // exit the function if any of the required fields is missing
  }

  // create a new book object
  const book = { id, title, author, qty, price };

  // add the new book to the bookList array
  bookList.push(book);
  console.log(bookList);

  // reset the input fields
  document.getElementById("id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";

  // display a success message to the user
  alert("Book added successfully!");
}
function deleteBook() {
  const id = document.getElementById("id").value.trim(); // get the ID of the book to be deleted

  // find the index of the book with the given ID in the array
  const bookIndex = bookList.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    // if the book is not found in the array
    alert(`Book with ID ${id} was not found!`);
  } else {
    // remove the book from the array
    bookList.splice(bookIndex, 1);

    // reset the input field
    document.getElementById("id").value = "";

    // display a success message to the user
    alert(`Book with ID ${id} deleted successfully!`);
  }
  console.log(bookList);
}
function findById() {
  const id = document.getElementById("id").value.trim(); // get the ID of the book to be found

  // find the book with the given ID in the array
  const book = bookList.find((book) => book.id === id);

  if (book) {
    // if the book is found
    alert(
      `Book details:\nID: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nQuantity: ${book.qty}\nPrice: ${book.price}`
    );
  } else {
    alert(`Book with ID ${id} was not found!`);
  }
}
function findByTitle() {
  const title = document.getElementById("title").value.trim(); // get the title to search for

  // find all books with the given title in the array
  const books = bookList.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (books.length > 0) {
    // if any books are found
    let message = `Books with title "${title}":\n`;
    books.forEach((book) => {
      message += `\nID: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nQuantity: ${book.qty}\nPrice: ${book.price}\n`;
    });
    alert(message);
  } else {
    alert(`No books with title "${title}" were found!`);
  }
}
function findByAuthor() {
  const author = document.getElementById("author").value.trim(); // get the author's name to search for

  // find all books with the given author name in the array
  const books = bookList.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

  if (books.length > 0) {
    // if any books are found
    let message = `Books by ${author}:\n`;
    books.forEach((book) => {
      message += `\nID: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nQuantity: ${book.qty}\nPrice: ${book.price}\n`;
    });
    alert(message);
  } else {
    alert(`No books by ${author} were found!`);
  }
}
function createInvoice() {
  const title = document.getElementById("title").value.trim(); // get the title of the book
  const author = document.getElementById("author").value.trim(); // get the author's name
  const qty = parseInt(document.getElementById("qty").value.trim(), 10); // convert the quantity value to integer
  const price = parseFloat(document.getElementById("price").value.trim()); // convert the price value to float

  // check if all required fields are filled
  if (!title || !author || !qty || !price) {
    alert("Please fill all the fields!");
    return; // exit the function if any of the required fields is missing
  }

  // find the book with the given title and author in the array
  const book = bookList.find(
    (book) =>
      book.title.toLowerCase() === title.toLowerCase() &&
      book.author.toLowerCase() === author.toLowerCase()
  );

  if (!book) {
    // if the book is not found in the array
    alert(`Book "${title}" by ${author} was not found!`);
    return;
  }

  if (book.qty < qty) {
    // if the requested quantity exceeds the available quantity
    alert(
      `Requested quantity is not available! Available quantity is ${book.qty}.`
    );
    return;
  }

  // calculate the total price of the books
  const totalPrice = price * qty;

  // display the invoice to the user
  alert(
    `Invoice for "${title}" by ${author}:\nQuantity: ${qty}\nPrice per unit: ${price}\nTotal Price: ${totalPrice}`
  );
}
