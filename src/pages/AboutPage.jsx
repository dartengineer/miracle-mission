import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/ui/PageHeader';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';
import { CheckCircle, Award, GraduationCap, Globe, Heart, Users, Star, BookOpen, ChevronRight } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We operate with complete honesty and transparency in all that we do.' },
  { icon: Star, title: 'Compassion', desc: 'We serve every person with genuine care, empathy, and dignity.' },
  { icon: Users, title: 'Respect', desc: 'Every individual is treated with respect and without judgment.' },
  { icon: CheckCircle, title: 'Fairness', desc: 'We ensure equitable access to our services for all community members.' },
  { icon: Award, title: 'Professionalism', desc: 'We maintain the highest standards in everything we do.' },
];

const timeline = [
  { year: '1990', title: 'Sisters Helping Sisters', desc: 'Evangelist Marlene G. Lemons begins her community service journey with Sisters Helping Sisters, planting the seeds of what would become a national outreach.' },
  { year: '2004', title: 'Incorporation', desc: 'Miracle Mission International Outreach Inc is officially incorporated December 28, 2004 with the Georgia Secretary of State, laying a legal foundation for the mission.' },
  { year: '2005', title: 'IRS 501(c)(3) Approval', desc: 'Received official tax-exempt status as a 501(c)(3) charitable organization, enabling the organization to formally receive donations and expand its reach.' },
  { year: '2007', title: 'United Way Partnership', desc: 'Partnered with United Way 211 to strengthen referral networks and expand resources available to community members in need.' },
  { year: '2009', title: 'GED Classes Launched', desc: 'Launched GED preparatory classes to empower community members with education and open pathways to employment and self-sufficiency.' },
  { year: '2010', title: 'Homeless Feeding Outreach', desc: 'Began regular homeless feeding outreach programs, providing hot meals and basic necessities to those living on the streets.' },
  { year: '2012', title: 'Building Expansion', desc: 'Expanded facility to accommodate growing food pantry, clothing closet, and community program operations.' },
  { year: '2013', title: 'Grand Opening', desc: 'Grand opening of the expanded facility at 466 Simpson Street, McDonough, GA — a milestone moment for the organization and community.' },
  { year: '2023', title: 'Name Transition', desc: 'Organization transitions to "Miracle Mission International Outreach Inc" to reflect the broadened global mission and international partnerships.' },
  { year: '2025', title: '20 Years Celebration', desc: 'Celebrated 20 remarkable years of service with a grand anniversary gala in May 2025, honoring the thousands of lives changed through the mission.' },
];

const boardMembers = [
  { name: 'Marlene Lemons', role: 'Executive Director / Founder', image: '' },
  { name: 'Bernorsey Lemons', role: 'Manager at IKEA', image: '/executives/Bernorsey Lemons, Manager at IKEA.png' },
  { name: 'Patricia Gusta', role: 'Secretary', image: '/executives/Patricia Gusta, Secretary, Board Member.jpeg' },
  { name: 'Holly Veal', role: 'Superior Court Judge', image: '/executives/Holly Veal, Superior Court Judge.jpeg' },
  { name: 'Vivian Thomas', role: 'Former Commissioner of McDonough, GA', image: '/executives/Vivian Thomas, Former Commissioner of McDonough, Ga. (board member).jpeg' },
  { name: 'Isaiah Stevenson', role: 'Retired Federal Justice System', image: '/executives/Isaiah Stevenson, Retired Federal Justice System (Board member).png' },
  { name: 'Vincent Williams', role: 'State Representative District 1', image: '/executives/Vincent Williams, State Representative District 1, (Board Member).png' },
  { name: 'Requel Evans', role: 'State of Georgia', image: '/executives/Requel Evans, State of Georgia (Board Member).jpeg' },
  { name: 'Javier Smith', role: 'Smith Family Foundation for Change Inc.', image: '/executives/Javier Smith,  Smith Family Foundation for Change Inc. (Board Member).jpeg' },
  { name: 'Dr. Debra Sykes', role: 'VP Tucker Veteran\'s Disability Services', image: '/executives/Dr. Debra Sykes, VP of Tucker Veteran\'s Disability (board member).jpeg' },
  { name: 'Kevin Lynfatt', role: 'William Gavin Management, LLC', image: '/executives/Kevin Lynfatt, William Gavin Management, LLC (Board Member).jpeg' },
  { name: 'Bishop David Nyriki', role: 'Spiritual Advisor', image: '/executives/Bishop David Nyriki.jpeg' },
  { name: 'Bishop Naeem Essa', role: 'Spiritual Advisor', image: '/executives/Bishop Naeem Essa.jpeg' },
  { name: 'Evangelist Bernice Duffie', role: 'Outreach Coordinator', image: '/executives/Evangelist Bernice Duffie, Outreach Coordinator.jpeg' },
  { name: 'Evangelist Eva Tahir', role: 'Pakistan Outreach Coordinator', image: '/executives/Evangelist Eva Tahir Pakistan.jpeg' },
];

