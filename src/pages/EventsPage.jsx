import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';
import { Calendar, Clock, MapPin, ArrowRight, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    month: 'March',
    shortMonth: 'MAR',
    title: 'Annual Fundraising Gala',
    desc: 'Our spring fundraising gala brings together community supporters, donors, and volunteers for an evening of inspiration, storytelling, and generosity. This event fuels our programs for the entire year.',
    time: 'TBD',
    location: '466 Simpson Street, McDonough, GA',
    features: ['Dinner & Reception', 'Guest Speakers', 'Live Entertainment', 'Silent Auction'],
    color: 'bg-orange-600',
    gradient: 'from-orange-500 to-orange-700',
  },
  {
    month: 'June',
    shortMonth: 'JUN',
    title: 'Back to School Event',
    desc: 'Every summer, we host a Back to School event providing free backpacks, school supplies, and resources to children in our community to ensure every child starts the school year ready to learn.',
    time: 'TBD',
    location: '466 Simpson Street, McDonough, GA',
    features: ['Free Backpacks', 'School Supplies', 'Health Resources', 'Family Fun'],
    color: 'bg-amber-500',
    gradient: 'from-amber-500 to-amber-700',
  },
  {
    month: 'September',
    shortMonth: 'SEP',
    title: 'Community Beautification',
    desc: 'Our annual beautification event brings volunteers together to clean, beautify, and improve our neighborhood. This event strengthens community bonds while making a visible impact in McDonough.',
    time: 'TBD',
    location: 'McDonough, GA Community',
    features: ['Landscaping', 'Painting Projects', 'Litter Removal', 'Community Bonding'],
    color: 'bg-red-700',
    gradient: 'from-red-600 to-red-800',
  },
  {
    month: 'November',
    shortMonth: 'NOV',
    title: 'Thanksgiving Gala',
    desc: 'A beloved community tradition, our Thanksgiving Gala celebrates gratitude with a community feast, testimonies of lives changed, and a fundraising program supporting winter operations.',
    time: 'TBD',
    location: '466 Simpson Street, McDonough, GA',
    features: ['Community Feast', 'Testimonies', 'Live Music', 'Fundraising Program'],
    color: 'bg-orange-700',
    gradient: 'from-orange-600 to-red-700',
  },
  {
    month: 'December',
    shortMonth: 'DEC',
    title: 'Toys for Tots Gala',
    desc: 'Our holiday season highlight, the Toys for Tots Gala collects and distributes toys to children ages 13–17 — an often-overlooked age group. This joyful event spreads holiday cheer throughout our community.',
    time: 'TBD',
    location: '466 Simpson Street, McDonough, GA',
    features: ['Toy Distribution', 'Ages 13–17', 'Holiday Entertainment', 'Community Dinner'],
    color: 'bg-rose-700',
    gradient: 'from-rose-600 to-rose-800',
  },
];

function EventCard({ event, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
        {/* Calendar Box */}
        <div className={!isEven ? 'lg:col-start-2' : ''}>
          <div className={`relative h-64 lg:h-full min-h-64 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
            <div className="text-center">
              <div className="text-7xl font-bold text-white/80 font-display mb-2">
                {event.shortMonth.slice(0, 1)}
              </div>
              <div className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                {event.shortMonth}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`p-8 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
          <div className={`inline-flex items-center gap-2 ${event.color} text-white text-2xl font-bold font-display w-14 h-14 rounded-2xl justify-center mb-5`}>
            {event.shortMonth.slice(0, 1)}
          </div>
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-5">{event.desc}</p>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {event.features.map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 text-gray-600 text-sm">
                <ChevronRight className="w-4 h-4 text-orange-500" />
                {f}
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-5 text-sm text-gray-500">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-400" />{event.time}</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" />{event.location}</div>
          </div>

          <a href="mailto:support@miraclemissionioi.net" className="btn-outline inline-flex">
            RSVP / Inquire <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Events — Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Annual events including fundraising gala, back to school event, beautification, Thanksgiving gala, and Toys for Tots celebration in McDonough, GA." />
      </Helmet>

      <PageHeader
        title="Events & Celebrations"
        subtitle="Join us throughout the year for meaningful gatherings that strengthen our community and further our mission."
        breadcrumb="Home › Events"
      />

      {/* Year at a glance */}
      <section className="py-10 bg-orange-600">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-5 gap-2">
            {events.map((e) => (
              <div key={e.month} className="text-center">
                <div className="text-orange-200 text-xs font-bold uppercase tracking-wide">{e.shortMonth}</div>
                <div className="text-white text-xs mt-1 hidden md:block leading-snug">{e.title.split(' ').slice(0, 2).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: 20th Anniversary */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-orange-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full">🎉 Special Event — May 2025</span>
              <h2 className="font-display text-4xl font-bold text-gray-900 mt-5 mb-4">20th Anniversary Celebration</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In May 2025, we celebrated two incredible decades of service with a grand anniversary gala. Community members, board members, volunteers, and supporters gathered to honor the lives changed and look forward to the next 20 years of impact.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['200+ Attendees', '20 Years of Impact', 'Community Leaders', 'Live Celebration'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />{f}
                  </div>
                ))}
              </div>
              <a href="/gallery" className="btn-primary inline-flex">
                View Photo Gallery <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['20th Anniversary Gala', '20 Year Celebration', 'Founder Recognition', 'Community Gathering'].map((label, i) => (
                <img key={i} src={`/20_years_celebration/WhatsApp Image 2026-05-16 at 4.26.${24 + (i % 4)}.jpeg`} alt={label} className="aspect-square object-cover rounded-2xl" onError={(e) => e.target.style.display = 'none'} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Throughout the Year</span>
            <h2 className="section-title">Annual Events Calendar</h2>
          </div>

          <div className="space-y-8">
            {events.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer for events */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">Volunteer at Our Events</h2>
          <p className="text-gray-400 mb-8">Help make our events possible. We need setup crews, servers, greeters, and more for each event. No experience needed!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate#volunteer" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-500 transition-colors">
              Sign Up to Volunteer
            </a>
            <a href="mailto:support@miraclemissionioi.net" className="border-2 border-gray-600 text-white font-bold px-8 py-4 rounded-full hover:border-gray-400 transition-colors">
              Contact for Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
