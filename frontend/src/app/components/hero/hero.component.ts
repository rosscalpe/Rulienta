import { Component, HostListener } from '@angular/core';
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
  rightOpacity = 1;
  leftOpacity = 1;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Detecta si es teléfono o tablet
  }

  handleMouseMove(event: MouseEvent) {
    const screenWidth = window.innerWidth;
    const mouseX = event.clientX;
    console.log("mouse X: ",mouseX, "screen width: ", screenWidth);

    // Expandir la izquierda
    const leftPercentage = ((mouseX - screenWidth / 2) / (screenWidth / 2)) * 100;
    this.leftWidth = `${50 + leftPercentage / 2}%`;
    this.rightWidth = `${50 - leftPercentage / 2}%`;
    if (parseFloat(this.rightWidth) < 0) {
      this.rightWidth = '0%';
    }
      // Expandir la derecha
      const rightPercentage = ((mouseX - screenWidth / 2) / (screenWidth / 2)) * 100;
      this.rightWidth = `${50 + rightPercentage / 2}%`;
      this.leftWidth = `${50 - rightPercentage / 2}%`;
      if (parseFloat(this.leftWidth) < 0) {
        this.leftWidth = '0%';
      }

    // Ajustar opacidades
    this.leftOpacity = parseFloat(this.leftWidth) / 100;
    this.rightOpacity = parseFloat(this.rightWidth) / 100;

  }
  resetSections() {
    this.leftWidth = '50%';
    this.rightWidth = '50%';
    this.rightOpacity = 1;
    this.leftOpacity = 1;
  }

}
