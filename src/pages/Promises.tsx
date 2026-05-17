import { motion } from "motion/react";
import { ScrapbookCard } from "../components/ScrapbookCard";
import { Heart } from "lucide-react";

export default function Promises() {
  const promises = [
    { text: "I won't ever give up on you, just as you never gave up on me.", icon: "🥺", isTrembling: true },
    { text: "I am banning silent treatments forever. No more shutting you out.", icon: "🚫", isFrantic: true },
    { text: "I promise to call you daily. No more missing it. No excuses.", icon: "📞", isTrembling: true },
    { text: "I will do whatever you say. You basically own me. I am yours.", icon: "🧎", isTrembling: false },
    { text: "You have an absolute VETO. If you use it, I will never even cross-question your decision. Period.", icon: "⚖️", isFrantic: true },
    { text: "I won't ever leave you. Even if everyone in the world is against me, I will choose to stick along with you.", icon: "🌍", isTrembling: true }
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 pt-16 md:pt-24 flex flex-col gap-8 pb-32 relative">
      {/* Frantic background text layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-10 flex flex-col justify-between pt-[20vh] pb-[20vh]">
        {[...Array(6)].map((_, i) => (
          <motion.p
            key={i}
            initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
            animate={{ x: i % 2 === 0 ? '100%' : '-100%' }}
            transition={{ repeat: Infinity, duration: 15 + i * 4, ease: "linear" }}
            className="font-handwriting text-5xl md:text-8xl text-raspberry whitespace-nowrap"
          >
            I promise... I promise... I will do anything... whatever you want...
          </motion.p>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 relative"
      >
        <motion.p 
          animate={{ x: [-2, 2, -1, 1], rotate: [-3, -1, -3] }}
          transition={{ repeat: Infinity, duration: 0.2 }}
          className="font-handwriting text-raspberry text-5xl md:text-6xl tracking-wide"
        >
          My Absolute Promises
        </motion.p>
        <p className="font-serif text-lg text-dusty mt-4">
          Things I am sworn to. No matter what.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-raspberry/40 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12">
        {promises.map((promise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <motion.div 
              animate={promise.isTrembling || promise.isFrantic ? { scale: [1, 1.2, 1], boxShadow: ["0 0 0px #D94F7D", "0 0 15px #D94F7D", "0 0 0px #D94F7D"] } : {}}
              transition={{ repeat: Infinity, duration: promise.isFrantic ? 0.2 : 0.8 }}
              className="absolute -left-[45px] md:-left-[61px] top-4 w-6 h-6 bg-cream border-4 border-raspberry rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(217,79,125,0.5)]" 
            />
            <ScrapbookCard 
              rotate={index % 2 === 0 ? 1 : -1} 
              className="p-6 md:p-8"
              isTrembling={promise.isTrembling}
              isFrantic={promise.isFrantic}
            >
              <div className="flex items-start gap-4">
                <motion.span 
                  animate={promise.isFrantic ? { rotate: [0, -20, 20, 0] } : {}} 
                  transition={{ repeat: Infinity, duration: 0.3 }}
                  className="text-4xl"
                >
                  {promise.icon}
                </motion.span>
                <p className="text-lg md:text-xl text-cocoa font-serif leading-relaxed font-medium">
                  {promise.text}
                </p>
              </div>
            </ScrapbookCard>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center flex flex-col items-center justify-center gap-4 text-raspberry"
      >
        <motion.div animate={{ scale: [1, 1.5, 1], rotate: [-10, 10, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 0.4 }}>
          <Heart className="animate-pulse mb-2" fill="currentColor" size={48} />
        </motion.div>
        <p className="font-handwriting text-3xl">Please let me prove it.</p>
      </motion.div>
    </div>
  );
}
