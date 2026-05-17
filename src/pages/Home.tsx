import { motion } from "motion/react";
import { CloudRain, Sprout, Sun } from "lucide-react";
import { ScrapbookCard } from "../components/ScrapbookCard";
import { WaitPopup } from "../components/WaitPopup";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-16 md:pt-24 flex flex-col gap-12 sm:gap-16 relative">
      <WaitPopup />

      {/* Frantic background text layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-10 flex flex-col justify-between pt-[20vh] pb-[20vh]">
        {[...Array(6)].map((_, i) => (
          <motion.p
            key={i}
            initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
            animate={{ x: i % 2 === 0 ? '100%' : '-100%' }}
            transition={{ repeat: Infinity, duration: 20 + i * 5, ease: "linear" }}
            className="font-handwriting text-5xl md:text-8xl text-raspberry whitespace-nowrap"
          >
            I can't stop thinking about it... I can't stop... I am so sorry... 
          </motion.p>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mb-4 cursor-default relative"
      >
        <p className="font-handwriting text-raspberry text-5xl md:text-6xl tracking-wide -rotate-2">
          Dear Apoorva,
        </p>
      </motion.div>

      <ScrapbookCard rotate={1}>
        <div className="flex flex-col gap-6 items-center text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif">
            I am apologising to you about all the things I did.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-dusty font-serif">
            I know the weight of my actions, and I want you to know that I am trying my absolute best to fix things, one by one.
          </p>
        </div>
      </ScrapbookCard>

      <ScrapbookCard rotate={-2} className="bg-ivory/80" isTrembling={true}>
        <div className="flex flex-col gap-6 items-center text-center">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="bg-mauve/10 p-4 rounded-full text-mauve mb-2">
            <CloudRain size={32} strokeWidth={1.5} />
          </motion.div>
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif">
            When you say that you don't wanna talk to me...
          </p>
          <motion.p 
            animate={{ filter: ["blur(0px)", "blur(1px)", "blur(0px)"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xl md:text-2xl leading-relaxed text-mauve font-serif"
          >
            it is breaking me from inside. 😭😭
          </motion.p>
        </div>
      </ScrapbookCard>

      <ScrapbookCard rotate={1.5}>
        <div className="flex flex-col gap-6 items-center text-center">
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="bg-sage/10 p-4 rounded-full text-sage mb-2">
            <Sprout size={32} strokeWidth={1.5} />
          </motion.div>
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif">
            I am trying to learn emotional things slowly slowly, from all the places I possibly can.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-dusty font-serif">
            I just want to understand and be better for you.
          </p>
        </div>
      </ScrapbookCard>

      <ScrapbookCard rotate={-1} isTrembling={true} isFrantic={true}>
        <div className="flex flex-col gap-6 items-center text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif">
            But the problem is that I am unable to think straight anything now.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif font-medium">
            Once I finally saw your POV, I am unable to recover from it.
          </p>
          <motion.p 
            animate={{ scale: [1, 1.05, 1], color: ["#D94F7D", "#5E3B35", "#D94F7D"] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            className="font-handwriting text-3xl md:text-4xl text-raspberry mt-2"
          >
            It is on my mind ALL THE TIME!!!
          </motion.p>
        </div>
      </ScrapbookCard>

      <ScrapbookCard rotate={2} className="bg-peach/20 border-peach/30 backdrop-blur-xl mb-12">
        <div className="flex flex-col gap-8 items-center text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif">
            So... yeah. I am extremely sorry for not calling that day.
          </p>
          
          <div className="w-16 h-[1px] bg-sunflower/50"></div>

          <motion.div animate={{ y: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 0.3 }}>
            <p className="text-2xl md:text-3xl leading-relaxed text-cocoa font-serif drop-shadow-sm">
              I really, really wanna change doing this to the only person in the world that truly cared about me. 😭😭
            </p>
          </motion.div>
          
          <p className="text-xl md:text-2xl leading-relaxed text-cocoa font-serif mt-2">
            I am sorry. Truly.
          </p>

          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.95, 1.05, 0.95], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-sunflower mt-4 drop-shadow-[0_0_15px_rgba(246,196,83,0.5)]"
          >
            <Sun size={48} strokeWidth={1.5} />
          </motion.div>
        </div>
      </ScrapbookCard>
    </div>
  );
}
