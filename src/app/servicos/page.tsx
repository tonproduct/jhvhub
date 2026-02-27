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
      <section className="relative h-[80vh] flex items-center justify-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920')",
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

          <FadeIn variant="up" delay={0.2}><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Serviços Completos para Máquinas de Embalagem</h1></FadeIn>

          <FadeIn variant="up" delay={0.4}><p className="text-xl text-white/90 max-w-3xl leading-relaxed">Atuamos também com reformas de máquinas de empacotamento com profissionais experientes com anos de experiência em máquinas de empacotar</p></FadeIn>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-24 bg-gray-900 ">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn variant="up"><h2 className="text-center mb-4 text-neutral-50 text-4xl font-bold">Nossa Expertise</h2>
          <p className="text-center mb-8 text-neutral-50 text-xl px-[90px]">
            Equipe técnica com mais de 20 anos construindo e desenvolvendo máquinas de empacotamento
          </p>
          <p className="text-center max-w-3xl mx-auto leading-relaxed text-neutral-50 font-light">
            Contamos com profissionais altamente qualificados, com vasta experiência na construção de máquinas de
            empacotamento e desenvolvimento de projetos personalizados para diversos sistemas de embalagem. Essa
            trajetória sólida nos permite oferecer soluções precisas, duráveis e alinhadas às necessidades reais da
            indústria, com foco em performance, segurança e inovação.
          </p></FadeIn>
        </div>
      </section>

      {/* Serviço 1: Fabricação Sob Medida (Imagem à Esquerda) */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-[120px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 ">
            <FadeIn variant="left">
              <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800" alt="Fabricação" className="rounded-2xl shadow-2xl w-full h-[400px] w-full h-full object-cover" />
            </FadeIn>

            <FadeIn variant="right" delay={0.2}><div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-muted/10">01</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Fabricação Sob Medida</h3>
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

      {/* Serviço 2: Nacionalização (Imagem à Direita) */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-muted/10">02</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Nacionalização de Peças</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Substituição inteligente de peças importadas por componentes nacionais de alta qualidade. Com mais de
                  20 anos de experiência em materiais, oferecemos soluções que reduzem custos e prazos sem comprometer a
                  performance.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{
                  icon: "💰",
                  label: "Até 60%",
                  desc: "de economia"
                }, {
                  icon: "⏱️",
                  label: "Dias",
                  desc: "não meses"
                }, {
                  icon: "🇧🇷",
                  label: "Estoque",
                  desc: "local"
                }, {
                  icon: "🔬",
                  label: "Qualidade",
                  desc: "garantida"
                }].map((item, idx) => <Card key={idx} className="p-4 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-bold text-lg">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </Card>)}
                </div>

                <div className="bg-card p-4 rounded-lg border mb-6">
                  <h4 className="font-semibold mb-3">Como Funciona:</h4>
                  <ol className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">1.</span>
                      <span>Engenharia reversa da peça importada</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">2.</span>
                      <span>Seleção de materiais equivalentes ou superiores</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">3.</span>
                      <span>Fabricação com controle de qualidade rigoroso</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">4.</span>
                      <span>Testes e validação</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-primary">5.</span>
                      <span>Entrega e suporte técnico</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" alt="Nacionalização" className="rounded-2xl shadow-2xl w-full h-full object-cover " />
            </div>
          </div>
        </div>
      </section>

      {/* Serviço 3: Reforma e Manutenção (Imagem à Esquerda) */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800" alt="Reforma" className="rounded-2xl shadow-2xl w-full h-[400px] w-full h-full object-cover" />
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-muted/10">03</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Reforma e Manutenção</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Serviços completos de reforma e manutenção de máquinas de embalagem. Atuamos tanto na parte mecânica
                  quanto eletrônica, devolvendo performance e vida útil aos seus equipamentos.
                </p>

                {/* Tabs */}
                <div className="mb-6">
                  <div className="flex gap-2 mb-4">
                    <Button variant={activeReformaTab === "mecanica" ? "default" : "outline"} onClick={() => setActiveReformaTab("mecanica")} className="flex-1">
                      Reforma Mecânica
                    </Button>
                    <Button variant={activeReformaTab === "eletronica" ? "default" : "outline"} onClick={() => setActiveReformaTab("eletronica")} className="flex-1">
                      Manutenção Eletrônica
                    </Button>
                  </div>

                  <Card className="p-4">
                    <CardContent className="p-0">
                      {activeReformaTab === "mecanica" ? <ul className="space-y-2 text-sm">
                          {["Substituição de componentes desgastados", "Retífica de rolos e eixos", "Troca de rolamentos e buchas", "Alinhamento de conjuntos de corte e selagem", "Ajuste fino de facas e mordentes", "Pintura e acabamento profissional"].map((item, idx) => <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>)}
                        </ul> : <ul className="space-y-2 text-sm">
                          {["Revisão completa de painéis elétricos", "Substituição de sensores e encoders", "Atualização de controladores e inversores", "Calibração de sistemas de controle", "Testes de funcionamento e performance", "Documentação técnica atualizada"].map((item, idx) => <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>)}
                        </ul>}
                    </CardContent>
                  </Card>
                </div>

                <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 border-green-200">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Garantia de Serviço
                </Badge>
                <p className="text-sm text-muted-foreground mb-6">
                  Todos os serviços incluem garantia e suporte pós-reforma
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviço 4: Treinamentos (Imagem à Direita) */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-muted/10">04</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Treinamentos Especializados</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Capacitação técnica para equipes de operação e manutenção. Com experiência na fabricação de máquinas,
                  trazemos técnicas que facilitam manutenção autônoma e operação mais eficiente.
                </p>

                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="curso1">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Curso 1: Ajuste de Facas e Mordentes</div>
                        <div className="text-sm text-muted-foreground">Duração: 8 horas (1 dia) • Presencial</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm mt-2">
                        {["Tipos de facas e mordentes", "Técnicas de ajuste fino com lâminas calibradas", "Uso de blocos de carbono para alinhamento", "Sistemas de ajuste por parafuso cônico vs lâmina de calço", "Resolução de problemas comuns", "Manutenção preventiva"].map((item, idx) => <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curso2">
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-semibold">Curso 2: Operação de Flow Packs</div>
                        <div className="text-sm text-muted-foreground">Duração: 16 horas (2 dias) • Presencial</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm mt-2">
                        {["Princípios de funcionamento de flow packs", "Setup e ajustes de máquina", "Identificação rápida de problemas", "Técnicas de manutenção autônoma", "Otimização de performance e velocidade", "Conceitos de manuais de fabricantes"].map((item, idx) => <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">Benefícios:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {["Redução de paradas", "Maior autonomia", "Resolução rápida", "Certificado incluso"].map((item, idx) => <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-blue-600" />
                          {item}
                        </div>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Treinamento" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Especiais */}
      <section className="py-20 relative" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
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