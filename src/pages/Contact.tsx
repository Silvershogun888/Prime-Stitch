import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 2000);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl mb-8">Get in <br /><span className="italic text-fabric-accent">Touch</span></h1>
            <p className="text-lg text-fabric-ink/60 mb-12 max-w-md">
              Whether you need a single custom fit or a bulk order for your school or company, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-fabric-accent/10 flex items-center justify-center text-fabric-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-fabric-ink/60">+260 97X XXX XXX</p>
                  <p className="text-fabric-ink/60">+260 96X XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-fabric-accent/10 flex items-center justify-center text-fabric-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-fabric-ink/60">info@primestitch.com</p>
                  <p className="text-fabric-ink/60">sales@primestitch.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-fabric-accent/10 flex items-center justify-center text-fabric-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Our Workshop</h4>
                  <p className="text-fabric-ink/60">10 Miles, Great North Road</p>
                  <p className="text-fabric-ink/60">Lusaka, Zambia</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="mt-16 aspect-video rounded-[2rem] overflow-hidden bg-fabric-accent/5 border border-fabric-accent/10 relative">
              <img src="https://picsum.photos/seed/map/800/450" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <MapPin size={16} className="text-fabric-accent" />
                  <span className="text-sm font-medium">Find us in 10 Miles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-fabric-accent/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-fabric-muted ml-4">Full Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-fabric-bg border border-transparent focus:border-fabric-accent/30 focus:bg-white outline-none transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-fabric-muted ml-4">Email Address</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-fabric-bg border border-transparent focus:border-fabric-accent/30 focus:bg-white outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-fabric-muted ml-4">Service Required</label>
                <select name="service" className="w-full px-6 py-4 rounded-2xl bg-fabric-bg border border-transparent focus:border-fabric-accent/30 focus:bg-white outline-none transition-all duration-300 appearance-none">
                  <option>School Uniforms</option>
                  <option>Corporate Wear</option>
                  <option>Sportswear</option>
                  <option>Custom Tailoring</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-fabric-muted ml-4">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-6 py-4 rounded-2xl bg-fabric-bg border border-transparent focus:border-fabric-accent/30 focus:bg-white outline-none transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={formState !== 'idle'}
              >
                {formState === 'idle' && <><Send size={18} /> Send Message</>}
                {formState === 'sending' && "Sending..."}
                {formState === 'sent' && "Message Sent!"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
