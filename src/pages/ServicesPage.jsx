import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Shirt, PhoneCall, Users, Clock, MapPin, ArrowRight, Heart } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Food Pantry',
    shortDesc: 'Providing nutritious food to families in need every week.',
    fullDesc: 'Our food pantry is the cornerstone of our services. Every Thursday and Friday, we open our doors to families in need, providing fresh produce, canned goods, dairy, and other essential food items. We serve approximately 40 families weekly, ensuring no family in our community goes hungry.',
    features: ['Fresh produce & canned goods', 'Weekly distribution (Thu & Fri)', 'No income verification required', 'Serving 40 families weekly'],
    color: 'from-orange-500 to-orange-600',
    images: ['/food_pantry/pantry.jpg', '/food_pantry/pantry2.jpg', '/food_pantry/pantry3.jpg', '/food_pantry/pantry4.jpg'],
  },
  {
    icon: Shirt,
    title: 'Clothing Closet',
    shortDesc: 'Restoring dignity through clean, quality clothing for all ages.',
    fullDesc: 'Our clothing closet provides gently used and new clothing to individuals and families, helping them present themselves with confidence for job interviews, school, and daily life. We accept and distribute clothing for all ages — from infants to adults.',
    features: ['All ages & sizes', 'Gently used & new items', 'Seasonal donations welcome', 'Dignified shopping experience'],
    color: 'from-amber-500 to-amber-600',
    images: ['/clothing/clothing.jpg', '/clothing/clothing3.jpg'],
  },
  {
    icon: PhoneCall,
    title: 'Referrals & Resources',
    shortDesc: 'Connecting you to the support networks and services you need.',
    fullDesc: 'We serve as a comprehensive referral hub, connecting community members to vital resources including housing assistance, medical care, legal aid, employment services, mental health support, and government benefits. Our partnerships with United Way 211 and local agencies ensure we can meet diverse needs.',
    features: ['Housing assistance referrals', 'Medical & mental health', 'Employment resources', 'Government benefits guidance'],
    color: 'from-red-600 to-red-700',
    images: ['/referrals/referral.jpg', '/referrals/referral2.jpg', '/referrals/referral3.jpg'],
  },
  {
    icon: Users,
    title: 'Community Outreach Ministry',
    shortDesc: 'Engaging the whole community with faith, love, and service.',
    fullDesc: 'Our community outreach ministry extends beyond our walls. We partner with local churches, schools, businesses, and government agencies to create a network of support. From street-level homeless outreach to neighborhood beautification events, we are committed to transforming our entire community.',
    features: ['Homeless outreach programs', 'Community events & galas', 'Faith community partnerships', 'Neighborhood beautification'],
    color: 'from-rose-600 to-rose-700',
    images: ['/community_outreach/community.jpg', '/community_outreach/community3.jpg'],
  },
];

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`py-16 ${isEven ? 'bg-white' : ''}`}
      style={!isEven ? { background: '#fdfaf7' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          <div className={!isEven ? 'lg:order-2' : ''}>
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.color} text-white px-5 py-2.5 rounded-full mb-5`}>
              <Icon className="w-5 h-5" />
              <span className="font-bold text-sm">{service.title}</span>
            </div>
            <h2 className="section-title mb-4">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.fullDesc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            <Link to="/donate" className="btn-primary">
              <Heart className="w-5 h-5 fill-white" />
              Support This Service
            </Link>
          </div>

          <div className={`grid grid-cols-2 gap-3 ${!isEven ? 'lg:order-1' : ''}`}>
            {service.images && service.images.length > 0 ? (
              service.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${service.title} - Image ${i + 1}`}
                  className={`rounded-2xl w-full h-full object-cover ${i === 0 ? 'row-span-2 aspect-[4/5]' : 'aspect-square'}`}
                />
              ))
            ) : (
              service.imgLabels?.map((label, i) => (
                <ImgPlaceholder
                  key={i}
                  label={label}
                  aspectRatio={i === 0 ? 'aspect-[4/5]' : 'aspect-square'}
                  className={`rounded-2xl ${i === 0 ? 'row-span-2' : ''}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services — Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Food pantry, clothing closet, referrals, and community outreach ministry in Henry County, GA. Serving families since 2005." />
      </Helmet>

      <PageHeader
        title="Programs & Services"
        subtitle="Comprehensive support for individuals and families in need — from food and clothing to referrals and community ministry."
        breadcrumb="Home › Services"
      />

      {/* Quick Overview */}
      <section className="py-12 bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="text-center">
                  <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm font-display">{s.title}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-snug">{s.shortDesc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-white">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-orange-400" />
              <div className="text-left">
                <div className="font-bold">Service Hours</div>
                <div className="text-gray-400 text-sm">Thursday & Friday · 10:00am – 2:00pm</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-700" />
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-orange-400" />
              <div className="text-left">
                <div className="font-bold">Our Location</div>
                <div className="text-gray-400 text-sm">466 Simpson Street, McDonough, GA 30253</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed service cards */}
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}

      {/* CTA */}
      <section className="section-padding bg-orange-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Need Help? We're Here.</h2>
          <p className="text-orange-100 text-lg mb-8">All services are available to community members during our operating hours. No appointment required for most services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              Contact Us
            </Link>
            <Link to="/donate" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
