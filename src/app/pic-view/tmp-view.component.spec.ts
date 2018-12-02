import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpViewComponent } from './tmp-view.component';

describe('TmpViewComponent', () => {
  let component: TmpViewComponent;
  let fixture: ComponentFixture<TmpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
