import { Routes } from '@angular/router';
import { canMatchFeature } from '@shared';
import { HomeComponent } from './pages/home.component';
import books from '../mocks/books';

export const routes: Routes = [
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.routes').then((r) => r.RESOURCE_ROUTES),
  },
  {
    path: 'demos',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },

  {
    path: 'golf',
    canMatch: [canMatchFeature('golf')],
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  {
    path: 'jeff-counter',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./jeff-counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
  {
    path: 'counter-lab',
    canMatch: [canMatchFeature('counter-lab')],
    loadChildren: () =>
      import('./counter-lab/counter.routes').then((r) => r.COUNTER_LAB_ROUTES),
  },
  {
    path: 'books',
    canMatch: [canMatchFeature('books')],
    loadChildren: () =>
      import('./books/books.routes').then((r) => r.BOOKS_ROUTES),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
