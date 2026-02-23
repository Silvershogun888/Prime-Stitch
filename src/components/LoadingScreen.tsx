import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL, COMPANY_NAME } from '../constants';

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-[1000] bg-fabric-bg flex flex-col items-center justify-center"
        >
          <div className="relative">
            {/* Soft pulse effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-fabric-accent rounded-full blur-3xl"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src={LOGO_URL}
                alt={COMPANY_NAME}
                className="h-24 w-24 object-contain mb-8 rounded-full border border-fabric-accent/10 shadow-xl"
              />
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="font-serif text-2xl tracking-tight text-fabric-ink"
                >
                  {COMPANY_NAME}
                </motion.h2>
              </div>

              {/* Progress line */}
              <div className="w-32 h-[1px] bg-fabric-accent/10 mt-6 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-fabric-accent"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 text-[10px] uppercase tracking-[0.3em] font-bold text-fabric-muted"
          >
            Handcrafted Excellence
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
