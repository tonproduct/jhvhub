"use client";

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Repeat, Package, Globe, Award, CheckCircle2, Zap, Clock, Shield, Settings, Wrench, MessageCircle, Phone, Pill, Sparkles, Box, Star, Sparkle, Package2, Flame, Scissors, Droplet } from "lucide-react";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";
import { ComoTrabalhamos } from "@/components/ComoTrabalhamos";
import { motion, AnimatePresence } from "framer-motion";
type Solution = "selagem" | "corte" | "componentes" | null;

// ── Portrait Carousel ──────────────────────────────────────────
const PORTRAIT_IMGS = [
  "/produtos/flow-pack/MORDENTE VERTICAL.png",
  "/produtos/flow-pack/zig-zag-01.png",
  "/produtos/flow-pack/ROLO DE SELAGEM RECARTILHADO.png",
  "/produtos/flow-pack/FACA DENTADA.png",
  "/produtos/flow-pack/mordente-selagem-01.png",
  "/produtos/flow-pack/faca-zig-zag-sache-01.png",
];

const CAROUSEL_MS = 4000;
const SLIDE_W = 240; // px
const SLIDE_H = 320; // px — 3:4 portrait
const SLIDE_GAP = 18; // px
const SVG_R = 18;
const SVG_CIRC = 2 * Math.PI * SVG_R;

// Versão compacta para a coluna direita do hero
const HERO_SLIDE_W = 280;
const HERO_SLIDE_H = 380;

function HeroPortraitCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % PORTRAIT_IMGS.length);
    }, CAROUSEL_MS);
    return () => clearInterval(t);
  }, []);

  const trackX = -(current * (HERO_SLIDE_W + SLIDE_GAP));

  return (
    <div
      style={{
        width: HERO_SLIDE_W * 1.6,
        maskImage: "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
      }}
    >
      <div className="overflow-hidden" style={{ paddingLeft: `calc(50% - ${HERO_SLIDE_W / 2}px)` }}>
        <motion.div
          className="flex"
          style={{ gap: SLIDE_GAP }}
          animate={{ x: trackX }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {PORTRAIT_IMGS.map((src, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{ width: HERO_SLIDE_W, height: HERO_SLIDE_H }}
              animate={{ opacity: i === current ? 1 : 0.3, scale: i === current ? 1 : 0.88 }}
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={() => setCurrent(i)}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PortraitCarousel() {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % PORTRAIT_IMGS.length);
      setTick((k) => k + 1);
    }, CAROUSEL_MS);
    return () => clearInterval(t);
  }, []);

  // padding lateral faz o slide 0 começar centralizado;
  // translateX desloca o track para centralizar o slide ativo
  const trackX = -(current * (SLIDE_W + SLIDE_GAP));

  return (
    <div>
      {/* viewport com padding que centraliza o primeiro slide */}
      <div
        className="overflow-hidden"
        style={{ paddingLeft: `calc(50% - ${SLIDE_W / 2}px)` }}
      >
        <motion.div
          className="flex"
          style={{ gap: SLIDE_GAP }}
          animate={{ x: trackX }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {PORTRAIT_IMGS.map((src, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
              style={{ width: SLIDE_W, height: SLIDE_H }}
              animate={{
                opacity: i === current ? 1 : 0.35,
                scale: i === current ? 1 : 0.9,
              }}
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={() => { setCurrent(i); setTick((k) => k + 1); }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Spinner circular */}
      <div className="flex justify-center mt-7">
        <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden>
          <circle cx="22" cy="22" r={SVG_R} fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
          <g transform="rotate(-90 22 22)">
            <motion.circle
              key={tick}
              cx="22" cy="22" r={SVG_R}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={SVG_CIRC}
              initial={{ strokeDashoffset: SVG_CIRC }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: CAROUSEL_MS / 1000, ease: "linear" }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
const HomeContent = () => {
  const [solutionStep, setSolutionStep] = useState<1 | 2>(1);
  const [selectedSolution, setSelectedSolution] = useState<Solution>(null);
const handleSolutionSelect = (solution: Solution) => {
    setSelectedSolution(solution);
    setSolutionStep(2);
  };
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section — 2 colunas: texto | carrossel retrato */}
      <section className="relative text-white px-6 md:px-24" style={{ backgroundColor: 'hsl(var(--hero-bg))' }}>
        {/* Background clipped separadamente */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            <img src="/hero-packaging.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(var(--hero-bg) / 0.95) 40%, hsl(var(--hero-bg) / 0.5))' }} />
        </div>

        <div className="relative max-w-[1340px] mx-auto">
          <div className="grid lg:grid-cols-[60%_1fr] gap-12 items-center py-24 md:py-28">

            {/* ── Coluna esquerda: texto ── */}
            <div>
              <FadeIn variant="up" delay={0.1}>
                <h1 className="text-[28px] md:text-[52px] font-bold mb-6 leading-tight text-white">
                  Ferramentas de precisão<br />para embaladoras.
                  <span className="block text-primary">Mantenha seus Produtos<br />com uma Selagem Perfeita</span>
                </h1>
              </FadeIn>

              <FadeIn variant="up" delay={0.3}>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Fabricação nacional de ferramentas de selagem e corte para embaladoras Flow Pack, Verticais e Sachê e outras. Qualidade com padrões internacionais, prazos reduzidos com custos acessíveis para mercado Brasileiro.
                </p>
              </FadeIn>

              <FadeIn variant="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Button size="lg" className="text-lg w-full">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white/30 text-white hover:bg-background hover:text-foreground w-full">
                      Ver Catálogo
                    </Button>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            {/* ── Coluna direita: carrossel retrato ── */}
            <FadeIn variant="right" delay={0.35}>
              <div className="hidden lg:flex justify-end">
                <HeroPortraitCarousel />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SEÇÃO 1: NAVEGAÇÃO POR SOLUÇÃO */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-[1340px] mx-auto">
          <FadeIn variant="up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Encontre a Solução Certa</h2>
            <p className="text-lg text-gray-600 mb-12 text-left">Selecione o tipo de componente que você precisa</p>
          </FadeIn>

          {solutionStep === 1 && <div className="animate-fade-in">
              <h3 className="text-xl font-medium text-gray-900 mb-8 text-left flex items-center gap-3 text-gray-600 mb-6 pb-6 border-b border-gray-200">
                O que você está procurando?
              </h3>

              <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Selagem */}
                <StaggerItem>
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300" onClick={() => handleSolutionSelect("selagem")}>
                    <img src="/fotos/novas/WhatsApp Image 2026-04-22 at 08.28.32.jpeg" alt="Soluções de Selagem" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                        FERRAMENTAS DE SELAGEM
                      </span>
                      <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 2: Corte */}
                <StaggerItem>
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300" onClick={() => handleSolutionSelect("corte")}>
                    <img src="/fotos/novas/WhatsApp Image 2026-04-22 at 08.28.332211.jpeg" alt="Soluções de Corte" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300 mx-0 px-0 pr-0 pl-0 mr-[19px]">
                        FERRAMENTAS DE CORTE
                      </span>
                      <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 3: Componentes */}
                <StaggerItem>
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300" onClick={() => handleSolutionSelect("componentes")}>
                    <img src="/fotos/novas/WhatsApp Image 2026-04-22 at 08.28.3312.jpeg" alt="Componentes e Acessórios" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                        COMPONENTES PARA MÁQUINAS
                      </span>
                      <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </StaggerItem>
              </StaggerChildren>
            </div>}

          {solutionStep === 2 && <div className="animate-fade-in">
              <div className="flex items-center gap-3 text-gray-600 mb-6 pb-6 border-b border-gray-200 cursor-pointer hover:text-gray-900 transition-colors" onClick={() => {
            setSolutionStep(1);
            setSelectedSolution(null);
          }}>
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold text-gray-900 text-xl">
                  {selectedSolution !== "componentes" ? "Para qual equipamento?" : "Escolha a categoria:"}
                </span>
              </div>

              <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedSolution !== "componentes" ? <>
                    <StaggerItem>
                      <Link href={`/flow-pack#section-${selectedSolution}`}>
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                          <img src="/fotos/novas/flow.jpeg" alt="Flow Pack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                              PARA FLOW PACK
                            </span>
                            <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>

                    <StaggerItem>
                      <Link href={`/verticais#section-${selectedSolution}`}>
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                          <img src="/hero-verticais.png" alt="Vertical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                              PARA VERTICAL
                            </span>
                            <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>

                    <StaggerItem>
                      <Link href={`/sache#section-${selectedSolution}`}>
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                          <img src="/hero-sache.png" alt="Sachê" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                              PARA SACHÊ
                            </span>
                            <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  </> : <>
                    <StaggerItem>
                      <Link href="/componentes/aquecimento">
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 bg-gray-100">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Flame className="w-20 h-20 text-gray-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                              ELEMENTOS DE AQUECIMENTO
                            </span>
                            <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>

                    <StaggerItem>
                      <Link href="/componentes/fixacao">
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 bg-gray-100">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Settings className="w-20 h-20 text-gray-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                              FIXAÇÃO E ALINHAMENTO
                            </span>
                            <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>

                    <StaggerItem>
                      <Link href="/componentes/acessorios">
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 bg-gray-100">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Package className="w-20 h-20 text-gray-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                            <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                              ACESSÓRIOS
                            </span>
                            <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  </>}
              </StaggerChildren>
            </div>}
        </div>
      </section>

      {/* SEÇÃO 2: NAVEGAÇÃO POR EQUIPAMENTO - COM BACKGROUND */}
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn variant="up">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Conheça Todas as Soluções para Sua Máquina
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Selecione seu equipamento e veja tudo que oferecemos
            </p>
          </FadeIn>

          <StaggerChildren className="flex flex-col gap-8" staggerDelay={0.15}>
            {/* Card 1: Flow Pack */}
            <StaggerItem>
              <Link href="/flow-pack">
                <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                  <img src="/fotos/novas/flow.jpeg" alt="Flow Pack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 group-hover:from-gray-900/90 group-hover:to-gray-900/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        FLOW PACK
                      </h3>
                      <p className="text-gray-200 text-lg group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        Soluções completas para máquinas horizontais de alta velocidade
                      </p>
                    </div>
                    <ArrowRight className="w-12 h-12 text-white flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* Card 2: Vertical */}
            <StaggerItem>
              <Link href="/verticais">
                <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                  <img src="/hero-verticais.png" alt="Vertical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 group-hover:from-gray-900/90 group-hover:to-gray-900/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        VERTICAL
                      </h3>
                      <p className="text-gray-200 text-lg group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        Componentes para sistemas de envase vertical com dosagem precisa
                      </p>
                    </div>
                    <ArrowRight className="w-12 h-12 text-white flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </StaggerItem>

            {/* Card 3: Sachê */}
            <StaggerItem>
              <Link href="/sache">
                <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                  <img src="/hero-sache.png" alt="Sachê" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 group-hover:from-gray-900/90 group-hover:to-gray-900/60 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        SACHÊ
                      </h3>
                      <p className="text-gray-200 text-lg group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        Rolos de selagem e facas para máquinas contínuas e intermitentes
                      </p>
                    </div>
                    <ArrowRight className="w-12 h-12 text-white flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      <ComoTrabalhamos />



      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div>
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de uma Peça Específica ou Solução Personalizada?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe técnica está pronta para atender você com soluções sob medida
            </p>
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <a href="https://wa.me/5519981791472" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Falar com Especialista
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default HomeContent;
