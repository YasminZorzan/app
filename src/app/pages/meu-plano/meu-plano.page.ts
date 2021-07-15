import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth/auth.service';
import { Constants } from 'src/app/services/constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meu-plano',
  templateUrl: './meu-plano.page.html',
  styleUrls: ['./meu-plano.page.scss'],
})
export class MeuPlanoPage implements OnInit {

  // planos = [
  //   {
  //     id: 1,
  //     nome: 'Plano Velocity',
  //     mensal: 80.99,
  //     anual: 99.99,
  //     descricao: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."      
  //   },
  //   {
  //     id: 2,
  //     nome: 'Plano Kore',
  //     mensal: 99.99,
  //     anual: 99.99,
  //     descricao: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."      
  //   },
  //   {
  //     id: 3,
  //     nome: 'Plano Premium (Velocity + Kore)',
  //     mensal: 99.99,
  //     anual: 99.99,
  //     descricao: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."      
  //   },
  // ]

  constructor(private ct: Constants, private auth: AuthService, private http: HttpClient) { }

 public  getList(): Observable<any> {
    const authHeader = this.ct.getAuthorizationHeader({ token: this.auth.currentUser?.token });
    console.log(authHeader);
    return this.http.get(`${environment.apiUrl}/planos`, { headers: authHeader });
  }
  ngOnInit() {
    this.getList().subscribe(retorno => console.log(retorno));

  }

}
