import { ProdutosEnum } from './produto.enum';

export type Programa = {
  id: number;
  idProduto: ProdutosEnum;
  nome: string;
  fotoDestaque: string;
  qtdConclusoes: number;
  qtdAulas: number;
};
