"use client";
import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { sacheSealingProducts, sacheCuttingProducts, sacheDosagemProducts, Product } from "@/data/sacheProducts";
import { ProductModal } from "@/components/ProductModal";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight, MessageCircle, Download, ChevronLeft, Flame, Scissors, Beaker, Coffee, Pill, Sparkles, UtensilsCrossed, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";
import { RelatedEquipmentNav } from "@/components/RelatedEquipmentNav";
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

  // Auto-play do carrossel de Selagem (3 imagens fixas)
  const sacheSealingImages = [
    '/produtos/flow-pack/ROLO DE SELAGEM RECARTILHADO.png',
    '/produtos/flow-pack/ROLO DE SELAGEM 2.png',
    '/produtos/flow-pack/ROLO DE SELAGEM LINHA SACHE.png',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSealingSlide(prev => prev === sacheSealingImages.length - 1 ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      <section className="relative h-[58vh] flex items-center justify-center" style={{
        backgroundImage: "url('/hero-sache.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full container py-20 lg:py-28">
          <Breadcrumb className="mb-5">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/80 hover:text-white">Início</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/solucoes" className="text-white/80 hover:text-white">Equipamentos</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem><BreadcrumbPage className="text-white">Sachê</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <FadeIn variant="up" delay={0.1}>
            <h1 className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] text-white mb-4 leading-tight" style={{fontWeight: 600}}>Ferramentas e soluções para <br /><span style={{fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em"}}>máquinas de sachê</span></h1>
          </FadeIn>
          <FadeIn variant="up" delay={0.3}>
            <p className="text-base text-white/80 max-w-2xl leading-relaxed mb-8">Componentes de alta performance para selagem e corte em máquinas contínuas e intermitentes.</p>
          </FadeIn>
          <FadeIn variant="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="default" className="bg-white text-foreground hover:bg-white/90 px-6 h-11 text-sm font-semibold shadow-xl" onClick={() => scrollToSection("#section-selagem")}>Ver Soluções</Button>
              <Button size="default" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 px-6 h-11 text-sm font-semibold" asChild>
                <Link href="/contato">Falar com Especialista</Link>
              </Button>
            </div>
          </FadeIn>
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
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                      <UtensilsCrossed className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Condimentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Sal, açúcar, ketchup, mostarda, maionese, molhos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                      <Coffee className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Bebidas Instantâneas</h4>
                      <p className="text-sm text-muted-foreground">
                        Café solúvel, cappuccino, achocolatado, chá
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                      <Pill className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Farmacêutico</h4>
                      <p className="text-sm text-muted-foreground">
                        Medicamentos em pó, analgésicos, suplementos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                      <Sparkles className="w-6 h-6 text-slate-600" />
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
                {sacheSealingProducts.map((product) =><div key={product.id} className="group py-3 px-4 rounded-lg flex items-center gap-3 hover:bg-amber-50 transition-all duration-300 cursor-default">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-amber-600 transition-colors" />
                    <h3 className="font-semibold text-base group-hover:text-amber-600 transition-colors">{product.name}</h3>
                  </div>)}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit order-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <AnimatePresence>
                  <motion.div key={activeSealingSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                    <img src={sacheSealingImages[activeSealingSlide]} alt="Soluções de Selagem" className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-6 right-6 flex gap-2">
                  {sacheSealingImages.map((_, index) => <div key={index} className={cn("h-1 rounded-full transition-all duration-300", activeSealingSlide === index ? "w-8 bg-white" : "w-4 bg-white/40")}></div>)}
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
                }} className="absolute inset-0">
                    <img src={sacheCuttingProducts[activeCuttingSlide].images[0]} alt={sacheCuttingProducts[activeCuttingSlide].name} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
      <section id="section-dosagem" className="hidden">
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

      <RelatedEquipmentNav items={[
        { href: "/flow-pack", image: "/hero-flow-pack.png", label: "Horizontal", title: "Flow Pack" },
        { href: "/verticais", image: "/hero-verticais.png", label: "Vertical", title: "Máquinas Verticais" },
      ]} />

      <section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white text-center">
        <div className="mx-auto px-6 md:px-24 max-w-4xl">
          <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Não Sabe Qual Solução Escolher?</h2>
          <p className="text-xl text-white/90 mb-8">Nossa equipe técnica analisa sua operação e recomenda os componentes ideais para maximizar performance e reduzir custos.</p>
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
      </section>

      <Footer />

      {/* Modal de Produto */}
      {isModalOpen && selectedProduct && <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductModal} />}
    </div>;
};
export default Sache;