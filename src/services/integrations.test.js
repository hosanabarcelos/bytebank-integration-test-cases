import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { buscaTransacoes } from './transacoes';
import App from '../paginas/Principal/App';

describe('API requests', () => {
    test('If the list of transactions was returned', async () => {
        const transactions = await buscaTransacoes();
        expect(transactions).toHaveLength(3);

        render(<App />, { wrapper: BrowserRouter })
        const transaction = await screen.findAllByText('Novembro');
        transaction.forEach(transaction => expect(transaction).toBeInTheDocument());
    });
});