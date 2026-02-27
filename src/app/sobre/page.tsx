"use client";
import Link from "next/link";

import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { ChevronDown, Award, Users, Target, Eye, Package, BarChart3, Briefcase, FileText, Cpu, Ruler, Factory, Wrench, Layout, TrendingUp, Truck, MapPin, MessageSquare, ShoppingCart, CheckCircle2, Zap, Shield, Clock, Lightbulb } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";

const Sobre = () => {
  const {
    ref: statsRef,
    inView: statsInView
  } = useInView({
    triggerOnce: true
  });
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80" />
        <div className="relative z-10 px-4 max-w-5xl mx-auto w-full container">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/" className="text-white/80 hover:text-white">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem><BreadcrumbPage className="text-white">Sobre Nós</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <FadeIn variant="up" delay={0.1}>
            <Badge variant="outline" className="mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm">20+ Anos de Experiência</Badge>
          </FadeIn>
          <FadeIn variant="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Excelência em ferramentas para máquinas de Embalagem</h1>
          </FadeIn>
          <FadeIn variant="up" delay={0.4}>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">Somos especialistas na fabricação de ferramentas de selagem e corte para máquinas de empacotamento, com foco em novas tecnologias que garante a hermeticidade dos produtos</p>
          </FadeIn>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn variant="left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Quem Somos</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Engenharia de Precisão.<span className="text-primary">.</span></h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-xl font-medium text-foreground">Somos especialistas na fabricação de ferramentas de selagem e corte, utilizamos tecnologias novas para fabricação de sistemas de selagem e corte que garantem a performance da selagem e corte, reduzindo assim as paradas não programadas.</p>
                <p>Nossa expertise combina conhecimento técnico produto, precisão nos projetos mecânicos é qualidade da selagem e corte.</p>
                <p>Cada peça que produzimos é resultado de anos de experiência e dedicação à excelência, garantindo performance superior e durabilidade excepcional.</p>
              </div>
              <StaggerChildren className="grid grid-cols-3 gap-4 mt-12" staggerDelay={0.1}>
                {[{ icon: Zap, label: "Alta Performance" }, { icon: Shield, label: "Qualidade Garantida" }, { icon: Clock, label: "Entrega Rápida" }].map((item, idx) => <StaggerItem key={idx}>
                    <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-xl">
                      <item.icon className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  </StaggerItem>)}
              </StaggerChildren>
            </FadeIn>

            <FadeIn variant="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-2xl" />
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800" alt="Precisão Industrial" className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="bg-gradient-to-b from-muted/30 to-background relative py-[60px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn variant="up">
            <div className="text-center mb-16">
              <Badge className="mb-4">Nossa Equipe</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise que Faz a<span className="text-primary"> Diferença</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Profissionais com mais de 20 anos de experiência em projetos mecânicos de selagem e corte para maquinas de empacotamento, consulte nosso corpo técnico temos uma solução seus problemas. </p>
            </div>
          </FadeIn>

          <section ref={statsRef} className="py-16 bg-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">
              <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
                {[{ number: 20, suffix: "+", label: "Anos de Experiência" }, { number: 500, suffix: "+", label: "Clientes Atendidos" }, { number: 10000, suffix: "+", label: "Peças Fabricadas" }, { number: 99, suffix: "%", label: "Satisfação dos Clientes" }].map((stat, idx) => <StaggerItem key={idx} variant="up">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{statsInView && <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />}</div>
                      <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                    </div>
                  </StaggerItem>)}
              </StaggerChildren>
            </div>
          </section>
          <Card className="bg-gradient-to-br from-primary/5 to-blue-600/5 border-primary/20"></Card>
        </div>
      </section>

      {/* Missão, Visão e Conhecimento */}
      <section className="bg-background py-0">
        <div className="container mx-auto px-4 max-w-7xl py-[80px]">
          <FadeIn variant="up">
            <div className="text-center mb-16">
              <Badge className="mb-4">Nossos Pilares</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">O que nos<span className="text-primary"> Move</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Conheça os valores e princípios que guiam nossa jornada de excelência</p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { icon: Target, title: "Nossa Missão", text: "Entregar peças com excelência técnica, superando expectativas e impulsionando a eficiência operacional de nossos clientes através de soluções precisas e duráveis.", gradient: "from-primary/10" },
              { icon: Eye, title: "Nossa Visão", text: "Ser a referência nacional em peças para empacotamento, reconhecidos pela qualidade incomparável, inovação constante e compromisso absoluto com resultados.", gradient: "from-blue-600/10" },
              { icon: Lightbulb, title: "Conhecimento Técnico", text: "Expertise consolidada em construção de máquinas e projetos personalizados, oferecendo soluções alinhadas às necessidades reais da indústria com foco em inovação.", gradient: "from-orange-600/10" },
            ].map((item, idx) => <StaggerItem key={idx}>
              <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-2xl h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <CardContent className="p-10 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            </StaggerItem>)}
          </StaggerChildren>
        </div>
      </section>

      {/* Soluções */}
      <section className="bg-gradient-to-b from-muted/30 to-background bg-neutral-100 py-[80px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn variant="up">
            <div className="text-center mb-16">
              <Badge className="mb-4">Nossas Soluções</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Atendemos Todas as<span className="text-primary"> Linhas de Empacotamento</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Expertise completa nos principais sistemas de embalagem do mercado</p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { icon: Package, title: "Flow Pack", desc: "Peças para máquinas horizontais de alta velocidade", gradient: "from-blue-500 to-blue-600" },
              { icon: BarChart3, title: "Embaladoras Verticais", desc: "Componentes para sistemas de envase vertical com dosagem precisa", gradient: "from-green-500 to-green-600" },
              { icon: Briefcase, title: "Linhas de Pouch", desc: "Suporte técnico para máquinas de embalagens flexíveis tipo stand-up pouch", gradient: "from-purple-500 to-purple-600" },
              { icon: FileText, title: "Máquinas de Sachês", desc: "Peças sob medida para linhas farmacêutica, alimentícia e cosmética", gradient: "from-orange-500 to-orange-600" },
              { icon: Cpu, title: "Peças em Geral", desc: "Fabricação sob demanda com materiais de alta resistência", gradient: "from-red-500 to-red-600" },
              { icon: Ruler, title: "Stick Pack", desc: "Componentes especializados para embalagens em formato stick", gradient: "from-teal-500 to-teal-600" },
            ].map((solution, idx) => <StaggerItem key={idx}>
              <Card className="group hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-primary h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.desc}</p>
                </CardContent>
              </Card>
            </StaggerItem>)}
          </StaggerChildren>
        </div>
      </section>

      {/* Representações */}
      <FadeIn variant="scale">
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-2 border-green-500 shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-green-600" /></div>
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200 px-4 py-2">Representante Oficial</Badge>
                <h3 className="text-3xl font-bold mb-4">Representante Autorizado Addens</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Distribuidor oficial da marca líder em conexões rotativas para máquinas de embalagem flow pack</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>

      {/* Indústrias */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn variant="up">
            <div className="text-center mb-16">
              <Badge className="mb-4">Segmentos</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Indústrias Que<span className="text-primary"> Atendemos</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Soluções especializadas para diversos segmentos da indústria</p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { emoji: "🍕", title: "Alimentos", desc: "Indústria alimentícia em geral", items: ["Snacks", "Massas", "Congelados", "Produtos frescos"] },
              { emoji: "💊", title: "Farmacêutica", desc: "Linhas de produção farmacêutica", items: ["Medicamentos", "Suplementos", "Sachês", "Cápsulas"] },
              { emoji: "💄", title: "Cosméticos", desc: "Produtos de beleza e cuidados pessoais", items: ["Cremes", "Shampoos", "Sachês", "Amostras"] },
              { emoji: "🐾", title: "Pet Food", desc: "Alimentos para animais", items: ["Ração", "Petiscos", "Suplementos", "Sachês"] },
              { emoji: "☕", title: "Café e Chá", desc: "Produtos premium", items: ["Café em pó", "Cápsulas", "Sachês", "Chás"] },
              { emoji: "🌾", title: "Grãos e Cereais", desc: "Produtos secos", items: ["Arroz", "Feijão", "Cereais", "Farinhas"] },
            ].map((industry, idx) => <StaggerItem key={idx}>
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 group border-2 hover:border-primary h-full">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{industry.desc}</p>
                  <ul className="space-y-2">
                    {industry.items.map((item, itemIdx) => <li key={itemIdx} className="flex items-center text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>)}
          </StaggerChildren>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sobre;
