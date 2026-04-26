"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  GraduationCap,
  Tractor,
  Hotel,
  HardHat,
} from "lucide-react";
import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { industries } from "@/lib/data";

const iconMap: Record<string, ElementType> = {
  Home,
  Building2,
  GraduationCap,
  Tractor,
  Hotel,
  HardHat,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Who We Serve
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for Every Sector
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From residential homes to remote commercial sites — we have the experience and
              equipment for any environment.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <StaggerItem key={industry.label}>
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-border bg-card hover:border-primary/30 transition-colors duration-300 cursor-default">
                    <CardContent className="pt-6 pb-6 flex flex-col items-center text-center gap-3">
                      {Icon && <Icon className="h-8 w-8 text-primary" />}
                      <span className="text-sm font-medium text-foreground">{industry.label}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
