import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export const CounterLabStore = signalStore(
  withState({
    counterQuantity: getValueFromLocalStorage('counterQuantity'),
    incrementQuantity: getValueFromLocalStorage('incrementQuantity'),
  }),
  withMethods((store) => {
    return {
      increaseCounter: () => {
        patchState(store, {
          counterQuantity: store.counterQuantity() + store.incrementQuantity(),
        });
        localStorage.setItem(
          'counterQuantity',
          JSON.stringify(store.counterQuantity()),
        );
      },
      decreaseCounter: () => {
        patchState(store, {
          counterQuantity: store.counterQuantity() - store.incrementQuantity(),
        });
        localStorage.setItem(
          'counterQuantity',
          JSON.stringify(store.counterQuantity()),
        );
      },
      increaseIncrement: () => {
        patchState(store, { incrementQuantity: store.incrementQuantity() + 2 });
        localStorage.setItem(
          'incrementQuantity',
          JSON.stringify(store.incrementQuantity()),
        );
      },
      decreaseIncrement: () => {
        patchState(store, { incrementQuantity: store.incrementQuantity() - 2 });
        localStorage.setItem(
          'incrementQuantity',
          JSON.stringify(store.incrementQuantity()),
        );
      },
    };
  }),
  withComputed((store) => {
    return {
      subButtonDisabled: computed(
        () =>
          store.counterQuantity() === 0 ||
          store.counterQuantity() - store.incrementQuantity() < 0,
      ),
      incrementDecreaseDisabled: computed(
        () => store.incrementQuantity() === 1,
      ),
      incrementIncreaseDisabled: computed(
        () => store.incrementQuantity() === 5,
      ),
    };
  }),
);

function getValueFromLocalStorage(itemKey: string): number {
  const storedValue = localStorage.getItem(itemKey);
  const numberValue = Number(storedValue);
  if (isNaN(numberValue) || numberValue === 0) {
    if (itemKey === 'incrementQuantity') {
      return 1;
    } else {
      return 0;
    }
  } else {
    return numberValue;
  }
}
