"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              How It Works
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Process</h2>
          </FadeUp>
        </div>

        {/* Desktop horizontal layout */}
        <div className="hidden lg:flex items-start gap-0">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <FadeUp delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center px-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                      <span className="text-primary font-bold text-sm">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              </div>
              {index < processSteps.length - 1 && (
                <div className="flex items-center mt-7 flex-shrink-0">
                  <motion.div
                    className="h-px w-12 bg-primary/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical layout */}
        <div className="flex flex-col gap-8 lg:hidden">
          {processSteps.map((step, index) => (
            <FadeUp key={step.step} delay={index * 0.1}>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
