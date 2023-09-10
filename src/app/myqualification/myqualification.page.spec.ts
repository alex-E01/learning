import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyqualificationPage } from './myqualification.page';

describe('MyqualificationPage', () => {
  let component: MyqualificationPage;
  let fixture: ComponentFixture<MyqualificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyqualificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
