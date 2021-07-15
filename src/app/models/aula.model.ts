import { ProdutosEnum } from './produto.enum';

export type Aula = {
  id: number;
  idProduto: ProdutosEnum;
  titulo: string;
  fotoDestaque: string;
  duracao: number;
  qtdAssistidas: number;
  professor: string;
};
