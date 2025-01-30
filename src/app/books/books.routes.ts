import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { ListComponent } from './pages/list.component';
import { StatsComponent } from './pages/stats.component';
export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'stats',
        component: StatsComponent,
      },
      {
        path: '**',
        component: ListComponent,
      },
    ],
  },
];
