import type { ProjectImage } from "@types";

import bookMate from "./assets/projects/book-mate.png";
import eventVoyager from "./assets/projects/event-voyager.png";
import todoApp from "./assets/projects/todo-app.png";
import spaceTourism from "./assets/projects/space-tourism.png";

export const projectImages: Record<string, ProjectImage> = {
  "book-mate": {
    image: bookMate,
    alt: "Captura de pantalla de aplicación BookMate",
  },
  "event-voyager": {
    image: eventVoyager,
    alt: "Captura de pantalla de aplicación Event Voyager"
  },
  "todo-app": {
    image: todoApp,
    alt: "Captura de pantalla de aplicación de tareas"
  },
  "space-tourism": {
    image: spaceTourism,
    alt: "Captura de pantalla de página web de turismo espacial"
  },
};