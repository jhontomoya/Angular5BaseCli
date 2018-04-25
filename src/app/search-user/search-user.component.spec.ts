import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { APP_PROVIDERS } from '../app.providers';
import { SearchUserComponent } from './search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      providers: [APP_PROVIDERS],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick', () => {
    component.userName = 'jhontomoya';
    component.onSearchUser.subscribe( x => {
      expect(x).toEqual('jhontomoya')
    })
    component.onSearchClick();
  })

  it('should call onSearchClick in view', () => {
    component.userName = 'jhontomoya';
    component.onSearchUser.subscribe( x => {
      expect(x).toEqual('jhontomoya')
    })
    let compiled = fixture.nativeElement;
    compiled.querySelector('button').click();//Para acceder a click del html
  })

});
