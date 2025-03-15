import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDevComponent } from './portfolio-dev.component';

describe('PortfolioDevComponent', () => {
  let component: PortfolioDevComponent;
  let fixture: ComponentFixture<PortfolioDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
