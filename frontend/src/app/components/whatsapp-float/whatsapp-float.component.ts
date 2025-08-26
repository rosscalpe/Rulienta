import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.css'
})
export class WhatsappFloatComponent {

  // Tu número de WhatsApp (cambia este número por el tuyo)
  whatsappNumber = '+5491133202300'; // Reemplaza con tu número real

  constructor(private translationService: TranslationService) {}

  openWhatsApp(): void {
    const currentLang = this.translationService.currentLanguage;
    const messages: {[key: string]: string} = {
      es: '¡Hola! Me interesa conocer más sobre tus servicios de desarrollo.',
      en: 'Hello! I\'m interested in learning more about your development services.'
    };

    const message = encodeURIComponent(messages[currentLang] || messages['es']);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}
