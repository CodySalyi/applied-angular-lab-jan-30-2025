import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<p>book component here</p>`,
  styles: ``,
})
export class BooksComponent {}
