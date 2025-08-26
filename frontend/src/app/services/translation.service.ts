import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Translation {
  [key: string]: string | Translation;
}

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  private translations: { [key in Language]: Translation } = {
    en: {},
    es: {}
  };

  constructor() {
    // Cargar idioma guardado del localStorage o usar inglés por defecto
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      this.currentLanguageSubject.next(savedLanguage);
    }

    this.loadTranslations();
  }

  get currentLanguage$(): Observable<Language> {
    return this.currentLanguageSubject.asObservable();
  }

  get currentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: Language): void {
    if (this.currentLanguageSubject.value !== language) {
      this.currentLanguageSubject.next(language);
      localStorage.setItem('language', language);
    }
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
    this.setLanguage(newLanguage);
  }

  translate(key: string): string {
    const keys = key.split('.');
    let translation: any = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // Si no encuentra la traducción, devolver la clave o la traducción en inglés
        let fallback: any = this.translations['en'];
        for (const fallbackKey of keys) {
          if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
            fallback = fallback[fallbackKey];
          } else {
            return key; // Devolver la clave si no hay traducción
          }
        }
        return fallback || key;
      }
    }

    return translation || key;
  }

  private loadTranslations(): void {
    // Traducciones en inglés
    this.translations.en = {
      nav: {
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hello, I\'m',
        title: {
          before: 'Software Engineer',
          highlight: '&',
          after: 'Singer'
        },
        subtitle: {
          before: 'I bring ideas to life through',
          highlight: 'Rulienta',
          after: '— where technology meets creativity, music fuels innovation, and every line of code tells a story.'
        },
        ctaButton: 'Discover My Story',
        ctaContact: 'Get In Touch'
      },
      about: {
        title: 'About Me',
        subtitle: 'Get to know me better',
        intro1: 'I\'m a software engineer and singer from La Ciudad de la Furia, Buenos Aires, Argentina.',
        intro2: {
          before: 'I bring ideas to life through',
          highlight: 'Rulienta',
          after: '— a space where technology meets creativity. My work focuses on building intuitive, efficient, and meaningful digital experiences.'
        },
        intro3: 'Beyond coding, music is my other language. Singing allows me to express emotion and connect with people in a way that fuels my creativity and inspires my approach to technology.',
        developer: 'Developer',
        musician: 'Musician',
        randomFacts: 'Random facts',
        mySkills: 'My skills',
        myStory: 'My story',
        skills: {
          fullstack: 'Full-stack development',
          problemSolving: 'Problem solving',
          database: 'Database design',
          api: 'API development',
          lyricSinging: 'Lyric singing',
          classicalVoice: 'Classical voice training',
          guitar: 'Guitar playing',
          rockCovers: 'Rock covers',
          songInterpretation: 'Song interpretation'
        },
        facts: {
          music: 'Music is my creative fuel',
          blending: 'I love blending technology with art',
          mate: 'Mate is my coding companion',
          learning: 'Always learning new technologies',
          argentina: 'Argentina is my creative base',
          communication: 'I believe in the power of good communication'
        },
        skillNames: {
          mother: 'Mother',
          developer: 'Developer',
          wineDrinking: 'Wine drinking',
          singer: 'Singer',
          voleyPlayer: 'Voley Player'
        },
        story: {
          paragraph1: 'I entered the technology world driven by a desire to find work that would give me more quality time with my family. I wanted to pursue something I was passionate about while having the flexibility to work from home—something every mother truly needs.',
          paragraph2: 'In 2021, I began this career journey that keeps me deeply immersed in technology today. The unique combination of technology, music, and motherhood defines who I am now. This is Rosemary Calderón—Rulienta—a brand representing a curly-haired girl full of life, motivation, and an innovative future ahead.',
          paragraph3: 'Balancing my roles as a developer, musician, and mother has taught me the value of adaptability and creative problem-solving. Each aspect of my life enriches the others, creating a unique perspective that I bring to every project and collaboration.'
        }
      },
      portfolio: {
        title: 'My Portfolio',
        development: 'Development Projects',
        music: 'Music Productions',
        viewProject: 'View Project',
        listenNow: 'Listen Now'
      },
      portfolioDev: {
        title: 'Software Development',
        subtitle: 'Full Stack Developer with experience in technology companies',
        experienceBadges: {
          years: '4+ years of experience',
          technologies: 'Multiple technologies',
          projects: 'Enterprise projects'
        },
        professionalNotice: {
          title: 'Enterprise Professional Experience',
          paragraph1: 'During my years as a developer, I have worked exclusively in enterprise environments, creating solutions for technology companies where I have participated in large-scale and high-complexity projects.',
          paragraph2: 'Due to confidentiality policies and intellectual property, I cannot share source code, screenshots, or specific details of these commercial projects.',
          paragraph3: 'My personal projects on GitHub are the best way to demonstrate my technical skills and passion for software development.'
        },
        stats: {
          experience: 'Years of Experience',
          technologies: 'Technologies Mastered',
          companies: 'Technology Companies',
          projects: 'Projects Developed'
        },
        technologies: {
          title: 'Technologies & Tools',
          frontend: 'Frontend',
          backend: 'Backend',
          databases: 'Databases'
        },
        experience: {
          title: 'Professional Experience',
          achievements: 'Key achievements:',
          roles: {
            fullstack: 'Full Stack Developer',
            frontend: 'Frontend Developer'
          },
          companies: {
            tech: 'Technology Company',
            startup: 'Tech Startup'
          },
          achievementsList: {
            scalable: 'Implementation of scalable solutions',
            database: 'Database optimization',
            apis: 'REST API development',
            agile: 'Agile team work',
            ux: 'User experience improvement',
            responsive: 'Responsive design implementation',
            integration: 'API integration',
            design: 'Collaboration with design teams'
          }
        },
        projects: {
          title: 'Personal Projects on GitHub',
          intro: 'In these projects you can see my technical skills from the beginning of my career and some are publicly available:',
          status: {
            completed: 'Completed',
            development: 'In Development'
          },
          viewGithub: 'View on GitHub'
        },
        cta: {
          title: 'Looking for a Full Stack Developer?',
          subtitle: 'I am open to new job opportunities and freelance projects',
          features: {
            agile: 'Agile Development',
            multiple: 'Multiple Technologies',
            results: 'Results Focused'
          },
          button: 'Contact Me'
        }
      },
      contact: {
        title: 'Contact Me',
        subtitle: 'Let\'s work together',
        socialMedia: 'Social Media',
        socialDescription: 'Get in touch with me via social media or send me an email.',
        emailSection: 'Send me an email',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
        placeholders: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'Tell me about your project or just say hello...'
        }
      },
      footer: {
        rights: 'All rights reserved.',
        madeWith: 'Made with',
        and: 'and'
      },
      scrollToTop: {
        ariaLabel: 'Go back to top',
        title: 'Go back to top'
      }
    };

    // Traducciones en español
    this.translations.es = {
      nav: {
        about: 'Acerca de',
        portfolio: 'Portafolio',
        contact: 'Contacto'
      },
      hero: {
        greeting: 'Hola, soy',
        title: {
          before: 'Ingeniera de Software',
          highlight: 'y',
          after: 'Cantante'
        },
        subtitle: {
          before: 'Doy vida a las ideas a través de',
          highlight: 'Rulienta',
          after: '— donde la tecnología se encuentra con la creatividad, la música impulsa la innovación, y cada línea de código cuenta una historia.'
        },
        ctaButton: 'Descubre Mi Historia',
        ctaContact: 'Contactar'
      },
      about: {
        title: 'Acerca de Mí',
        subtitle: 'Conoce más sobre mí',
        intro1: 'Soy una ingeniera de software y cantante de La Ciudad de la Furia, Buenos Aires, Argentina.',
        intro2: {
          before: 'Doy vida a las ideas a través de',
          highlight: 'Rulienta',
          after: '— un espacio donde la tecnología se encuentra con la creatividad. Mi trabajo se enfoca en construir experiencias digitales intuitivas, eficientes y significativas.'
        },
        intro3: 'Más allá de programar, la música es mi otro lenguaje. Cantar me permite expresar emociones y conectar con las personas de una manera que alimenta mi creatividad e inspira mi enfoque hacia la tecnología.',
        developer: 'Desarrolladora',
        musician: 'Música',
        randomFacts: 'Datos curiosos',
        mySkills: 'Mis habilidades',
        myStory: 'Mi historia',
        skills: {
          fullstack: 'Desarrollo full-stack',
          problemSolving: 'Resolución de problemas',
          database: 'Diseño de bases de datos',
          api: 'Desarrollo de APIs',
          lyricSinging: 'Canto lírico',
          classicalVoice: 'Entrenamiento vocal clásico',
          guitar: 'Tocar guitarra',
          rockCovers: 'Covers de rock',
          songInterpretation: 'Interpretación de canciones'
        },
        facts: {
          music: 'La música es mi combustible creativo',
          blending: 'Me encanta mezclar tecnología con arte',
          mate: 'El mate es mi compañero de programación',
          learning: 'Siempre aprendiendo nuevas tecnologías',
          argentina: 'Argentina es mi base creativa',
          communication: 'Creo en el poder de la buena comunicación'
        },
        skillNames: {
          mother: 'Madre',
          developer: 'Desarrolladora',
          wineDrinking: 'Tomar vino',
          singer: 'Cantante',
          voleyPlayer: 'Jugadora de Vóley'
        },
        story: {
          paragraph1: 'Entré al mundo de la tecnología impulsada por el deseo de encontrar un trabajo que me diera más tiempo de calidad con mi familia. Quería dedicarme a algo que me apasionara mientras tenía la flexibilidad de trabajar desde casa—algo que toda madre realmente necesita.',
          paragraph2: 'En 2021, comencé este viaje profesional que me mantiene profundamente inmersa en la tecnología hoy. La combinación única de tecnología, música y maternidad define quién soy ahora. Esta es Rosemary Calderón—Rulienta—una marca que representa a una chica de cabello rizado llena de vida, motivación y un futuro innovador por delante.',
          paragraph3: 'Equilibrar mis roles como desarrolladora, música y madre me ha enseñado el valor de la adaptabilidad y la resolución creativa de problemas. Cada aspecto de mi vida enriquece a los demás, creando una perspectiva única que aporto a cada proyecto y colaboración.'
        }
      },
      portfolio: {
        title: 'Mi Portafolio',
        development: 'Proyectos de Desarrollo',
        music: 'Producciones Musicales',
        viewProject: 'Ver Proyecto',
        listenNow: 'Escuchar Ahora'
      },
      portfolioDev: {
        title: 'Desarrollo de Software',
        subtitle: 'Desarrolladora Full Stack con experiencia en empresas tecnológicas',
        experienceBadges: {
          years: '4+ años de experiencia',
          technologies: 'Múltiples tecnologías',
          projects: 'Proyectos empresariales'
        },
        professionalNotice: {
          title: 'Experiencia Profesional Empresarial',
          paragraph1: 'Durante mis años como desarrolladora, he trabajado exclusivamente en entornos empresariales, creando soluciones para empresas de tecnología donde he participado en proyectos de gran escala y alta complejidad.',
          paragraph2: 'Debido a políticas de confidencialidad y propiedad intelectual, no puedo compartir código fuente, capturas de pantalla o detalles específicos de estos proyectos comerciales.',
          paragraph3: 'Mis proyectos personales en GitHub son la mejor forma de demostrar mis habilidades técnicas y mi pasión por el desarrollo de software.'
        },
        stats: {
          experience: 'Años de Experiencia',
          technologies: 'Tecnologías Dominadas',
          companies: 'Empresas de Tecnología',
          projects: 'Proyectos Desarrollados'
        },
        technologies: {
          title: 'Tecnologías y Herramientas',
          frontend: 'Frontend',
          backend: 'Backend',
          databases: 'Bases de Datos'
        },
        experience: {
          title: 'Experiencia Profesional',
          achievements: 'Logros destacados:',
          roles: {
            fullstack: 'Desarrolladora Full Stack',
            frontend: 'Desarrolladora Frontend'
          },
          companies: {
            tech: 'Empresa de Tecnología',
            startup: 'Startup Tecnológica'
          },
          achievementsList: {
            scalable: 'Implementación de soluciones escalables',
            database: 'Optimización de bases de datos',
            apis: 'Desarrollo de APIs REST',
            agile: 'Trabajo en equipo ágil',
            ux: 'Mejora en la experiencia de usuario',
            responsive: 'Implementación de diseños responsivos',
            integration: 'Integración con APIs',
            design: 'Colaboración con equipos de diseño'
          }
        },
        projects: {
          title: 'Proyectos Personales en GitHub',
          intro: 'En estos proyectos puedes ver mis habilidades técnicas desde el comienzo de mi carrera y algunos están disponibles públicamente:',
          status: {
            completed: 'Completado',
            development: 'En Desarrollo'
          },
          viewGithub: 'Ver en GitHub'
        },
        cta: {
          title: '¿Buscas una Desarrolladora Full Stack?',
          subtitle: 'Estoy abierta a nuevas oportunidades laborales y proyectos freelance',
          features: {
            agile: 'Desarrollo Ágil',
            multiple: 'Múltiples Tecnologías',
            results: 'Enfoque en Resultados'
          },
          button: 'Contactarme'
        }
      },
      contact: {
        title: 'Contáctame',
        subtitle: 'Trabajemos juntos',
        socialMedia: 'Redes Sociales',
        socialDescription: 'Ponte en contacto conmigo a través de redes sociales o envíame un email.',
        emailSection: 'Envíame un email',
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente!',
        error: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        placeholders: {
          name: 'Tu nombre',
          email: 'tu.email@ejemplo.com',
          message: 'Cuéntame sobre tu proyecto o simplemente saluda...'
        }
      },
      footer: {
        rights: 'Todos los derechos reservados.',
        madeWith: 'Hecho con',
        and: 'y'
      },
      scrollToTop: {
        ariaLabel: 'Volver arriba',
        title: 'Volver arriba'
      }
    };
  }
}
