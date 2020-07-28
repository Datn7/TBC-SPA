import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabylonPlayComponent } from './babylon-play.component';

describe('BabylonPlayComponent', () => {
  let component: BabylonPlayComponent;
  let fixture: ComponentFixture<BabylonPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabylonPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabylonPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
