import { Component, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LanguageSwitcherComponent, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;

  constructor(
    private elementRef: ElementRef,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Suscribirse a los cambios de idioma de forma más segura
    this.translationService.currentLanguage$.subscribe(() => {
      setTimeout(() => {
        this.cdr.detectChanges();
      });
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Verificar si el clic fue fuera del navbar
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}
