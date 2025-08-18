import { Component, ChangeDetectorRef } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
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
}
