// pages/Projects.js
import { Link } from 'react-router-dom';

const projectData = [
  {
    id: 'happy-ending',
    title: 'Happy Ending',
    role: 'Director',
    link: 'https://www.youtube.com/watch?v=9kS2yxy8No8',
    thumb: '/happy-ending.png'
  },
  {
    id: 'alegalu',
    title: 'Alegalu Helida Kathe',
    role: 'Assistant Director',
    link: 'https://www.youtube.com/watch?v=FxQGvElrX9w',
    thumb: '/alegalu.png'
  },
  {
    id: 'indie-feature',
    title: 'Indie Feature (Malayalam)',
    role: 'AD/Actor',
    link: 'https://www.youtube.com/watch?v=eMI0R7T2-8o',
    thumb: '/indie-feature.png'
  },
  {
    id: 'colours-of-yakshagana',
    title: 'Colours of Yakshagana',
    role: 'Direction/Cinematography/Editing',
    link: 'https://drive.google.com/file/d/1-Q7-R_GOyZI6ncZH_7wRuc-K1SOpIFln/view',
    thumb: '/yakshagana.png'
  },
  {
    id: 'harbour-doc',
    title: 'A Day in Harbour',
    role: 'Cinematography',
    link: 'https://drive.google.com/file/d/1Ck2AP009fFxtVlEotX4umWJVAOCC9T1P/view',
    thumb: '/harbour.png'
  },
  {
    id: 'radio-sarang',
    title: 'Radio Sarang',
    role: 'Radio Plays & Ads',
    link: 'https://drive.google.com/drive/folders/1ETG76i34wYY9_kiG0lfy9g6oL36iNBDE',
    thumb: '/radio.jpg'
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-screen-xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-serif text-white text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((proj) => (
          <a href={proj.link} key={proj.id} target="_blank" rel="noreferrer" className="group block">
            <img
              src={proj.thumb}
              alt={proj.title}
              className="rounded-md w-full h-48 object-cover group-hover:opacity-80 border border-white"
            />
            <div className="mt-2">
              <h3 className="font-semibold text-lg text-white">{proj.title}</h3>
              <p className="text-sm text-gray-400">{proj.role}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
