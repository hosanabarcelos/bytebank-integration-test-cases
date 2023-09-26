import api from './api';
import { buscaTransacoes } from './transacoes';

jest.mock('./api');

const mockTransaction = [
    {
        id: 1,
        transacao: 'Depósito',
        valor: '100',
        data: '25/09/2023',
        mes: 'Novembro',
    }
];

const mockRequest = (retorn) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: retorn,
        });
      }, 200);
    });
};

describe('API Request', () => {
    test('If the list of transactions was returned', async () => {
      api.get.mockImplementation(() => mockRequest(mockTransaction));

      const transacoes = await buscaTransacoes();

      expect(transacoes).toEqual(mockTransaction);
      expect(api.get).toHaveBeenCalledWith('/transacoes');
    });
});