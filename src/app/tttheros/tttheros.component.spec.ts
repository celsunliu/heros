import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TttherosComponent } from './tttheros.component';

describe('TttherosComponent', () => {
  let component: TttherosComponent;
  let fixture: ComponentFixture<TttherosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TttherosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TttherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
