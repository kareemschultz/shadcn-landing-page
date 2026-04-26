"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem, FloatingOrb } from "@/components/ui/motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { stats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <FloatingOrb className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <FloatingOrb className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <FadeUp delay={0}>
          <Badge variant="outline" className="mb-6 border-primary/40 text-primary bg-primary/10">
            Trusted Infrastructure Partner
          </Badge>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Reliable Connectivity, Security &amp;{" "}
            <span className="text-primary">Power Infrastructure</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            From Starlink deployments and tower construction to enterprise networking, solar systems,
            CCTV, and access control — we build the systems that power your operations across Guyana.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#contact">Request a Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8">
              <a href="#services">View Our Services</a>
            </Button>
          </div>
        </FadeUp>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
