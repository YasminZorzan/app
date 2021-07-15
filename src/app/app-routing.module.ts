import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'selecionar-conta',
    loadChildren: () => import('./pages/selecionar-conta/selecionar-conta.module').then( m => m.SelecionarContaPageModule)
  },
  {
    path: 'nova-conta',
    loadChildren: () => import('./pages/nova-conta/nova-conta.module').then( m => m.NovaContaPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./pages/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'cadastrar-nova-senha',
    loadChildren: () => import('./pages/cadastrar-nova-senha/cadastrar-nova-senha.module').then( m => m.CadastrarNovaSenhaPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'minha-conta',
    loadChildren: () => import('./pages/minha-conta/minha-conta.module').then( m => m.MinhaContaPageModule)
  },
  {
    path: 'professores',
    loadChildren: () => import('./pages/professores/professores.module').then( m => m.ProfessoresPageModule)
  },
  {
    path: 'professor/:id',
    loadChildren: () => import('./pages/professor/professor.module').then( m => m.ProfessorPageModule)
  },
  {
    path: 'aulas-salvas',
    loadChildren: () => import('./pages/aulas-salvas/aulas-salvas.module').then( m => m.AulasSalvasPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./pages/termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'excluir-conta',
    loadChildren: () => import('./pages/excluir-conta/excluir-conta.module').then( m => m.ExcluirContaPageModule)
  },
  {
    path: 'alterar-senha',
    loadChildren: () => import('./pages/alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule)
  },
  {
    path: 'cartoes',
    loadChildren: () => import('./pages/cartoes/cartoes.module').then( m => m.CartoesPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./pages/cartao/cartao.module').then( m => m.CartaoPageModule)
  },
  {
    path: 'novo-usuario',
    loadChildren: () => import('./pages/novo-usuario/novo-usuario.module').then( m => m.NovoUsuarioPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'meu-plano',
    loadChildren: () => import('./pages/meu-plano/meu-plano.module').then( m => m.MeuPlanoPageModule)
  },
  {
    path: 'plano',
    loadChildren: () => import('./pages/plano/plano.module').then( m => m.PlanoPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'programas',
    loadChildren: () => import('./pages/programas/programas.module').then( m => m.ProgramasPageModule)
  },
  {
    path: 'programa',
    loadChildren: () => import('./pages/programa/programa.module').then( m => m.ProgramaPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
