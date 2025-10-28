import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjtButtonComponent } from './gjt-button.component';

describe('GjtButtonComponent', () => {
  let component: GjtButtonComponent;
  let fixture: ComponentFixture<GjtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GjtButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GjtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
