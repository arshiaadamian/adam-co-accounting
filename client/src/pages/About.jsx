// PLACEHOLDER: Replace all text in this file with your firm's actual information.

// PLACEHOLDER: Edit these values to reflect your firm's real philosophy.
const values = [
  {
    label: 'Integrity',
    description: "We give you honest advice, even when it's not what you want to hear.",
  },
  {
    label: 'Precision',
    description: 'Every number matters. We double-check our work and stand behind it.',
  },
  {
    label: 'Accessibility',
    description: 'We answer our phones and emails. Real people, real responses.',
  },
  {
    label: 'Confidentiality',
    description: 'Your financial information stays between us. Always.',
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">About Us</h1>

      {/* ── Firm overview ── */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Our Firm</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Adam&amp;Co Accounting was founded in 2004 with a simple mission: bring the quality of a
          large accounting firm to small businesses and individuals who deserve the same level of
          care and expertise. Today we serve over 300 clients across the region.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe good accounting is about more than numbers — it's about building a
          relationship rooted in trust, transparency, and a genuine interest in your financial
          well-being.
        </p>
      </section>

      {/* ── Founder bio ── */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Meet the Founder</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Placeholder avatar — swap with a real <img> tag */}
          <div className="flex-shrink-0 w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center text-5xl">
            👤
          </div>
          <div>
            {/* PLACEHOLDER: Replace name, title, and bio below */}
            <p className="font-semibold text-gray-800 text-lg mb-1">Hamidreza Adamian</p>
            <p className="text-gray-500 text-sm mb-3">Founder &amp; Principal Accountant</p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Jane has over 20 years of experience in public and private accounting. She earned
              her CPA license in 2001 and holds a Bachelor's degree in Accounting from State
              University. Before founding Adam&amp;Co, she led the small business practice at a
              regional firm.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Outside the office, Jane volunteers with a nonprofit that provides free tax
              preparation services to low-income households. She lives in the area with her family.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Our Values</h2>
        <ul className="space-y-3">
          {values.map(v => (
            <li key={v.label} className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">{v.label}:</span> {v.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
