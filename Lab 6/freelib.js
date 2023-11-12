// Global Variables
let booksData = '[{"title": "Corduroy", "author": "Don Freeman", "publisher": "Viking Books", "year": "1968", "jacketColor": "firebrick"}, {"title": "To Kill a Mockingbird", "author": "Harper Lee", "publisher": "J.B. Lippincott & Co.", "year": "1960", "jacketColor": "royalblue"}, {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publisher": "Charles Scribner\'s Sons", "year": "1925", "jacketColor": "green"}, {"title": "Harry Potter and the Sorcerer\'s Stone", "author": "J.K. Rowling", "publisher": "Bloomsbury", "year": "1997", "jacketColor": "darkred"}, {"title": "Chicken Soup for the Soul", "author": "Jack Canfield", "publisher": "Health Communications, Inc.", "year": "1993", "jacketColor": "yellow"}]';
let books = JSON.parse(booksData);

// Functions
$(document).ready(function() {
  $('#book1button').click(function() {
    displayBook(0); // Book One is index 0
  });

  $('#book2button').click(function() {
    displayBook(1); // Book Two is index 1
  });

  $('#book3button').click(function() {
    displayBook(2); // Book Three is index 2
  });

  $('#book4button').click(function() {
    displayBook(3); // Book Four is index 3
  });
});

function displayBook(bookIndex) {
  const selectedBook = books[bookIndex];

  const bookDisplay = $('#bookDisplay');
  bookDisplay.css('background-color', selectedBook.jacketColor);

  $('#bookTitle').text(selectedBook.title);
  $('#bookAuthor').text(selectedBook.author);
  $('#bookPublisher').text(selectedBook.publisher);
  $('#bookYear').text(selectedBook.year);
}


