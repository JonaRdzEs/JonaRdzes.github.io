import { motion } from "motion/react";

interface Props {
  children: React.ReactNode,
}

export function ImageWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
