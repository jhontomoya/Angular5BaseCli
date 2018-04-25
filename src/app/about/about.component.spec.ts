import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_COMPONENTS } from "../app.module";// aqui importamos la lista de material
import { APP_PROVIDERS } from "../app.providers"; // aqui imoirtamos los sercivios ya que el error sale de un servicio
import { AboutComponent } from './about.component';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => { // siempre se incializa estos valores
    TestBed.configureTestingModule({// el TestBed configura el modulo de testing
      declarations: [ AboutComponent ],
      imports: [
        MATERIAL_COMPONENTS, 
        HttpClientModule,
        BrowserAnimationsModule 
      ],//Lista de material
      providers: [
        APP_PROVIDERS
      ]//Lista de servicios
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
