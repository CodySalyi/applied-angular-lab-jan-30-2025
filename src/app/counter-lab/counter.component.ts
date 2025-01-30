import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter-lab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <div class="flex gap-4">
        <a class="link" routerLink="ui">UI</a>
        <a class="link" routerLink="prefs">Prefs</a>
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
