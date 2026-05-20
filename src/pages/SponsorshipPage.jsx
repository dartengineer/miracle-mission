import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Star, Heart, Award, ArrowRight, CheckCircle, Mail } from 'lucide-react';

const partners = [
  { name: 'United Way 211', desc: 'Referral network partner connecting community members to vital resources.', type: 'Nonprofit Partner' },
  { name: 'Home Depot Warehouse Team', desc: 'Generous supplier of materials, tools, and in-kind donations for community projects.', type: 'Corporate Partner' },
  { name: 'Henry County Juvenile Court', desc: 'Community service partner supporting youth rehabilitation through meaningful work.', type: 'Government Partner' },
  { name: 'Phi Beta Sigma Eta Fraternity', desc: 'Service fraternity partner actively volunteering and supporting our outreach efforts.', type: 'Community Partner' },
  { name: 'Woodland Middle School', desc: 'Educational partner enabling student community service projects and school supply drives.', type: 'Education Partner' },
];

const tiers = [
  {
    name: 'Community Friend',
    amount: '$500',
    color: 'from-gray-400 to-gray-500',
    border: 'border-gray-200',
    features: ['Logo on website', 'Social media mention', 'Recognition certificate', 'Newsletter feature'],
  },
  {
    name: 'Community Champion',
    amount: '$1,000',
    color: 'from-orange-400 to-orange-600',
    border: 'border-orange-300',
    featured: true,
    features: ['Everything in Friend', 'Banner at events', 'Dedicated social posts', 'Annual report recognition', '2 event invitations'],
  },
  {
    name: 'Mission Partner',
    amount: '$2,500',
    color: 'from-amber-500 to-yellow-600',
    border: 'border-amber-300',
    features: ['Everything in Champion', 'Naming rights on program', 'Table at gala events', 'Custom impact report', '5 event invitations', 'Board presentation'],
  },
  {
    name: 'Miracle Maker',
    amount: '$5,000+',
    color: 'from-red-700 to-red-900',
    border: 'border-red-300',
    features: ['Everything in Mission Partner', 'Exclusive naming sponsorship', 'Major event title sponsor', 'Full page in annual report', 'Unlimited event invitations', 'Joint press release', 'Custom partnership package'],
  },
];

function TierCard({ tier, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white rounded-3xl border-2 ${tier.border} shadow-lg hover:shadow-xl transition-all overflow-hidden ${tier.featured ? 'scale-105' : ''}`}
    >
      {tier.featured && (
        <div className="bg-orange-600 text-white text-xs font-bold uppercase tracking-widest text-center py-2">
          Most Popular
        </div>
      )}
      <div className={`bg-gradient-to-br ${tier.color} p-8 text-white`}>
        <h3 className="font-display text-xl font-bold mb-1">{tier.name}</h3>
        <div className="text-3xl font-bold font-display">{tier.amount}</div>
        <div className="text-white/70 text-sm">per year</div>
      </div>
      <div className="p-8">
        <ul className="space-y-3 mb-8">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="mailto:support@miraclemissionioi.net?subject=Sponsorship Inquiry"
          className={`block text-center font-bold py-3 rounded-xl transition-colors text-sm ${tier.featured ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'border-2 border-gray-200 hover:border-orange-400 hover:text-orange-600 text-gray-700'}`}
        >
          Become a {tier.name}
        </a>
      </div>
    </motion.div>
  );
}

export default function SponsorshipPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <>
      <Helmet>
        <title>Sponsorship and Partners - Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Partner with Miracle Mission International Outreach Inc. Explore sponsorship opportunities and meet our current community partners." />
      </Helmet>
      <PageHeader
        title="Sponsorship & Partners"
        subtitle="Join our network of compassionate businesses and organizations committed to transforming lives in Henry County and beyond."
        breadcrumb="Home > Sponsorship"
      />
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Partner With Us</span>
              <h2 className="section-title mb-6">Why Sponsor Miracle Mission?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">When your organization partners with Miracle Mission International Outreach Inc, you align your brand with 20+ years of trusted community service and demonstrate a genuine commitment to eliminating hunger and building stronger communities.</p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Heart, title: 'Genuine Impact', desc: 'Your support directly funds food, clothing, and outreach programs that change lives.' },
                  { icon: Star, title: 'Brand Visibility', desc: 'Reach thousands of community members through our events, social media, and publications.' },
                  { icon: Award, title: 'Community Recognition', desc: 'Earn recognition as a business that truly invests in the well-being of Henry County.' },
                  { icon: Building2, title: 'Employee Engagement', desc: 'Offer your employees meaningful volunteer and giving opportunities.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="mailto:support@miraclemissionioi.net?subject=Partnership Inquiry" className="btn-primary inline-flex">
                <Mail className="w-5 h-5" />
                Contact Us About Partnering
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImgPlaceholder label="Community Partnership" aspectRatio="aspect-[3/4]" className="rounded-2xl col-span-1 row-span-2" />
              <ImgPlaceholder label="Corporate Volunteering" aspectRatio="aspect-square" className="rounded-2xl" />
              <ImgPlaceholder label="Sponsor Recognition" aspectRatio="aspect-square" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding" style={{ background: '#fdfaf7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Sponsorship Levels</span>
            <h2 className="section-title mb-4">Choose Your Level of Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">All sponsorships are tax-deductible contributions to a 501(c)(3) organization. Custom partnership packages are available.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {tiers.map((tier, i) => <TierCard key={tier.name} tier={tier} index={i} />)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Our Network</span>
            <h2 className="section-title mb-4">Current Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" ref={ref}>
            {partners.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-6 hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-orange-50 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <Building2 className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">{p.type}</div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="border-2 border-dashed border-orange-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-700 mb-2">Your Organization</h4>
              <p className="text-gray-400 text-sm mb-4">Join our growing family of community partners.</p>
              <a href="mailto:support@miraclemissionioi.net" className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Partner With Us <ArrowRight className="w-4 h-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
