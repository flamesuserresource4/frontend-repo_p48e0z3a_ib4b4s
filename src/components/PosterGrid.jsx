import { motion } from 'framer-motion';

const posters = [
  { id: 1, title: 'Neon Tokyo', category: 'Abstract', img: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'Street King', category: 'Typography', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'Cyber Wave', category: 'Abstract', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Otaku Riot', category: 'Anime', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'Hype Type', category: 'Typography', img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1400&auto=format&fit=crop' },
  { id: 6, title: 'Night Runner', category: 'Abstract', img: 'https://images.unsplash.com/photo-1504966981333-0298a9bf1f11?q=80&w=1400&auto=format&fit=crop' },
  { id: 7, title: 'Neon Oni', category: 'Anime', img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop' },
  { id: 8, title: 'Sticker Bomb', category: 'Typography', img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1400&auto=format&fit=crop' },
];

const categories = ['All', 'Typography', 'Anime', 'Abstract', 'Custom'];

export default function PosterGrid() {
  return (
    <section id="shop" className="relative bg-[#0D0D0D] text-[#F1F1F1] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold uppercase tracking-wider">Shop</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} className="px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-white/15 hover:border-[#FFD60A] hover:text-[#FFD60A] transition">
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posters.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-lg bg-[#111] border border-white/10"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[#FF006E] transition" />
              <div className="absolute bottom-0 left-0 right-0 p-3 backdrop-blur-sm bg-black/30 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="text-xs text-white/70">{p.category}</p>
                </div>
                <button className="px-3 py-1 rounded-md bg-[#FF006E] text-[#0D0D0D] text-xs font-bold shadow-[0_0_14px_rgba(255,0,110,0.5)]">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
