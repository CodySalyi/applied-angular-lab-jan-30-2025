import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject,
} from '@angular/core';
import { CounterLabStore } from '../services/counter.store';

@Component({
  selector: 'app-counter-lab-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        (click)="store.decreaseCounter()"
        [disabled]="store.subButtonDisabled()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ this.store.counterQuantity() }}</span>
      <button (click)="store.increaseCounter()" class="btn btn-primary">
        +
      </button>
      <div>
        <span data-testid="fizzBuzz">{{ fizzBuzzText() }}</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class CounterLabUiComponent {
  store = inject(CounterLabStore);

  fizzBuzzText = computed(() => {
    if (this.store.counterQuantity() === 0) {
      return '';
    } else if (
      this.store.counterQuantity() % 5 === 0 &&
      this.store.counterQuantity() % 3 === 0
    ) {
      return 'FizzBuzz';
    } else if (this.store.counterQuantity() % 5 === 0) {
      return 'Buzz';
    } else if (this.store.counterQuantity() % 3 === 0) {
      return 'Fizz';
    } else {
      return '';
    }
  });
}
