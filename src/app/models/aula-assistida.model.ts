import { Aula } from './aula.model';

export type AulaAssistida = {
  id: number;
  concluida: boolean;
  progresso: number;
  aula: Aula;
  data: string;
};
