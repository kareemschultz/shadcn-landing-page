"use client";

import {
  Zap,
  MapPin,
  Layers,
  BadgeDollarSign,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/motion";
import { whyUs } from "@/lib/data";

const iconMap: Record<string, ElementType> = {
  Zap,
  MapPin,
  Layers,
  BadgeDollarSign,
  ShieldCheck,
  Headphones,
};

export function WhyUsSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Why Satlinkgy
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Choose Us
            </h2>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <Card className="h-full border-border bg-card hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <ScaleIn>
                      {Icon && (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      )}
                    </ScaleIn>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
