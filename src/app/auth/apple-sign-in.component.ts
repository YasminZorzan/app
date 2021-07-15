import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-apple-signin',
  template: `Carregando...`
})

export class AppleSignInComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private auth: AuthService,
              private router: Router) {
    const token = this.activatedRoute.snapshot.queryParams.token;
    if (token) {
      this.auth.appleSignIn(token).subscribe(result  => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void { }

}
