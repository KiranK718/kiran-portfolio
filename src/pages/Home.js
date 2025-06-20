// pages/Home.js
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-32 px-4 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Hi, I’m Kiran Kumar</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">Filmmaker. Editor. Storyteller.</p>
          <p className="mt-2 text-base md:text-lg text-gray-400">
            I craft stories that breathe, edit visuals that speak, and direct ideas into motion.
          </p>
          <div className="mt-6 space-x-4">
            <a href="https://www.youtube.com/watch?v=9kS2yxy8No8" target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition">Watch Showreel</a>
            <Link to="/projects" className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">Explore My Work</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" data-aos="fade-in">
        <h2 className="text-2xl font-serif text-center mb-6 text-white">Testimonials</h2>
        <div className="max-w-2xl mx-auto text-center italic text-gray-300">
          <p>"Kiran is a visionary who brings precision and heart to every frame." – A Professor</p>
          <p className="mt-4">"A calm and reliable presence on any set." – Indie Film Director</p>
        </div>
      </section>
    </div>
  );
}
