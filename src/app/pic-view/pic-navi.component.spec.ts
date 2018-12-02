import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicNaviComponent } from './pic-navi.component';

describe('PicNaviComponent', () => {
  let component: PicNaviComponent;
  let fixture: ComponentFixture<PicNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
