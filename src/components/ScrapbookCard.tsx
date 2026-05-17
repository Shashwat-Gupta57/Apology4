import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface ScrapbookCardProps {
  children: ReactNode;
  delay?: number;
  rotate?: number;
  className?: string;
  onClick?: () => void;
  isTrembling?: boolean;
  isFrantic?: boolean;
}

export function ScrapbookCard({ children, delay = 0, rotate = 0, className, onClick, isTrembling = false, isFrantic = false }: ScrapbookCardProps) {
  const tremblingAnimation = isTrembling ? {
    x: [-1, 2, -2, 1, 0, -1, 1],
    y: [1, -1, 2, -2, 0, 1, -1],
    rotate: [rotate - 0.5, rotate + 0.5, rotate - 1, rotate + 1, rotate],
    transition: {
      repeat: Infinity,
      duration: isFrantic ? 0.15 : 0.4,
      repeatType: "mirror" as const,
      ease: "linear"
    }
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate, ...tremblingAnimation }}
      whileHover={!isTrembling ? { scale: 1.02, rotate: rotate === 0 ? 1 : 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      className={cn(
        "bg-white/80 backdrop-blur-md border border-white p-6 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(255,217,204,0.5)]",
        className,
        { "cursor-pointer": !!onClick }
      )}
    >
      {children}
    </motion.div>
  );
}
