import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const desktopLink = ({ isActive }) =>
    isActive
      ? 'text-sand font-medium'
      : 'text-mist hover:text-sand transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-hairline-dark">
      <div className="container-page flex items-center justify-between h-16">
        {/* ── Firm name / logo ── */}
        <Link to="/" className="flex items-center gap-2.5 text-lg font-medium text-sand">
          <Logo className="shrink-0" size={28} />
          Adam&amp;Co Accounting
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLink}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !px-5 !py-2 text-sm">
            Contact
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded"
          onClick={() => setMobileOpen(open => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-sand" />
            <span className="block w-6 h-0.5 bg-sand" />
            <span className="block w-6 h-0.5 bg-sand" />
          </div>
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-hairline-dark bg-graphite px-4 pb-4 pt-2 space-y-1">
          {[...navLinks, { to: '/contact', label: 'Contact' }].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm ${
                  isActive ? 'font-medium text-sand' : 'text-mist hover:text-sand'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
