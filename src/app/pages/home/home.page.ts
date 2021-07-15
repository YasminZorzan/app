import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Aula } from 'src/app/models/aula.model';
import { Instrutor } from 'src/app/models/instrutor.model';
import { Live } from 'src/app/models/live.model';
import { OrdenacaoAulaEnum } from 'src/app/models/ordenacao-aula.enum';
import { ProdutosEnum } from 'src/app/models/produto.enum';
import { ProfileReferenceModel } from 'src/app/models/profile-reference.model';
import { Programa } from 'src/app/models/programa.model';
import { AmizadesService } from 'src/app/services/amizades.service';
import { AulasService } from 'src/app/services/aulas.service';
import { InstrutoresService } from 'src/app/services/instrutores.service';
import { LivesService } from 'src/app/services/lives.service';
import { ProgramasService } from 'src/app/services/programas.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  destaque = "/assets/img/bg-01.jpg";

  profile;

  instrutores: Instrutor[] = [];
  lives: Live[] = [];
  aulasMaisAssistidas: Aula[] = [];
  aulasVelocity: Aula[] = [];
  aulasKore: Aula[] = [];
  aulasDestaque: Aula[] = [];
  amizades: ProfileReferenceModel[] = [];
  programas: Programa[] = [];
  produtos: ProdutosEnum[] = [];

  constructor(private instrutoresService: InstrutoresService,
    private aulasService: AulasService,
    private livesService: LivesService,
    private amizadesService: AmizadesService,
    private programasService: ProgramasService,
    private authService: AuthService,
    private usersService: UsersService) {}

    ngOnInit(): void {
      this.usersService.getMyProfile().subscribe(result => this.profile = result);
      this.produtos = this.authService.currentUser?.produtos;
      this.instrutoresService.getInstrutores().subscribe((result: any) => this.instrutores = result.body);
      this.livesService.pesquisar({}).subscribe((result: any) => this.lives = result.body);
      this.aulasService.pesquisar({ destaque: true }, OrdenacaoAulaEnum.Recentes, 5).subscribe((result: any) => this.aulasDestaque = result.body);
      this.aulasService.pesquisar({ destaque: false }, OrdenacaoAulaEnum.Visualizações, 10).subscribe((result: any) => this.aulasMaisAssistidas = result.body);
      this.aulasService.pesquisar({ destaque: false, idProduto: ProdutosEnum.Velocity }, OrdenacaoAulaEnum.Recentes, 5).subscribe((result: any) => this.aulasVelocity = result.body);
      this.aulasService.pesquisar({ destaque: false, idProduto: ProdutosEnum.Kore }, OrdenacaoAulaEnum.Recentes, 5).subscribe((result: any) => this.aulasKore = result.body);
      this.amizadesService.getAmizades().subscribe(result => this.amizades = result.sort(() => 0.5 - Math.random()).slice(0, 10));
      this.programasService.getProgramas().subscribe(result => this.programas = result.body);
    }

}
