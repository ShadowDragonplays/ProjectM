import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-slate-950" />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 -bottom-40 -z-10 h-[550px] w-[550px] rounded-full bg-violet-500/20 blur-[140px]"
      />

      {/* Tiny Grid */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-20
          [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          [background-size:45px_45px]
        "
      />
    </>
  );
}