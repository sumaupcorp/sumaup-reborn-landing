"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { onboarding } from "@/lib/assets";

const INTERVAL = 3800;

export function OnboardingShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % onboarding.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const current = onboarding[index];

  return (
    <div
      className="relative mx-auto w-full max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Halo + blob para dar profundidad */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(51,209,255,0.22),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-5 -top-5 -z-10 size-40 rounded-[42%_58%_63%_37%/45%_38%_62%_55%] bg-gradient-to-br from-brand-sky/30 to-brand-blue/10 blur-2xl"
      />

      {/* Tarjeta con marco degradado (glass) */}
      <div className="glass-card rounded-[1.8rem] bg-gradient-to-br from-brand-sky/50 via-brand-blue/20 to-white/60 p-[3px]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] bg-white">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 90vw, 440px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicadores (la descripción de cada imagen vive en el alt, para SEO) */}
      <div className="mt-5 flex justify-center gap-2">
        {onboarding.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver paso ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index
                ? "w-6 bg-brand-blue"
                : "w-2 bg-border hover:bg-brand-electric/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}
