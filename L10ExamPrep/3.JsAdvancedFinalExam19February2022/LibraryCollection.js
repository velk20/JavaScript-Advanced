class LibraryCollection {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.books = [];
  }

  findBookByName(bookName) {
    return this.books.find((b) => b.bookName == bookName);
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length == this.capacity) {
      throw new Error('Not enough space in the collection.');
    }

    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });

    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const findBook = this.books.find((b) => b.bookName === bookName);

    if (!findBook) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (findBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    } else {
      findBook.payed = true;
      return `${findBook.bookName} has been successfully paid.`;
    }
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      let sortedBook = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      let result = [];
      result.push(
        `The book collection has ${
          this.capacity - this.books.length
        } empty spots left.`
      );
      sortedBook.map((b) => {
        let paid = b.payed ? 'Has Paid' : 'Not Paid';
        result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
      });
      return result.join('\n').trim();
    } else {
      let findBook = this.books.find((b) => b.bookAuthor == bookAuthor);

      if (findBook) {
        let result = [];
        let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
        result.push(
          `${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`
        );
        return result.join('\n').trim();
      } else {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
    }
  }
}
