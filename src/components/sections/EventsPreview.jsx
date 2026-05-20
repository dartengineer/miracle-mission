import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const events = [
  { month: 'MAR', title: 'Annual Fundraising Gala', desc: 'Join us for our spring fundraising event to support programs throughout the year.', color: 'bg-orange-600' },
  { month: 'JUN', title: 'Back to School Event', desc: 'Free backpacks, school supplies, and resources for children in our community.', color: 'bg-amber-600' },
  { month: 'SEP', title: 'Community Beautification', desc: 'Volunteers come together to beautify our neighborhood and strengthen community bonds.', color: 'bg-red-700' },
  { month: 'NOV', title: 'Thanksgiving Gala', desc: 'A celebration of gratitude featuring a community feast and fundraising program.', color: 'bg-orange-700' },
  { month: 'DEC', title: 'Toys for Tots Gala', desc: 'Annual toy drive and gala bringing joy to children ages 13–17 during the holiday season.', color: 'bg-rose-700' },
];

export default function EventsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Annual Events</span>
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          <Link to="/events" className="btn-outline mt-4 md:mt-0">
            View All Events <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group hover:-translate-y-1"
            >
              <ImgPlaceholder label={event.title} aspectRatio="aspect-video" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${event.color} text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full`}>
                    {event.month}
                  </div>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.desc}</p>
                <Link to="/events" className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Event Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
