import { ProdutosEnum } from './produto.enum';

export type AulaDetalhe = {
  id: number;
  idProduto: ProdutosEnum;
  titulo: string;
  duracao: number;
  descricao: string;
  fotoDestaque: string;
  streamLocator: string;
  qtdAssistidas: number;
  professor: string;
};
