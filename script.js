// alert('Hello World')

const book = document.querySelectorAll(".books")
const main = document.querySelector(".main")
const bookTag = document.querySelector(".books")


//main.previousElementSibling.querySelector("h1").innerHTML += "... Keep Reading!"

//Array.from(book).forEach(function(book) {
   
    //console.log(book.previousElementSibling)
    // console.log(book.children)
    // book.innerHTML = "<h1> Hello Web </h1>"
    // book.textContent += "text"
// })


const hOneTag = document.querySelector(".main h1")
hOneTag.addEventListener('click', function(clicked){
    console.log(clicked.target)
    console.log(clicked)
})
//hOneTag.innerHTML = "<h1> Books Books & Books </h1>"
// console.log(heading)








//Deleting Elements

// var buttons = document.querySelectorAll(".btn")
// Array.from(buttons).forEach(function(btn) {
//     btn.addEventListener('click', function(clickedBtn) {
//         const div = clickedBtn.target.parentElement
//         console.log(div)
//         div.parentNode.removeChild(div)
//     })
// })


bookTag.addEventListener('click', function(bookArea) {
    if(bookArea.target.className === "btn"){
        const div = bookArea.target.parentElement;
        div.parentNode.removeChild(div)
    }
})







//preventing a link
// var link = document.querySelector(".header a")
// link.setAttribute("href",  "https://amazon.com")
// link.addEventListener("click", function(clickedLink) {
//     // clickedLink.preventDefault()
//     clickedLink.setAttribute("href",  "www.amazon.com")
//     console.log(clickedLink.target + " was redirected")
// })








/// Add books
const addForm = document.forms["addBooks"];
addForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const value = addForm.querySelector('input[type="text"]').value
    // console.log(value)


    // Creating Elements
    const div = document.createElement('div');
    const bookName = document.createElement('h3') 
    const deleteButton = document.createElement('button')


    // Add Content
    deleteButton.className = "btn"
    bookName.className = "name"
    deleteButton.textContent = "delete"
    bookName.textContent = value



    // Append to div tag
    div.appendChild(bookName)
    div.appendChild(deleteButton)

    bookTag.appendChild(div)
})








//Hide Books
const hideBox = document.querySelector(".hideBox");
hideBox.addEventListener('change', function(checkedBox) {
    if(hideBox.checked) {
        bookTag.style.display = "none"
    } else {
        bookTag.style.display = "block"
    }
})






// Search Books
const search  = document.forms['searchBooks'].querySelector('input');
search.addEventListener('keyup', function(characters) {
    const text = characters.target.value.toLowerCase();
    const allBooks = book.getElementsByTagName('div');

    Array.from(allBooks).forEach(function(tbook) {
           
        const title = tbook.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(text) != -1){
            tbook.style.display = "block"
        }else {
            tbook.style.display = "none"
        }
        
    })
})












