import { School, Briefcase, Trophy, Snowflake, Scissors, Ruler, CheckCircle, Zap } from 'lucide-react';
import { Product, Service, Milestone } from './types';

export const COMPANY_NAME = "Prime Stitch Clothing";
export const LOGO_URL = "https://i.imgur.com/FLl5NRD.png";

export const SERVICES: Service[] = [
  {
    id: 'measuring',
    title: 'Precision Measuring',
    description: 'Every garment starts with a perfect fit. We take over 20 unique measurements to ensure absolute comfort.',
    icon: Ruler,
    steps: ['Individual Fitting', 'Size Consultation', 'Pattern Adjustment']
  },
  {
    id: 'cutting',
    title: 'Expert Cutting',
    description: 'Using industrial-grade cutting tables and precision tools to ensure every piece is cut to exact specifications.',
    icon: Scissors,
    steps: ['Fabric Inspection', 'Pattern Placement', 'Precision Cut']
  },
  {
    id: 'stitching',
    title: 'Master Stitching',
    description: 'Our industrial sewing machines and overlockers create durable, beautiful seams that last.',
    icon: Zap,
    steps: ['Industrial Seaming', 'Reinforced Points', 'Detail Finishing']
  },
  {
    id: 'finishing',
    title: 'Quality Finishing',
    description: 'Professional ironing, pressing, and final inspection before branding and delivery.',
    icon: CheckCircle,
    steps: ['Steam Pressing', 'Embroidery & Branding', 'Final QC']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic School Shirt',
    category: 'School',
    description: 'Durable, easy-iron white shirt designed for daily school wear.',
    price: 'K150',
    image: 'https://i.imgur.com/bXZaJMV.png',
    gallery: [
      'https://i.imgur.com/NdLADdO.png',
      'https://i.imgur.com/2efT506.png'
    ]
  },
  {
    id: '2',
    name: 'Blazers',
    category: 'Corporate',
    description: 'Tailored professional blazer with reinforced stitching and premium lining.',
    price: 'K850',
    image: 'https://i.imgur.com/DHEJaig.png',
    gallery: [
      'https://i.imgur.com/vrQR4MU.png',
      'https://i.imgur.com/xpJg6D0.png',
      'https://i.imgur.com/02kEANI.png',
      'https://i.imgur.com/QZgjNt8.png',
      'https://i.imgur.com/3BGR80r.png',
      'https://i.imgur.com/4yeO3LK.png'
    ]
  },
  {
    id: '3',
    name: 'School Tracksuit',
    category: 'Sportswear',
    description: 'Breathable, flexible sportswear for active students and teams.',
    price: 'K450',
    image: 'https://i.imgur.com/q38PoBH.png',
    gallery: [
      'https://i.imgur.com/bgDiM5C.png',
      'https://i.imgur.com/enxtPXe.png',
      'https://i.imgur.com/DUfsZbZ.png',
      'https://i.imgur.com/jMD3tVP.png',
      'https://i.imgur.com/amjdvu1.png',
      'https://i.imgur.com/3SqeRBA.png',
      'https://i.imgur.com/5tOf4b5.png',
      'https://i.imgur.com/cphdmig.png',
      'https://i.imgur.com/ShTwbo1.png',
      'https://i.imgur.com/wyoyVuH.png',
      'https://i.imgur.com/wDAH8Ju.png',
      'https://i.imgur.com/CMRYVfs.png'
    ]
  },
  {
    id: '4',
    name: 'Premium Winter Jackets',
    category: 'Winter',
    description: 'Heavyweight fleece jacket for maximum warmth during cold seasons.',
    price: 'K350',
    image: 'https://i.imgur.com/N1kc561.png',
    gallery: [
      'https://i.imgur.com/z2OpGko.png',
      'https://i.imgur.com/DdrKtAR.png',
      'https://i.imgur.com/PVQXnsA.png'
    ]
  },
  {
    id: '5',
    name: 'Socks, Ties and Head socks',
    category: 'Accessories',
    description: 'Essential school accessories including durable socks, ties, and head socks.',
    price: 'K50',
    image: 'https://i.imgur.com/YN5SyuB.png',
    gallery: [
      'https://i.imgur.com/0DvD4Bs.png',
      'https://i.imgur.com/poAAEK2.png',
      'https://i.imgur.com/XImtWeJ.png',
      'https://i.imgur.com/XfEisIy.png'
    ]
  },
  {
    id: '6',
    name: 'Premium Bottoms',
    category: 'Bottoms',
    description: 'High-quality trousers and skirts designed for durability and a professional look.',
    price: 'K250',
    image: 'https://picsum.photos/seed/bottoms/800/1000',
    gallery: [
      'https://picsum.photos/seed/bottoms1/800/1000',
      'https://picsum.photos/seed/bottoms2/800/1000'
    ]
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2024',
    title: 'The Foundation',
    description: 'Established in 10 Miles, Lusaka with a vision for premium Zambian tailoring.'
  },
  {
    year: '2025',
    title: 'Industrial Expansion',
    description: 'Upgraded to industrial-grade machinery to handle bulk school orders.'
  },
  {
    year: '2026',
    title: 'Digital Presence',
    description: 'Launching our handcrafted digital experience to reach more clients.'
  }
];
