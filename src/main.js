import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/css/index.css'

const browserLanguage = navigator.language.split('-')[0]; // Get the primary language code ('en', 'es', etc.)
const availableLanguages = ['en', 'es'];
const defaultLanguage = availableLanguages.includes(browserLanguage) ? browserLanguage : 'en'; // Fallback to English if the browser language isn't supported

const i18n = createI18n({
  locale: defaultLanguage,
  fallbackLocale: 'en',
  messages: {
    en: {
      home: {
        welcomeOne: 'Hello!,',
        welcomeTwo: "I'm ",
        welcomeThree: 'David',
        welcomeFour: 'Web Developer',
      },
      aboutMe: {
        title: 'About Me',
        descriptionOne: `Hello! My name is David and I enjoy creating
          things on the technological world. My interest in
          development started back in 2013 when in my school
          I started creating basic programs using Scratch
          there I make a lot of funny games and then started my dreams
          to be a good developer in the future.`,
        descriptionTwo: `Fast-forward to today, I learned a lot of
          the tech world and programming languages
          like basic C++, JavaScript or Python
          using frameworks like Flask, Django, Vue, React
          now I am focusing on web development and
          learning new things everyday to be a
          good developer and make the future of the
          internet.`,
      },
      contactMe: {
        title: 'Contact Me',
        bigtextOne: 'Get in',
        bigtextTwo: 'Touch',
        description: `My inbox is always open to new collaboration or projects
          press the below button and send me a message, I'll wait
          for your message.`,
        buttonText: 'Contact Me',
        disclaimer: 'Made and designed with <3 by @DavidsDvm'
      },
      experience: {
        title: 'Experience',
        readMore: 'Read More',
        jobs: {
          first: {
            title: 'Full Stack Engineer',
            date: 'Jan 2024 - Actually',
            company: 'Wayru',
            description:
            'As a Software Engineer at Wayru, I focus on several key areas: I specialize in React Native for mobile app development, creating solutions for both Android and iOS. On the backend, I work with Node.js and NestJS, utilizing the Strapi framework to build efficient systems. I also contribute to developing software for global network equipment management and WiFi network administration, focusing on optimizing network performance. Additionally, I work with blockchain technology, particularly Algorand and Ethereum Virtual Machines (EVMs), managing multi-chain integrations and ensuring seamless interoperability across platforms.',
            link: 'https://www.wayru.io/',
          },
          second: {
            title: 'Backend Developer',
            date: 'Oct 23 - Jan 24',
            company: 'Resuelve tu deuda',
            description:
              'As a Back-End Developer at Go Bravo, my role involved enhancing application infrastructure and internal software architecture. I developed back-end services using Java Spring Boot and automated processes with Python scripting. Additionally, I contributed to front-end projects with Angular and participated in various software lifecycle tasks such as integration testing and continuous deployment.',
          },
          third: {
            title: 'Backend Developer',
            date: 'Oct 22 - May 23',
            company: 'Wayru',
            description:
              'My responsibilities included developing back-end systems for various projects and ensuring seamless integration with the front-end team. I gained extensive experience in a variety of technologies and mobile app development, while continually expanding my knowledge in blockchain and smart contract implementation.',
          },
          fourth: {
            title: 'Full Stack Developer',
            date: 'Jul 22 - May 23',
            company: 'JAH insurance brokers corp',
            description:
              'As a Full Stack Developer, I worked on a project for Pacific Real Estate where I was responsible for the entire development process, from planning to deployment. The project included two pages, the main page of the project, and a platform to manage properties, user commissions, and files.',
          },
          fifth: {
            title: 'Junior Software Developer',
            date: 'Dec 21 - Jun 22',
            company: 'Mi.com.co',
            description:
              'During this role, I gained experience in software development methodologies, version control tools such as Git, and working in an agile team environment. I also developed skills in debugging, testing and troubleshooting complex systems, and in collaborating with team members to achieve project goals.',
          }
        }
      },
      projects: {
        title: 'Projects',
        projects: {
          first: {
            title: 'Flowy',
            description:
              `E-commerce project, this projects is based on the
              little offert of online sites to buy flowers on
              LATAM countries, project made using Flask, MariaDB
              JavaScript`,
          },
          second: {
            title: 'MediFlow',
            description:
              `The objective of the project is to manage shifts
              and assign them within an interactive calendar.
              Project developed for Senasoft edition 2021,
              with Flask, SqlAlchemy, JavaScript.`
          },
          third: {
            title: 'Mascotas Olarte',
            description:
              `Web Information System for the veterinarian center
              "Mascotas Olarte" using HTML5, CSS3, Bootstrap, PHP,
              MySQL; You can check the full project on the below GitHub repository`
          }
        }
      }
    },
    es: {
      home: {
        welcomeOne: 'Hola!,',
        welcomeTwo: 'Soy ',
        welcomeThree: 'David',
        welcomeFour: 'Desarrollador web',
      },
      aboutMe: {
        title: 'Sobre Mí',
        descriptionOne: `¡Hola! Mi nombre es David y disfruto creando
          cosas en el mundo tecnológico. Mi interés por
          el desarrollo comenzó en 2013 cuando en mi escuela
          comencé a crear programas básicos usando Scratch
          allí hice muchos juegos divertidos y luego comencé mis sueños
          de ser un buen desarrollador en el futuro.`,
        descriptionTwo: `Avanzando rápidamente hasta hoy, aprendí mucho
          del mundo tecnológico y lenguajes de programación
          como C++, JavaScript o Python
          usando frameworks como Flask, Django, Vue, React
          ahora me estoy enfocando en el desarrollo web y
          aprendiendo cosas nuevas todos los días para ser un
          buen desarrollador y hacer el futuro de la
          internet.`,
      },
      contactMe: {
        title: 'Contáctame',
        bigtextOne: 'Ponte en ',
        bigtextTwo: 'Contacto',
        description: `Mi bandeja de entrada siempre está abierta para nuevas colaboraciones o proyectos
          presiona el botón de abajo y envíame un mensaje, esperaré
          tu mensaje.`,
        buttonText: 'Contáctame',
        disclaimer: 'Hecho y diseñado con <3 por @DavidsDvm'
      },
      experience: {
        title: 'Experiencia',
        readMore: 'Leer Más',
        jobs: {
          first: {
            title: 'Ingeniero Full Stack',
            date: 'Ene 2024 - Actualmente',
            company: 'Wayru',
            description:
            'Como Ingeniero de Software en Wayru, me enfoco en varias áreas clave: me especializo en React Native para el desarrollo de aplicaciones móviles, creando soluciones tanto para Android como para iOS. En el backend, trabajo con Node.js y NestJS, utilizando el framework Strapi para construir sistemas eficientes. También contribuyo al desarrollo de software para la administración de equipos de red globales y la administración de redes WiFi, centrándome en la optimización del rendimiento de la red. Además, trabajo con tecnología blockchain, particularmente Algorand y Ethereum Virtual Machines (EVMs), gestionando integraciones multi-cadena y garantizando una interoperabilidad perfecta entre plataformas.',
            link: 'https://www.wayru.io/',
          },
          second: {
            title: 'Desarrollador Backend',
            date: 'Oct 23 - Ene 24',
            company: 'Resuelve tu deuda',
            description:
              'Como Desarrollador Back-End en Go Bravo, mi rol implicaba mejorar la infraestructura de la aplicación y la arquitectura interna del software. Desarrollé servicios back-end utilizando Java Spring Boot y automatice procesos con scripts de Python. Además, contribuí en proyectos front-end con Angular y participé en diversas tareas del ciclo de vida del software como pruebas de integración y despliegue continuo.',
          },
          third: {
            title: 'Desarrollador Backend',
            date: 'Oct 22 - May 23',
            company: 'Wayru',
            description:
              'Mis responsabilidades incluían desarrollar sistemas back-end para diversos proyectos y garantizar una integración perfecta con el equipo de front-end. Adquirí una amplia experiencia en una variedad de tecnologías y desarrollo de aplicaciones móviles, mientras expandía continuamente mi conocimiento en blockchain e implementación de contratos inteligentes.',
          },
          fourth: {
            title: 'Desarrollador Full Stack',
            date: 'Jul 22 - May 23',
            company: 'JAH insurance brokers corp',
            description:
              'Como Desarrollador Full Stack, trabajé en un proyecto para Pacific Real Estate donde fui responsable de todo el proceso de desarrollo, desde la planificación hasta la implementación. El proyecto incluía dos páginas, la página principal del proyecto y una plataforma para gestionar propiedades, comisiones de usuarios y archivos.',
          },
          fifth: {
            title: 'Desarrollador de Software Junior',
            date: 'Dic 21 - Jun 22',
            company: 'Mi.com.co',
            description:
              'Durante este rol, adquirí experiencia en metodologías de desarrollo de software, herramientas de control de versiones como Git y trabajo en un entorno de equipo ágil. También desarrollé habilidades en depuración, pruebas y resolución de problemas de sistemas complejos, y en colaborar con miembros del equipo para alcanzar los objetivos del proyecto.',
          }
        }
      },
      projects: {
        title: 'Proyectos',
        projects: {
          first: {
            title: 'Flowy',
            description:
              `Proyecto de comercio electrónico, este proyecto se basa en la
              pequeña oferta de sitios en línea para comprar flores en
              países de LATAM, proyecto realizado con Flask, MariaDB
              JavaScript`,
          },
          second: {
            title: 'MediFlow',
            description:
              `El objetivo del proyecto es gestionar turnos
              y asignarlos dentro de un calendario interactivo.
              Proyecto desarrollado para la edición Senasoft 2021,
              con Flask, SqlAlchemy, JavaScript.`
          },
          third: {
            title: 'Mascotas Olarte',
            description:
              `Sistema de Información Web para el centro veterinario
              "Mascotas Olarte" usando HTML5, CSS3, Bootstrap, PHP,
              MySQL; Puedes ver el proyecto completo en el repositorio de GitHub a continuación`
          }
        }
      }
    },
  },
})

createApp(App).use(i18n).mount('#app')

