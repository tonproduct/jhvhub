"use client";
import Link from "next/link";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/FadeIn";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Campos obrigatórios", { description: "Por favor, preencha nome, email e mensagem." });
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f1f70ff6-1e4d-489a-8f4e-8127dd8f06b4",
          name,
          email,
          phone,
          message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      toast.success("Mensagem enviada!", { description: "Entraremos em contato em breve." });
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Erro ao enviar", { description: "Tente novamente ou entre em contato por telefone." });
    } finally {
      setIsLoading(false);
    }
  };

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn variant="up">
            <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Entre em Contato</h1>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn variant="left" delay={0.1}>
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium mb-2">Nome</label><Input placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} /></div>
                <div><label className="block text-sm font-medium mb-2">Email</label><Input type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} /></div>
                <div><label className="block text-sm font-medium mb-2">Telefone</label><Input placeholder="(11) 99999-9999" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isLoading} /></div>
                <div><label className="block text-sm font-medium mb-2">Mensagem</label><Textarea placeholder="Como podemos ajudar?" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} disabled={isLoading} /></div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Enviando...</> : "Enviar Mensagem"}
                </Button>
              </form>
            </FadeIn>

            <FadeIn variant="right" delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">Informações</h2>
              <StaggerChildren className="space-y-6" staggerDelay={0.15}>
                <StaggerItem><div className="flex items-start gap-4"><div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold mb-1">Telefone</h3><p className="text-muted-foreground">(19) 3500-6957</p><p className="text-sm text-muted-foreground">Seg-Sex: 8h às 18h</p></div></div></StaggerItem>
                <StaggerItem><div className="flex items-start gap-4"><div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold mb-1">Email</h3><p className="text-muted-foreground">vendas@jhvpacktools.com.br</p></div></div></StaggerItem>
                <StaggerItem><div className="flex items-start gap-4"><div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-primary" /></div><div><h3 className="font-bold mb-1">Endereço</h3><p className="text-muted-foreground">São Paulo, SP<br />Brasil</p></div></div></StaggerItem>
              </StaggerChildren>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn variant="up">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          </FadeIn>

          <FadeIn variant="up" delay={0.2}>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq1"><AccordionTrigger>Qual o prazo para fabricação sob medida?</AccordionTrigger><AccordionContent>O prazo varia conforme a complexidade da peça, mas geralmente trabalhamos com prazos de 7 a 15 dias úteis para peças simples e até 30 dias para conjuntos mais complexos. Consulte-nos para uma estimativa precisa.</AccordionContent></AccordionItem>
              <AccordionItem value="faq2"><AccordionTrigger>Como funciona o processo de nacionalização?</AccordionTrigger><AccordionContent>Fazemos engenharia reversa da peça importada, analisamos materiais e especificações, fabricamos uma amostra para aprovação e, após validação, iniciamos a produção. Todo o processo é documentado e garantido.</AccordionContent></AccordionItem>
              <AccordionItem value="faq3"><AccordionTrigger>Vocês atendem em todo o Brasil?</AccordionTrigger><AccordionContent>Sim! Atendemos em todo território nacional. Para serviços que exigem presença física (como treinamentos e visitas técnicas), incluímos deslocamento no orçamento.</AccordionContent></AccordionItem>
              <AccordionItem value="faq4"><AccordionTrigger>Os treinamentos podem ser personalizados?</AccordionTrigger><AccordionContent>Sim! Podemos adaptar o conteúdo dos cursos de acordo com as necessidades específicas da sua equipe e dos equipamentos que você utiliza. Entre em contato para montar um treinamento sob medida.</AccordionContent></AccordionItem>
              <AccordionItem value="faq5"><AccordionTrigger>Qual a garantia dos serviços?</AccordionTrigger><AccordionContent>Oferecemos garantia de 90 dias para serviços de reforma e manutenção, e de 6 meses para peças fabricadas por nós. A garantia cobre defeitos de fabricação e falhas prematuras em condições normais de uso.</AccordionContent></AccordionItem>
              <AccordionItem value="faq6"><AccordionTrigger>Como solicitar um orçamento?</AccordionTrigger><AccordionContent>Você pode solicitar orçamento através do WhatsApp, e-mail ou preenchendo o formulário de contato. Envie fotos, especificações técnicas ou desenhos técnicos da peça para um orçamento mais preciso.</AccordionContent></AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contato;
