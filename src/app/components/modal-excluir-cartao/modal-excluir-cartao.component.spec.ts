import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalExcluirCartaoComponent } from './modal-excluir-cartao.component';

describe('ModalExcluirCartaoComponent', () => {
  let component: ModalExcluirCartaoComponent;
  let fixture: ComponentFixture<ModalExcluirCartaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExcluirCartaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalExcluirCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
