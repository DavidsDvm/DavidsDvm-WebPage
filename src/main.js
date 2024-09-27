import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/css/index.css'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en: {
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
        bigtextOne: 'Ponte en',
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

