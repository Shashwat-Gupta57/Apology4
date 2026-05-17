import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function FloatingSparkles({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const newSparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 20 + 20, // 20-40px
    };
    
    setSparkles(prev => [...prev, newSparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1500);
  }, []);

  return (
    <div className="relative min-h-screen" onPointerDown={handlePointerDown}>
      {/* Background Soft Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-honey/20 blur-[120px] rounded-full mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose/10 blur-[140px] rounded-full mix-blend-multiply" 
        />
        <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] bg-peach/30 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-lavender/30 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 pb-32">
        {children}
      </div>

      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x - 20, y: sparkle.y - 40 }}
            animate={{ 
              opacity: 0, 
              scale: 1, 
              y: sparkle.y - 120,
              x: sparkle.x - 20 + (Math.random() * 40 - 20)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed pointer-events-none z-50 text-rose"
            style={{ width: sparkle.size, height: sparkle.size }}
          >
            <Heart fill="currentColor" stroke="none" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
