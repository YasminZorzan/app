import { ProfileReferenceModel } from './profile-reference.model';

export type SolicitacaoAmizadeModel = {
  idSolicitacao: number;
  usuario: ProfileReferenceModel;
};
