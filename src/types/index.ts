import type { ReactNode } from "react";

// ==========================================
// UI COMPONENT TYPES
// ==========================================

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

// ==========================================
// NAVIGATION
// ==========================================

export interface NavItem {
  label: string;
  href: string;
}

// ==========================================
// HERO / STATS
// ==========================================

export interface StatItem {
  value: string;
  label: string;
}

// ==========================================
// PROCESS
// ==========================================

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

// ==========================================
// SERVICES
// ==========================================

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ==========================================
// INDUSTRIES
// ==========================================

export interface IndustryItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

// ==========================================
// PORTFOLIO / PROJECTS
// ==========================================

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

// ==========================================
// TESTIMONIALS
// ==========================================

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: string;
  rating?: number;
}

// ==========================================
// FAQ
// ==========================================

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// ==========================================
// CONTACT FORM
// ==========================================

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// ==========================================
// REUSABLE CARD
// ==========================================

export interface CardProps {
  children: ReactNode;
  className?: string;
}
