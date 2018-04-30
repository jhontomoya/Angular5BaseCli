import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";

import { MATERIAL_COMPONENTS } from "../app.module";// aqui importamos la lista de material
import { APP_PROVIDERS } from "../app.providers"; // aqui imoirtamos los sercivios ya que el error sale de un servicio
import { SignUpComponent } from './signup.component';
import { AppComponent, routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SearchUserComponent } from '../search-user/search-user.component';
import {  GitHubCardComponent} from "../git-hub-card/git-hub-card.component";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { LoginComponent } from '../login/login.component';


describe('SigUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => { // siempre se incializa estos valores
    TestBed.configureTestingModule({// el TestBed configura el modulo de testing
      declarations: [ 
          SignUpComponent,
          MainComponent,
          AboutComponent,
          ContactComponent,
          SearchUserComponent,
          GitHubCardComponent,
          PasivoComponent,
          ReactivoComponent,
          LoginComponent
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
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should data username correct', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.user = 'Admon505';
    //component.SignUp();
    expect(component.ValidateUserName(component.user)).toThrow;

  });
  it('should data username incorrect', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    //component.user = 'UsUsUsUsUsUsUsUs16';
    component.user = 'Adm';
    expect(component.ValidateUserName(component.user)).toEqual(false);
  });

  it('should data password correct', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.password = 'Admin505';
    expect(component.ValidatePassword(component.password)).toThrow;
  });

  it('should data password incorrect', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    //component.password = 'admin505';
    //component.password = 'ADMIN505';
    component.password = 'Administrador';
    expect(component.ValidatePassword(component.password)).toEqual(false);
  });

  it('should data confirm password correct', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.password = 'Admin505';
    component.confirmpassword = 'Admin505';
    expect(component.ValidateEqualPassword(component.password,component.confirmpassword)).toThrow;
  });

  it('should data confirm password incorrect', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.password = 'Admin505';
    component.confirmpassword = 'Admin1505';
    expect(component.ValidateEqualPassword(component.password,component.confirmpassword)).toEqual(false);
  });

  it('should data email correct', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    //component.email = 'prueba@prueba.com';
    component.email = 'prueba_ps@prueba.com.mx';
    expect(component.ValidateEmail(component.email)).toThrow;
  });

  it('should data email incorrect', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    //component.email = 'prueba.com';
    //component.email = 'prueba@.com';
    component.email = '@.com';
    expect(component.ValidateEmail(component.email)).toEqual(false);
  });

  it('should data name correct', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.name = 'Jhonn';
    expect(component.ValidateName(component.name)).toThrow;
  });

  it('should data name incorrect', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.name = 'Jhonn505';
    expect(component.ValidateName(component.name)).toEqual(false);
  });

  it('should data checkbox true', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.checked = true;
    expect(component.ValidateCheckbox(component.checked)).toThrow;
  });

  it('should data checkbox false', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.checked = false;
    expect(component.ValidateCheckbox(component.checked)).toEqual(false);
  });
  
  it('should data complete', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.user = 'Admon505';
    component.password = 'Admin505';
    component.confirmpassword = 'Admin505';
    component.email = 'prueba@prueba.com';
    component.name = 'Admon';
    component.checked = true;
    expect(component.ValidateCompleteData(component.user,component.password,component.confirmpassword,component.email,component.name,component.checked)).toThrow;
  });

  it('should data incomplete', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.user = 'Admon505';
    //component.user = null;
    component.password = 'Admin505';
    //component.password = null;
    //component.confirmpassword = 'Admin505';
    component.confirmpassword = null;
    component.email = 'prueba@prueba.com';
    //component.email = null;
    component.name = 'Admon';
    //component.name = null;
    component.checked = true;
    //component.checked = false;
    expect(component.ValidateCompleteData(component.user,component.password,component.confirmpassword,component.email,component.name,component.checked)).toEqual(false);
  });

  it ('should button click', () => {
    //let navigateSpy = spyOn(component._router, 'navigate');
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    component.user = 'Admon';
    component.password = 'admon';
    compiled.querySelector('button').click();
  });

});