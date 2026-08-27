export default function Logo({ className = '', size = 28 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Adam & Co"
    >
      <rect x="6.5" y="12.5" width="4" height="10" rx="2" fill="currentColor" />
      <rect x="14" y="4.5" width="4" height="18" rx="2" fill="#A34A2E" />
      <rect x="21.5" y="8.5" width="4" height="14" rx="2" fill="currentColor" />
      <rect x="3" y="25.25" width="26" height="2.5" rx="1.25" fill="currentColor" />
    </svg>
  );
}
