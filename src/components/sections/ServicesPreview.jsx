import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Shirt, PhoneCall, Users, ArrowRight } from 'lucide-react';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const services = [
  {
    icon: ShoppingCart,
    title: 'Food Pantry',
    desc: 'Providing nutritious food to families in need, serving 40 families weekly with fresh and non-perishable items.',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    image: '/food_pantry/pantry.jpg',
  },
  {
    icon: Shirt,
    title: 'Clothing Closet',
    desc: 'Offering gently used clothing to individuals and families, helping them present themselves with dignity.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    image: '/clothing/clothing.jpg',
  },
  {
    icon: PhoneCall,
    title: 'Referrals',
    desc: 'Connecting community members to vital resources, services, and support networks they need to thrive.',
    color: 'bg-red-700',
    lightColor: 'bg-red-50',
    image: '/referrals/referral.jpg',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    desc: 'Engaging the community through ministry, events, and partnerships that foster hope and self-sufficiency.',
    color: 'bg-rose-600',
    lightColor: 'bg-rose-50',
    image: '/community_outreach/community.jpg',
  },
];

export default function ServicesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-warm-50" style={{ backgroundColor: '#fdfaf7' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="section-title mb-4">Programs &amp; Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide essential services to individuals and families in Henry County and beyond, addressing immediate needs while building long-term resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group hover:-translate-y-1"
              >
                {svc.image ? (
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <ImgPlaceholder label={svc.title} aspectRatio="aspect-video" />
                )}
                <div className="p-6">
                  <div className={`w-12 h-12 ${svc.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/services" className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-outline">
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
