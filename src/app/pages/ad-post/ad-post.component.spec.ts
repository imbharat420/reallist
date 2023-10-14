import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPostComponent } from './ad-post.component';

describe('AdPostComponent', () => {
  let component: AdPostComponent;
  let fixture: ComponentFixture<AdPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdPostComponent]
    });
    fixture = TestBed.createComponent(AdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
