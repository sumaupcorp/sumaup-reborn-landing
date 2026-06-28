"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { SumaFigure } from "@/components/common/suma-figure";
import { suma } from "@/lib/assets";

const rubros = [
  "Restaurante",
  "Bodega",
  "Minimarket",
  "Ferretería",
  "Belleza",
  "Lavandería",
  "Otro",
];

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  empresa: z.string().min(2, "Ingresa el nombre de tu empresa"),
  rubro: z.string().min(1, "Selecciona tu rubro"),
  telefono: z
    .string()
    .min(6, "Ingresa un teléfono válido")
    .regex(/^[0-9+()\s-]+$/, "Solo números y símbolos de teléfono"),
  correo: z.string().email("Ingresa un correo válido"),
  mensaje: z.string().max(500, "Máximo 500 caracteres").optional(),
  // Honeypot anti-spam: debe quedar vacío.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rubro: "", website: "" },
  });

  async function onSubmit(values: FormValues) {
    if (values.website) return; // bot detectado
    setStatus("loading");
    try {
      // API futura: reemplazar por fetch("/api/demo", { method: "POST", ... }).
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
          asset={suma.confirmando}
          glow="soft"
          className="mx-auto w-28"
          sizes="112px"
        />
        <h3 className="mt-4 text-xl font-bold text-brand-ink">
          ¡Solicitud enviada!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Gracias por tu interés. Nuestro equipo te contactará muy pronto para
          coordinar tu demo del ERP.
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
      <h3 className="text-xl font-bold text-brand-ink">Solicitar demo ERP</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Cuéntanos sobre tu negocio y te mostramos el ERP en acción.
      </p>

      <div className="mt-6 grid gap-4">
        <FormField label="Nombre completo" htmlFor="nombre" error={errors.nombre?.message}>
          <Input id="nombre" className="h-11" {...register("nombre")} />
        </FormField>

        <FormField label="Empresa" htmlFor="empresa" error={errors.empresa?.message}>
          <Input id="empresa" className="h-11" {...register("empresa")} />
        </FormField>

        <FormField label="Rubro" htmlFor="rubro" error={errors.rubro?.message}>
          <Controller
            control={control}
            name="rubro"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="rubro" className="h-11 w-full">
                  <SelectValue placeholder="Selecciona tu rubro" />
                </SelectTrigger>
                <SelectContent>
                  {rubros.map((rubro) => (
                    <SelectItem key={rubro} value={rubro}>
                      {rubro}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Teléfono" htmlFor="telefono" error={errors.telefono?.message}>
            <Input id="telefono" type="tel" className="h-11" {...register("telefono")} />
          </FormField>
          <FormField label="Correo" htmlFor="correo" error={errors.correo?.message}>
            <Input id="correo" type="email" className="h-11" {...register("correo")} />
          </FormField>
        </div>

        <FormField
          label="Mensaje"
          htmlFor="mensaje"
          optional
          error={errors.mensaje?.message}
        >
          <Textarea id="mensaje" rows={4} {...register("mensaje")} />
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
            No pudimos enviar tu solicitud. Inténtalo nuevamente.
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
              <CheckCircle2 className="size-5" />
              Solicitar demo
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