// const officers = [
//   { name: 'Evangelist Bernice Duffie', role: 'Outreach Coordinator', image: '/executives/Evangelist Bernice Duffie, Outreach Coordinator.jpeg' },
//   { name: 'Evangelist Eva Tahir', role: 'Pakistan Outreach Coordinator', image: '/executives/Evangelist Eva Tahir Pakistan.jpeg' },
// ];

function SectionRef({ children, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Learn about Miracle Mission International Outreach Inc, founded by Evangelist Marlene G. Lemons in 2004. Our mission, vision, history, and leadership." />
      </Helmet>

      <PageHeader
        title="About Our Mission"
        subtitle="Two decades of transforming lives, restoring hope, and building stronger communities — locally and globally."
        breadcrumb="Home › About Us"
      />

      {/* Organization Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionRef>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Miracle Mission International Outreach Inc is a 501(c)(3) nonprofit organization founded by Evangelist Marlene G. Lemons. The organization was incorporated December 28, 2004 with the Georgia Secretary of State and received IRS tax-exempt status in 2005.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our purpose is to enhance the quality of life for those who are without hope through providing basic needs and educational services. Our programs bring more meaningful, fulfilling, and rewarding life to participants, making us a valuable resource center for the community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Located in McDonough, Georgia, we serve Henry County and surrounding cities, as well as international communities in Africa and Pakistan through our global outreach programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-3 text-center">
                  <div className="font-bold text-orange-700 text-xl font-display">2004</div>
                  <div className="text-orange-600 text-xs">Incorporated</div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-3 text-center">
                  <div className="font-bold text-orange-700 text-xl font-display">501(c)(3)</div>
                  <div className="text-orange-600 text-xs">Tax-Exempt Status</div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-3 text-center">
                  <div className="font-bold text-orange-700 text-xl font-display">20+</div>
                  <div className="text-orange-600 text-xs">Years of Service</div>
                </div>
              </div>
            </SectionRef>

            <SectionRef>
              <div className="grid grid-cols-2 gap-4">
                <img src="/20_years_celebration/WhatsApp Image 2026-05-16 at 4.26.24 AM (1).jpeg" alt="Organization Overview" className="aspect-[3/4] object-cover rounded-2xl col-span-1 row-span-2" />
                <img src="/20_years_celebration/WhatsApp Image 2026-05-16 at 4.26.25 AM (1).jpeg" alt="Community Service" className="aspect-square object-cover rounded-2xl" />
                <img src="/volunteer_work/WhatsApp Image 2026-05-16 at 4.24.38 AM.jpeg" alt="Team & Volunteers" className="aspect-square object-cover rounded-2xl" />
              </div>
            </SectionRef>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding" style={{ background: '#fdfaf7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">What Drives Us</span>
            <h2 className="section-title">Mission, Vision &amp; Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <SectionRef className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-8 text-white">
              <Heart className="w-10 h-10 text-orange-200 fill-orange-200 mb-5" />
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed italic font-accent">
                "To eliminate hunger, foster hope, promote self-sufficiency and kingdom building serving Henry, surrounding cities, as well as Africa & Pakistan."
              </p>
            </SectionRef>

            <SectionRef className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white">
              <Globe className="w-10 h-10 text-amber-200 mb-5" />
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed italic font-accent">
                "To create an environment where businesses, individuals, and faith communities partner together to gather resources and alleviate hunger and homelessness."
              </p>
            </SectionRef>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <SectionRef key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 font-display">{v.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </SectionRef>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Our Founder</span>
            <h2 className="section-title">Evangelist Marlene G. Lemons</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionRef>
              <div className="sticky top-24">
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
                    { label: 'GED Achievement', icon: GraduationCap },
                    { label: 'AA Biblical Theology', icon: BookOpen },
                    { label: 'BA Leadership Admin', icon: Award },
                    { label: 'MPA Degree', icon: Star },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-center gap-3">
                        <Icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700 text-xs font-semibold">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionRef>

            <SectionRef>
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-6">A Visionary Leader Born to Serve</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Evangelist Marlene G. Lemons is the visionary founder and Executive Director of Miracle Mission International Outreach Inc. Her journey began long before the organization's formal inception — rooted in a deep calling to serve those who have been left behind by society.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Starting with "Sisters Helping Sisters" in 1990, Marlene recognized the profound needs in her community and committed herself to building bridges of hope. Her passion for helping women, homeless individuals, and underserved communities became the cornerstone of everything she built.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Marlene's personal story is one of perseverance and transformation. Earning her GED, then pursuing higher education while running the organization, she exemplifies the very self-sufficiency she teaches others. She went on to earn an AA Degree in Biblical Theology, a BA Degree in Leadership Administration, and a Master's Degree in Public Administration.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Her leadership has guided Miracle Mission through two decades of growth — from local food distribution to international outreach in Nigeria, Kenya, and Pakistan. Marlene's unwavering faith and relentless compassion have made Miracle Mission a beacon of hope in Henry County and far beyond.
              </p>

              {/* Education Timeline */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 font-display text-lg">Educational Journey</h4>
                {[
                  { degree: 'GED Achievement', note: 'The foundation of a lifelong love of learning' },
                  { degree: 'AA — Biblical Theology', note: 'Strengthening faith-based community leadership' },
                  { degree: 'BA — Leadership Administration', note: 'Building skills to lead and inspire others' },
                  { degree: "Master's — Public Administration", note: 'Equipping for effective nonprofit governance' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.degree}</div>
                      <div className="text-gray-500 text-xs">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionRef>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: '#fdfaf7' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Our Journey</span>
            <h2 className="section-title">History &amp; Timeline</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <SectionRef key={item.year}>
                  <div className={`flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-orange-200 transition-all">
                        <span className="text-orange-600 font-bold text-sm">{item.year}</span>
                        <h4 className="font-display font-bold text-gray-900 text-lg mt-1 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-orange-600 rounded-full border-4 border-white shadow-lg mt-6" />

                    {/* Spacer for alternating */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </SectionRef>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Leadership</span>
            <h2 className="section-title">Board of Directors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Our distinguished board brings expertise from government, business, education, and community service to guide our mission.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {boardMembers.map((member, i) => (
              <SectionRef key={member.name} className="card p-5 text-center hover:-translate-y-1">
                <img src={member.image} alt={member.name} className="aspect-square object-cover rounded-full w-24 h-24 mx-auto mb-4 overflow-hidden" onError={(e) => e.target.style.display = 'none'} />
                <h4 className="font-display font-bold text-gray-900 text-base mb-1">{member.name}</h4>
                <p className="text-orange-600 text-xs font-medium leading-snug">{member.role}</p>
              </SectionRef>
            ))}
          </div>


        </div>
      </section>

      {/* Global Outreach */}
      <section id="global" className="section-padding" style={{ background: 'linear-gradient(135deg, #431407, #7c2d12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-300 font-bold text-sm uppercase tracking-widest mb-3 block">International Impact</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Global Outreach</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Our mission extends around the world. We partner with local leaders in Africa and Asia to bring food, hope, and resources to communities in need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: 'Nigeria', flag: '🇳🇬', desc: 'Supporting communities across Nigeria with food distribution, educational programs, and women\'s empowerment initiatives.', stats: '1,200+ Families', imgs: ['Nigeria Outreach', 'Nigeria Community', 'Nigeria Feeding'] },
              { country: 'Kenya', flag: '🇰🇪', desc: 'Partnering with local organizations in Kenya to provide hunger relief, clean water access, and community development.', stats: '800+ Families', imgs: ['Kenya Outreach', 'Kenya Programs', 'Kenya Children'] },
              { country: 'Pakistan', flag: '🇵🇰', desc: 'Reaching underserved communities in Pakistan through food aid, educational support, and community empowerment programs.', stats: '600+ Families', imgs: ['Pakistan Outreach', 'Pakistan outreach 2', 'Pakistan outreach 3'] },
            ].map((c, i) => (
              <SectionRef key={c.country} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-3 gap-1 p-2">
                  {c.imgs.map((img, j) => {
                    const folderMap = { 'Nigeria': 'global_outreach', 'Kenya': 'global_outreach', 'Pakistan': 'pakistan_outreach' };
                    const folder = folderMap[c.country];
                    return (
                      <img key={j} src={`/${folder}/${img}.jpeg`} alt={img} className="aspect-square object-cover rounded-xl" onError={(e) => e.target.style.display = 'none'} />
                    );
                  })}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{c.flag}</span>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">{c.country}</h3>
                      <span className="text-orange-300 text-xs font-semibold">{c.stats} Reached</span>
                    </div>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </SectionRef>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
