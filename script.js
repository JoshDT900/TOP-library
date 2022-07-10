let myLibrary = [
  {
    book: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    pages: '309',
    published: '1997',
    read: false,
    id: 0,
    readBook: function(e) {
      myLibrary.forEach(myBook => {
      if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
        myBook.read = !myBook.read
        e.target.previousSibling.textContent = myBook.read
      }
    })
    }
  },
  {
    
    book: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: '366',
    published: '1937',
    read: false,
    id: 1,
    readBook: function(e) {
      myLibrary.forEach(myBook => {
      if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
        myBook.read = !myBook.read
        e.target.previousSibling.textContent = myBook.read
      }
    })
    }
  },
  {
    book: 'The Shining',
    author: 'Stephen King',
    pages: '659',
    published: '1977',
    read: false,
    id: 2,
    readBook: function(e) {
      myLibrary.forEach(myBook => {
      if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
        myBook.read = !myBook.read
        e.target.previousSibling.textContent = myBook.read
      }
    })
    }
  },
  {
    book: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    pages: '328',
    published: '1949',
    read: false,
    id: 3,
    readBook: function(e) {
      myLibrary.forEach(myBook => {
      if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
        myBook.read = !myBook.read
        e.target.previousSibling.textContent = myBook.read
      }
    })
    }
  }
];

function Book(book, author, pages, published, read) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.read = read;
  this.id = myLibrary[myLibrary.length - 1].id + 1;
}

Book.prototype.readBook = function (e) {
  myLibrary.forEach(myBook => {
    if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
      myBook.read = !myBook.read
      e.target.previousSibling.textContent = myBook.read
    }
  })  
}

function addBook(book, author, pages, published, read) {
  const newBook = new Book(book, author, pages, published, read)
  
  for (const [key, value] of Object.entries(myLibrary)) {
    if (newBook.book === value.book) {
      return alert ("Book already exists in library.")
    }
  }
  
  myLibrary.push(newBook)
  
  const newRow = document.createElement("tr");

  for (const [key, value] of Object.entries(newBook)) {
    const newData = document.createElement("td")
    const newBtn = document.createElement("button")
    const divTxt = document.createElement("div")    

    if (key === 'read') {
      divTxt.textContent = value;
      newData.append(divTxt)
      newData.classList.add(newBook.book.replace(/[^\w]/g, "_").toLowerCase())
      
      newBtn.classList.add("read_button")
      newBtn.textContent = "Read?"  
      newData.appendChild(newBtn)
    } else if (key === 'book') {
      divTxt.textContent = value;
      newData.append(divTxt)

      newBtn.classList.add("remove_button")
      newBtn.textContent = "Remove Book"
      newData.appendChild(newBtn)
    } else if (key === 'readBook' || key === 'id') {
      break
    } else {
      newData.textContent = value;
    }
    
    newRow.appendChild(newData)
  }

  tableBox.appendChild(newRow);

  let count = 0;

  const resetBtn = document.querySelectorAll('.read_button')
  resetBtn.forEach((btn, count) => btn.addEventListener('click', myLibrary[count].readBook), count++);

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
    } else if (key === 'readBook' || key === 'id') {
      break
    } else {
      newData.textContent = value;
    }
    
    newRow.appendChild(newData)
  }

  tableBox.appendChild(newRow);
  
});

// function readSwitch(e) {
//   myLibrary.forEach(myBook => {
//     if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
//       myBook.read = !myBook.read
//       e.target.previousSibling.textContent = myBook.read
//     }
//   })
// }

let count = 0;

const resetBtn = document.querySelectorAll('.read_button')
resetBtn.forEach((btn, count) => btn.addEventListener('click', myLibrary[count].readBook), count++);

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
