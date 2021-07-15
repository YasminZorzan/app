import { Aula } from './aula.model';

export type Agendamento = {
  id: number;
  agendamentoAssistido: boolean;
  aula: Aula;
  data: string;
};
