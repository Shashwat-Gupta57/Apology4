import { motion } from "motion/react";
import { ScrapbookCard } from "../components/ScrapbookCard";

export default function Memories() {
  const thoughts = [
    { text: "I regret rejecting you those first 3 times so much... If I could, I would tear apart time itself to change the past. The guilt eats me alive.", date: "The Biggest Mistake", rotate: -2, span: "", isFrantic: true },
    { text: "I will try my absolute best. Everything that I can do, all for you, always for you. I am yours for always. Nothing can ever separate me from you now.", date: "Yours Always", rotate: 2, span: "md:col-span-2", isTrembling: true },
    { text: "The day I understood your POV... Everything broke inside me. I am unable to recover from that realization.", date: "The Realization", rotate: -1, span: "" },
    { text: "I won't hug you until you voluntarily do it to me again. I am under the biggest debt humankind has ever witnessed. I cannot do anything and am basically a servant of yours forever and ever and ever.", date: "The Debt", rotate: 1, span: "md:col-span-2 bg-rose/10 border-raspberry/40 drop-shadow-[0_0_30px_rgba(217,79,125,0.4)]", isFrantic: true },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-32 relative">
      {/* Frantic background text layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-10 flex flex-col justify-between pt-[20vh] pb-[20vh]">
        {[...Array(6)].map((_, i) => (
          <motion.p
            key={i}
            initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
            animate={{ x: i % 2 === 0 ? '100%' : '-100%' }}
            transition={{ repeat: Infinity, duration: 12 + i * 3, ease: "linear" }}
            className="font-handwriting text-5xl md:text-8xl text-raspberry whitespace-nowrap"
          >
            I am yours... forever and ever... I regret it so much...
          </motion.p>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12 relative"
      >
        <motion.p 
          animate={{ x: [-1, 2, -2, 1], y: [1, -1, 1, -1] }}
          transition={{ repeat: Infinity, duration: 0.2 }}
          className="font-handwriting text-raspberry text-5xl md:text-6xl tracking-wide rotate-1"
        >
          Our Broken Space
        </motion.p>
        <p className="font-serif text-lg text-dusty mt-4 max-w-lg mx-auto font-medium">
          The heavy thoughts I'm holding onto, knowing the damage I've done.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {thoughts.map((item, index) => (
          <div key={index} className={item.span}>
            <ScrapbookCard 
              rotate={item.rotate} 
              className={`h-full flex flex-col justify-between p-8 md:p-10 ${item.span.includes('bg') ? 'bg-rose/10 border-raspberry/50' : ''}`}
              isTrembling={item.isTrembling}
              isFrantic={item.isFrantic}
            >
              <div className="mb-8">
                <motion.p 
                  animate={item.isFrantic ? { color: ["#5E3B35", "#D94F7D", "#5E3B35"] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="font-handwriting text-3xl md:text-4xl text-cocoa leading-relaxed"
                >
                  "{item.text}"
                </motion.p>
              </div>
              
              <div className="flex justify-end pt-4 border-t border-raspberry/30">
                <span className="font-serif text-sm text-raspberry font-bold uppercase tracking-widest">
                  {item.date}
                </span>
              </div>
            </ScrapbookCard>
          </div>
        ))}
      </div>
    </div>
  );
}
