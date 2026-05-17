import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeartCrack } from "lucide-react";

export function WaitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    // Show after 4 seconds of being on the page to interrupt reading
    const timer = setTimeout(() => {
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasSeen]);

  const handleClose = () => {
    setIsOpen(false);
    setHasSeen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cream/80 backdrop-blur-md"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -2, 2, 0], 
              rotate: [0, -1, 1, 0, -2, 2, 0],
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              scale: { type: "spring", damping: 20, stiffness: 300 },
              y: { repeat: Infinity, duration: 0.2, ease: "linear" },
              rotate: { repeat: Infinity, duration: 0.15, ease: "linear" }
            }}
            className="relative bg-white border-2 border-raspberry/40 p-8 rounded-[2rem] shadow-[0_0_50px_rgba(217,79,125,0.4)] max-w-sm w-full text-center z-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-raspberry via-rose to-mauve" />
            
            <motion.div 
              animate={{ scale: [1, 1.2, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              className="mx-auto w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mb-6 text-raspberry"
            >
              <HeartCrack size={32} strokeWidth={2} />
            </motion.div>
            
            <motion.h3 
              animate={{ opacity: [1, 0.5, 1], x: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
              className="font-handwriting text-4xl text-cocoa mb-4"
            >
              Wait... stop. PLEASE.
            </motion.h3>
            
            <p className="font-serif text-lg text-dusty mb-6 leading-relaxed">
              I need to tell you something before you keep reading.<br /><br />
              <motion.span 
                className="inline-block text-raspberry font-medium"
                animate={{ color: ["#8A6A67", "#D94F7D", "#8A6A67"] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                I really am trying my best to fix things. The thought of you giving up on me breaks me from the inside.
              </motion.span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="w-full py-4 bg-rose/10 hover:bg-rose/20 text-raspberry font-serif rounded-xl transition-all duration-200 border border-transparent hover:border-raspberry/30 font-medium"
            >
              I'm listening...
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
