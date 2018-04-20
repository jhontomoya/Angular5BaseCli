import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, routes } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatCardModule,
        MatSnackBarModule } from '@angular/material';

import { APP_PROVIDERS } from './app.providers';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {  GitHubCardComponent} from "./git-hub-card/git-hub-card.component";
import { SearchUserComponent } from './search-user/search-user.component';
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { LoginComponent } from "./login/login.component";

export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatCardModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    GitHubCardComponent,
    SearchUserComponent,
    PasivoComponent,
    ReactivoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
