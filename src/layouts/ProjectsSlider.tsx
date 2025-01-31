import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import type SwiperType from "swiper";
import type { Project } from "@types";

import { projectImages } from "../constants";

import "swiper/css";
import "swiper/css/effect-cards";


type Props = {
  projects: Project[];
  onSlideChange: (swiper: SwiperType) => void;
};

export function ProjectsSlider({ projects, onSlideChange = () => {} }: Props) {
  return (
    <Swiper
      effect="cards"
      grabCursor
      modules={[EffectCards]}
      onActiveIndexChange={onSlideChange}
    >
      {projects.map((project) => (
        <SwiperSlide
          key={project.url}
          className="w-full  mx-auto max-w-screen-md"
        >
          <img
            loading="lazy"
            src={projectImages[project.slug].image.src}
            className="w-full h-full rounded-sm object-contain"
            alt={projectImages[project.slug].alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
