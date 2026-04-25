"use client";
import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Target,
  Eye,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Lightbulb,
  Coffee,
  Wheat,
  Heart,
  FlaskConical,
  UtensilsCrossed,
  Sparkle,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";
import { useState, useEffect } from "react";

const ALL_IMAGES = [
  { src: "/fotos/novas/12.jpeg", alt: "Centro de Usinagem CNC" },
  { src: "/fotos/novas/bico.jpeg", alt: "Usinagem de Mordente" },
  { src: "/fotos/novas/serra.jpeg", alt: "Retífica com Faíscas" },
];

function MosaicRandom() {
  const [imgs, setImgs] = useState(ALL_IMAGES.slice(0, 3));

  useEffect(() => {
    const shuffled = [...ALL_IMAGES].sort(() => Math.random() - 0.5);
    setImgs(shuffled.slice(0, 3));
  }, []);

  return (
    <FadeIn variant="right" delay={0.2}>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-w-[380px] aspect-square">
          <img src={imgs[0].src} alt={imgs[0].alt} className="col-span-1 row-span-2 w-full h-full object-cover rounded-xl" />
          <img src={imgs[1].src} alt={imgs[1].alt} className="col-span-1 row-span-1 w-full h-full object-cover rounded-xl" />
          <img src={imgs[2].src} alt={imgs[2].alt} className="col-span-1 row-span-1 w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </FadeIn>
  );
}

const industries = [
  { icon: UtensilsCrossed, title: "Alimentos", desc: "Indústria alimentícia em geral", items: ["Snacks", "Massas", "Congelados", "Produtos frescos"] },
  { icon: FlaskConical, title: "Farmacêutica", desc: "Linhas de produção farmacêutica", items: ["Medicamentos", "Suplementos", "Sachês", "Cápsulas"] },
  { icon: Sparkle, title: "Cosméticos", desc: "Produtos de beleza e cuidados pessoais", items: ["Cremes", "Shampoos", "Sachês", "Amostras"] },
  { icon: Heart, title: "Pet Food", desc: "Alimentos para animais", items: ["Ração", "Petiscos", "Suplementos", "Sachês"] },
  { icon: Coffee, title: "Café e Chá", desc: "Produtos premium", items: ["Café em pó", "Cápsulas", "Sachês", "Chás"] },
  { icon: Wheat, title: "Grãos e Cereais", desc: "Produtos secos", items: ["Arroz", "Feijão", "Cereais", "Farinhas"] },
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
        className="relative flex items-center bg-gradient-to-b from-slate-900 to-slate-950"
        style={{
          backgroundImage: "url('/sobre-quem-somos.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80" />
        <div className="relative z-10 w-full px-6 md:px-24 py-20 lg:py-28">
          <div className="max-w-[1340px] mx-auto">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Sobre Nós</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <FadeIn variant="up" delay={0.1}>
              <Badge variant="outline" className="mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm">Engenharia de Precisão</Badge>
            </FadeIn>
            <FadeIn variant="up" delay={0.2}>
              <h1 className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] text-white mb-6 leading-tight" style={{fontWeight: 600}}>
                Excelência em ferramentas para<br />
                <span style={{fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em"}}>máquinas de embalagem</span>
              </h1>
            </FadeIn>
            <FadeIn variant="up" delay={0.4}>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Especialistas na fabricação de ferramentas de selagem e corte com foco em tecnologia que garante a hermeticidade dos produtos.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quem Somos — branco */}
      <section className="py-24 px-6 md:px-24 bg-background">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn variant="left">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Quem Somos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Engenharia de Precisão.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-base font-medium text-foreground">
                  Somos especialistas na fabricação de ferramentas de selagem e corte, utilizando tecnologias modernas que garantem performance e reduzem paradas não programadas.
                </p>
                <p>
                  Nossa expertise combina conhecimento técnico de produto com precisão nos projetos mecânicos e qualidade na selagem e corte.
                </p>
                <p>
                  Cada peça que produzimos é resultado de dedicação à excelência, garantindo durabilidade e performance superior.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10">
                {[
                  { icon: Zap, label: "Alta Performance" },
                  { icon: Shield, label: "Qualidade Garantida" },
                  { icon: Clock, label: "Entrega Rápida" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-xl">
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <MosaicRandom />
          </div>
        </div>
      </section>

      {/* Nossos Pilares — escuro */}
      <section className="py-24 px-6 md:px-24 bg-slate-950">
        <div className="max-w-[1340px] mx-auto">
          <FadeIn variant="up">
            <div className="mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-3">
                Nossos Pilares
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                O que nos move
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              {
                icon: Target,
                title: "Nossa Missão",
                text: "Entregar peças com excelência técnica, superando expectativas e impulsionando a eficiência operacional de nossos clientes através de soluções precisas e duráveis.",
              },
              {
                icon: Eye,
                title: "Nossa Visão",
                text: "Ser a referência nacional em peças para empacotamento, reconhecidos pela qualidade incomparável, inovação constante e compromisso absoluto com resultados.",
              },
              {
                icon: Lightbulb,
                title: "Conhecimento Técnico",
                text: "Expertise consolidada em construção de máquinas e projetos personalizados, oferecendo soluções alinhadas às necessidades reais da indústria.",
              },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Indústrias — cinza claro */}
      <section className="py-24 px-6 md:px-24 bg-gray-50">
        <div className="max-w-[1340px] mx-auto">
          <FadeIn variant="up">
            <div className="mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Segmentos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Indústrias que atendemos
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
            {industries.map((industry, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full border hover:border-slate-300 transition-colors">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{industry.title}</h3>
                        <p className="text-xs text-muted-foreground">{industry.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {industry.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
