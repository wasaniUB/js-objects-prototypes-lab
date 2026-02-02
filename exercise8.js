const library = {
    name: "City Library",
    books: [],
    addBook(book) {
        const bookObj = {title: book.title, author: book.author, isbn: book.isbn}
        this.books.push(bookObj);
    },

    findBooksByTitle(title) {
        return this.books.filter(book => book.title === title);
    },
    listAllBooks() {
        return this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
        });
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];
universityLibrary.addCourse = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook({title, author, isbn});
};

universityLibrary.addCourse("Computer Science 101", "Introduction to Programming", "Jane Doe", "1234567890");
universityLibrary.addCourse("Mathematics 101", "Calculus I", "John Smith", "0987654321");
universityLibrary.addCourse("Literature", "1984", "George Orwell", "0987254320");

console.log("All Books in University Library:");
universityLibrary.listAllBooks();

console.log("\nBooks with title 'Calculus I':");
const foundBooks = universityLibrary.findBooksByTitle("Calculus I");
if (foundBooks.length > 0) {
    foundBooks.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    });
} else {
    console.log("No books found with that title.");
}