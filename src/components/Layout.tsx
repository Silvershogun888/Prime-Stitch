import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue } from 'motion/react';
import { Cursor } from './Cursor';
import { COMPANY_NAME, LOGO_URL } from '../constants';
import { Menu, X, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link 
      to={to} 
      className="relative px-4 py-2 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span 
        className="relative z-10 text-sm font-medium tracking-wide uppercase block"
        style={{ x, y }}
        animate={{ color: isActive ? 'var(--color-fabric-accent)' : 'var(--color-fabric-ink)' }}
      >
        {children}
      </motion.span>
      {isActive && (
        <motion.div
          layoutId="nav-active"
          className="absolute inset-0 bg-fabric-accent/5 rounded-full -z-0"
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        />
      )}
      <motion.div 
        className="absolute bottom-0 left-4 right-4 h-[1px] bg-fabric-accent origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Cursor />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-fabric-bg/80 backdrop-blur-md border-b border-fabric-accent/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={LOGO_URL} alt={COMPANY_NAME} className="h-10 w-10 object-contain rounded-full border border-fabric-accent/20 group-hover:scale-110 transition-transform duration-500" />
            <span className="font-serif text-xl font-semibold tracking-tight">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/collection">Collection</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-fabric-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-fabric-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Services</Link>
              <Link to="/collection" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Collection</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-fabric-ink text-fabric-bg py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl mb-6">Prime Stitch Clothing</h3>
            <p className="text-fabric-bg/60 max-w-md mb-8">
              Handcrafted excellence in every stitch. Based in 10 Miles, Lusaka, we provide premium uniform solutions for schools and corporate entities across Zambia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-fabric-bg/20 rounded-full hover:bg-fabric-bg/10 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 border border-fabric-bg/20 rounded-full hover:bg-fabric-bg/10 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 border border-fabric-bg/20 rounded-full hover:bg-fabric-bg/10 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-widest text-xs opacity-50">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-fabric-accent transition-colors">Tailoring Services</Link></li>
              <li><Link to="/collection" className="hover:text-fabric-accent transition-colors">School Uniforms</Link></li>
              <li><Link to="/collection" className="hover:text-fabric-accent transition-colors">Corporate Wear</Link></li>
              <li><Link to="/about" className="hover:text-fabric-accent transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-widest text-xs opacity-50">Contact</h4>
            <ul className="space-y-4 text-fabric-bg/80">
              <li className="flex items-center gap-2"><Phone size={16} /> +260 97X XXX XXX</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@primestitch.com</li>
              <li className="opacity-60">10 Miles, Great North Road<br />Lusaka, Zambia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-fabric-bg/10 flex flex-col md:row justify-between items-center gap-4 text-sm opacity-40">
          <p>© 2026 Prime Stitch Clothing. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
