import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { FooterModule } from './components/footer/footer.module';
import { CardAulaModule } from './components/card-aula/card-aula.module';
import { CardLiveModule } from './components/card-live/card-live.module';
import { CardProgramaModule } from './components/card-programa/card-programa.module';
import { CardProfessorModule } from './components/card-professor/card-professor.module';
import { CardAmigoModule } from './components/card-amigo/card-amigo.module';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Constants } from './services/constants';
import { AuthService } from './auth/auth.service';
import { MomentModule } from 'ngx-moment';

export function tokenGetter(): string {
  const user = JSON.parse(localStorage.getItem('currentUser') || '');
  if (!user) {
    return '';
  }
  return user.token;
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    FooterModule,
    AppRoutingModule,
    NgCalendarModule,
    CardAulaModule,
    CardLiveModule,
    CardProgramaModule,
    CardProfessorModule,
    CardAmigoModule,
    HttpClientModule,
    MomentModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt'},
    StreamingMedia,
    Storage,
    JwtHelperService,
    Constants,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
