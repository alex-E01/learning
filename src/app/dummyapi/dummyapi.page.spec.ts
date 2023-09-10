import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyapiPage } from './dummyapi.page';

describe('DummyapiPage', () => {
  let component: DummyapiPage;
  let fixture: ComponentFixture<DummyapiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DummyapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
