let myLibrary = [
  {
    book: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    pages: '309',
    published: '1997',
    read: false
  },
  {
    book: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: '366',
    published: '1937',
    read: false
  },
  {
    book: 'The Shining',
    author: 'Stephen King',
    pages: '659',
    published: '1977',
    read: false
  }
];

function Book(book, author, pages, published, read) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.read = read;
}

function addBook() {
  const newBook = new Book(book, author, pages, published, read)

  return myLibrary.push(newBook)
}

const tableBox = document.querySelector(".library_table")

myLibrary.forEach(myBook => {
  const newRow = document.createElement("tr");

  for (const [key, value] of Object.entries(myBook)) {
    const newData = document.createElement("td")

    newData.textContent = value;
    newRow.appendChild(newData)
  }

  tableBox.appendChild(newRow);
});
