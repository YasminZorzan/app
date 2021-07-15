import { Aula } from './aula.model';
import { ProdutosEnum } from './produto.enum';

export type ProgramaDetalhe = {
  id: number;
  idProduto: ProdutosEnum;
  nome: string;
  descricao: string;
  fotoDestaque: string;
  qtdConclusoes: number;
  aulas: Aula[];
};
