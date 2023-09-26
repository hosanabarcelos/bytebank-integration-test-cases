import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppRoutes from '../../routes';

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
    });

    // A consulta está sendo realizada utilizando a query findByText() que
    // aguarda o elemento aparecer na tela. Só que ao utilizá-la é preciso tornar
    // o teste assíncrono e aguardar o elemento aparecer no dom. Por isso o uso do async e await
    test('If navigation between pages occurs after clicking', async () => {
        render(<AppRoutes />, {wrapper: BrowserRouter});

        const cardLinkPage = screen.getByText('Cartões');
        expect(cardLinkPage).toBeInTheDocument();

        userEvent.click(cardLinkPage);

        const title = await screen.findByText('Meus cartões');
        expect(title).toBeInTheDocument();
    });
});
