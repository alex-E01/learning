import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualificationPage } from './qualification.page';

describe('QualificationPage', () => {
  let component: QualificationPage;
  let fixture: ComponentFixture<QualificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QualificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
