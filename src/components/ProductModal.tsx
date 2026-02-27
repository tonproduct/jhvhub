"use client";

import { X, Download, Mail, Check, Flame, Scissors, Cog, Gauge, Wind, Box, Beaker } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface BaseProduct {
  id: string;
  category: string;
  name: string;
  shortDescription: string;
  description?: string;
  fullDescription: string;
  images: string[];
  specifications: {
    material?: string;
    dimensions?: string;
    weight?: string;
    tolerance?: string;
    operatingTemp?: string;
    coating?: string;
  };
  benefits: string[];
  applications: string[];
  compatibility?: { brands: string[]; models: string[] };
  availability?: string;
  leadTime?: string;
  sku?: string;
  downloads?: Array<{ name: string; url: string; type: string; size: string }>;
  relatedProducts?: string[];
}

interface ProductModalProps {
  product: BaseProduct;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedImageIndex] = useState(0);

  const getCategoryIcon = () => {
    switch (product.category) {
      case 'selagem': return Flame;
      case 'corte': return Scissors;
      case 'transmissao': return Cog;
      case 'controle': return Gauge;
      case 'pneumatico': return Wind;
      case 'formacao': return Box;
      case 'dosagem': return Beaker;
      default: return Cog;
    }
  };

  const getCategoryLabel = () => {
    switch (product.category) {
      case 'selagem': return 'Solução de Selagem';
      case 'corte': return 'Solução de Corte';
      case 'transmissao': return 'Transmissão';
      case 'controle': return 'Controle';
      case 'pneumatico': return 'Pneumático';
      case 'formacao': return 'Formação';
      case 'dosagem': return 'Dosagem';
      default: return product.category;
    }
  };

  const CategoryIcon = getCategoryIcon();
  const placeholderImage = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 gap-0 max-h-[90vh] overflow-y-auto">
        <div className="relative h-80 bg-gradient-to-br from-muted to-muted/80">
          <img src={placeholderImage} alt={product.name} className="w-full h-full object-cover" />
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <Badge className="bg-blue-100 text-blue-700 mb-3 inline-flex items-center gap-2">
              <CategoryIcon className="w-4 h-4" />
              {getCategoryLabel()}
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-3">{product.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.fullDescription}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Principais Benefícios</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 bg-muted rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Especificações Técnicas</h3>
            <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {product.specifications.material && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Material</dt>
                  <dd className="text-foreground">{product.specifications.material}</dd>
                </div>
              )}
              {product.specifications.operatingTemp && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Temperatura de Operação</dt>
                  <dd className="text-foreground">{product.specifications.operatingTemp}</dd>
                </div>
              )}
              {product.specifications.dimensions && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Dimensões</dt>
                  <dd className="text-foreground">{product.specifications.dimensions}</dd>
                </div>
              )}
              {product.specifications.tolerance && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Tolerância</dt>
                  <dd className="text-foreground">{product.specifications.tolerance}</dd>
                </div>
              )}
              {product.specifications.coating && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Revestimento</dt>
                  <dd className="text-foreground">{product.specifications.coating}</dd>
                </div>
              )}
              {product.specifications.weight && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Peso</dt>
                  <dd className="text-foreground">{product.specifications.weight}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Aplicações Recomendadas</h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2">{app}</Badge>
              ))}
            </div>
          </div>

          {product.compatibility && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Compatibilidade</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-blue-900 mb-2">Marcas compatíveis:</p>
                <p className="text-sm text-blue-700">{product.compatibility.brands.join(', ')}</p>
                {product.compatibility.models && product.compatibility.models.length > 0 && (
                  <>
                    <p className="text-sm font-medium text-blue-900 mt-3 mb-2">Modelos:</p>
                    <p className="text-sm text-blue-700">{product.compatibility.models.join(', ')}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {product.downloads && product.downloads.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Downloads</h3>
              <div className="space-y-2">
                {product.downloads.map((download, index) => (
                  <a key={index} href={download.url} download className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{download.name}</p>
                        <p className="text-xs text-muted-foreground">{download.type} • {download.size}</p>
                      </div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Baixar →</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-border pt-6 mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1 min-w-[200px]" asChild>
                <Link href="/contato">
                  <Mail className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 min-w-[200px]">
                <Download className="w-5 h-5 mr-2" />
                Baixar Ficha Técnica
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
