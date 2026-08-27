import { Link } from 'react-router-dom';

// PLACEHOLDER: Edit the copy in this file to match your firm's branding and messaging.

// Three feature cards shown below the hero section
const highlights = [
  {
    icon: '📊',
    title: 'Accurate Reporting',
    body: 'Timely, precise financial statements you can rely on for decisions big and small.',
  },
  {
    icon: '🤝',
    title: 'Personal Service',
    body: 'You work directly with a dedicated accountant — not a call center. We know your name and your numbers.',
  },
  {
    icon: '🔒',
    title: 'Confidential & Secure',
    body: 'Your financial data is handled with the highest standards of security and discretion.',
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Financial Clarity.<br className="hidden md:block" /> Peace of Mind.
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Adam&amp;Co Accounting helps small businesses and individuals navigate taxes,
          bookkeeping, and financial planning — with expertise you can trust.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </Link>
      </section>

      {/* ── Short intro ── */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Adam&amp;Co?</h2>
        <p className="text-gray-600 leading-relaxed">
          With over 20 years of experience serving clients across a wide range of industries,
          our team brings precision, integrity, and personal attention to every engagement.
          Whether you're a solo entrepreneur or a growing company, we tailor our services to fit your needs.
        </p>
      </section>

      {/* ── Feature highlights ── */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map(item => (
            <div
              key={item.title}
              className="text-center p-6 border border-gray-100 rounded-xl shadow-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">Book a free 30-minute consultation with our team today.</p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
