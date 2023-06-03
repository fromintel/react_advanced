import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
  test('should decrement value', () => {
    const state: CounterSchema = { value: 5 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
  });

  test('should increment value', () => {
    const state: CounterSchema = { value: 5 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
