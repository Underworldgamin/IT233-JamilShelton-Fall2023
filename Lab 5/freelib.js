//////////////////////
// Global Variables //
//////////////////////

let booksData = '[{"title": "Corduroy", "author": "Don Freeman", "publisher": "Viking Books", "year": "1968", "jacketColor": "firebrick"}, {"title": "To Kill a Mockingbird", "author": "Harper Lee", "publisher": "J.B. Lippincott & Co.", "year": "1960", "jacketColor": "royalblue"}, {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publisher": "Charles Scribner\'s Sons", "year": "1925", "jacketColor": "green"}, {"title": "Harry Potter and the Sorcerer\'s Stone", "author": "J.K. Rowling", "publisher": "Bloomsbury", "year": "1997", "jacketColor": "darkred"}, {"title": "Chicken Soup for the Soul", "author": "Jack Canfield", "publisher": "Health Communications, Inc.", "year": "1993", "jacketColor": "yellow"}]';

let books = JSON.parse(booksData);


///////////////
// Functions //
///////////////

// Write your function(s) here

[
  {
    title: "Corduroy",
    author: "Don Freeman",
    publisher: "Viking Books",
    year: "1968",
    jacketColor: "firebrick",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    year: "1960",
    jacketColor: "royalblue",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons",
    year: "1925",
    jacketColor: "green",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    year: "1997",
    jacketColor: "darkred",
  },
  {
    title: "Chicken Soup for the Soul",
    author: "Jack Canfield",
    publisher: "Health Communications, Inc.",
    year: "1993",
    jacketColor: "yellow",
  },
];
    
 function displayBook(bookIndex) {
const selectedBook = books[bookIndex];

  const bookDisplay = document.getElementById('bookDisplay');
  bookDisplay.style.backgroundColor = selectedBook.jacketColor;

  document.getElementById('bookTitle').textContent = selectedBook.title;
  document.getElementById('bookAuthor').textContent = selectedBook.author;
  document.getElementById('bookPublisher').textContent = selectedBook.publisher;
  document.getElementById('bookYear').textContent = selectedBook.year;
}

