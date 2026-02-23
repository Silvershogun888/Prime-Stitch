import React from 'react';
import { motion } from 'motion/react';
import { MILESTONES, COMPANY_NAME } from '../constants';

export const About = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-fabric-accent uppercase tracking-widest text-xs font-bold mb-6 block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Crafting Quality <br />
              <span className="italic text-fabric-accent">Since 2024</span>
            </h1>
            <div className="space-y-6 text-lg text-fabric-ink/70 leading-relaxed">
              <p>
                Prime Stitch Clothing began with a simple mission: to provide Zambian students and professionals with uniforms that reflect their dignity and ambition.
              </p>
              <p>
                Located in the heart of 10 Miles, Lusaka, we've grown from a small workshop into a professional tailoring enterprise, combining local artistry with industrial efficiency.
              </p>
              <p>
                Our partnership model ensures that every order is handled with disciplined care, from the first measurement to the final stitch.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="https://picsum.photos/seed/about/800/1000" alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-fabric-accent rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl">
              <p className="font-serif text-lg italic">"Every stitch tells a story of quality."</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-40">
          <h2 className="font-serif text-4xl md:text-6xl mb-20 text-center">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Thread Path */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-fabric-accent/20 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24">
              {MILESTONES.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-4xl font-serif text-fabric-accent mb-2 block">{m.year}</span>
                    <h3 className="text-2xl font-medium mb-4">{m.title}</h3>
                    <p className="text-fabric-ink/60">{m.description}</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-fabric-accent border-4 border-fabric-bg" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="font-serif text-4xl md:text-6xl mb-20 text-center">The Hands Behind the Stitch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { name: 'Mafunase Mako', role: 'Operating Partner', desc: 'Master tailor with over 15 years of experience in garment construction.' },
              { name: 'Barbara Moyo', role: 'Investor Partner', desc: 'Strategic visionary ensuring the growth and sustainability of our enterprise.' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-fabric-accent/5 text-center"
              >
                <div className="w-24 h-24 bg-fabric-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center text-fabric-accent font-serif text-3xl">
                  {member.name[0]}
                </div>
                <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
                <span className="inline-block px-4 py-1 rounded-full bg-fabric-accent/5 text-fabric-accent text-xs uppercase tracking-widest mb-4">
                  {member.role}
                </span>
                <p className="text-fabric-ink/60">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
