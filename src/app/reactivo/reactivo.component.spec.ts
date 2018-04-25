import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { ReactivoComponent } from './reactivo.component';

describe('ReactivoComponent', () => {
  let component: ReactivoComponent;
  let fixture: ComponentFixture<ReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivoComponent ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
