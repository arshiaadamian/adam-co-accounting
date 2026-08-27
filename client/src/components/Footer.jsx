import { Link } from 'react-router-dom';
import Logo from './Logo';
import ContactInfo from './ContactInfo';
import OfficeMap from './OfficeMap';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-mist">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* ── Firm blurb ── */}
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="shrink-0 text-sand" size={26} />
            <p className="text-sand font-medium text-lg">Adam&amp;Co Accounting</p>
          </div>
          <p className="text-sm mt-2 text-mist leading-relaxed">
            Trusted financial guidance for small businesses and individuals in
            Port Moody and the Tri-Cities.
          </p>
        </div>

        {/* ── Quick links ── */}
        <nav aria-label="Footer navigation">
          <p className="text-sand font-medium text-sm mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-mist hover:text-sand transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contact details ── */}
        <div>
          <p className="text-sand font-medium text-sm mb-3">Get in touch</p>
          <ContactInfo variant="footer" />
        </div>

        {/* ── Office map ── */}
        <div>
          <p className="text-sand font-medium text-sm mb-3">Visit us</p>
          <OfficeMap className="h-40" />
        </div>
      </div>

      <div className="border-t border-hairline-dark text-center text-xs text-mist py-4">
        &copy; {year} Adam&amp;Co Accounting. All rights reserved.
      </div>
    </footer>
  );
}
