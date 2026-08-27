// PLACEHOLDER: Replace these services and descriptions with your firm's actual offerings.

const services = [
  {
    title: 'Tax Preparation',
    description:
      'We prepare federal and state tax returns for individuals, sole proprietors, partnerships, and ' +
      'corporations. We look for every deduction you qualify for while keeping you fully compliant.',
  },
  {
    title: 'Bookkeeping',
    description:
      'Monthly or quarterly bookkeeping to keep your accounts up to date, records organized, and ' +
      'your year-end close stress-free. We work with QuickBooks, Xero, and other platforms.',
  },
  {
    title: 'Payroll Services',
    description:
      'Accurate, on-time payroll processing for businesses of all sizes. Includes direct deposit, ' +
      'tax withholding, W-2 and 1099 preparation, and compliance with federal and state requirements.',
  },
  {
    title: 'Financial Consulting',
    description:
      'Strategic financial guidance to help you plan for growth, manage cash flow, evaluate ' +
      'investments, and make informed business decisions backed by solid numbers.',
  },
  {
    title: 'Audit Support',
    description:
      'If you receive an IRS notice or face an audit, we represent you and handle all ' +
      'communication. We help you understand your rights and work toward the best possible outcome.',
  },
];

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h1>
      <p className="text-gray-600 mb-10">
        We offer a full range of accounting and financial services designed for small businesses
        and individuals.
      </p>

      <div className="space-y-6">
        {services.map(service => (
          <div
            key={service.title}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
