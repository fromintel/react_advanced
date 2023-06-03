import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should render counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 1 } },
    });
    expect(screen.getByTestId('title-value')).toHaveTextContent('1');
  });

  test('should correct increment event', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 1 } },
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('title-value')).toHaveTextContent('2');
  });

  test('should correct decrement event', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 2 } },
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('title-value')).toHaveTextContent('1');
  });
});
