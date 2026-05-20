import CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUp = CountUpModule.default || CountUpModule;

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5, label, sublabel }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display text-white mb-1">
        {prefix}
        {inView ? <CountUp end={end} duration={duration} separator="," /> : '0'}
        {suffix}
      </div>
      <div className="text-orange-200 font-semibold text-sm uppercase tracking-wide">{label}</div>
      {sublabel && <div className="text-white/60 text-xs mt-1">{sublabel}</div>}
    </div>
  );
}
