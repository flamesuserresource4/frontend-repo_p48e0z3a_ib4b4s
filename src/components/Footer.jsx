export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 text-[#F1F1F1] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-r from-[#FF006E] to-[#00B4D8]" />
          <span className="font-black uppercase tracking-wider">Postro</span>
        </div>
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Postro. Street meets canvas.</p>
        <div className="text-xs uppercase tracking-wider text-white/60">
          No Rules. Just Posters.
        </div>
      </div>
    </footer>
  );
}
