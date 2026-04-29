import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-portfolio-dev',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './portfolio-dev.component.html',
  styleUrl: './portfolio-dev.component.css'
})
export class PortfolioDevComponent {

  constructor(private translationService: TranslationService) {}

  getStatusTranslation(status: string): string {
    if (status === 'Completado') {
      return this.translationService.translate('portfolioDev.projects.status.completed');
    } else if (status === 'En desarrollo') {
      return this.translationService.translate('portfolioDev.projects.status.development');
    }
    return status;
  }

  // Tecnologías principales organizadas por categoría
  frontendTechs = [
    { name: 'React', icon: '⚛️', experience: '3+ años' },
    { name: 'Angular', icon: '🅰️', experience: '2+ años' },
    { name: 'JavaScript', icon: '🟨', experience: '3+ años' },
    { name: 'TypeScript', icon: '🔷', experience: '3+ años' }
  ];

  backendTechs = [
    { name: 'Node.js', icon: '🟢', experience: '3+ años' },
    { name: 'PHP', icon: '🐘', experience: '2+ años' },
    { name: 'Python', icon: '🐍', experience: '2+ años' },
    { name: 'Java', icon: '☕', experience: '2+ años' },
    { name: 'Kotlin', icon: '🎯', experience: '1+ año' }
  ];

  databaseTechs = [
    { name: 'SQL Server', icon: '🏢', experience: '3+ años' },
    { name: 'MySQL', icon: '🐬', experience: '3+ años' },
    { name: 'SQLite', icon: '📱', experience: '2+ años' }
  ];

  // Proyectos personales disponibles en GitHub
  githubProjects = [
    {
      title: 'Rulienta',
      description: 'Portfolio personal con soporte de internacionalización (EN/ES), formulario de contacto con backend propio y diseño responsivo.',
      techs: ['Angular', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/rosscalpe/Rulienta',
      siteUrl: '',
      status: 'Completado'
    },
    {
      title: 'CV Lab',
      description: 'Aplicación web para generar y descargar currículums en PDF de forma dinámica.',
      techs: ['TypeScript', 'Angular'],
      githubUrl: 'https://github.com/rosscalpe/cv-lab',
      siteUrl: 'https://www.cvlabapp.com/login',
      status: 'Completado'
    },
    {
      title: 'E-commerce',
      description: 'Proyecto de tienda online con catálogo de productos, carrito de compras y flujo de compra.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/rosscalpe/ecommerce',
      siteUrl: '',
      status: 'En desarrollo'
    }
  ];

  // Experiencia profesional (sin detalles confidenciales)
  professionalExperience = [
    {
      role: 'Desarrolladora Full Stack',
      company: 'Empresa de Tecnología',
      period: '2022 - Presente',
      description: 'Desarrollo de aplicaciones web empresariales utilizando tecnologías modernas.',
      achievements: [
        'Implementación de soluciones escalables',
        'Optimización de bases de datos',
        'Desarrollo de APIs REST',
        'Trabajo en equipo ágil'
      ]
    },
    {
      role: 'Desarrolladora Frontend',
      company: 'Startup Tecnológica',
      period: '2022 - 2023',
      description: 'Desarrollo de interfaces de usuario responsivas y aplicaciones web.',
      achievements: [
        'Mejora en la experiencia de usuario',
        'Implementación de diseños responsivos',
        'Integración con APIs',
        'Colaboración con equipos de diseño'
      ]
    }
  ];

}
