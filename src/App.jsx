import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PosterGrid from './components/PosterGrid';
import CustomBuilder from './components/CustomBuilder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F1F1F1]">
      <Navbar />
      <main>
        <HeroSection />
        <PosterGrid />
        <section id="about" className="bg-[#0D0D0D] text-[#F1F1F1] py-16 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-wider mb-4">About</h2>
            <p className="max-w-3xl text-white/80 leading-relaxed">
              We don’t sell art. We sell attitude. Born from alleys, stickers, and late-night sessions, Postro brings the chaos of the street to your wall. Sharp lines. Loud color. Pure energy.
            </p>
          </div>
        </section>
        <CustomBuilder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
