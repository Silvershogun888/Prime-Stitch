import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { Filter } from 'lucide-react';

const categories = ['All', 'School', 'Corporate', 'Sportswear', 'Winter', 'Accessories', 'Bottoms'];

export const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl mb-4">The Collection</h1>
            <p className="text-fabric-ink/60 text-lg">Browse our range of handcrafted uniforms and apparel.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 relative overflow-hidden group ${activeCategory === cat ? 'text-white' : 'text-fabric-ink hover:bg-fabric-accent/5'
                  }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-fabric-accent -z-0"
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  />
                )}
              </button>
            ))}
          </div>
        </header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="product-card group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-fabric-bg">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-fabric-ink/0 group-hover:bg-fabric-ink/5 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Link to={`/product/${product.id}`}>
                      <Button className="w-full py-3 text-sm">View Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-fabric-muted font-bold">{product.category}</span>
                  <h3 className="font-serif text-2xl">{product.name}</h3>
                  <p className="text-fabric-accent font-medium text-lg">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-fabric-ink/40 text-xl font-serif italic">No items found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};
