export class Profile {
    id: number;
    token: string;
    refreshToken: string;
    roles: string[];
    profileId: number;
    nome: string;
    email: string;
    foto: string;
    username: string;
    localizacao: string;
    produtos: number[];

    constructor(id: number, token: string, refreshToken: string, roles: string[], produtos: number[]) {
      this.id = id;
      this.token = token;
      this.refreshToken  = refreshToken;
      this.roles = roles;
      this.profileId = -1;
      this.nome = '';
      this.email = '';
      this.foto = '';
      this.username = '';
      this.localizacao = '';
      this.produtos = produtos;
    }
}
