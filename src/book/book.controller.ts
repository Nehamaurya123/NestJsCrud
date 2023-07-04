import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookControllers {
  constructor(private bookService: BookService) {}
  @Get('/findAll')
  getAllbooks(): Book[] {
    return this.bookService.findAllBooks();
  }
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookServise(book);
  }
  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }
  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookServise(book);
  }
}
