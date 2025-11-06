import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomBuilder() {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [text, setText] = useState('YOUR TEXT');

  function onFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setPreview(url);
  }

  return (
    <section id="custom" className="bg-[#0D0D0D] text-[#F1F1F1] py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold uppercase tracking-wider mb-6">Custom Builder</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Canvas / Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[3/4] w-full rounded-lg border border-white/10 bg-[#111] flex items-center justify-center overflow-hidden relative"
          >
            {preview ? (
              <img src={preview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="text-white/60 text-sm">Upload an image to start</div>
            )}
            <div className="absolute inset-x-4 bottom-6 text-center select-none">
              <span
                className="inline-block text-3xl sm:text-5xl font-black uppercase tracking-tight px-3 py-1 rounded bg-black/40"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FF006E, #00B4D8)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 18px rgba(255,0,110,0.35)',
                  fontFamily: 'Impact, Bebas Neue, Anton, sans-serif',
                }}
              >
                {text}
              </span>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm uppercase tracking-wider mb-2 text-white/80">Upload Image</label>
              <div className="flex items-center gap-3">
                <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" />
                <button onClick={() => fileRef.current?.click()} className="px-4 py-2 rounded-md bg-[#FFD60A] text-[#0D0D0D] font-bold uppercase tracking-wider hover:brightness-110">Choose File</button>
                {preview && (
                  <button onClick={() => setPreview(null)} className="px-4 py-2 rounded-md border border-white/20 text-white/90 hover:border-[#FF006E] hover:text-[#FF006E]">Remove</button>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wider mb-2 text-white/80">Overlay Text</label>
              <input
                value={text}
                onChange={(e) => setText(e.target.value.toUpperCase())}
                className="w-full px-3 py-2 rounded-md bg-[#121212] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                placeholder="Type your message"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="px-4 py-2 rounded-md bg-[#FF006E] text-[#0D0D0D] font-bold shadow-[0_0_16px_rgba(255,0,110,0.6)]">Add to Cart</button>
              <button className="px-4 py-2 rounded-md border border-white/20 text-white/90 hover:border-[#00B4D8] hover:text-[#00B4D8]">Download Mockup</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
