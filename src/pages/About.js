// pages/About.js
export default function About() {
  return (
    <section className="py-16 px-6 max-w-screen-md mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-serif text-white text-center mb-6">About Me</h2>
      <div className="flex flex-col items-center text-center">
        <img src="/profile.jpg" alt="Kiran Kumar" className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white" />
        <p className="text-gray-300 max-w-xl">
          Hello, I’m Kiran Kumar, a creative professional based in Mangalore. With a Master’s
          degree in Journalism and Mass Communication, my expertise spans across screenwriting, editing, content strategy, 
          art direction, assistant directing, and filmmaking. I’ve worked on award-winning short films,
          indie features, documentaries, and live radio. I’m passionate about visual storytelling and
          shaping narratives that connect and captivate.
        </p>
        <a
          href="/resume.pdf"
          className="mt-6 inline-block bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
