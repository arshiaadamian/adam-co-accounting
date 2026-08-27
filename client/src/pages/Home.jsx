import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import ImagePlaceholder from '../components/ImagePlaceholder';

// PLACEHOLDER: edit the copy in this file to match your firm's messaging.

const stats = [
  { value: '20+', label: 'Years in practice' },
  { value: '300+', label: 'Clients served' },
  { value: 'CPA', label: 'Designated & led' },
];

const highlights = [
  {
    icon: 'chart',
    title: 'Accurate Reporting',
    body: 'Timely, precise financial statements you can rely on for decisions big and small.',
  },
  {
    icon: 'handshake',
    title: 'Personal Service',
    body: 'You work directly with a dedicated accountant — not a call centre. We know your name and your numbers.',
  },
  {
    icon: 'shield',
    title: 'Confidential & Secure',
    body: 'Your financial data is handled with the highest standards of security and discretion.',
  },
];

const servicePreview = [
  { icon: 'calculator', title: 'Tax Preparation', body: 'Personal and corporate returns, filed accurately and on time.' },
  { icon: 'book', title: 'Bookkeeping', body: 'Monthly or quarterly books kept clean and year-end ready.' },
  { icon: 'briefcase', title: 'Financial Consulting', body: 'Guidance on cash flow, growth and business decisions.' },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-ink border-b border-hairline-dark">
        <div className="container-page section grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-clay-light mb-4">Adam&amp;Co Accounting · Port Moody, BC</p>
            <h1 className="text-4xl md:text-5xl leading-tight mb-5 text-sand">
              Financial clarity.<br />Peace of mind.
            </h1>
            <p className="text-lg text-mist mb-8 leading-relaxed max-w-xl">
              We help small businesses and individuals navigate taxes, bookkeeping,
              and financial planning — with expertise you can trust.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Get in touch</Link>
              <Link to="/services" className="btn-secondary">View services</Link>
            </div>
          </div>
          <ImagePlaceholder
            src="/images/hero.png"
            alt="Calculator and pen on a financial statement"
            label="Hero image"
            aspect="4/3"
          />
        </div>
      </section>

      {/* ── Stat strip ── */}
      <section className="container-page py-10">
        <dl className="grid grid-cols-3 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <dt className="text-3xl font-medium text-ink">{s.value}</dt>
              <dd className="text-sm text-stone/70 mt-1">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Why choose us ── */}
      <section className="bg-paper border-y border-hairline">
        <div className="container-page section">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Why Adam&amp;Co</p>
            <h2 className="text-3xl mb-4">A firm that treats your books like its own</h2>
            <p className="text-stone leading-relaxed">
              With over 20 years serving clients across a range of industries, we bring
              precision, integrity, and personal attention to every engagement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map(item => (
              <div key={item.title} className="card p-6">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-sand border border-hairline text-stone mb-4">
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="container-page section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="text-3xl">Services for every stage</h2>
          </div>
          <Link to="/services" className="text-clay font-medium hover:underline">
            See all services →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {servicePreview.map(s => (
            <div key={s.title} className="card p-6">
              <Icon name={s.icon} className="w-7 h-7 text-stone mb-4" />
              <h3 className="text-lg font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-stone leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About preview ── */}
      <section className="bg-paper border-y border-hairline">
        <div className="container-page section grid gap-12 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder
            src="/images/team.png"
            alt="Financial growth chart in a modern office"
            label="Team / office"
            aspect="4/5"
          />
          <div>
            <p className="eyebrow mb-3">About the firm</p>
            <h2 className="text-3xl mb-4">Local, independent, and here for the long term</h2>
            <p className="text-stone leading-relaxed mb-6">
              Adam&amp;Co Accounting was founded to bring the quality of a large firm to
              small businesses and individuals who deserve the same level of care and
              expertise. We build relationships rooted in trust and transparency.
            </p>
            <Link to="/about" className="btn-secondary">Learn more about us</Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-graphite text-mist">
        <div className="container-page section text-center">
          <h2 className="text-3xl text-sand mb-3">Ready to get started?</h2>
          <p className="text-mist mb-8">Book a free 30-minute consultation with our team.</p>
          <Link to="/contact" className="btn-on-dark">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
