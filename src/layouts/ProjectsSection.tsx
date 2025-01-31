import { useState } from "react";
import { ProjectsSlider } from "./ProjectsSlider";

import type { Project } from "@types";
import type SwiperType from "swiper";
import Code from "@components/icons/Code";

interface Props {
  projects: Project[];
}

export function ProjectsSection({ projects }: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const onActiveIndexChange = (swiper: SwiperType) =>
    setActiveSlideIndex(swiper.activeIndex);

  const currentProject = projects[activeSlideIndex];

  return (
    <div className="w-10/12 lg:w-full m-auto max-w-screen-md">
      <ProjectsSlider projects={projects} onSlideChange={onActiveIndexChange} />
      <h2 className="text-base text-center font-extrabold text-celestial-white my-2 lg:text-lg">
        {currentProject.title}
      </h2>
      <p className="text-sm text-center text-stellar-silver xl:text-base">
        {currentProject.description}
      </p>
      <div className="flex justify-center items-center gap-3 mt-8 flex-wrap sm:relative">
        <a
          href={currentProject.url}
          className="bg-aurora-blue w-32 h-9 font-bold text-sm px-2 py-2 ease-in-out duration-300 hover:bg-darker-blue text-celestial-white flex justify-center items-center rounded-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
        <a
          href={currentProject.sourceCodeUrl}
          className="text-sm text-electric-blue font-bold hover:underline flex justify-center items-center gap-1 transition-all sm:absolute sm:right-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código <Code className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
