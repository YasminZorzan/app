import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, MenuController, ModalController } from '@ionic/angular';
import { ModalAgendarComponent } from 'src/app/components/modal-agendar/modal-agendar.component';
import { ModalAulaAgendaComponent } from 'src/app/components/modal-aula-agenda/modal-aula-agenda.component';
import { ModalEnviarFotoComponent } from 'src/app/components/modal-enviar-foto/modal-enviar-foto.component';
import { ModalExcluirCartaoComponent } from 'src/app/components/modal-excluir-cartao/modal-excluir-cartao.component';
import { ModalExcluirUsuarioComponent } from 'src/app/components/modal-excluir-usuario/modal-excluir-usuario.component';
import { ModalUsuariosComponent } from 'src/app/components/modal-usuarios/modal-usuarios.component';
import { Aula } from 'src/app/models/aula.model';
import { Instrutor } from 'src/app/models/instrutor.model';
import { Live } from 'src/app/models/live.model';
import { OrdenacaoAulaEnum } from 'src/app/models/ordenacao-aula.enum';
import { ProdutosEnum } from 'src/app/models/produto.enum';
import { ProfileReferenceModel } from 'src/app/models/profile-reference.model';
import { Programa } from 'src/app/models/programa.model';
import { AulasService } from 'src/app/services/aulas.service';
import { InstrutoresService } from 'src/app/services/instrutores.service';
import { LivesService } from 'src/app/services/lives.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  tipo: string = 'gravadas';

  termo: string;
  novoTermo: string;
  categoria: string;

  page: number = 1;
  pageSize = 10;

  aulas: Aula[] = [];
  totalAulas: number;

  lives: Live[] = [];
  totalLives: number;

  professores: Instrutor[] = [];
  totalProfessores: number;

  pessoas: ProfileReferenceModel[] = [];
  totalPessoas: number;

  // programas: Programa[] = [];
  // totalProgramas: number;

  product = 0;

  loading = false;

  constructor(private menu: MenuController, private activatedRoute: ActivatedRoute, private aulasService: AulasService, private livesService: LivesService, private instrutoresService: InstrutoresService, private usersService: UsersService) { }

  ngOnInit() {
    this.termo = this.activatedRoute.snapshot.queryParams.q;
    this.novoTermo = this.termo;
    this.categoria = this.activatedRoute.snapshot.queryParams.categoria;
    this.novaPesquisa();
  }

  loadData(event) {
    console.log('foi');
    event.target.complete();
  }


  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  novaPesquisa(): void {
    this.loading = true;
    if (!this.categoria || this.categoria === 'undefined' || this.categoria === 'aulas') {
      this.aulasService.pesquisar({ nome: this.novoTermo, idProduto: this.product == 1 ? ProdutosEnum.Velocity : this.product == 2 ? ProdutosEnum.Kore : null }, OrdenacaoAulaEnum.Recentes, this.pageSize, 0).subscribe((result: any) => {
        this.aulas = result.body;
        this.totalAulas = result.count;
        this.loading = false;
      });
    }
    if (!this.categoria || this.categoria === 'undefined' || this.categoria === 'lives') {
      this.livesService.pesquisar({ nome: this.novoTermo }, OrdenacaoAulaEnum.Recentes, this.pageSize, 0).subscribe((result: any) => {
        this.lives = result.body;
        this.totalLives = result.count;
        this.loading = false;
      });
    }
    if (!this.categoria || this.categoria === 'undefined' || this.categoria === 'pessoas') {
      this.usersService.pesquisa(this.novoTermo, this.pageSize, 0).subscribe((result: any) => {
        this.pessoas = result.body;
        this.totalPessoas = result.count;
        this.loading = false;
      });
    }
    if (!this.categoria || this.categoria === 'undefined' || this.categoria === 'professores') {
      this.instrutoresService.getInstrutores(this.pageSize, 0, this.novoTermo).subscribe((result: any) => {
        this.professores = result.body;
        this.totalProfessores = result.count;
        this.loading = false;
      });
    }
    // if (!this.categoria || this.categoria === 'undefined' || this.categoria === 'programas') {
    //   this.programasService.getProgramas(this.pageSize, 0, this.novoTermo).subscribe((result: any) => {
    //     this.programas = result.body;
    //     this.totalProgramas = result.count;
    //   });
    // }
    this.termo = this.novoTermo;
  }

  totalResultados(): number {
    switch (this.categoria) {
      case 'aulas':
        return this.totalAulas;
      case 'lives':
        return this.totalLives;
      case 'professores':
        return this.totalProfessores;
      case 'pessoas':
        return this.totalPessoas;
      // case 'programas':
      //   return this.totalProgramas;
      default:
        return this.totalAulas + this.totalLives + this.totalProfessores + this.totalPessoas; //+ this.totalProgramas;
    }
  }

  setProduct(id) {
    if(this.product === id) {
      this.product = 0;
    } else {
      this.product = id;
    }
    this.novaPesquisa();
  }

  openFilter() {
    this.menu.enable(true, 'filter');
    this.menu.open('filter');
  }

  closeFilter() {
    this.menu.close('filter'); 
  }
}
