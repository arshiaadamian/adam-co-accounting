import Icon from './Icon';

// Single source of truth for the firm's contact details.
// Edit these values and they update in the footer and on the Contact page.
export const CONTACT = {
  email: 'info@adamaccounting.ca',
  phoneDisplay: '604 446-1482',
  phoneHref: 'tel:+16044461482',
  addressLines: ['Port Moody, BC'],
  hours: 'Mon–Fri, 9:00am – 5:00pm', // PLACEHOLDER: update to real office hours
};

// variant:
//   "page"   - stacked rows with icons, dark text (Contact page)
//   "footer" - compact, light text on the dark footer
export default function ContactInfo({ variant = 'page' }) {
  const onDark = variant === 'footer';

  const row = onDark
    ? 'flex items-start gap-3 text-sm text-mist'
    : 'flex items-start gap-3 text-stone';
  const iconWrap = onDark
    ? 'text-mist mt-0.5 shrink-0'
    : 'text-stone mt-0.5 shrink-0';
  const link = onDark
    ? 'hover:text-sand transition-colors'
    : 'hover:text-clay transition-colors';

  return (
    <ul className="space-y-3">
      <li className={row}>
        <Icon name="mail" className={`w-5 h-5 ${iconWrap}`} />
        <a href={`mailto:${CONTACT.email}`} className={link}>{CONTACT.email}</a>
      </li>
      <li className={row}>
        <Icon name="phone" className={`w-5 h-5 ${iconWrap}`} />
        <a href={CONTACT.phoneHref} className={link}>{CONTACT.phoneDisplay}</a>
      </li>
      <li className={row}>
        <Icon name="map-pin" className={`w-5 h-5 ${iconWrap}`} />
        <span>
          {CONTACT.addressLines.map(line => (
            <span key={line} className="block">{line}</span>
          ))}
        </span>
      </li>
      <li className={row}>
        <Icon name="clock" className={`w-5 h-5 ${iconWrap}`} />
        <span>{CONTACT.hours}</span>
      </li>
    </ul>
  );
}
