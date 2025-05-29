import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { PoPageDynamicTableModule } from '@po-ui/ng-templates';

import { TabelaDinamicaComponent } from './tabela-dinamica.component';

describe('TabelaDinamicaComponent', () => {
  let component: TabelaDinamicaComponent;
  let fixture: ComponentFixture<TabelaDinamicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PoPageDynamicTableModule
      ],
      providers: [provideHttpClient()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
