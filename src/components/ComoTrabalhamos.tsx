"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Settings, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

gsap.registerPlugin(ScrollTrigger);

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

export function ComoTrabalhamos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        // Pino da seção — altura total = 3 "telas" de scroll
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            // Divide o progresso em 3 faixas
            const step = Math.min(2, Math.floor(self.progress * 3));
            setActiveStep(step);
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <div className="bg-slate-950">
    <section ref={sectionRef} className="py-24 bg-slate-950">
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

        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((item, idx) => {
            const isActive = idx === activeStep;
            const isPast = idx < activeStep;

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
                        : isPast
                        ? "bg-slate-700 border-slate-600 text-slate-300"
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
                    className="h-full bg-white transition-all duration-700 ease-out"
                    style={{ width: isActive ? "100%" : isPast ? "100%" : "0%" }}
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
