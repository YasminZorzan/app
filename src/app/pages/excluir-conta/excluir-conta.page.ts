import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-excluir-conta',
  templateUrl: './excluir-conta.page.html',
  styleUrls: ['./excluir-conta.page.scss'],
})
export class ExcluirContaPage implements OnInit {


  constructor(private usersService: UsersService,
    private router: Router,
    private authService: AuthService) { }


  ngOnInit() {
  }

  excluirConta(): void {
    this.usersService.excluirPerfil(1).subscribe(() => {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }

}
