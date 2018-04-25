import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";

import { MATERIAL_COMPONENTS } from "../app.module";// aqui importamos la lista de material
import { APP_PROVIDERS } from "../app.providers"; // aqui imoirtamos los sercivios ya que el error sale de un servicio
import { LoginComponent } from './login.component';
import { AppComponent, routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SearchUserComponent } from '../search-user/search-user.component';
import {  GitHubCardComponent} from "../git-hub-card/git-hub-card.component";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => { // siempre se incializa estos valores
    TestBed.configureTestingModule({// el TestBed configura el modulo de testing
      declarations: [ 
          LoginComponent,
          MainComponent,
          AboutComponent,
          ContactComponent,
          SearchUserComponent,
          GitHubCardComponent,
          PasivoComponent,
          ReactivoComponent
        ],
      imports: [
        MATERIAL_COMPONENTS, 
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes)
      ],//Lista de material
      providers: [
        APP_PROVIDERS,
        {provide: APP_BASE_HREF , useValue: '/' }
      ]//Lista de servicios
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should data correct', () => {
    let navigateSpy = spyOn((<any>component)._router, 'navigate');
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.user = 'Admon';
    component.password = 'admon';
    component.logIn();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

//   it('should data incorrect', () => {
//     let navigateSpy = spyOn((<any>component)._router, 'navigate');
//     const compiled = fixture.nativeElement;
//     fixture.detectChanges();
//     component.user = 'admon';
//     component.password = 'admon';
//     component.logIn();
//     expect(navigateSpy).toHaveBeenCalledWith(['']);
//   });


});