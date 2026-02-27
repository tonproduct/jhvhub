"use client";
import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { vffsSealingProducts, vffsCuttingProducts, vffsFormingProducts, Product } from "@/data/vffsProducts";
import { ProductModal } from "@/components/ProductModal";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, MessageCircle, Download, ChevronLeft, Flame, Scissors, Box, Cookie, Pill, Droplet, Wrench } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";
const VFFS = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrossel de Selagem
  const [activeSealingSlide, setActiveSealingSlide] = useState(0);
  const [isSealingAutoPlaying, setIsSealingAutoPlaying] = useState(true);

  // Carrossel de Corte
  const [activeCuttingSlide, setActiveCuttingSlide] = useState(0);
  const [isCuttingAutoPlaying, setIsCuttingAutoPlaying] = useState(true);

  // Carrossel de Formação
  const [activeFormingSlide, setActiveFormingSlide] = useState(0);
  const [isFormingAutoPlaying, setIsFormingAutoPlaying] = useState(true);
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
      setActiveSealingSlide(prev => prev === vffsSealingProducts.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isSealingAutoPlaying]);

  // Auto-play do carrossel de Corte
  useEffect(() => {
    if (!isCuttingAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveCuttingSlide(prev => prev === vffsCuttingProducts.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCuttingAutoPlaying]);

  // Auto-play do carrossel de Formação
  useEffect(() => {
    if (!isFormingAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveFormingSlide(prev => prev === vffsFormingProducts.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isFormingAutoPlaying]);
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
        backgroundImage: "url('https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_6_act83n.jpg')",
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
                <BreadcrumbPage className="text-white">Vertical</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <FadeIn variant="up" delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Inovação para empacotadoras Verticais contínuas e intermitente</h1></FadeIn>

          <FadeIn variant="up" delay={0.3}><p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-10">Componentes de alta performance para máquinas verticais. Ferramentas de selagem, corte e colarinhos (formatos)</p></FadeIn>

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

      {/* Sobre a Tecnologia */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn variant="left">
              <Badge className="bg-emerald-50 text-emerald-700 px-4 py-2 text-sm font-medium mb-6">Sobre a Tecnologia</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">Ferramentas para empacotadoras Verticais continua e intermitentes </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-normal" style={{
              lineHeight: "1.8"
            }}>Temos soluções e produtos de alta qualidade unidos a projetos voltados para cada seguimento e clientes onde atuamos na melhora da selagem aspecto do pacote melhorias dos frisos e perfil de selagem, com sistemas de troca rápida que são mais eficientes no dia a dia de grandes empresas. Trabalhamos com vária soluções para embalagens (filmes) 100% reciclável / pet / Bopp / metalizado/ Papel e outros. Temos matérias e revestimentos próprios para cada aplicação assim garantimos produtos hermético e vedados com embalagens perfeitas e apresentáveis. É um sistema de embalagem vertical que forma, enche e sela produtos automaticamente. O filme é puxado verticalmente, formado em tubo, preenchido com o produto e selado em sachês ou embalagens tipo pillow.</p>

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
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Cookie className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Snacks e Grãos</h4>
                      <p className="text-sm text-muted-foreground">
                        Batatas chips, salgadinhos, pipoca, amendoins, arroz, feijão
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
                        Medicamentos em pó, sachês de remédio, suplementos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <Droplet className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Líquidos e Massas</h4>
                      <p className="text-sm text-muted-foreground">
                        Molhos, ketchup, maionese, geleias, mel, cremes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                      <Wrench className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Industrial</h4>
                      <p className="text-sm text-muted-foreground">
                        Peças pequenas, parafusos, componentes diversos
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
            Mordentes e resistências de alta performance para selagem vertical precisa e durável.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-start">
            <div className="space-y-6 order-1">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções de Selagem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mordentes e resistências de alta performance para selagem vertical precisa e durável.
                </p>
              </div>

              <div className="space-y-3">
                {vffsSealingProducts.slice(0, 6).map((product, index) => <div key={product.id} onMouseEnter={() => {
                setActiveSealingSlide(index);
                setIsSealingAutoPlaying(false);
              }} onMouseLeave={() => setIsSealingAutoPlaying(true)} className={cn("group cursor-default py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3", activeSealingSlide === index ? "bg-emerald-50 text-emerald-600" : "hover:bg-emerald-50 text-base")}>
                    <ChevronRight className={cn("w-5 h-5 flex-shrink-0 transition-colors", activeSealingSlide === index ? "text-emerald-600" : "text-base")} />
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
                      <img src={vffsSealingProducts[activeSealingSlide].images[0]} alt={vffsSealingProducts[activeSealingSlide].name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {vffsSealingProducts[activeSealingSlide].name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setActiveSealingSlide(prev => prev === 0 ? vffsSealingProducts.length - 1 : prev - 1)} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Produto anterior">
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>

                <button onClick={() => setActiveSealingSlide(prev => prev === vffsSealingProducts.length - 1 ? 0 : prev + 1)} className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Próximo produto">
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute top-6 right-6 flex gap-2">
                  {vffsSealingProducts.slice(0, 6).map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeSealingSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
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
            Facas de precisão para corte limpo e durável em máquinas verticais.
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
                      <img src={vffsCuttingProducts[activeCuttingSlide].images[0]} alt={vffsCuttingProducts[activeCuttingSlide].name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {vffsCuttingProducts[activeCuttingSlide].name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setActiveCuttingSlide(prev => prev === 0 ? vffsCuttingProducts.length - 1 : prev - 1)} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Produto anterior">
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>

                <button onClick={() => setActiveCuttingSlide(prev => prev === vffsCuttingProducts.length - 1 ? 0 : prev + 1)} className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Próximo produto">
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute top-6 right-6 flex gap-2">
                  {vffsCuttingProducts.map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeCuttingSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
                </div>
              </div>
            </div>

            <div className="space-y-6 order-2">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções de Corte</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Facas de precisão para corte limpo e durável em máquinas verticais.
                </p>
              </div>

              <div className="space-y-3">
                {vffsCuttingProducts.map((product, index) => <div key={product.id} onMouseEnter={() => {
                setActiveCuttingSlide(index);
                setIsCuttingAutoPlaying(false);
              }} onMouseLeave={() => setIsCuttingAutoPlaying(true)} className={cn("group cursor-default py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3", activeCuttingSlide === index ? "bg-emerald-50 text-emerald-600" : "hover:bg-emerald-50 text-base")}>
                    <ChevronRight className={cn("w-5 h-5 flex-shrink-0 transition-colors", activeCuttingSlide === index ? "text-emerald-600" : "text-base")} />
                    <h3 className="font-semibold text-base">{product.name}</h3>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES DE FORMAÇÃO */}
      <section id="section-formacao" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 lg:hidden">Soluções de Formação</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 lg:hidden">
            Tubos formadores e colarinhos para formação perfeita de embalagens verticais.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-start">
            <div className="space-y-6 order-1">
              <div className="hidden lg:block space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções de Formação</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tubos formadores e colarinhos para formação perfeita de embalagens verticais.
                </p>
              </div>

              <div className="space-y-3">
                {vffsFormingProducts.map((product, index) => <div key={product.id} onMouseEnter={() => {
                setActiveFormingSlide(index);
                setIsFormingAutoPlaying(false);
              }} onMouseLeave={() => setIsFormingAutoPlaying(true)} className={cn("group cursor-default py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3", activeFormingSlide === index ? "bg-emerald-50 text-emerald-600" : "hover:bg-emerald-50 text-base")}>
                    <ChevronRight className={cn("w-5 h-5 flex-shrink-0 transition-colors", activeFormingSlide === index ? "text-emerald-600" : "text-base")} />
                    <h3 className="font-semibold text-base">{product.name}</h3>
                  </div>)}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit order-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <AnimatePresence>
                  <motion.div key={activeFormingSlide} initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.6
                }} className="absolute inset-0 flex flex-col">
                    <div className="flex-1 relative">
                      <img src={vffsFormingProducts[activeFormingSlide].images[0]} alt={vffsFormingProducts[activeFormingSlide].name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {vffsFormingProducts[activeFormingSlide].name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={() => setActiveFormingSlide(prev => prev === 0 ? vffsFormingProducts.length - 1 : prev - 1)} className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Produto anterior">
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>

                <button onClick={() => setActiveFormingSlide(prev => prev === vffsFormingProducts.length - 1 ? 0 : prev + 1)} className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow-md transition-all" aria-label="Próximo produto">
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute top-6 right-6 flex gap-2">
                  {vffsFormingProducts.map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeFormingSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 lg:p-16 text-center text-white mb-20 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">Não Sabe Qual Solução Escolher?</h2>

              <p className="text-xl text-emerald-100 mb-8">
                Nossa equipe técnica analisa sua operação e recomenda os componentes ideais para maximizar performance e
                reduzir custos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-6 text-lg" asChild>
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
                  <p className="text-emerald-100 mb-4">Soluções completas para máquinas horizontais</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Ver Soluções <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </Link>

              <Link href="/sache" className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" alt="Sachê" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Badge className="bg-white/20 text-white mb-3">Sachê</Badge>
                  <h4 className="text-3xl font-bold mb-2">Máquinas de Sachê</h4>
                  <p className="text-emerald-100 mb-4">Componentes especializados para sachês</p>
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
export default VFFS;