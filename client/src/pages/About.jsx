import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import ImagePlaceholder from '../components/ImagePlaceholder';

// PLACEHOLDER: replace all text in this file with your firm's actual information.

const values = [
  { label: 'Integrity', description: "We give you honest advice, even when it's not what you want to hear." },
  { label: 'Precision', description: 'Every number matters. We double-check our work and stand behind it.' },
  { label: 'Accessibility', description: 'We answer our phones and emails. Real people, real responses.' },
  { label: 'Confidentiality', description: 'Your financial information stays between us. Always.' },
];

export default function About() {
  return (
    <div>
      <section className="bg-paper border-b border-hairline">
        <div className="container-page section">
          <p className="eyebrow mb-3">About us</p>
          <h1 className="text-4xl">Who we are</h1>
        </div>
      </section>

      {/* ── Firm overview ── */}
      <section className="container-page section grid gap-12 lg:grid-cols-2 lg:items-center">
        <ImagePlaceholder
          src="/images/office.png"
          alt="Handwritten accounting worksheet with a calculator"
          label="Office photo"
          aspect="4/5"
        />
        <div>
          <h2 className="text-2xl mb-4">Our Firm</h2>
          <p className="text-stone leading-relaxed mb-4">
            Adam&amp;Co Accounting was founded in 2004 with a simple mission: bring the
            quality of a large accounting firm to small businesses and individuals who
            deserve the same level of care and expertise. Today we serve over 300 clients
            across Port Moody and the Tri-Cities.
          </p>
          <p className="text-stone leading-relaxed">
            We believe good accounting is about more than numbers — it's about building a
            relationship rooted in trust, transparency, and a genuine interest in your
            financial well-being.
          </p>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-paper border-y border-hairline">
        <div className="container-page section max-w-3xl">
          <h2 className="text-2xl mb-4">Meet the Founder</h2>
          {/* PLACEHOLDER: replace name, title, and bio below */}
          <p className="font-medium text-ink text-lg">Hamidreza Adamian</p>
          <p className="text-stone/70 text-sm mb-4">Founder &amp; Principal Accountant</p>
          <p className="text-stone leading-relaxed mb-3">
            Hamidreza has over 20 years of experience in public and private accounting,
            earning the CPA designation and a Bachelor's degree in Accounting. Before
            founding Adam&amp;Co, Hamidreza led the small-business practice at a regional firm.
          </p>
          <p className="text-stone leading-relaxed">
            Outside the office, Hamidreza volunteers with a program that provides free tax
            preparation for low-income households, and lives in the area with family.
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="container-page section">
        <h2 className="text-2xl mb-8">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map(v => (
            <div key={v.label} className="flex gap-4">
              <div className="grid place-items-center w-9 h-9 rounded-lg bg-sand border border-hairline text-stone shrink-0">
                <Icon name="check" className="w-5 h-5" />
              </div>
              <p className="text-stone">
                <span className="font-medium text-ink">{v.label}:</span> {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite text-mist">
        <div className="container-page section text-center">
          <h2 className="text-3xl text-sand mb-3">Let's talk</h2>
          <p className="text-mist mb-8">We'd love to hear about your business.</p>
          <Link to="/contact" className="btn-on-dark">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
