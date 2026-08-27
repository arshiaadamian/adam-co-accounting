import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

// PLACEHOLDER: replace these services and descriptions with your firm's actual
// offerings. Wording below uses Canadian terms (CRA, GST/HST, T4/T4A).

const services = [
  {
    icon: 'calculator',
    title: 'Tax Preparation',
    description:
      'We prepare personal (T1) and corporate (T2) returns for individuals, sole ' +
      'proprietors, partnerships, and incorporated businesses. We look for every ' +
      'credit and deduction you qualify for while keeping you fully compliant with the CRA.',
  },
  {
    icon: 'book',
    title: 'Bookkeeping',
    description:
      'Monthly or quarterly bookkeeping to keep your accounts up to date, records ' +
      'organized, and your year-end close stress-free. We work with QuickBooks, Xero, ' +
      'and other platforms, and handle your GST/HST filings.',
  },
  {
    icon: 'clipboard',
    title: 'Payroll Services',
    description:
      'Accurate, on-time payroll for businesses of all sizes. Includes direct deposit, ' +
      'source deductions, ROEs, and T4/T4A preparation, with full compliance for federal ' +
      'and provincial requirements.',
  },
  {
    icon: 'briefcase',
    title: 'Financial Consulting',
    description:
      'Strategic financial guidance to help you plan for growth, manage cash flow, ' +
      'evaluate investments, and make informed business decisions backed by solid numbers.',
  },
  {
    icon: 'shield',
    title: 'CRA Support',
    description:
      'If you receive a CRA notice or face a review or audit, we represent you and ' +
      'handle the correspondence. We help you understand your options and work toward ' +
      'the best possible outcome.',
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-paper border-b border-hairline">
        <div className="container-page section">
          <p className="eyebrow mb-3">What we do</p>
          <h1 className="text-4xl mb-4">Our Services</h1>
          <p className="text-stone max-w-2xl leading-relaxed">
            A full range of accounting and financial services designed for small
            businesses and individuals across Port Moody and the Tri-Cities.
          </p>
        </div>
      </section>

      <section className="container-page section">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(service => (
            <div key={service.title} className="card p-7">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-sand border border-hairline text-stone mb-4">
                <Icon name={service.icon} className="w-6 h-6" />
              </div>
              <h2 className="text-xl mb-2">{service.title}</h2>
              <p className="text-stone leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-graphite text-mist">
        <div className="container-page section text-center">
          <h2 className="text-3xl text-sand mb-3">Not sure what you need?</h2>
          <p className="text-mist mb-8">
            Tell us about your situation and we'll point you in the right direction.
          </p>
          <Link to="/contact" className="btn-on-dark">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}
