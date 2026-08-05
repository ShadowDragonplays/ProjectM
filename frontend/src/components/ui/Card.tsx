import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        relative
        w-[430px]
        overflow-hidden
        rounded-[28px]

        border
        border-white/10

        bg-white/5

        backdrop-blur-3xl

        shadow-[0_20px_80px_rgba(0,0,0,.45)]

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/10
        before:via-transparent
        before:to-transparent
        before:pointer-events-none
      "
    >
      {/* Top Highlight */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5" />

      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}