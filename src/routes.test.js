import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './paginas/Principal/App';

describe('Routes', () => {
  test('If the main route is rendered correctly', () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = screen.getByText('Olá, Joana :)!');
    expect(user).toBeInTheDocument();
  });
});