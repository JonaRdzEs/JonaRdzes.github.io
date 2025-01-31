import { motion } from "motion/react";
import type { Experience } from "@types";

interface Props extends Experience {
  delay: number,
}

export default function ExperienceCard({title, description, link, delay = 1 }: Props) {
  return (
    <motion.article
      className="bg-cosmic-silver/25 rounded-md p-4 max-w-screen-md"
      initial={{
        opacity: 0,
        translateX: "-50px",
        
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileInView={{
        opacity: 1,
        translateX: "0px"
      }}
      viewport={{
        once: true,
      }}
    >
      <h4 className="text-base font-bold text-celestial-white mb-2 xl:text-lg">
        {title}
      </h4>
      <p className="text-sm text-stellar-silver xl:text-base">
        {description}
        {link && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-blue font-semibold underline"
            href={link.url}
          >
            {link.text}
          </a>
        )}
      </p>
    </motion.article>
  );
}
