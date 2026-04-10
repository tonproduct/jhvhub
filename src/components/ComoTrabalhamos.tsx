"use client";

import { useRef, useState, useEffect } from "react";
import { MessageCircle, Settings, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    step: "01",
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Diagnóstico",
    description:
      "Você nos descreve a peça necessária ou o problema na linha. Trabalhamos com informações técnicas reais — modelo de máquina, filme, temperatura, velocidade.",
    tag: "Contato inicial",
  },
  {
    step: "02",
    icon: <Settings className="w-5 h-5" />,
    title: "Solução Técnica",
    description:
      "Nossa equipe analisa e indica a ferramenta ideal — ou desenvolve uma solução customizada quando o catálogo padrão não resolve.",
    tag: "Engenharia aplicada",
  },
  {
    step: "03",
    icon: <Zap className="w-5 h-5" />,
    title: "Entrega e Suporte",
    description:
      "Fabricação nacional e estoque local garantem prazos curtos. Acompanhamos a instalação e estamos disponíveis para ajustes pós-entrega.",
    tag: "Produção e pós-venda",
  },
];

// Durations in ms
const STEP_DURATION = 2200;   // time each step stays active
const PAUSE_DURATION = 2000;  // time all 3 are visible before reset
const RESET_DELAY = 600;      // brief pause before restarting

export function ComoTrabalhamos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cycleRef = useRef(0);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const runCycle = () => {
    // Step 0 is always visible on mount
    // Advance to step 1 after STEP_DURATION
    timerRef.current = setTimeout(() => {
      setActiveStep(1);
      timerRef.current = setTimeout(() => {
        setActiveStep(2);
        // All 3 visible — pause, then reset
        timerRef.current = setTimeout(() => {
          setPaused(true);
          timerRef.current = setTimeout(() => {
            setActiveStep(0);
            setPaused(false);
            cycleRef.current += 1;
          }, RESET_DELAY);
        }, PAUSE_DURATION);
      }, STEP_DURATION);
    }, STEP_DURATION);
  };

  // Start cycle on mount, restart whenever cycleRef changes
  useEffect(() => {
    runCycle();
    return clearTimer;
  }, [cycleRef.current]);

  // Hover handlers — pause on hover, resume on leave
  const handleMouseEnter = () => {
    clearTimer();
  };

  const handleMouseLeave = () => {
    // Resume from current step
    if (activeStep === 2) {
      timerRef.current = setTimeout(() => {
        setPaused(true);
        timerRef.current = setTimeout(() => {
          setActiveStep(0);
          setPaused(false);
          cycleRef.current += 1;
        }, RESET_DELAY);
      }, PAUSE_DURATION);
    } else if (activeStep === 1) {
      timerRef.current = setTimeout(() => {
        setActiveStep(2);
        timerRef.current = setTimeout(() => {
          setPaused(true);
          timerRef.current = setTimeout(() => {
            setActiveStep(0);
            setPaused(false);
            cycleRef.current += 1;
          }, RESET_DELAY);
        }, PAUSE_DURATION);
      }, STEP_DURATION);
    } else {
      runCycle();
    }
  };

  return (
    <div className="bg-[#01040e]">
      <section ref={sectionRef} className="py-24 bg-[#01040e]">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn variant="up">
            <div className="mb-16">
              <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-3">
                Nosso Processo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-xl">
                Como trabalhamos <br className="hidden md:block" />
                com você
              </h2>
            </div>
          </FadeIn>

          <div
            className="grid md:grid-cols-3 gap-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {steps.map((item, idx) => {
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={idx}
                  className="relative px-8 py-10 transition-all duration-500"
                >
                  {/* ícone + número */}
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${
                        isActive
                          ? "bg-white border-white text-slate-900 shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                          : "bg-slate-800 border-slate-700 text-slate-500"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`text-xs font-mono tracking-widest transition-colors duration-500 ${
                        isActive ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* tag */}
                  <span
                    className={`inline-block text-xs font-medium tracking-wide uppercase mb-3 border rounded-full px-3 py-1 transition-all duration-500 ${
                      isActive
                        ? "border-slate-400 text-slate-300"
                        : "border-slate-700 text-slate-600"
                    }`}
                  >
                    {item.tag}
                  </span>

                  {/* título */}
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* descrição */}
                  <p
                    className={`text-sm leading-relaxed transition-all duration-500 ${
                      isActive ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* barra de progresso inferior */}
                  <div className="mt-8 h-px bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-white transition-all ease-out"
                      style={{
                        width: isActive ? "100%" : "0%",
                        transitionDuration: isCurrent ? `${STEP_DURATION}ms` : "500ms",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
