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
  },
  {
    book: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    pages: '328',
    published: '1949',
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
    const newBtn = document.createElement("button")
    const divTxt = document.createElement("div")
    

    if (key === 'read') {
      divTxt.textContent = value;
      newData.append(divTxt)
      newData.classList.add(myBook.book.replace(/[^\w]/g, "_").toLowerCase())
      
      newBtn.classList.add("read_button")
      newBtn.textContent = "Read?"  
      newData.appendChild(newBtn)
    } else if (key === 'book') {
      divTxt.textContent = value;
      newData.append(divTxt)

      newBtn.classList.add("remove_button")
      newBtn.textContent = "Remove Book"
      newData.appendChild(newBtn)
    } else {
      newData.textContent = value;
    }
    
    newRow.appendChild(newData)
  }

  tableBox.appendChild(newRow);
});

function readSwitch(e) {
  myLibrary.forEach(myBook => {
    if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
      myBook.read = !myBook.read
      e.target.previousSibling.textContent = myBook.read
    }
  })
}

const resetBtn = document.querySelectorAll('.read_button')
resetBtn.forEach(btn => btn.addEventListener('click', readSwitch));

function removeBook(e) {
  myLibrary.forEach(myBook => {
    if (myBook.book === e.target.previousSibling.textContent) {
      e.target.parentElement.parentElement.remove();
      myLibrary = myLibrary.filter(obj => obj.book != e.target.previousSibling.textContent)
    }
  })
}

const removeBtn = document.querySelectorAll('.remove_button')
removeBtn.forEach(btn => btn.addEventListener('click', removeBook));
