import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImgPlaceholder from '../ui/ImgPlaceholder';
import { Link } from 'react-router-dom';

const countries = [
  { name: 'Nigeria', flag: '🇳🇬', region: 'West Africa', desc: 'Providing food, education, and community support to families across Nigeria.', families: '1,200+' },
  { name: 'Kenya', flag: '🇰🇪', region: 'East Africa', desc: 'Outreach programs focused on hunger relief and community empowerment in Kenya.', families: '800+' },
  { name: 'Pakistan', flag: '🇵🇰', region: 'South Asia', desc: 'Supporting underserved communities through food distribution and educational initiatives.', families: '600+' },
];

export default function GlobalOutreach() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding" style={{ background: '#fdfaf7' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Worldwide Impact</span>
          <h2 className="section-title mb-4">Global Outreach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our mission extends beyond Henry County. We partner with communities across Africa and Asia to bring hope, food, and resources to those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card group hover:-translate-y-1"
            >
              <div className="relative">
                <ImgPlaceholder label={`${c.name} Outreach`} aspectRatio="aspect-[4/3]" />
                <div className="absolute top-4 left-4">
                  <div className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Globe className="w-3 h-3" />
                    {c.region}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{c.flag}</span>
                  <h3 className="font-display font-bold text-2xl text-gray-900">{c.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="bg-orange-50 px-4 py-2 rounded-full">
                    <span className="text-orange-700 font-bold text-sm">{c.families} Families Reached</span>
                  </div>
                  <Link to="/about#global" className="text-orange-600 hover:text-orange-700">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/about#global" className="btn-outline">
            Explore Global Outreach <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
