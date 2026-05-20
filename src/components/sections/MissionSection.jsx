import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ImgPlaceholder from '../ui/ImgPlaceholder';
import { CheckCircle, Heart, ArrowRight } from 'lucide-react';

const values = ['Integrity', 'Compassion', 'Respect', 'Fairness', 'Professionalism'];

export default function MissionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <ImgPlaceholder label="Community Outreach" aspectRatio="aspect-[3/4]" className="rounded-2xl col-span-1 row-span-2" />
            <ImgPlaceholder label="Food Pantry" aspectRatio="aspect-square" className="rounded-2xl" />
            <ImgPlaceholder label="Volunteer Team" aspectRatio="aspect-square" className="rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Who We Are</span>
            <h2 className="section-title mb-6">
              Serving With{' '}
              <span className="gradient-text">Purpose & Compassion</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Miracle Mission International Outreach Inc is a 501(c)(3) nonprofit founded by Evangelist Marlene G. Lemons, incorporated December 28, 2004. Our purpose is to enhance the quality of life for those without hope through basic needs and educational services.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-orange-600 fill-orange-600" />
                  <h4 className="font-bold text-gray-900 font-display">Our Mission</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To eliminate hunger, foster hope, promote self-sufficiency and kingdom building serving Henry County, surrounding cities, as well as Africa & Pakistan.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-gray-900 font-display">Our Vision</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To create an environment where businesses, individuals, and faith communities partner together to gather resources and alleviate hunger and homelessness.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-8">
              <p className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Core Values</p>
              <div className="flex flex-wrap gap-2">
                {values.map(v => (
                  <span key={v} className="flex items-center gap-1.5 bg-gray-100 hover:bg-orange-50 text-gray-700 text-sm px-4 py-2 rounded-full transition-colors">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
