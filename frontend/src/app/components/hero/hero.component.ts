import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  leftWidth = '50%';
  rightWidth = '50%';
  backgroundSizeLeft = '180% 100%';
  backgroundSizeRight = '224% 100%';
  handleMouseMove(event: MouseEvent) {
    const screenWidth = window.innerWidth;
    const mouseX = event.clientX;

    const rightPercentage = (mouseX / screenWidth) * 100;
    const leftPercentage = 100 - rightPercentage;

    this.leftWidth = `${leftPercentage}%`;
    this.rightWidth = `${rightPercentage}%`;

    this.backgroundSizeLeft = `${leftPercentage}% 100%`;
    this.backgroundSizeRight = `${rightPercentage}% 100%`;
  }

  resetSections() {
    this.leftWidth = '50%';
    this.rightWidth = '50%';
    this.backgroundSizeLeft = '180% 100%';  // Restablecer tamaño por defecto
    this.backgroundSizeRight = '224% 100%';
  }
}
