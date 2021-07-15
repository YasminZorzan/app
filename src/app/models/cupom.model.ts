export type Cupom = {
  id?: number;
  nome: string;
  valor?: number;
  percentual?: number;
  expiracao?: Date;
  quantidade?: number;
  idsPlanos: number[];
};
