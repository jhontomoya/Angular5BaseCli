import { TestBed, async } from '@angular/core/testing';
import { AppComponent, routes } from './app.component';
import { MATERIAL_COMPONENTS } from "./app.module"
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from "./login/login.component";
import { SearchUserComponent } from './search-user/search-user.component';
import {  GitHubCardComponent} from "./git-hub-card/git-hub-card.component";
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { SignUpComponent } from "./signup/signup.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        SearchUserComponent,
        GitHubCardComponent,
        PasivoComponent,
        ReactivoComponent,
        SignUpComponent
      ],
      imports: [
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [ {provide: APP_BASE_HREF , useValue: '/' }]// esto es para cuando sale el error de HREF
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);//crea un componente
    const app = fixture.debugElement.componentInstance;// me regresa una instancia del componente AppComponent como si fuera un new
    expect(app).toBeTruthy();//verifica que sea verdadero, es lo que se espera
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));  
  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();//todo lo que sea dinamico lo crea. ejemplo {{prueba}}
    const compiled = fixture.debugElement.nativeElement;//nativeElement accede a la vista
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');//querySelector busca elementos
  }));
  
});
