import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMusicComponent } from './portfolio-music.component';

describe('PortfolioMusicComponent', () => {
  let component: PortfolioMusicComponent;
  let fixture: ComponentFixture<PortfolioMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
