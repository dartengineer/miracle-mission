import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const partners = [
  'United Way 211',
  'Home Depot Warehouse Team',
  'Henry County Juvenile Court',
  'Phi Beta Sigma Eta Fraternity',
  'Woodland Middle School',
];

export default function PartnersPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 bg-white border-t border-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-2 block">Community Partners</span>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Our Valued Partners</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">We are grateful for the organizations who join us in our mission to serve and uplift the community.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-2xl transition-all group cursor-default"
            >
              <Building2 className="w-8 h-8 text-orange-400 mb-3 group-hover:text-orange-600 transition-colors" />
              <span className="text-gray-700 text-xs font-semibold text-center leading-snug">{p}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/sponsorship" className="text-orange-600 font-semibold flex items-center gap-2 justify-center hover:gap-3 transition-all">
            Become a Partner <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
