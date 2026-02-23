import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { ArrowLeft, ShoppingBag, Ruler, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = React.useState(product?.image || '');

  // Update active image when product changes
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h2 className="font-serif text-4xl mb-8">Product not found</h2>
        <Link to="/collection">
          <Button variant="outline">Back to Collection</Button>
        </Link>
      </div>
    );
  }

  const allImages = [product.image, ...(product.gallery || [])];

  const handleNext = () => {
    const currentIndex = allImages.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setActiveImage(allImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = allImages.indexOf(activeImage);
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setActiveImage(allImages[prevIndex]);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/collection" className="inline-flex items-center gap-2 text-fabric-accent mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={20} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-fabric-bg relative group"
            >
              <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-fabric-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {allImages.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.preventDefault(); handlePrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-fabric-ink opacity-0 group-hover:opacity-100 transition-all hover:bg-white z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); handleNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-fabric-ink opacity-0 group-hover:opacity-100 transition-all hover:bg-white z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
            
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((img, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-2xl overflow-hidden bg-fabric-bg cursor-pointer transition-all border-2 ${
                      activeImage === img ? 'border-fabric-accent shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Detail ${i}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <span className="text-fabric-accent uppercase tracking-[0.2em] text-xs font-bold mb-4 block">{product.category}</span>
              <h1 className="font-serif text-5xl md:text-6xl mb-4">{product.name}</h1>
              <p className="text-3xl text-fabric-accent font-light">{product.price}</p>
            </div>

            <p className="text-lg text-fabric-ink/70 leading-relaxed">
              {product.description} Our {product.name.toLowerCase()} is crafted using high-quality materials sourced for durability and comfort. Every seam is reinforced with industrial-grade stitching to withstand daily wear.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-fabric-accent/5 border border-fabric-accent/10">
                <Ruler className="text-fabric-accent" />
                <div>
                  <h4 className="font-medium text-sm">Custom Sizing Available</h4>
                  <p className="text-xs text-fabric-ink/60">Visit our shop for a professional fitting.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-fabric-accent/5 border border-fabric-accent/10">
                <ShieldCheck className="text-fabric-accent" />
                <div>
                  <h4 className="font-medium text-sm">Industrial Quality Guarantee</h4>
                  <p className="text-xs text-fabric-ink/60">Reinforced stitching and premium fabric.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button className="flex-grow py-5">
                <ShoppingBag size={20} /> Order Now
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto py-5">Request Quote</Button>
              </Link>
            </div>

            <div className="pt-10 border-t border-fabric-accent/10">
              <h4 className="text-xs uppercase tracking-widest font-bold text-fabric-muted mb-4">Product Details</h4>
              <ul className="grid grid-cols-2 gap-y-4 text-sm text-fabric-ink/70">
                <li>• 100% Durable Fabric</li>
                <li>• Industrial Stitching</li>
                <li>• Easy-Iron Finish</li>
                <li>• Fade Resistant</li>
                <li>• Reinforced Seams</li>
                <li>• Local Craftsmanship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
