"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiagnosisIntro } from "@/components/diagnosis/DiagnosisIntro";
import { DiagnosisQuestion } from "@/components/diagnosis/DiagnosisQuestion";
import { DiagnosisProgress } from "@/components/diagnosis/DiagnosisProgress";
import { SumaFigure } from "@/components/common/suma-figure";
import { suma } from "@/lib/assets";
import {
  TOTAL_STEPS,
  segmentQuestion,
  getQuestionsForSegment,
  segmentFromOption,
} from "@/lib/diagnosis";
import {
  loadDiagnosis,
  saveDiagnosis,
  markSkipped,
} from "@/lib/storage";
import type { DiagnosisAnswers, Segment } from "@/types";

export function DiagnosisFlow() {
  const router = useRouter();
  const reduce = useReducedMotion();

  const [phase, setPhase] = useState<"intro" | "questions">("intro");
  const [step, setStep] = useState(0);
  const [segment, setSegment] = useState<Segment>("UNKNOWN");
  const [answers, setAnswers] = useState<DiagnosisAnswers>({});

  // Recupera un diagnóstico en progreso desde localStorage.
  useEffect(() => {
    const saved = loadDiagnosis();
    if (saved.status === "IN_PROGRESS" && saved.segment !== "UNKNOWN") {
      setSegment(saved.segment);
      setAnswers(saved.answers);
      setStep(saved.step);
      setPhase("questions");
    }
  }, []);

  const branched = getQuestionsForSegment(segment);
  const currentQuestion = step === 0 ? segmentQuestion : branched[step - 1];
  const currentValue = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;

  function persist(next: {
    segment: Segment;
    step: number;
    answers: DiagnosisAnswers;
  }) {
    saveDiagnosis({
      status: "IN_PROGRESS",
      segment: next.segment,
      step: next.step,
      answers: next.answers,
      result: null,
      updatedAt: 0,
    });
  }

  function handleSelect(value: string) {
    if (step === 0) {
      const seg = segmentFromOption(value);
      const next = { [segmentQuestion.id]: value };
      setSegment(seg);
      setAnswers(next);
      persist({ segment: seg, step, answers: next });
    } else if (currentQuestion) {
      const next = { ...answers, [currentQuestion.id]: value };
      setAnswers(next);
      persist({ segment, step, answers: next });
    }
  }

  function goNext() {
    if (!currentValue) return;
    if (step < TOTAL_STEPS - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      persist({ segment, step: nextStep, answers });
    } else {
      // Última pregunta respondida: a procesar.
      persist({ segment, step, answers });
      router.push("/diagnostico/procesando");
    }
  }

  function goBack() {
    if (step === 0) {
      setPhase("intro");
    } else {
      setStep(step - 1);
    }
  }

  function handleSkip() {
    markSkipped();
    router.push("/home");
  }

  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
        transition: { duration: 0.3, ease: "easeOut" as const },
      };

  if (phase === "intro") {
    return (
      <div className="mx-auto w-full max-w-lg">
        <div className="glass-panel p-6 sm:p-10">
          <DiagnosisIntro
            onStart={() => setPhase("questions")}
            onSkip={handleSkip}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-10">
        {/* Panel de contexto (desktop): Suma + progreso */}
        <aside className="hidden lg:block lg:sticky lg:top-24">
          <SumaFigure
            asset={suma.diagnostico}
            glow="cyan"
            className="w-40"
            sizes="180px"
          />
          <p className="mt-5 text-xs font-semibold tracking-wide text-brand-blue uppercase">
            Diagnóstico tributario
          </p>
          <h2 className="mt-1 text-2xl font-bold text-balance text-brand-ink">
            Cuéntanos sobre tu actividad
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Son 5 preguntas rápidas. Tus respuestas se guardan automáticamente.
          </p>
          <div className="mt-7">
            <DiagnosisProgress current={step + 1} total={TOTAL_STEPS} />
          </div>
        </aside>

        {/* Card de la pregunta */}
        <div className="glass-panel flex flex-col p-6 sm:p-8">
          {/* Progreso compacto (solo móvil/tablet) */}
          <div className="lg:hidden">
            <DiagnosisProgress current={step + 1} total={TOTAL_STEPS} />
          </div>

          <div className="mt-5 min-h-[19rem] sm:min-h-[20rem] lg:mt-0">
            <AnimatePresence mode="wait">
              {currentQuestion ? (
                <motion.div key={`${segment}-${step}`} {...motionProps}>
                  <DiagnosisQuestion
                    question={currentQuestion}
                    value={currentValue}
                    onSelect={handleSelect}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-5">
            <Button
              onClick={goBack}
              variant="ghost"
              className="h-11 px-3 text-muted-foreground hover:text-brand-ink"
            >
              <ArrowLeft className="size-4" />
              Atrás
            </Button>
            <Button
              onClick={goNext}
              disabled={!currentValue}
              className="h-11 flex-1 bg-brand-blue px-6 font-semibold hover:bg-brand-blue/90 sm:flex-initial sm:px-8"
            >
              {step < TOTAL_STEPS - 1 ? "Continuar" : "Ver resultado"}
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={handleSkip}
            className="mt-4 w-full text-center text-xs font-medium text-muted-foreground transition-colors hover:text-brand-ink"
          >
            Saltar por ahora
          </button>
        </div>
      </div>
    </div>
  );
}
