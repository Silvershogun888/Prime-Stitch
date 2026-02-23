import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  liquid?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', liquid = true, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96, y: 2 }}
        className={cn(
          "relative px-8 py-4 rounded-full font-medium transition-all duration-300 group",
          variant === 'primary' && "bg-fabric-accent text-white shadow-md hover:shadow-lg",
          variant === 'secondary' && "bg-white text-fabric-accent shadow-sm hover:shadow-md",
          variant === 'outline' && "border border-fabric-accent text-fabric-accent hover:bg-fabric-accent/5",
          className
        )}
        {...props}
      >
        {/* Liquid Effect Container - Handles clipping for the hover effect without clipping the button shadow */}
        {liquid && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-fabric" />
          </div>
        )}
        
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);
