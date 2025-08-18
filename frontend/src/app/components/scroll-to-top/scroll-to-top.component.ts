import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    // Verificar la posición del scroll al cargar la página
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    // Mostrar el botón cuando el usuario ha hecho scroll más de 300px
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
