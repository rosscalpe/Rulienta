import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rosscalpe',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rosemary-calderon',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/rulienta',
      icon: 'fab fa-instagram'
    },
    {
      name: 'Email',
      url: 'mailto:rosemarycalderonp@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Suscribirse a los cambios de idioma de forma más segura
    this.translationService.currentLanguage$.subscribe(() => {
      // Usar setTimeout para evitar problemas con el ciclo de detección de cambios
      setTimeout(() => {
        this.cdr.detectChanges();
      });
    });
  }

  async onSubmit() {
    if (!this.isValidForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Simular envío de email - aquí integrarías con tu backend o servicio de email
      await this.sendEmail();
      this.submitSuccess = true;
      this.submitMessage = this.translationService.translate('contact.success');
      this.resetForm();

      // Limpiar el mensaje después de 4 segundos
      setTimeout(() => {
        this.submitMessage = '';
        this.cdr.detectChanges();
      }, 4000);

    } catch (error) {
      this.submitSuccess = false;
      this.submitMessage = this.translationService.translate('contact.error');

      // Limpiar el mensaje de error después de 5 segundos
      setTimeout(() => {
        this.submitMessage = '';
        this.cdr.detectChanges();
      }, 5000);

    } finally {
      this.isSubmitting = false;
    }
  }

  private isValidForm(): boolean {
    return !!(this.form.name.trim() &&
              this.form.email.trim() &&
              this.form.message.trim() &&
              this.isValidEmail(this.form.email));
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private async sendEmail(): Promise<void> {
    // Simular delay de envío
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email sent:', this.form);
        resolve();
      }, 1500);
    });
  }

  private resetForm(): void {
    this.form = {
      name: '',
      email: '',
      message: ''
    };
  }
}
