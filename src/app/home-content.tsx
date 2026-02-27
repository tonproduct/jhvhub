"use client";

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Repeat, Package, Globe, Award, CheckCircle2, Zap, Clock, Shield, Settings, Wrench, MessageCircle, Phone, Pill, Sparkles, Box, Star, Sparkle, Package2, Flame, Scissors, Droplet } from "lucide-react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";

type Solution = "selagem" | "corte" | "componentes" | null;
const HomeContent = () => {
  const [solutionStep, setSolutionStep] = useState<1 | 2>(1);
  const [selectedSolution, setSelectedSolution] = useState<Solution>(null);
  const {
    ref: statsRef,
    inView: statsInView
  } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const handleSolutionSelect = (solution: Solution) => {
    setSelectedSolution(solution);
    setSolutionStep(2);
  };
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: 'hsl(var(--hero-bg))' }}>
        <div className="absolute inset-0 opacity-40">
          <img src="/hero-packaging.jpg" alt="Packaging machinery" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(var(--hero-bg) / 0.85), hsl(var(--hero-bg) / 0.60))' }}></div>

        <div className="container relative mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <FadeIn variant="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">Ferramentas de precisão para embaladoras.<span className="block text-primary">Mantenha seus Produtos com uma Selagem Perfeita</span></h1>
            </FadeIn>

            <FadeIn variant="up" delay={0.3}>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Fabricação nacional de ferramentas de selagem e corte para embaladoras Flow Pack, Verticais e Sachê e outras. Qualidade com padrões internacionais, prazos reduzidos com custos acessíveis para mercado Brasileiro.</p>
            </FadeIn>

            <FadeIn variant="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white/30 text-white hover:bg-background hover:text-foreground">
                  Ver Catálogo
                </Button>
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
                    <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660647/Firefly_9_o31dqx.jpg" alt="Soluções de Selagem" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                        SOLUÇÕES DE SELAGEM
                      </span>
                      <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 2: Corte */}
                <StaggerItem>
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300" onClick={() => handleSolutionSelect("corte")}>
                    <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660645/Firefly_10_exmprq.jpg" alt="Soluções de Corte" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300 mx-0 px-0 pr-0 pl-0 mr-[19px]">
                        SOLUÇÕES DE CORTE
                      </span>
                      <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </StaggerItem>

                {/* Card 3: Componentes */}
                <StaggerItem>
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300" onClick={() => handleSolutionSelect("componentes")}>
                    <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660644/Firefly_11_ztopy3.jpg" alt="Componentes e Acessórios" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <span className="font-semibold text-lg text-white group-hover:translate-x-1 transition-transform duration-300">
                        COMPONENTES E ACESSÓRIOS
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
                          <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_Complete_horizontal_flow_pack_packaging_machine_full_side_view_stainless_steel_HFFS_89014_bijmno.jpg" alt="Flow Pack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                      <Link href={`/vffs#section-${selectedSolution}`}>
                        <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                          <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_6_act83n.jpg" alt="Vertical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                          <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_Complete_sachet_packaging_machine_full_side_view_showing_height_stainless_steel_mul_182693_uevfys.png" alt="Sachê" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                  <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_Complete_horizontal_flow_pack_packaging_machine_full_side_view_stainless_steel_HFFS_89014_bijmno.jpg" alt="Flow Pack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
              <Link href="/vertical">
                <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                  <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_6_act83n.jpg" alt="Vertical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                  <img src="https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_Complete_sachet_packaging_machine_full_side_view_showing_height_stainless_steel_mul_182693_uevfys.png" alt="Sachê" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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

      {/* Como Funciona Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn variant="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Trabalhamos com Você</h2>
              <p className="text-lg text-gray-600">Processo simples e eficiente para manter sua linha sempre operando</p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {/* Step 1 */}
            <StaggerItem variant="up">
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
                    <span className="text-3xl font-bold text-primary">1</span>
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico</h3>
                  <p className="text-gray-600">
                    Você nos conta qual peça precisa ou o problema que está enfrentando na sua linha de produção
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Step 2 */}
            <StaggerItem variant="up">
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
                    <span className="text-3xl font-bold text-primary">2</span>
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solução Técnica</h3>
                  <p className="text-gray-600">
                    Nossa equipe identifica a peça ideal ou desenvolve uma solução customizada para seu equipamento
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Step 3 */}
            <StaggerItem variant="up">
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Entrega Rápida</h3>
                  <p className="text-gray-600">
                    Fabricação nacional e estoque local garantem prazos reduzidos e sua linha volta a operar
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Por Que Escolher Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn variant="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por Que Escolher a JHV Pack Tools?</h2>
              <p className="text-lg text-gray-600">
                Soluções completas para manter sua produção funcionando com máxima eficiência
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[{
            icon: Zap,
            title: "Entrega Rápida",
            description: "Estoque local e produção ágil garantem prazos reduzidos",
            color: "bg-yellow-50",
            iconColor: "text-yellow-600"
          }, {
            icon: Shield,
            title: "Qualidade Garantida",
            description: "Certificações ISO 9001 e controle rigoroso em todas as etapas",
            color: "bg-blue-50",
            iconColor: "text-blue-600"
          }, {
            icon: Globe,
            title: "Nacionalização",
            description: "Fabricação nacional de peças importadas com economia de até 40%",
            color: "bg-green-50",
            iconColor: "text-green-600"
          }, {
            icon: Clock,
            title: "Suporte 24/7",
            description: "Equipe técnica disponível para emergências e consultoria",
            color: "bg-red-50",
            iconColor: "text-primary"
          }].map((feature, idx) => <StaggerItem key={idx} variant="up">
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </StaggerItem>)}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            {[{
            number: 20,
            suffix: "+",
            label: "Anos de Experiência"
          }, {
            number: 500,
            suffix: "+",
            label: "Clientes Atendidos"
          }, {
            number: 10000,
            suffix: "+",
            label: "Peças Fabricadas"
          }, {
            number: 99,
            suffix: "%",
            label: "Satisfação dos Clientes"
          }].map((stat, idx) => <StaggerItem key={idx} variant="up">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {statsInView && <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />}
                  </div>
                  <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                </div>
              </StaggerItem>)}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Final Section */}
      <FadeIn variant="scale">
        <section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de uma Peça Específica ou Solução Personalizada?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe técnica está pronta para atender você com soluções sob medida
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/5519981791472" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar com Especialista
                </Button>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </div>;
};
export default HomeContent;
