// Retrieve the Most Recently Borrowed Book

function getLastBorrowedBook (books) {
    return books[books.length - 1];
}

console.log(getLastBorrowedBook(["The Great Gatsby", "1984", "To Kill a Mockingbird"]));