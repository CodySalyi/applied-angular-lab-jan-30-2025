import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { CounterLabUiComponent } from './pages/ui.component';
import { CounterLabPrefsComponent } from './pages/prefs.component';
import { CounterLabStore } from './services/counter.store';
export const COUNTER_LAB_ROUTES: Routes = [
  {
    path: '',
    providers: [CounterLabStore],
    component: CounterComponent,
    children: [
      {
        path: 'ui',
        component: CounterLabUiComponent,
      },
      {
        path: 'prefs',
        component: CounterLabPrefsComponent,
      },
    ],
  },
];
