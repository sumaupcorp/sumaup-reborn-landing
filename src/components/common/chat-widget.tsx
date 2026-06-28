"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  X,
  Send,
  MessageCircle,
  Stethoscope,
  Building2,
  Share2,
} from "lucide-react";
import { suma } from "@/lib/assets";
import { contactChannels } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Message = { from: "suma" | "user"; text: string };

const quickOptions = [
  {
    label: "Hablar por WhatsApp",
    href: contactChannels.whatsappUrl,
    external: true,
    icon: MessageCircle,
  },
  {
    label: "Solicitar demo ERP",
    href: "/contacto",
    external: false,
    icon: Building2,
  },
  {
    label: "Hacer diagnóstico gratis",
    href: "/diagnostico",
    external: false,
    icon: Stethoscope,
  },
  {
    label: "Síguenos en redes",
    href: contactChannels.instagramUrl,
    external: true,
    icon: Share2,
  },
];

const AUTO_REPLY =
  "Por ahora estoy aprendiendo a responder por aquí. Mientras tanto, escríbenos por WhatsApp o elige una de las opciones.";

export function ChatWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "suma",
      text: "¡Hola! Soy Suma, tu asistente. ¿En qué te ayudo hoy?",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "suma", text: AUTO_REPLY },
    ]);
    setInput("");
  }

  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-label="Chat con Suma"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-border bg-white shadow-2xl"
          >
            {/* Encabezado */}
            <div className="flex items-center gap-3 bg-brand-blue px-4 py-3 text-white">
              <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white/15">
                <Image
                  src={suma.soporte.src}
                  alt={suma.soporte.alt}
                  width={48}
                  height={48}
                  className="size-9 object-contain"
                />
                <span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-brand-blue bg-emerald-400" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Suma</p>
                <p className="text-xs text-white/80">Asistente · en línea</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="ml-auto flex size-8 items-center justify-center rounded-full transition-colors hover:bg-white/15"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Mensajes */}
            <div
              ref={scrollRef}
              className="max-h-56 space-y-2 overflow-y-auto bg-brand-soft/50 p-4"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    msg.from === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <p
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3 py-2 text-sm",
                      msg.from === "user"
                        ? "rounded-br-sm bg-brand-blue text-white"
                        : "rounded-bl-sm border border-border bg-white text-brand-ink",
                    )}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Opciones rápidas */}
            <div className="grid gap-2 p-3">
              {quickOptions.map((opt) =>
                opt.external ? (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-electric/50 hover:bg-accent"
                  >
                    <opt.icon className="size-4 text-brand-blue" />
                    {opt.label}
                  </a>
                ) : (
                  <Link
                    key={opt.label}
                    href={opt.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-electric/50 hover:bg-accent"
                  >
                    <opt.icon className="size-4 text-brand-blue" />
                    {opt.label}
                  </Link>
                ),
              )}
            </div>

            {/* Entrada de texto (lista para un modelo futuro) */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje…"
                aria-label="Escribe tu mensaje"
                className="h-10 w-full min-w-0 rounded-xl border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
              />
              <button
                type="submit"
                aria-label="Enviar mensaje"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white transition-colors hover:bg-brand-blue/90"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Botón flotante con Suma */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar chat con Suma" : "Abrir chat con Suma"}
        className="relative flex size-16 items-center justify-center rounded-full border border-border bg-white shadow-xl ring-1 ring-brand-blue/10 transition-transform hover:scale-105"
      >
        {!reduce && !open ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-sky/30"
          />
        ) : null}
        {open ? (
          <X className="size-6 text-brand-ink" />
        ) : (
          <>
            <Image
              src={suma.soporte.src}
              alt={suma.soporte.alt}
              width={64}
              height={64}
              className="size-12 object-contain"
            />
            <span className="absolute top-1 right-1 size-3 rounded-full border-2 border-white bg-emerald-400" />
          </>
        )}
      </button>
    </div>
  );
}
