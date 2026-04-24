import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

interface NavItem {
  href: string;
  image: string;
  label: string;
  title: string;
}

interface RelatedEquipmentNavProps {
  items: [NavItem, NavItem];
}

export function RelatedEquipmentNav({ items }: RelatedEquipmentNavProps) {
  return (
    <section>
      <FadeIn variant="up">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-auto sm:h-72">
          <Link href={items[0].href} className="group relative overflow-hidden h-40 sm:h-full">
            <img src={items[0].image} alt={items[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/35 group-hover:from-gray-900/85 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1 sm:mb-3">{items[0].label}</p>
                <h4 className="text-xl sm:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">{items[0].title}</h4>
              </div>
              <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 text-white flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
          <Link href={items[1].href} className="group relative overflow-hidden h-40 sm:h-full border-t sm:border-t-0 sm:border-l border-white/10">
            <img src={items[1].image} alt={items[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/35 group-hover:from-gray-900/85 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1 sm:mb-3">{items[1].label}</p>
                <h4 className="text-xl sm:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">{items[1].title}</h4>
              </div>
              <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 text-white flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
