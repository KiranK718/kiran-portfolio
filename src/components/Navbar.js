// components/Navbar.js
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Interests', path: '/interests' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-serif">Kiran Kumar</Link>
        <div className="space-x-4">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-gray-300 transition ${location.pathname === item.path ? 'underline underline-offset-4' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
