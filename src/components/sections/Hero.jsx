import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, ArrowDown, Star, Globe } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years Serving', sub: 'Since 2005' },
  { value: '40', label: 'Families Weekly', sub: 'Fed & Supported' },
  { value: '160', label: 'Families Monthly', sub: 'Served Locally' },
  { value: '1,920', label: 'Families Yearly', sub: 'Changed Lives' },
  { value: '5,000+', label: 'Global Outreach', sub: 'Worldwide Families' },
];

const floatingCards = [
  { icon: Heart, label: 'Food Pantry', color: 'bg-orange-500' },
  { icon: Users, label: 'Volunteer', color: 'bg-amber-500' },
  { icon: Globe, label: 'Global Reach', color: 'bg-red-700' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/community.jpg)',
        }}
      />

      {/* Dark overlay for text readability - subtle so image shows through */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Secondary overlay with gradient for better text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Floating visual elements */}
      <div className="absolute top-1/4 right-8 md:right-24 animate-float">
        <div className="glass rounded-2xl p-4 shadow-2xl hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="text-white text-xs font-bold">501(c)(3)</div>
              <div className="text-white/60 text-xs">Certified Nonprofit</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 left-6 md:left-20 animate-float-delay">
        <div className="glass rounded-2xl p-3 shadow-2xl hidden md:block">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <div className="text-white text-xs font-bold">Est. 2005</div>
              <div className="text-white/60 text-xs">Henry County, GA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-orange-500/20 backdrop-blur-sm text-orange-200 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-orange-400/30 mb-6">
            ✦ Serving Our Community Since 2005
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
            Changing Lives Through<br />
            <span className="text-amber-400">Faith, Love &</span><br />
            Community.          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We provide food, clothing, referrals, and hope to families in Henry County and around the world — because every person deserves dignity and care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/donate" className="btn-primary text-base group">
              <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              Donate Now
            </Link>
            <Link to="/donate#volunteer" className="btn-secondary text-base">
              <Users className="w-5 h-5" />
              Become a Volunteer
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white font-display">{stat.value}</div>
              <div className="text-orange-300 font-semibold text-xs uppercase tracking-wide mt-1">{stat.label}</div>
              <div className="text-white/50 text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
