import { useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import OfficeMap from '../components/OfficeMap';

// Encode a plain object as application/x-www-form-urlencoded, which is what
// Netlify's form handler expects.
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', 'bot-field': '' });
  // status: null | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      // Netlify captures any POST whose body carries a matching "form-name".
      // The submission is recorded before the SPA redirect runs.
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', 'bot-field': '' });
      } else {
        setStatus('error');
      }
    } catch {
      // Network or unexpected error
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

          {/*
            Netlify Forms. The real form is rendered by React, so a matching
            static copy lives in client/index.html for Netlify's build-time
            form detection. Keep the field names in sync across both.
          */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot: hidden from people, bots fill it and get filtered out */}
            <p className="hidden">
              <label>
                Don't fill this out if you're human:
                <input
                  name="bot-field"
                  value={form['bot-field']}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </p>

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

          <p className="mt-4 text-sm text-stone/80">
            Please don't send your SIN, bank or account numbers, or tax documents
            through this form. Once we're in touch we'll share a secure way to
            send sensitive information.
          </p>
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
