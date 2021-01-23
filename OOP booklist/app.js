class Book {
    constructor(title,author,isbn) {
        this.title
        this.author
        this.isbn
    }
}
//this class UI is where the result will show
class UI {
    addBookToList(book) {
        //create a const and get the id of book list for the body of the interface
        //To add the result into a row, create a row const where the result will include the objects of the class book
        // note: do not confuse book with Book.
        const list = document.getElementById('book-list')
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="" class="delete">X</a></td>
        `;
        //then attach the row to the list
        list.appendChild(row);
    }

showAlert(message,className) {
    const div = document.createElement('div');
    //Add Class Name

    div.className = `alert ${className}`;

    const container = document.querySelector(`.container`);
    //Get Form
    const form = document.querySelector('#book-form');
//Insert Alert
    container.insertBefore(div,form);
//Timeout after 3 sec
//Note: Time out means "setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval." -https://javascript.info/settimeout-setinterval#:~:text=setTimeout%20allows%20us%20to%20run,repeating%20continuously%20at%20that%20interval.
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}
deleteBook(target) {
    if(target.className === 'delete') {
        target.parentElement.remove();
    }
}

clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



}

//Event listening

document.getElementById('book-form').addEventListener('submit',function(e){
    //Get form values

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate book
    const book = new Book(title,author,isbn);
    //Instantiate UI
    const ui = new UI();
    //Validate
    if(title === '' || author === '' || isbn === '') {
        //Error alert
//addBookToList is a method that came from class UI
        ui.showAlert('please fill in all fields', 'error');
    }
        else {
            ui.addBookToList
        }

});

//Event Listening
//note: e means the event which contains information and can substituted with any letter. 


//add back to list-one parameter
//show alert message  is responsible or the flash messages
//Note: In traditional class-oriented languages, you create classes, which are templates for objects. When you want a new object, you instantiate the class, which tells the language engine to copy the methods and properties of the class into a new entity, called an instance. The instance is your object, and, after instantiation, has absolutely no active relation with the parent class. -https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes