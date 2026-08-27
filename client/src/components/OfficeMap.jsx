// Google Maps embed — no API key required.
//
// Currently centred on Port Moody, BC (city-level view). To point the map at a
// precise street address later, URL-encode it into the `q` parameter, e.g.:
//   const MAP_QUERY = '2somewhere St, Port Moody, BC';
//   ...&z=16&output=embed
// and bump the zoom (`z`) up to ~16.

const MAP_QUERY = 'Port Moody, BC';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`;

// `className` controls the size — pass a height utility, e.g. "h-64" or "h-full".
export default function OfficeMap({ className = 'h-72' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-hairline ${className}`}>
      <iframe
        title="Our office location"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full block"
        style={{ border: 0 }}
      />
    </div>
  );
}
