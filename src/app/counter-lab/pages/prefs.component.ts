import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterLabStore } from '../services/counter.store';
@Component({
  selector: 'app-counter-lab-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<p>Counter Increment Settings, Options are 1, 3, or 5</p>
    <div>
      <button
        (click)="store.decreaseIncrement()"
        [disabled]="store.incrementDecreaseDisabled()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ store.incrementQuantity() }}</span>
      <button
        (click)="store.increaseIncrement()"
        [disabled]="store.incrementIncreaseDisabled()"
        class="btn btn-primary"
      >
        +
      </button>
    </div>`,
  styles: ``,
})
export class CounterLabPrefsComponent {
  store = inject(CounterLabStore);
}
