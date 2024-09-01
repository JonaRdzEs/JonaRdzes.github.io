import type { Project, Experiences } from "@types";

export const experience: Experiences[] = [
  {
    period: "Febrero 2022 - Presente",
    experiences: [
      {
        title: "Desarrollo de aplicaciones",
        description:
          "Contribuí al desarrollo de una aplicación utilizando arquitectura de microfrontends, donde diseñé interfaces de usuario basadas en Figma, gestioné el estado global con Zustand, e implementé la internacionalización con React-intl.",
        icon: "/images/planets/uranus.svg",  
      },
      {
        title: "Creación de componentes",
        description:
          "Desarrollé y probé componentes reutilizables en ReactJS para una librería privada, garantizando su calidad y funcionalidad mediante pruebas rigurosas con Jest y React Testing Library.",
          icon: "/images/planets/saturn.svg",  
      },
      {
        title: "Desarrollo de API Rest",
        description:
          "Desarrollé e implementé endpoints API REST para operaciones CRUD y autenticación utilizando Express y JWT, integrando y consumiendo estas API en JavaScript para asegurar una comunicación eficiente entre el frontend y el backend.",
          icon: "/images/planets/jupiter.svg",  
      },
      {
        title: "Desarrollo de extensión web",
        description:
          "Contribuí al desarrollo de una extensión web diseñada para ayudar a equipos de marketing a crear campañas de correo electrónico utilizando IA. Participé activamente en el proceso de diseño y en la implementación de funcionalidades clave, asegurando una experiencia de usuario intuitiva y efectiva.",
          icon: "/images/planets/mars.svg",  
      },
      {
        title: "Colaboración en código",
        description:
          "Resolví bugs y refactoricé código para optimizar la eficiencia y el mantenimiento de las aplicaciones, mientras colaboraba activamente en la contribución y revisión de código con Git, asegurando la calidad y coherencia del proyecto.",
          icon: "/images/planets/moon.svg",  
      },
    ],
  },
  {
    period: "Agosto 2021 - Febrero 2022",
    experiences: [
      {
        title: "Prácticas profesionales",
        description:
          "Durante mis prácticas profesionales en FullStack, colaboré en la creación de historias de usuario y participé activamente en el desarrollo de un proyecto interno. Trabajé en estrecha colaboración con los equipos de diseño y backend para asegurar la entrega exitosa de interfaces de usuario, utilizando React como la tecnología principal en el frontend. Esta experiencia me permitió practicar una arquitectura basada en componentes reutilizables y manejar el estado global de la aplicación con Redux.",
          icon: "/images/planets/earth.svg",  
      },
    ]
  }
];

export const projects: Project[] = [
  {
    image: "/images/projects/book-mate.png",
    title: "BookMate",
    description: "Aplicación web para registrar sesiones de tecnología, desarrollada con React y TypeScript, utilizando Tailwind para el diseño y Redux para la gestión eficiente del estado global.",
    sourceCodeUrl: "",
    url: ""
  },
  {
    image: "/images/projects/event-voyager.png",
    title: "Event Voyager",
    description: "Aplicación web para registrar eventos en distintos países, desarrollada con Next.js 12 para optimización y rendimiento, y estilizada con Tailwind para un diseño moderno y adaptable.",
    sourceCodeUrl: "",
    url: ""
  },
  {
    image: "/images/projects/todo-app.png",
    title: "Todo app",
    description: "Aplicación de gestión de tareas inspirada en el reto de Frontend Mentor, desarrollada con React y TypeScript, utilizando Tailwind para el diseño y Zustand para una gestión de estado global eficiente.",
    sourceCodeUrl: "",
    url: ""
  }
]
