
let bookList = []; 


function addbook() {
  const id = document.getElementById("id").value.trim(); 
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const qty = parseInt(document.getElementById("qty").value.trim(), 10); 
  const price = parseFloat(document.getElementById("price").value.trim()); 

  
  if (!id || !title || !author || !qty || !price) {
    alert("Please fill all the fields!");
    return; 
  }
  let ID = id;
  ID =++ID
  const book = { id, title, author, qty, price };

  
  bookList.push(book);
  console.log(bookList);

  
  document.getElementById("id").value = "ID";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";

  
  alert("Book added successfully!");
}
function deleteBook() {
  const id = document.getElementById("id").value.trim(); 

  
  const bookIndex = bookList.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    
    alert(`Book with ID ${id} was not found!`);
  } else {
    
    bookList.splice(bookIndex, 1);

    
    document.getElementById("id").value = "";

   
    alert(`Book with ID ${id} deleted successfully!`);
  }
  console.log(bookList);
}
function findById() {
  const id = document.getElementById("id").value.trim(); 

  
  const book = bookList.find((book) => book.id === id);

  if (book) {
   
    alert(
      `Book details:\nID: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nQuantity: ${book.qty}\nPrice: ${book.price}`
    );
  } else {
    alert(`Book with ID ${id} was not found!`);
  }
}
function findByTitle() {
  const title = document.getElementById("title").value.trim(); 

  
  const books = bookList.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (books.length > 0) {
    
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
  const author = document.getElementById("author").value.trim(); 

  
  const books = bookList.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

  if (books.length > 0) {
    
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
  const title = document.getElementById("title").value.trim(); 
  const author = document.getElementById("author").value.trim(); 
  const qty = parseInt(document.getElementById("qty").value.trim(), 10); 
  const price = parseFloat(document.getElementById("price").value.trim()); 

  
  if (!title || !author || !qty || !price) {
    alert("Please fill all the fields!");
    return; 
  }

  
  const book = bookList.find(
    (book) =>
      book.title.toLowerCase() === title.toLowerCase() &&
      book.author.toLowerCase() === author.toLowerCase()
  );

  if (!book) {
    
    alert(`Book "${title}" by ${author} was not found!`);
    return;
  }

  if (book.qty < qty) {
    
    alert(
      `Requested quantity is not available! Available quantity is ${book.qty}.`
    );
    return;
  }

  
  const totalPrice = price * qty;

  
  alert(
    `Invoice for "${title}" by ${author}:\nQuantity: ${qty}\nPrice per unit: ${price}\nTotal Price: ${totalPrice}`
  );
}
