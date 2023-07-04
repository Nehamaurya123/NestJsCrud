import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookServise(book: Book): string {
    //id auto generate
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been successfuly added';
  }
  //update book
  updateBookServise(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return (currentBook.id = book.id);
    });
    this.books[index] = book;
    return 'book has been successfuly update';
  }
  //delete book
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id != bookId;
    });
    return 'book has been deleted';
  }
  //find al books
  findAllBooks(): Book[] {
    return this.books;
  }
}
