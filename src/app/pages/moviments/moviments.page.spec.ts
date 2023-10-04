import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovimentsPage } from './moviments.page';

describe('MovimentsPage', () => {
  let component: MovimentsPage;
  let fixture: ComponentFixture<MovimentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
