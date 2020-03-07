import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistereComponent } from './registere.component';

describe('RegistereComponent', () => {
  let component: RegistereComponent;
  let fixture: ComponentFixture<RegistereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistereComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
