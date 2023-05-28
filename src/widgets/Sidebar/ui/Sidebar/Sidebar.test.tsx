import { fireEvent, screen } from '@testing-library/react';
import { renderWthTranslation } from 'shared/lib/tests/renderWithTranslation/renderWthTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('should render sidebar', () => {
    renderWthTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle state', () => {
    renderWthTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle_sidebar');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
