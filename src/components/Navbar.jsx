import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Shop', href: '#shop' },
  { label: 'Custom', href: '#custom' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-[#0D0D0D]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-sm bg-gradient-to-r from-[#FF006E] to-[#00B4D8] shadow-[0_0_20px_rgba(255,0,110,0.6)]" />
            <span className="text-[#F1F1F1] font-black tracking-wider text-xl uppercase">Postro</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-wider text-[#F1F1F1]/80 hover:text-[#FFD60A] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FF006E] text-[#0D0D0D] font-semibold shadow-[0_0_18px_rgba(255,0,110,0.6)] hover:brightness-110 transition">
              <ShoppingCart size={18} />
              Cart
            </button>
          </nav>

          <button
            className="md:hidden text-[#F1F1F1]"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0D0D0D]">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[#F1F1F1]/90 uppercase tracking-wider"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#FF006E] text-[#0D0D0D] font-semibold shadow-[0_0_18px_rgba(255,0,110,0.6)]">
              <ShoppingCart size={18} />
              Cart
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
