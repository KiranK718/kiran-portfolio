// pages/Interests.js
export default function Interests() {
  return (
    <section className="py-16 px-6 max-w-screen-lg mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-serif text-white text-center mb-10">Interests</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Photography */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Photography</h3>
          <div className="grid grid-cols-2 gap-4">
            <img src="/photo1.jpg" alt="Photography 1" className="rounded-md" />
            <img src="/photo2.jpg" alt="Photography 2" className="rounded-md" />
            <img src="/photo3.jpg" alt="Photography 3" className="rounded-md" />
            <img src="/photo4.jpg" alt="Photography 4" className="rounded-md" />
          </div>
        </div>

        {/* Sketching */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Sketching</h3>
          <div className="grid grid-cols-2 gap-4">
            <img src="/sketch1.jpg" alt="Sketch 1" className="rounded-md" />
            <img src="/sketch2.jpg" alt="Sketch 2" className="rounded-md" />
            <img src="/sketch3.jpg" alt="Sketch 3" className="rounded-md" />
            <img src="/sketch4.jpg" alt="Sketch 4" className="rounded-md" />
          </div>
        </div>

        {/* Acting */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Acting</h3>
          <div className="grid grid-cols-2 gap-4">
            <img src="/acting1.jpg" alt="Acting 1" className="rounded-md" />
            <img src="/acting2.jpg" alt="Acting 2" className="rounded-md" />
            <img src="/acting3.jpg" alt="Acting 3" className="rounded-md" />
            <img src="/acting4.jpg" alt="Acting 4" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
