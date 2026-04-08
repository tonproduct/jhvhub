import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Empresa */}
          <div>
            <div className="mb-6">
              <Image src="/logo.png" alt="JHV Pack Tools" width={160} height={48} className="h-12 w-auto brightness-0 invert opacity-80" />
            </div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">• Início</Link></li>
              <li><Link href="/sobre" className="hover:text-primary transition-colors">• Sobre Nós</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">• Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 2: Soluções */}
          <div className="md:pt-[70px]">
            <h3 className="text-white font-bold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><Link href="/flow-pack" className="hover:text-primary transition-colors">• Flow Pack</Link></li>
              <li><Link href="/verticais" className="hover:text-primary transition-colors">• Embaladoras Verticais</Link></li>
              <li><Link href="/sache" className="hover:text-primary transition-colors">• Máquinas de Sachê</Link></li>
              <li><Link href="/componentes" className="hover:text-primary transition-colors">• Ferramentas e Componentes</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="md:pt-[70px]">
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link href="/servicos" className="hover:text-primary transition-colors">• Nossos Serviços</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="md:pt-[70px]">
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@jhvtools.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contato@jhvtools.com.br</span>
                </a>
              </li>
              <li>
                <a href="tel:+5519981791472" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(19) 98179-1472</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5519981791472" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp 24/7</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>São Paulo, SP<br />Brasil</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 JHV Pack Tools. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
