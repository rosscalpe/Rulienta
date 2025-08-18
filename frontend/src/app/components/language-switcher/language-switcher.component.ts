import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <button
        (click)="toggleLanguage()"
        class="flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white text-sm font-medium"
        [title]="currentLanguage === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'">
        <span class="text-xs">{{ currentLanguage === 'en' ? 'EN' : 'ES' }}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLanguage: Language = 'en';

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    this.translationService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
      setTimeout(() => {
        this.cdr.detectChanges();
      });
    });
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}
