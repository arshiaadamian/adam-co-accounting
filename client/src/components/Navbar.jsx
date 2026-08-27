import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ── Firm name / logo ── */}
        <Link to="/" className="text-xl font-bold tracking-wide hover:text-blue-200 transition-colors">
          Adam&amp;Co Accounting
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold border-b-2 border-white pb-0.5'
                    : 'hover:text-blue-200 transition-colors'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger button ── */}
        <button
          className="md:hidden p-1 focus:outline-none focus:ring-2 focus:ring-white rounded"
          onClick={() => setMobileOpen(open => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </div>
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {mobileOpen && (
        <ul className="md:hidden bg-blue-800 px-4 pb-4 space-y-1">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block py-2 text-sm ${
                    isActive ? 'font-semibold text-white' : 'text-blue-100 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
