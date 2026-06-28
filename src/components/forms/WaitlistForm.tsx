"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { SumaFigure } from "@/components/common/suma-figure";
import { suma } from "@/lib/assets";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  correo: z.string().email("Ingresa un correo válido"),
  telefono: z
    .string()
    .min(6, "Ingresa un teléfono válido")
    .regex(/^[0-9+()\s-]+$/, "Solo números y símbolos de teléfono"),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { website: "" },
  });

  async function onSubmit(values: FormValues) {
    if (values.website) return;
    setStatus("loading");
    try {
      // API futura: reemplazar por fetch("/api/waitlist", { method: "POST", ... }).
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-white p-8 text-center shadow-sm">
        <SumaFigure
          asset={suma.celebrando}
          glow="soft"
          className="mx-auto w-28"
          sizes="112px"
        />
        <h3 className="mt-4 text-xl font-bold text-brand-ink">
          ¡Estás en la lista!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Te avisaremos apenas la App esté disponible para ti.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <h3 className="text-xl font-bold text-brand-ink">Lista de espera App</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Déjanos tus datos y serás de los primeros en usar la App.
      </p>

      <div className="mt-6 grid gap-4">
        <FormField label="Nombre completo" htmlFor="w-nombre" error={errors.nombre?.message}>
          <Input id="w-nombre" className="h-11" {...register("nombre")} />
        </FormField>
        <FormField label="Correo" htmlFor="w-correo" error={errors.correo?.message}>
          <Input id="w-correo" type="email" className="h-11" {...register("correo")} />
        </FormField>
        <FormField label="Teléfono" htmlFor="w-telefono" error={errors.telefono?.message}>
          <Input id="w-telefono" type="tel" className="h-11" {...register("telefono")} />
        </FormField>

        {/* Honeypot oculto */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("website")}
        />

        {status === "error" ? (
          <p className="text-sm font-medium text-destructive">
            No pudimos registrarte. Inténtalo nuevamente.
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 w-full bg-brand-blue text-base font-semibold hover:bg-brand-blue/90"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="size-5" />
              Unirme a la lista
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
