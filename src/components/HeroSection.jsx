import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#0D0D0D] text-[#F1F1F1] overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for neon vibe, does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,110,0.25),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,180,216,0.25),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(255,214,10,0.2),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase"
          style={{ fontFamily: 'Impact, Bebas Neue, Anton, sans-serif' }}
        >
          No Rules. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] to-[#00B4D8]">Just Posters.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-5 max-w-2xl text-lg text-[#F1F1F1]/85"
          style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
        >
          Own your wall. Street meets canvas. Click. Print. Slay.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#shop"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF006E] text-[#0D0D0D] font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,0,110,0.6)] hover:brightness-110 transition"
          >
            Shop Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#custom"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#F1F1F1]/20 text-[#F1F1F1] font-bold uppercase tracking-wider hover:border-[#FFD60A] hover:text-[#FFD60A] transition"
          >
            Make Yours
          </motion.a>
        </div>
      </div>
    </section>
  );
}
