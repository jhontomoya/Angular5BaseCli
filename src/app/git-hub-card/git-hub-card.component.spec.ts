import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from './git-hub-card.component';
import { GitHubModel } from "../model/git-hub-model";

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData: GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponent ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData = new GitHubModel();
    gitHubData.avatar_url= '';
    gitHubData.login= 'jhontomoya';
    gitHubData.name= 'Jonathan Zamora';
    gitHubData.followers= 0;
    gitHubData.following= 0;
    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate model', () => {
    component.gitGubData = gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })

  it('should validate model in the view', () => {
    component.gitGubData = gitHubData;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.data-container #name').textContent)// pone la clase y el id del campo para validarque el div esta dentro de otro div
                   .toContain(`Nombre: ${gitHubData.name}`);
  })

});
