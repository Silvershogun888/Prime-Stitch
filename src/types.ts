import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: 'School' | 'Corporate' | 'Sportswear' | 'Winter' | 'Accessories' | 'Bottoms';
  description: string;
  price: string;
  image: string;
  gallery?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}
