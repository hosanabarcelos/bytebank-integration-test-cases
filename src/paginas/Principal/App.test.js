import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('Main component', () => {
    test('If the transaction is added to the statement', () => {
        render(<App />, {wrapper: BrowserRouter});

        const select = screen.getByRole('combobox');
        const value = screen.getByPlaceholderText('Digite um valor');
        const button = screen.getByRole('button');

        userEvent.selectOptions(select, ['Depósito']);
        userEvent.type(value, '100');
        userEvent.click(button);

        const newTransition = screen.getByTestId('lista-transacoes');
        const extractItem = screen.getByRole('listitem');

        expect(newTransition).toContainElement(extractItem);
    })
});
