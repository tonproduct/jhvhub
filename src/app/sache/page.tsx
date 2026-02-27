"use client";
import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { sacheSealingProducts, sacheCuttingProducts, sacheDosagemProducts, Product } from "@/data/sacheProducts";
import { ProductModal } from "@/components/ProductModal";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, MessageCircle, Download, ChevronLeft, Flame, Scissors, Beaker, Coffee, Pill, Sparkles, UtensilsCrossed } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";
const Sache = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrossel de Selagem
  const [activeSealingSlide, setActiveSealingSlide] = useState(0);
  const [isSealingAutoPlaying, setIsSealingAutoPlaying] = useState(true);

  // Carrossel de Corte
  const [activeCuttingSlide, setActiveCuttingSlide] = useState(0);
  const [isCuttingAutoPlaying, setIsCuttingAutoPlaying] = useState(true);

  // Carrossel de Dosagem
  const [activeDosagemSlide, setActiveDosagemSlide] = useState(0);
  const [isDosagemAutoPlaying, setIsDosagemAutoPlaying] = useState(true);
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Auto-play do carrossel de Selagem
  useEffect(() => {
    if (!isSealingAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSealingSlide(prev => prev === sacheSealingProducts.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isSealingAutoPlaying]);

  // Auto-play do carrossel de Corte
  useEffect(() => {
    if (!isCuttingAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveCuttingSlide(prev => prev === sacheCuttingProducts.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCuttingAutoPlaying]);

  // Auto-play do carrossel de Dosagem
  useEffect(() => {
    if (!isDosagemAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveDosagemSlide(prev => prev === sacheDosagemProducts.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isDosagemAutoPlaying]);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center" style={{
        backgroundImage: "url('https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_Complete_sachet_packaging_machine_full_side_view_showing_height_stainless_steel_mul_182693_uevfys.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80" />

        <div className="relative z-10 px-4 max-w-5xl mx-auto w-full container">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-white/80 hover:text-white">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/solucoes" className="text-white/80 hover:text-white">Equipamentos</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Sachê</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <FadeIn variant="up" delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Ferramentas e Soluções para Máquinas de Sache Continua e Intermitente</h1></FadeIn>

          <FadeIn variant="up" delay={0.3}><p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-10">Ferramentas e Soluções para Máquinas de Sache Continua e Intermitente</p></FadeIn>

          <FadeIn variant="up" delay={0.5}><div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl" onClick={() => scrollToSection("#section-selagem")}>
              Ver Soluções
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg" asChild>
              <Link href="/contato">Falar com Especialista</Link>
            </Button>
          </div></FadeIn>
        </div>
      </section>

      {/* O QUE É SACHÊ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn variant="left">
              <Badge className="bg-amber-50 text-amber-700 px-4 py-2 text-sm font-medium mb-6">Sobre a Tecnologia</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">Nosso time é especializado em máquinas de Saches de alta velocidade </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4" style={{
              lineHeight: "1.8"
            }}>Contamos com corpo técnico especializado em máquinas de sache contínuas de alta velocidade, atuamos com projetos e desenhos de perfis que garantem e selagem perfeita. Fabricamos blocos com perfis cruzados, selagem longitudinais, micro perfis com acabamento retificado e preciso. Utilizamos retificas CNC para confecção dos blocos, assim garantimos perfis com tolerâncias milésimal</p>

              <p className="text-lg text-muted-foreground leading-relaxed" style={{
              lineHeight: "1.8"
            }}>
            </p>
            </FadeIn>

            <FadeIn variant="right" delay={0.2}>
              <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-8">Principais Aplicações</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                      <UtensilsCrossed className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Condimentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Sal, açúcar, ketchup, mostarda, maionese, molhos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-brown-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Coffee className="w-6 h-6 text-orange-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Bebidas Instantâneas</h4>
                      <p className="text-sm text-muted-foreground">
                        Café solúvel, cappuccino, achocolatado, chá
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Pill className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Farmacêutico</h4>
                      <p className="text-sm text-muted-foreground">
                        Medicamentos em pó, analgésicos, suplementos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                      <Sparkles className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Cosméticos</h4>
                      <p className="text-sm text-muted-foreground">
                        Shampoo, condicionador, cremes, amostras grátis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES DE SELAGEM */}
      <section id="section-selagem" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 lg:hidden">Soluções de Selagem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 lg:hidden">
            Mordentes e resistências para selagem precisa de sachês em múltiplas pistas.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-start">
            <div className="space-y-6 order-1">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções de Selagem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mordentes e resistências para selagem precisa de sachês em múltiplas pistas.
                </p>
              </div>

              <div className="space-y-3">
                {sacheSealingProducts.slice(0, 6).map((product, index) => <div key={product.id} onMouseEnter={() => {
                setActiveSealingSlide(index);
                setIsSealingAutoPlaying(false);
              }} onMouseLeave={() => setIsSealingAutoPlaying(true)} className={cn("group cursor-default py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3", activeSealingSlide === index ? "bg-amber-50 text-amber-600" : "hover:bg-amber-50 text-base")}>
                    <ChevronRight className={cn("w-5 h-5 flex-shrink-0 transition-colors", activeSealingSlide === index ? "text-amber-600" : "text-base")} />
                    <h3 className="font-semibold text-base">{product.name}</h3>
                  </div>)}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit order-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <AnimatePresence>
                  <motion.div key={activeSealingSlide} initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.6
                }} className="absolute inset-0 flex flex-col">
                    <div className="flex-1 relative">
                      <img src={sacheSealingProducts[activeSealingSlide].images[0]} alt={sacheSealingProducts[activeSealingSlide].name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {sacheSealingProducts[activeSealingSlide].name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setActiveSealingSlide(prev => prev === 0 ? sacheSealingProducts.length - 1 : prev - 1)} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Produto anterior">
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>

                <button onClick={() => setActiveSealingSlide(prev => prev === sacheSealingProducts.length - 1 ? 0 : prev + 1)} className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Próximo produto">
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute top-6 right-6 flex gap-2">
                  {sacheSealingProducts.slice(0, 6).map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeSealingSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES DE CORTE */}
      <section id="section-corte" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 lg:hidden">Soluções de Corte</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 lg:hidden">
            Facas e picotadores de precisão para corte e separação de sachês.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-start">
            <div className="lg:sticky lg:top-24 h-fit order-3 lg:order-1">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <AnimatePresence>
                  <motion.div key={activeCuttingSlide} initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.6
                }} className="absolute inset-0 flex flex-col">
                    <div className="flex-1 relative">
                      <img src={sacheCuttingProducts[activeCuttingSlide].images[0]} alt={sacheCuttingProducts[activeCuttingSlide].name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {sacheCuttingProducts[activeCuttingSlide].name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setActiveCuttingSlide(prev => prev === 0 ? sacheCuttingProducts.length - 1 : prev - 1)} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Produto anterior">
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>

                <button onClick={() => setActiveCuttingSlide(prev => prev === sacheCuttingProducts.length - 1 ? 0 : prev + 1)} className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Próximo produto">
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute top-6 right-6 flex gap-2">
                  {sacheCuttingProducts.map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeCuttingSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
                </div>
              </div>
            </div>

            <div className="space-y-6 order-2">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções de Corte</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Facas e picotadores de precisão para corte e separação de sachês.
                </p>
              </div>

              <div className="space-y-3">
                {sacheCuttingProducts.map((product, index) => <div key={product.id} onMouseEnter={() => {
                setActiveCuttingSlide(index);
                setIsCuttingAutoPlaying(false);
              }} onMouseLeave={() => setIsCuttingAutoPlaying(true)} className={cn("group cursor-default py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3", activeCuttingSlide === index ? "bg-amber-50 text-amber-600" : "hover:bg-amber-50 text-base")}>
                    <ChevronRight className={cn("w-5 h-5 flex-shrink-0 transition-colors", activeCuttingSlide === index ? "text-amber-600" : "text-base")} />
                    <h3 className="font-semibold text-base">{product.name}</h3>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES DE DOSAGEM */}
      <section id="section-dosagem" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 lg:hidden">Soluções de Dosagem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 lg:hidden">
            Dosadores de precisão para líquidos, pós e granulados em sachês.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-start">
            <div className="space-y-6 order-1">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções de Dosagem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dosadores de precisão para líquidos, pós e granulados em sachês.
                </p>
              </div>

              <div className="space-y-3">
                {sacheDosagemProducts.map((product, index) => <div key={product.id} onMouseEnter={() => {
                setActiveDosagemSlide(index);
                setIsDosagemAutoPlaying(false);
              }} onMouseLeave={() => setIsDosagemAutoPlaying(true)} className={cn("group cursor-default py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3", activeDosagemSlide === index ? "bg-amber-50 text-amber-600" : "hover:bg-amber-50 text-base")}>
                    <ChevronRight className={cn("w-5 h-5 flex-shrink-0 transition-colors", activeDosagemSlide === index ? "text-amber-600" : "text-base")} />
                    <h3 className="font-semibold text-base">{product.name}</h3>
                  </div>)}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit order-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <AnimatePresence>
                  <motion.div key={activeDosagemSlide} initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.6
                }} className="absolute inset-0 flex flex-col">
                    <div className="flex-1 relative">
                      <img src={sacheDosagemProducts[activeDosagemSlide].images[0]} alt={sacheDosagemProducts[activeDosagemSlide].name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {sacheDosagemProducts[activeDosagemSlide].name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setActiveDosagemSlide(prev => prev === 0 ? sacheDosagemProducts.length - 1 : prev - 1)} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Produto anterior">
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>

                <button onClick={() => setActiveDosagemSlide(prev => prev === sacheDosagemProducts.length - 1 ? 0 : prev + 1)} className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Próximo produto">
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute top-6 right-6 flex gap-2">
                  {sacheDosagemProducts.map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeDosagemSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-12 lg:p-16 text-center text-white mb-20 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">Não Sabe Qual Solução Escolher?</h2>

              <p className="text-xl text-amber-100 mb-8">
                Nossa equipe técnica analisa sua operação e recomenda os componentes ideais para maximizar performance e
                reduzir custos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-6 text-lg" asChild>
                  <Link href="/contato">Falar com Especialista</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <Download className="mr-2" />
                  Baixar Catálogo PDF
                </Button>
              </div>
            </div>
          </div>

          {/* Navegação Relacionada */}
          <div className="border-t-2 border-border pt-16 animate-fade-in">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Veja Soluções para Outros Equipamentos
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/flow-pack" className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop" alt="Flow Pack" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Badge className="bg-white/20 text-white mb-3">Flow Pack</Badge>
                  <h4 className="text-3xl font-bold mb-2">Máquinas Flow Pack</h4>
                  <p className="text-amber-100 mb-4">Soluções completas para máquinas horizontais</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Ver Soluções <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </Link>

              <Link href="/vffs" className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" alt="Verticais" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Badge className="bg-white/20 text-white mb-3">Vertical</Badge>
                  <h4 className="text-3xl font-bold mb-2">Máquinas Verticais</h4>
                  <p className="text-amber-100 mb-4">Componentes para máquinas verticais</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Ver Soluções <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal de Produto */}
      {isModalOpen && selectedProduct && <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductModal} />}
    </div>;
};
export default Sache;