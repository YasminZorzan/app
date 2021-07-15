import { ProdutosEnum } from './produto.enum';

export type LiveDetalhe = {
  id: number;
  idProduto: ProdutosEnum;
  titulo: string;
  status: number;
  streamLocator: string;
};
