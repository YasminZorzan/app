import { TipoNotificacaoEnum } from './tipo-notificacao.enum';

export type NotificacaoModel = {
  id: string,
  idProfile: number,
  texto: string,
  lida: boolean,
  tipo: TipoNotificacaoEnum,
  dataCriacao: string,
  extras: string
};
