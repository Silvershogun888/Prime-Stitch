import React from 'react';
import { motion, useMotionValue } from 'motion/react';
import { Button } from '../components/Button';
import { PRODUCTS, SERVICES } from '../constants';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } }
};

const ProductCard = ({ product }: { product: any; key?: string | number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="product-card group cursor-pointer"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-fabric-bg">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-fabric-ink/0 group-hover:bg-fabric-ink/10 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <Button className="w-full py-3 text-sm">Quick View</Button>
          </div>
        </div>
        <span className="text-xs uppercase tracking-widest text-fabric-muted mb-2 block">{product.category}</span>
        <h3 className="font-serif text-xl mb-1">{product.name}</h3>
        <p className="text-fabric-accent font-medium">{product.price}</p>
      </Link>
    </motion.div>
  );
};

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Fabric Reveal Mask */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ originY: 0 }}
        className="fixed inset-0 bg-fabric-accent z-[150] pointer-events-none"
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center px-6 py-12 md:py-20">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://i.imgur.com/H5CJ5bf.png"
            alt="Tailoring background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="inline-block px-4 py-1 rounded-full border border-fabric-accent/30 text-fabric-accent text-xs uppercase tracking-[0.2em] mb-6"
            >
              Handcrafted in Lusaka
            </motion.span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-light leading-[0.9] mb-8 max-w-4xl">
            {["The", "Art", "of", "Perfect", "Fit."].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-4 last:mr-0">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.6 + (i * 0.1)
                  }}
                  className={`inline-block ${word === 'Perfect' ? 'italic text-fabric-accent' : ''}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="text-lg md:text-xl text-fabric-ink/70 max-w-xl mb-10 leading-relaxed"
          >
            From school uniforms to blazers, we bring industrial precision and master craftsmanship to every stitch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/collection">
              <Button>Explore Collection</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">Our Process</Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Fabric Detail */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 hidden lg:block w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <img src="https://i.imgur.com/bXZaJMV.png" alt="Fabric detail" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Why Choose Us - Sequential Stitch Reveal */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Shield, title: "Industrial Quality", desc: "Using heavy-duty industrial machinery for seams that never fail." },
              { icon: Star, title: "Master Tailoring", desc: "Decades of experience in pattern making and garment construction." },
              { icon: Clock, title: "Timely Delivery", desc: "Efficient production cycles ensuring your orders arrive when needed." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-fabric-accent/10 flex items-center justify-center mb-6 text-fabric-accent">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-fabric-ink/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-fabric-accent uppercase tracking-widest text-xs font-bold mb-4 block">Our Work</span>
              <h2 className="font-serif text-4xl md:text-6xl">Featured Collection</h2>
            </div>
            <Link to="/collection" className="hidden md:flex items-center gap-2 text-fabric-accent hover:gap-4 transition-all duration-300">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] bg-fabric-accent p-12 md:p-24 text-center text-white overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full border-8 border-white border-dashed rounded-[3rem] scale-95" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 relative z-10">Ready for a custom fit?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto relative z-10">
              Visit our shop in 10 Miles, Lusaka or contact us for bulk school and corporate orders.
            </p>
            <Link to="/contact">
              <Button variant="secondary" className="relative z-10">Get in Touch</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
