import { useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import OfficeMap from '../components/OfficeMap';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // status: null | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // Network error (e.g. server not running)
      setStatus('error');
    }
  }

  const field =
    'w-full border border-hairline bg-paper rounded-lg px-4 py-2.5 focus:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-clay';

  return (
    <div>
      <section className="bg-paper border-b border-hairline">
        <div className="container-page section">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="text-4xl mb-3">Get in touch</h1>
          <p className="text-stone max-w-2xl">
            Send us a message and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="container-page section grid gap-12 lg:grid-cols-2">
        {/* ── Form ── */}
        <div>
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              Thank you! Your message has been received. We'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">Name</label>
              <input
                id="name" type="text" name="name" value={form.name} onChange={handleChange}
                required placeholder="Your full name" className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">Email</label>
              <input
                id="email" type="email" name="email" value={form.email} onChange={handleChange}
                required placeholder="you@example.com" className={field}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">Message</label>
              <textarea
                id="message" name="message" value={form.message} onChange={handleChange}
                required rows={5} placeholder="How can we help you?"
                className={`${field} resize-none`}
              />
            </div>
            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>

        {/* ── Details + map ── */}
        <div className="lg:pl-4">
          <h2 className="text-xl mb-4">Contact details</h2>
          <ContactInfo variant="page" />
          <div className="mt-8">
            <h2 className="text-xl mb-4">Our office</h2>
            <OfficeMap className="h-80" />
          </div>
        </div>
      </section>
    </div>
  );
}
