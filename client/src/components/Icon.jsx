// Thin wrapper over lucide-react so call sites stay stable:
//
//   <Icon name="chart" className="w-6 h-6 text-clay" />
//
// Size and colour are controlled by the parent via `className`.

import {
  BarChart3,
  Handshake,
  ShieldCheck,
  Calculator,
  BookOpen,
  ClipboardList,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
} from 'lucide-react';

const icons = {
  chart: BarChart3,
  handshake: Handshake,
  shield: ShieldCheck,
  calculator: Calculator,
  book: BookOpen,
  clipboard: ClipboardList,
  briefcase: Briefcase,
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  clock: Clock,
  check: Check,
};

export default function Icon({ name, className = 'w-6 h-6' }) {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return <LucideIcon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
