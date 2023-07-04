import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookControllers } from './book.controller';

@Module({
  imports: [],
  controllers: [BookControllers],
  providers: [BookService],
})
export class BookModule {}
