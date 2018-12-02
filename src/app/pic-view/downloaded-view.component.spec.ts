import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadedViewComponent } from './downloaded-view.component';

describe('DownloadedViewComponent', () => {
  let component: DownloadedViewComponent;
  let fixture: ComponentFixture<DownloadedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
