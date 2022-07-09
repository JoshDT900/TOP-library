let myLibrary = [
  {
    book: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    pages: '',
    published: '',
    read: false
  },
  {
    book: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: '',
    published: '',
    read: false
  },
  {
    book: 'The Shining',
    author: 'Stephen King',
    pages: '',
    published: '',
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
