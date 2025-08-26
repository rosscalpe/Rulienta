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
      title: 'Rulienta Portfolio',
      description: 'Portfolio personal desarrollado con Angular y Node.js, incluyendo funcionalidades de internacionalización y diseño responsivo.',
      techs: ['Angular', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/rosscalpe/rulienta-portfolio',
      status: 'En desarrollo'
    },
    {
      title: 'Sistema de Gestión',
      description: 'Aplicación web para gestión de inventarios con autenticación de usuarios y dashboard administrativo.',
      techs: ['React', 'Node.js', 'MySQL', 'Express'],
      githubUrl: 'https://github.com/rosscalpe',
      status: 'Completado'
    },
    {
      title: 'API REST Microservices',
      description: 'API escalable desarrollada con Python y FastAPI, implementando patrones de microservicios.',
      techs: ['Python', 'FastAPI', 'SQLite', 'Docker'],
      githubUrl: 'https://github.com/rosscalpe',
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
