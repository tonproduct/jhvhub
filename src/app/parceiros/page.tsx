"use client";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";

export default function Parceiros() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
        <Construction className="w-16 h-16 text-primary mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Página em Construção</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Estamos preparando algo especial para nossos parceiros. Em breve!
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o início
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
