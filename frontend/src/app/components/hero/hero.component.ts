import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  isDarkMode = false;
  isLightMode = false;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  handleMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const containerWidth = rect.width;

    // Si está en la mitad izquierda, activa modo oscuro
    if (mouseX < containerWidth / 2) {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }
  }

  setDarkMode() {
    this.isDarkMode = true;
    this.isLightMode = false;
  }

  setLightMode() {
    this.isDarkMode = false;
    this.isLightMode = true;
  }

  resetImage() {
    this.isDarkMode = false;
    this.isLightMode = false;
  }
}
