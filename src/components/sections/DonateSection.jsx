import { Link } from 'react-router-dom';
import { Heart, DollarSign, Smartphone, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const methods = [
  { icon: Smartphone, label: 'Cash App', value: '$MiracleMission24', color: 'text-green-600' },
  { icon: CreditCard, label: 'Zelle', value: '404-454-9854', color: 'text-blue-600' },
  { icon: DollarSign, label: 'PayPal', value: 'Miracle Mission International Outreach Inc', color: 'text-indigo-600' },
];

export default function DonateSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #431407 0%, #7c2d12 40%, #92400e 100%)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange-300 font-bold text-sm uppercase tracking-widest mb-3 block">Make an Impact</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Your Gift Changes<br />
              <span className="text-amber-400">Lives Forever</span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Every dollar you give provides food, hope, and a future to families in need. Together, we can eliminate hunger and restore dignity in our community.
            </p>

            <div className="space-y-3 mb-8">
              {['$25 feeds a family for a week', '$50 provides clothing for a child', '$100 supports our outreach programs', '$500 sponsors a community event'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <Heart className="w-4 h-4 text-orange-400 fill-orange-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg text-center">
                Donate Now
              </Link>
              <Link to="/donate#volunteer" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full transition-colors text-center">
                Volunteer
              </Link>
            </div>
          </motion.div>

          {/* Right — Donation methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Ways to Give</h3>
              <p className="text-gray-500 text-sm mb-6">Choose your preferred donation method</p>

              <div className="space-y-4 mb-8">
                {methods.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-orange-50 rounded-xl transition-colors group">
                      <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${m.color}`} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{m.label}</div>
                        <div className="text-gray-600 text-xs font-medium">{m.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
                <p className="text-orange-800 font-semibold text-sm mb-1">Tax-Deductible Donations</p>
                <p className="text-orange-600 text-xs">Miracle Mission International Outreach Inc is a 501(c)(3) nonprofit. All donations are tax-deductible.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
