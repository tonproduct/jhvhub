"use client";

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const TRUST_ITEMS = [
  "20+ anos de experiência",
  "ISO 9001 certificado",
  "+500 clientes ativos",
];

const SLIDES = [
  {
    label: "Soluções de Selagem",
    description: "Flow Pack · Vertical · Sachê",
    href: "/flow-pack",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660647/Firefly_9_o31dqx.jpg",
  },
  {
    label: "Soluções de Corte",
    description: "Facas, guilhotinas e serras",
    href: "/verticais",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660645/Firefly_10_exmprq.jpg",
  },
  {
    label: "Componentes e Acessórios",
    description: "Aquecimento, fixação e mais",
    href: "/componentes",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660644/Firefly_11_ztopy3.jpg",
  },
];

// 4 imagens para o grid — 3 categorias + 1 máquina
const GRID = [
  {
    label: "Soluções de Selagem",
    sub: "Flow Pack · Vertical · Sachê",
    href: "/flow-pack",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660647/Firefly_9_o31dqx.jpg",
  },
  {
    label: "Soluções de Corte",
    sub: "Facas e guilhotinas",
    href: "/verticais",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660645/Firefly_10_exmprq.jpg",
  },
  {
    label: "Flow Pack",
    sub: "Máquinas horizontais",
    href: "/flow-pack",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763653691/Firefly_Complete_horizontal_flow_pack_packaging_machine_full_side_view_stainless_steel_HFFS_89014_bijmno.jpg",
  },
  {
    label: "Componentes",
    sub: "Aquecimento e fixação",
    href: "/componentes",
    img: "https://res.cloudinary.com/dxdbh2c1b/image/upload/v1763660644/Firefly_11_ztopy3.jpg",
  },
];

// cada card tem posição absoluta, tamanho e rotação próprios
// hover: endireita + levanta
const CARD_LAYOUT = [
  // topo-esquerda: maior, inclina CCW
  { top: "0%",    left: "0%",  width: "54%", height: "53%", rotate: -3 },
  // topo-direita: médio, inclina CW, descido
  { top: "7%",   right: "0%",  width: "43%", height: "46%", rotate: 3.5 },
  // baixo-esquerda: médio, inclina levemente CCW, subido
  { bottom: "2%", left: "4%",  width: "44%", height: "44%", rotate: -2 },
  // baixo-direita: maior, inclina CW
  { bottom: "0%", right: "0%", width: "52%", height: "52%", rotate: 2.5 },
];

// ─────────────────────────────────────────────────────────────
// Image Grid 2×2 — tamanhos variados + cards inclinados
//
// Absolute positioning para controle fino de tamanho e posição.
// Entrada escalonada · hover endireita o card e levanta.
// ─────────────────────────────────────────────────────────────
function ImageGrid() {
  return (
    <div className="relative h-full">
      {/* Blob decorativo */}
      <div
        aria-hidden
        className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "hsl(var(--primary) / 0.10)", filter: "blur(2px)" }}
      />
      <div
        aria-hidden
        className="absolute -top-4 right-4 w-28 h-28 rounded-full pointer-events-none"
        style={{ background: "hsl(var(--primary) / 0.06)" }}
      />

      {GRID.map((item, i) => {
        const layout = CARD_LAYOUT[i];
        return (
          <motion.div
            key={item.href + i}
            className="absolute rounded-2xl overflow-hidden shadow-xl"
            style={{ ...layout, rotate: layout.rotate, zIndex: i + 1 }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.3 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              rotate: 0,
              scale: 1.06,
              zIndex: 20,
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Página
// ─────────────────────────────────────────────
export default function HeroNova() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "hsl(var(--hero-bg))" }}
      >
        {/* Warm glow decorativo */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 50%, hsl(0 72% 51% / 0.10) 0%, transparent 65%)",
          }}
        />

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-0 min-h-[90vh]">

            {/* ── COLUNA ESQUERDA: Texto ── */}
            <div className="flex flex-col justify-center py-24 pr-0 lg:pr-20">

              <FadeIn variant="up" delay={0}>
                <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                  <span className="text-sm text-white/70 font-medium tracking-wide">
                    Fabricação nacional · Entrega em dias, não semanas
                  </span>
                </div>
              </FadeIn>

              <FadeIn variant="up" delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                  Sua linha<br />
                  <span className="text-primary">parou.</span><br />
                  Temos a peça.
                </h1>
              </FadeIn>

              <FadeIn variant="up" delay={0.2}>
                <p className="text-lg text-white/60 mb-10 max-w-[480px] leading-relaxed">
                  Ferramentas de selagem e corte para Flow Pack, Vertical e Sachê.
                  Padrão internacional, fabricação 100% nacional — sem custo nem
                  prazo de importação.
                </p>
              </FadeIn>

              <FadeIn variant="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="text-base px-8 h-12 w-full sm:w-auto">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base px-8 h-12 bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white/40 w-full sm:w-auto"
                    >
                      Ver Catálogo
                    </Button>
                  </motion.div>
                </div>
              </FadeIn>

              <FadeIn variant="up" delay={0.4}>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {TRUST_ITEMS.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* ── COLUNA DIREITA: Bento Carousel ── */}
            <div className="hidden lg:flex flex-col justify-center py-16 pl-10">
              <FadeIn variant="right" delay={0.35}>
                <div style={{ height: "72vh", maxHeight: 580 }}>
                  <ImageGrid />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
