"use client";

import { motion, type Variant } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export const FadeIn = ({ children, className, variant = "up", delay = 0, duration = 0.6, once = true, amount = 0.15 }: FadeInProps) => {
  const v = variants[variant];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: v.hidden,
        visible: { ...v.visible, transition: { duration, delay, ease: [0.25, 0.4, 0.25, 1] } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export const StaggerChildren = ({ children, className, staggerDelay = 0.1, once = true, amount = 0.15 }: StaggerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
}) => {
  const v = variants[variant];
  return (
    <motion.div
      variants={{
        hidden: v.hidden,
        visible: { ...v.visible, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
