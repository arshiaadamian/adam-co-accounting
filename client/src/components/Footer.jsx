import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-6">
        {/* ── Firm blurb ── */}
        <div>
          {/* PLACEHOLDER: Update firm name and tagline */}
          <p className="text-white font-bold text-lg">Adam&amp;Co Accounting</p>
          <p className="text-sm mt-1">Trusted financial guidance for your business.</p>
        </div>

        {/* ── Quick links ── */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-blue-700 text-center text-xs text-blue-300 py-3">
        &copy; {year} Adam&amp;Co Accounting. All rights reserved.
      </div>
    </footer>
  );
}
