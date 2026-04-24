"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, Flame, ScanLine, Zap, PackageOpen, ArrowRight, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

const KnifeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={className}>
    <path d="M230.47,33.53a26,26,0,0,0-36.77,0L19.78,207.44a6,6,0,0,0,2.89,10.09A158.72,158.72,0,0,0,58.36,222c32.68,0,65.42-10.11,96.26-30.05,31.43-20.3,49.62-43.27,50.42-44.23a6,6,0,0,0-.47-7.94l-25-25,51.9-51.9A26,26,0,0,0,230.47,33.53ZM188.12,136.29c-9.14,11.1-50.59,46.91-113.71,59.43L135.64,134Zm40.83-91.88L177.05,96.31,159.69,78.95l51.9-51.9a14,14,0,0,1,19.8,19.8Z"></path>
  </svg>
);

const megaMenuData = {
  flowpack: {
    title: "Flow Pack",
    link: "/flow-pack",
    image: "/fotos/novas/flow.jpeg",
    categories: [
      { name: "Selagem", icon: Flame, link: "/flow-pack#selagem" },
      { name: "Corte", icon: KnifeIcon, link: "/flow-pack#corte" },
    ],
  },
  vertical: {
    title: "Verticais",
    link: "/verticais",
    image: "/hero-vffs.png",
    categories: [
      { name: "Selagem", icon: Flame, link: "/verticais#selagem" },
      { name: "Corte", icon: Scissors, link: "/verticais#corte" },
    ],
  },
  sache: {
    title: "Máquina de Sachê Contínua",
    link: "/sache",
    image:
      "/hero-sache.png",
    categories: [
      { name: "Selagem", icon: Flame, link: "/sache#selagem" },
      { name: "Corte", icon: ScanLine, link: "/sache#corte" },
    ],
  },
  components: {
    title: "Ferramentas e Componentes",
    link: "/componentes",
    image:
      "/hero-componentes.png",
    categories: [
      { name: "Transmissão", icon: Zap, link: "/componentes#section-transmissao" },
      { name: "Controle", icon: PackageOpen, link: "/componentes#section-controle" },
    ],
  },
};

export const Navigation = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      e.preventDefault();
      const [path, anchor] = href.split("#");
      const currentPath = window.location.pathname;
      if (currentPath === path) {
        const element = document.getElementById(anchor);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="max-w-[1340px] mx-auto px-6 md:px-24">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image src="/logo.png" alt="JHV Pack Tools" width={160} height={56} className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                <NavigationMenuItem>
                  <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Início
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </Link>
                </NavigationMenuItem>

                {/* MEGA MENU: SOLUÇÕES */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 h-auto">
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!left-auto !right-0 !translate-x-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52">
                    <div className="w-[min(950px,calc(100vw-3rem))] p-8">
                      <div className="grid grid-cols-4 gap-6">
                        {Object.entries(megaMenuData).map(([key, data]) => (
                          <div key={key} className="space-y-4 min-w-0">
                            <NavigationMenuLink asChild>
                              <Link href={data.link} className="block group">
                                <div className="w-full h-32 bg-muted rounded-lg overflow-hidden mb-3">
                                  <img src={data.image} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight min-h-[2.5rem] line-clamp-2">
                                  {data.title}
                                </h3>
                                <div className="h-1 w-12 bg-primary mt-2"></div>
                              </Link>
                            </NavigationMenuLink>

                            <ul className="space-y-2 mt-1">
                              {data.categories.map((category, idx) => (
                                <li key={idx}>
                                  <a
                                    href={category.link}
                                    onClick={(e) => handleAnchorClick(e, category.link)}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                  >
                                    <span className="text-primary font-bold leading-none">•</span>
                                    {category.name}
                                  </a>
                                </li>
                              ))}
                            </ul>

                            <Link href={data.link} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                              Ver tudo
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Serviços
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/parceiros" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Parceiros
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Contato
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>
            <Button asChild><Link href="/contato">Solicitar Orçamento</Link></Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium text-foreground hover:text-primary">Início</Link>
                <Link href="/sobre" className="text-lg font-medium text-foreground hover:text-primary">Sobre Nós</Link>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium text-foreground">Soluções</span>
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20">
                    {Object.entries(megaMenuData).map(([key, data]) => (
                      <Link key={key} href={data.link} className="text-base text-muted-foreground hover:text-primary transition-colors">
                        {data.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/servicos" className="text-lg font-medium text-foreground hover:text-primary">Serviços</Link>
                <Link href="/parceiros" className="text-lg font-medium text-foreground hover:text-primary">Parceiros</Link>
                <Link href="/contato" className="text-lg font-medium text-foreground hover:text-primary">Contato</Link>
                <Button className="mt-4 w-full" asChild><Link href="/contato">Solicitar Orçamento</Link></Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
