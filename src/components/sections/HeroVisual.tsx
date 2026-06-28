"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroEcosistema } from "@/lib/assets";

/**
 * Visual principal del hero: ilustración del ecosistema SUMAUP360 (Suma entre
 * la App y la Web SaaS, con cards de métricas) sobre un ambiente animado de
 * gradientes y blobs de color. La imagen ya trae sus propias cards, así que
 * aquí solo aportamos color y movimiento alrededor. Mobile-first, sin overflow.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-2xl lg:max-w-none lg:-mr-10 xl:-mr-20 2xl:-mr-28">
      {/* Ambiente: halo central que respira */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(51,209,255,0.28),transparent_60%)] blur-2xl"
        animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        transition={
          reduce ? {} : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Blobs de color que flotan suavemente */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-6 top-2 -z-10 size-52 rounded-[42%_58%_63%_37%/45%_38%_62%_55%] bg-gradient-to-br from-brand-sky/30 to-brand-blue/15 blur-2xl"
        animate={reduce ? {} : { y: [0, -16, 0], x: [0, 8, 0] }}
        transition={
          reduce ? {} : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        aria-hidden="true"
        className="absolute -left-8 bottom-2 -z-10 size-44 rounded-[56%_44%_38%_62%/52%_46%_54%_48%] bg-gradient-to-br from-brand-blue/18 to-brand-sky/25 blur-2xl"
        animate={reduce ? {} : { y: [0, 14, 0], x: [0, -8, 0] }}
        transition={
          reduce ? {} : { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
        }
      />

      {/* Puntos de luz decorativos */}
      <motion.span
        aria-hidden="true"
        className="absolute right-[12%] top-[6%] -z-10 size-2.5 rounded-full bg-brand-electric/70 shadow-[0_0_14px_3px_rgba(30,143,255,0.5)]"
        animate={reduce ? {} : { opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={reduce ? {} : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute left-[8%] top-[40%] -z-10 size-1.5 rounded-full bg-brand-sky/80"
        animate={reduce ? {} : { opacity: [0.3, 0.9, 0.3] }}
        transition={reduce ? {} : { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Ilustración del ecosistema, con flotación sutil */}
      <motion.div
        animate={reduce ? {} : { y: [0, -10, 0] }}
        transition={
          reduce ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src={heroEcosistema.src}
          alt={heroEcosistema.alt}
          width={1920}
          height={1080}
          priority
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 85vw, (max-width: 1280px) 58vw, 860px"
          className="h-auto w-full object-contain [filter:drop-shadow(0_28px_44px_rgba(11,91,255,0.20))]"
        />
      </motion.div>
    </div>
  );
}
