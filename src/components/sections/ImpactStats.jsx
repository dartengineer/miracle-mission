import AnimatedCounter from '../ui/AnimatedCounter';
import { useInView } from 'react-intersection-observer';

const stats = [
  { end: 20, suffix: '+', label: 'Years of Service', sublabel: 'Established 2005' },
  { end: 40, suffix: '', label: 'Families Weekly', sublabel: 'Fed & Supported' },
  { end: 5000, suffix: '+', label: 'Global Families', sublabel: 'Worldwide Outreach' },
  { end: 6, suffix: '', label: 'Countries Reached', sublabel: 'Nigeria, Kenya, Pakistan & more' },
];

export default function ImpactStats() {
  return (
    <section className="bg-gradient-to-r from-orange-800 via-orange-700 to-red-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <AnimatedCounter key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
