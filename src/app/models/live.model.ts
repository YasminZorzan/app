import { ProdutosEnum } from './produto.enum';

export type Live = {
  id: number;
  idProduto: ProdutosEnum;
  dataEvento: Date;
  titulo: string;
  duracao: number;
  qtdAgendamentos: number;
  professor: string;
  status: number; 
  fotoDestaque: string;
};
