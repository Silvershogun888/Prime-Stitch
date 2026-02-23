import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fabric-accent uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
          >
            Our Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-8"
          >
            The Tailoring Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-fabric-ink/60 leading-relaxed"
          >
            We combine traditional craftsmanship with industrial efficiency to deliver garments that are both beautiful and durable.
          </motion.p>
        </header>

        <div className="space-y-40">
          {SERVICES.map((service, index) => (
            <motion.section
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center relative`}
            >
              {/* Diagonal Fold Wipe Overlay */}
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                style={{ originX: index % 2 === 0 ? 0 : 1 }}
                className="absolute inset-0 bg-fabric-accent/5 z-10 pointer-events-none rounded-3xl"
              />

              <div className="flex-1">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-fabric-accent/5">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={`https://picsum.photos/seed/${service.id}/800/800`}
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-serif text-fabric-accent/20">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-fabric-accent/10" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl">{service.title}</h2>
                <p className="text-lg text-fabric-ink/70 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-fabric-ink/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-fabric-accent" />
                      {step}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block pt-4">
                  <Button variant="outline">Inquire About Service</Button>
                </Link>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Equipment Section */}
        <section className="mt-40 py-24 bg-fabric-accent rounded-[3rem] text-white px-12 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Industrial Grade Precision</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
            Our workshop is equipped with industrial sewing machines, overlockers, and professional pressing equipment to handle high-volume orders without compromising on quality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {['Industrial Stitching', 'Seam Finishing', 'Precision Cutting', 'Steam Pressing'].map((item, i) => (
              <div key={i} className="p-4 md:p-6 border border-white/10 rounded-2xl bg-white/5 flex items-center justify-center text-center">
                <span className="text-[10px] md:text-sm uppercase tracking-wider md:tracking-widest opacity-60 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
