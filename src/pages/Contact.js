// pages/Contact.js
export default function Contact() {
  return (
    <section className="py-16 px-6 max-w-screen-md mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-serif text-white text-center mb-6">Let’s Collaborate</h2>
      <p className="text-center mb-8 text-gray-300">
        Whether it's scripting a film, editing a reel, or shaping a campaign—I'm excited to hear from you.
      </p>

      <form className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-black text-white border border-gray-600 p-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-black text-white border border-gray-600 p-3 rounded-md"
        />
        <textarea
          placeholder="Message"
          className="bg-black text-white border border-gray-600 p-3 rounded-md h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black py-3 rounded-md hover:bg-gray-300 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-8 text-sm text-gray-400">
        <p>📞 +91 8921893869</p>
        <p>📧 kirank000263@gmail.com</p>
        <p>📍 Hosangadi, Kerala, India</p>
      </div>
    </section>
  );
}
