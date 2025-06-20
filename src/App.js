import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-[#000000] text-[#F5F5F5] font-sans max-w-screen-xl mx-auto px-6">

      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-r from-[#111111] to-[#222222]">
        <h1 className="text-4xl md:text-5xl font-serif text-white">Hi, I’m Kiran Kumar—Filmmaker. Editor. Storyteller.</h1>
        <p className="mt-4 text-lg text-gray-300">I craft stories that breathe, edit visuals that speak, and direct ideas into motion.</p>
        <div className="mt-6 space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200">Watch Showreel</button>
          <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black">Explore My Work</button>
        </div>
      </section>

      {/* About Me */}
      <section className="py-12 flex flex-col items-center text-center">
        <img src="/profile.jpg" alt="Kiran Kumar" className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white" />
        <p className="max-w-xl text-gray-300">Based in Mangalore, I specialize in screenwriting, assistant directing, video editing, and content strategy. With an MA in Journalism & Mass Communication, I bring a storyteller’s eye to every frame.</p>
        <a href="/resume.pdf" className="mt-4 inline-block bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200">Download Resume</a>
      </section>

      {/* Portfolio */}
      <section className="py-16">
        <h2 className="text-3xl font-serif text-center mb-10 text-white">Selected Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: 'Happy Ending', role: 'Director', link: 'https://www.youtube.com/watch?v=9kS2yxy8No8', thumb: '/happy-ending.jpg'
          }, {
            title: 'Alegalu Helida Kathe', role: 'Assistant Director', link: 'https://www.youtube.com/watch?v=FxQGvElrX9w', thumb: '/alegalu.jpg'
          }, {
            title: 'Indie Feature', role: 'AD/Actor', link: 'https://www.youtube.com/watch?v=eMI0R7T2-8o', thumb: '/indie-feature.jpg'
          }].map((proj, idx) => (
            <a href={proj.link} key={idx} target="_blank" className="block group">
              <img src={proj.thumb} alt={proj.title} className="rounded-md w-full h-48 object-cover group-hover:opacity-80 border border-white" />
              <div className="mt-2">
                <h3 className="font-semibold text-lg text-white">{proj.title}</h3>
                <p className="text-sm text-gray-400">{proj.role}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-serif mb-6 text-white">Skills & Toolkit</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {['DaVinci Resolve', 'Adobe Premiere Pro', 'Scriptwriting', 'Direction', 'Cinematography', 'Audio Mixing', 'Content Planning', 'Art Direction'].map((skill, i) => (
            <span key={i} className="bg-white text-black px-4 py-2 rounded-full hover:scale-105 transform transition duration-300">{skill}</span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <h2 className="text-2xl font-serif text-center mb-6 text-white">Testimonials</h2>
        <div className="max-w-2xl mx-auto text-center italic text-gray-300">
          <p>"Kiran is a visionary who brings precision and heart to every frame." – A Professor</p>
          <p className="mt-4">"A calm and reliable presence on any set." – Indie Film Director</p>
        </div>
      </section>

      {/* Contact Me */}
      <section className="py-16">
        <h2 className="text-3xl font-serif text-center mb-6 text-white">Let’s Collaborate</h2>
        <p className="text-center mb-6 text-gray-300">Whether it's scripting a film, editing a reel, or shaping a campaign—I'm excited to hear from you.</p>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input type="text" placeholder="Name" className="bg-black text-white border border-gray-500 p-3 rounded-md" />
          <input type="email" placeholder="Email" className="bg-black text-white border border-gray-500 p-3 rounded-md" />
          <textarea placeholder="Message" className="bg-black text-white border border-gray-500 p-3 rounded-md h-32"></textarea>
          <button type="submit" className="bg-white text-black py-3 rounded-md hover:bg-gray-300">Send Message</button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>📞 +91 8921893869</p>
          <p>📧 kirank000263@gmail.com</p>
          <p>📍 Hosangadi, Kerala, India</p>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Kiran Kumar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
