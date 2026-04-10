"use client";
import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Check, Wrench, Globe2, Hammer, GraduationCap, Settings, Target, Rocket, Calendar, MapPin, Zap, HandshakeIcon, DollarSign, CheckCircle2, FileText, SearchCheck, MessageSquare, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";
const Servicos = () => {
  const [activeReformaTab, setActiveReformaTab] = useState<"mecanica" | "eletronica">("mecanica");
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[58vh] flex items-center justify-center" style={{
        backgroundImage: "url('/hero-servicos.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 65%",
        
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80" />

        <div className="relative z-10 px-6 md:px-24 max-w-5xl mx-auto w-full">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Serviços</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <FadeIn variant="up" delay={0.1}><Badge variant="outline" className="mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm">20+ Anos de Experiência</Badge></FadeIn>

          <FadeIn variant="up" delay={0.2}><h1 className="text-[18px] md:text-[24px] lg:text-[36px] text-white mb-6 leading-tight" style={{fontWeight: 600}}>Serviços Completos para <br /><span style={{fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em"}}>Máquinas de Embalagem</span></h1></FadeIn>

          <FadeIn variant="up" delay={0.4}><p className="text-xl text-white/90 max-w-3xl leading-relaxed">Atuamos também com reformas de máquinas de empacotamento com profissionais experientes com anos de experiência em máquinas de empacotar</p></FadeIn>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 md:px-24 max-w-5xl">
          <FadeIn variant="up">
            <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-6">Serviços</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-12">
              Nossa Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-10 border-t border-slate-800 pt-10">
              <p className="text-slate-300 text-lg leading-relaxed">
                Contamos com profissionais altamente qualificados, com vasta experiência na construção de máquinas de empacotamento e desenvolvimento de projetos personalizados para diversos sistemas de embalagem.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Essa trajetória sólida nos permite oferecer soluções precisas, duráveis e alinhadas às necessidades reais da indústria, com foco em performance, segurança e inovação — para Flow Pack, Verticais e Sachê.
              </p>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* Serviço 1: Fabricação Sob Medida (Imagem à Esquerda) */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-[120px]">
        <div className="mx-auto px-6 md:px-24 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 ">
            <FadeIn variant="left">
              <img src="/Gemini_Generated_Image_amyb0jamyb0jamyb.png" alt="Fabricação Sob Medida" className="rounded-2xl w-full h-full object-cover" />
            </FadeIn>

            <FadeIn variant="right" delay={0.2}><div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-muted/10">01</div>
              <div className="relative z-10">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Fabricação Sob Medida</p>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Fabricação<br />Sob Medida</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Desenvolvimento e fabricação de peças técnicas personalizadas para máquinas de embalagem. Com
                  materiais de alta resistência e acabamento técnico de precisão, criamos soluções que atendem
                  exatamente às suas especificações.
                </p>

                <div className="space-y-3 mb-6">
                  {["Projetos customizados para sua necessidade", "Materiais de alta resistência (aços especiais, cobre berílio, teflon)", "Usinagem de alta precisão com tolerâncias mínimas", "Controle de qualidade rigoroso em todas as etapas", "Produção nacional ágil", "Suporte técnico desde o projeto até a instalação"].map((item, idx) => <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>)}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">O Que Fabricamos:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Mordentes intercambiáveis", "Facas de corte especiais", "Rolos de selagem", "Conjuntos completos", "Componentes sob medida", "Peças de reposição"].map((item, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </div>)}
                  </div>
                </div>
              </div>
            </div></FadeIn>
          </div>
        </div>
      </section>

      {/* Serviço 2: Nacionalização */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 md:px-24 max-w-5xl">
          <FadeIn variant="up">
            <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-6">Serviço 02</p>
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">

              {/* Esquerda: título + métricas */}
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Nacionalização<br />de Peças
                </h3>
                <p className="text-slate-400 leading-relaxed mb-10">
                  Substituição inteligente de peças importadas por componentes nacionais de alta qualidade — sem comprometer performance.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { value: "60%", label: "de economia média" },
                    { value: "Dias", label: "não meses" },
                    { value: "Nacional", label: "estoque local" },
                    { value: "20+", label: "anos de experiência" },
                  ].map((m, i) => (
                    <div key={i} className="border-t border-slate-800 pt-4">
                      <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direita: processo como steps */}
              <div className="flex flex-col gap-0 pt-2">
                <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-6">Como Funciona</p>
                {[
                  "Engenharia reversa da peça importada",
                  "Seleção de materiais equivalentes ou superiores",
                  "Fabricação com controle de qualidade rigoroso",
                  "Testes e validação",
                  "Entrega e suporte técnico",
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                      </div>
                      {idx < arr.length - 1 && <div className="w-px flex-1 bg-slate-800 my-1" />}
                    </div>
                    <div className="pb-6">
                      <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
                <img
                  src="/iro.png"
                  alt="Nacionalização de peças"
                  className="w-full h-32 object-cover rounded-xl mt-2"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Serviço 3: Reforma e Manutenção */}
      <section className="py-28 bg-background">
        <div className="mx-auto px-6 md:px-24 max-w-5xl">
          <FadeIn variant="up">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Reforma e Manutenção</p>
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Reforma e<br />Manutenção
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Serviços completos de reforma e manutenção de máquinas de embalagem — mecânica e eletrônica — devolvendo performance e vida útil aos seus equipamentos.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { value: "Mecânica", label: "reforma estrutural completa" },
                    { value: "Eletrônica", label: "painéis, sensores e inversores" },
                    { value: "Garantia", label: "em todos os serviços" },
                    { value: "Suporte", label: "pós-reforma incluído" },
                  ].map((m, i) => (
                    <div key={i} className="border-t border-border pt-4">
                      <p className="text-2xl font-bold mb-1">{m.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-0 pt-2">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">O Que Cobrimos</p>
                {[
                  "Substituição de componentes desgastados",
                  "Retífica de rolos e eixos",
                  "Alinhamento de conjuntos de corte e selagem",
                  "Revisão completa de painéis elétricos",
                  "Substituição de sensores e encoders",
                  "Calibração de sistemas de controle",
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                      </div>
                      {idx < arr.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm leading-relaxed text-foreground">{step}</p>
                    </div>
                  </div>
                ))}
                <img
                  src="/WhatsApp Image 2026-04-04 at 11.53.55.jpeg"
                  alt="Reforma e manutenção"
                  className="w-full h-32 object-cover rounded-xl mt-2"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Serviço 4: Treinamentos */}
      <section className="py-28 bg-slate-100">
        <div className="mx-auto px-6 md:px-24 max-w-5xl">
          <FadeIn variant="up">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Treinamentos</p>
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Treinamentos<br />Especializados
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Capacitação técnica para equipes de operação e manutenção, com foco em manutenção autônoma e operação mais eficiente.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  {[
                    { value: "8h", label: "ajuste de facas e mordentes" },
                    { value: "16h", label: "operação de flow packs" },
                    { value: "Presencial", label: "na sua planta ou na nossa" },
                    { value: "Certificado", label: "incluso em todos os cursos" },
                  ].map((m, i) => (
                    <div key={i} className="border-t border-border pt-4">
                      <p className="text-2xl font-bold mb-1">{m.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-0 pt-2">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">O Que Você Aprende</p>
                {[
                  "Tipos de facas e mordentes e suas aplicações",
                  "Técnicas de ajuste fino com lâminas calibradas",
                  "Uso de blocos de carbono para alinhamento",
                  "Princípios de funcionamento de flow packs",
                  "Identificação rápida de problemas",
                  "Técnicas de manutenção autônoma",
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{idx + 1}</span>
                      </div>
                      {idx < arr.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm leading-relaxed text-foreground">{step}</p>
                    </div>
                  </div>
                ))}
                <img
                  src="/WhatsApp Image 2026-04-04 at 15.51.43.jpeg"
                  alt="Treinamentos especializados"
                  className="w-full h-32 object-cover object-[center_20%] rounded-xl mt-2"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projetos Especiais */}
      <section className="py-20 relative hidden" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="mx-auto px-6 md:px-24 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <Settings className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Projetos Especiais e Conjuntos Completos</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Desenvolvemos soluções completas para suas necessidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            icon: Wrench,
            title: "Cabeçotes Flow Pack",
            desc: "Conjuntos completos com sistema de ajuste facilitado e tecnologia de contagem de voltas"
          }, {
            icon: Target,
            title: "Sistemas Sob Medida",
            desc: "Desenvolvimento de sistemas completos baseados nas suas especificações técnicas"
          }, {
            icon: Rocket,
            title: "Modernização",
            desc: "Atualização de máquinas antigas com tecnologias modernas e componentes de alta performance"
          }].map((item, idx) => <Card key={idx} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      


      {/* CTA Final */}

      <Footer />
    </div>;
};
export default Servicos;