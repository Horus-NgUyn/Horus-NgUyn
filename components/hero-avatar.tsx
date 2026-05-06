"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

export function HeroAvatar() {
  const { resolvedTheme } = useTheme();
  const avatarSrc = resolvedTheme === "dark" ? "/avatar-dark.png" : "/avatar-light.png";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl border border-[var(--line)]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={avatarSrc}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={avatarSrc}
            alt="Nguyen Van Uy Avatar"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
