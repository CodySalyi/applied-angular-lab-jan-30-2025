import {
  Component,
  ChangeDetectionStrategy,
  resource,
  computed,
} from '@angular/core';
import { BookEntity } from './list.component';

@Component({
  selector: 'app-books-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <p>The total number of books: {{ this.totalBooks() }}</p>
      <p>The earliest year a book was published: {{ this.earliestYear() }}</p>
      <p>
        The most recent year a book was published: {{ this.mostRecentYear() }}
      </p>
      <p>
        The average number of pages of the books:
        {{ this.averageNumberPages() }}
      </p>
    </div>
  `,
  styles: ``,
})
export class StatsComponent {
  books = resource<BookEntity[], unknown>({
    loader: () =>
      fetch('/api/books')
        .then((res) => res.json())
        .then((r) => r.data),
  });

  totalBooks = computed(() => this.books.value()?.length);
  earliestYear = computed(() => {
    if (this.books.value()?.length === 0) {
      return undefined;
    }
    const castBooks = this.books.value() as BookEntity[];
    return castBooks.reduce((minYear, book) => {
      return book.year < minYear ? book.year : minYear;
    }, castBooks[0].year);
  });
  mostRecentYear = computed(() => {
    if (this.books.value()?.length === 0) {
      return undefined;
    }
    const castBooks = this.books.value() as BookEntity[];
    return castBooks.reduce((maxYear, book) => {
      return book.year > maxYear ? book.year : maxYear;
    }, castBooks[0].year);
  });
  averageNumberPages = computed(() => {
    if (this.books.value()?.length === 0) {
      return undefined;
    }
    const castBooks = this.books.value() as BookEntity[];
    const totalPages = castBooks.reduce((sum, book) => sum + book.pages, 0);
    return totalPages / castBooks.length;
  });
}
