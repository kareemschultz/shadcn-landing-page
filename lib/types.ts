export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Industry {
  icon: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Project {
  title: string;
  tag: string;
  color: string;
}
