import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {TopbarModule} from './topbar/topbar.module';
import {AccordionModule} from 'primeng/accordion';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {MessageService} from 'primeng';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {LoginService} from './service/login.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    LoginModule,
    CommonModule,
    DashboardModule,
    TopbarModule,
    AccordionModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AngularFirestore, MessageService, AngularFireAuth, AngularFireAuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
