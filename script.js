let myLibrary = [
  {
    book: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    pages: '309',
    published: '1997',
    read: false,
    id: 0
  },
  {
    
    book: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: '366',
    published: '1937',
    read: false,
    id: 1
  },
  {
    book: 'The Shining',
    author: 'Stephen King',
    pages: '659',
    published: '1977',
    read: false,
    id: 2
  },
  {
    book: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    pages: '328',
    published: '1949',
    read: false,
    id: 3
  }
];

function Book(book, author, pages, published) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.read = false;

  if (myLibrary.length == 0) {
    this.id = 0
  } else {
    this.id = myLibrary[myLibrary.length - 1].id + 1;
  }  
}

const tableBox = document.querySelector(".library_table")
const form = document.querySelector('#book_form')
const formSubmit = document.querySelector('#add_book')
const bookName = document.querySelector('#book')
const authorName = document.querySelector('#author')
const pageNum = document.querySelector('#pages')
const publishedDate = document.querySelector('#published')
const newBookBtn = document.querySelector('.new_book_btn')

function handleForm(e) {
  e.preventDefault()
  addBook()
  hideForm()
}

function hideForm() {
  form.style.display = `none`;
}

form.addEventListener('submit', handleForm)
newBookBtn.addEventListener('click', showForm)

function showForm() {
  form.style.display = `block`;
  publishedDate.value = '';
  pageNum.value = '';
  authorName.value = '';
  bookName.value = '';
}


function addBook() {
  const newBook = new Book(bookName.value, authorName.value, pageNum.value, publishedDate.value)

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
      console.log(newBook.id);

      newBtn.classList.add(`read_button`, `${newBook.id}`)
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

  const resetBtn = document.querySelectorAll('.read_button')
  resetBtn.forEach(btn=> btn.addEventListener('click', readBook));

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

// Adds existing book in myLibrary to the DOM

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
      
      newBtn.classList.add(`read_button`, `${myBook.id}`)
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

function readBook(e) {
  myLibrary.forEach(myBook => {
    if (myBook.book.replace(/[^\w]/g, "_").toLowerCase() === e.target.parentElement.classList.value) {
      myBook.read = !myBook.read
      e.target.previousSibling.textContent = myBook.read
    }
  })
}

const resetBtn = document.querySelectorAll('.read_button')
resetBtn.forEach(btn => btn.addEventListener('click', readBook));

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

