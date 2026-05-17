import { NavLink } from "react-router-dom";
import { BookHeart, Leaf, MailOpen } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export function Navigation() {
  const links = [
    { to: "/", icon: MailOpen, label: "My Apology" },
    { to: "/promises", icon: Leaf, label: "Promises" },
    { to: "/memories", icon: BookHeart, label: "Our Space" },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex bg-white/60 backdrop-blur-xl border border-white/40 p-2 rounded-full shadow-[0_8px_30px_rgba(255,217,204,0.4)]">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-5 py-3 rounded-full font-serif text-sm transition-all duration-300",
                isActive
                  ? "bg-rose/20 text-raspberry shadow-sm"
                  : "text-dusty hover:text-cocoa hover:bg-white/50"
              )
            }
          >
            {({ isActive }) => (
              <>
                <link.icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                <span className="hidden sm:inline">{link.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}
