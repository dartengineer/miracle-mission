import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Star } from 'lucide-react';

const donationAmounts = [10, 25, 50, 100, 250, 500];


const impactItems = [
  { amount: '$10', impact: 'Feeds one person for a week with essential nutrition' },
  { amount: '$25', impact: 'Provides a full bag of groceries for an entire family' },
  { amount: '$50', impact: 'Covers clothing needs for a child for an entire season' },
  { amount: '$100', impact: 'Supports our outreach programs for one full week' },
  { amount: '$250', impact: 'Sponsors a family through all services for one month' },
  { amount: '$500', impact: 'Funds a community outreach event reaching 50+ people' },
];

const volunteerRoles = [
  { title: 'Clothing Sorter', desc: 'Sort, organize, and tag donated clothing items for our clothing closet.', time: '2-4 hrs/week', icon: '👕' },
  { title: 'Food Inventory', desc: 'Receive, sort, and track food donations and pantry inventory.', time: '4-6 hrs/week', icon: '🥫' },
  { title: 'Cleanup Crew', desc: 'Help maintain a clean and welcoming environment for all visitors.', time: '2-3 hrs/week', icon: '🧹' },
  { title: 'Pantry Organizer', desc: 'Organize and restock our food pantry shelves for efficient distribution.', time: '3-4 hrs/week', icon: '📦' },
  { title: 'Filing & Admin', desc: 'Support office operations with filing, data entry, and administrative tasks.', time: '2-4 hrs/week', icon: '📁' },
  { title: 'Lawn Care Team', desc: 'Help maintain the grounds of our facility and surrounding areas.', time: '2-3 hrs/week', icon: '🌿' },
];

function DonateForm() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [copied, setCopied] = useState('');

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied('');
      }, 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Make a Donation</h3>
      <p className="text-gray-500 text-sm mb-6">All donations are tax-deductible (501(c)(3))</p>

      {/* Frequency */}
      <div className="flex gap-3 mb-6">
        {['One-time', 'Monthly'].map((f) => (
          <button
            key={f}
            onClick={() => setRecurring(f === 'Monthly')}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${(f === 'Monthly') === recurring
              ? 'bg-orange-600 text-white border-orange-600'
              : 'text-gray-700 border-gray-200 hover:border-orange-300'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Amount Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {donationAmounts.map((amt) => (
          <button
            key={amt}
            onClick={() => { setSelected(amt); setCustom(''); }}
            className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${selected === amt && !custom
              ? 'bg-orange-600 text-white border-orange-600 shadow-lg'
              : 'text-gray-700 border-gray-200 hover:border-orange-300'
              }`}
          >
            ${amt}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="mb-6">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
          <input
            type="number"
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
            className="w-full border-2 border-gray-200 focus:border-orange-400 rounded-xl py-3 pl-8 pr-4 text-gray-900 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Impact message */}
      {(selected || custom) && (
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
          <p className="text-orange-800 text-sm font-medium">
            <Star className="w-4 h-4 inline mr-1 text-orange-500" />
            Your ${custom || selected} gift {selected ? impactItems.find(i => i.amount === `$${selected}`)?.impact?.toLowerCase() : 'makes a meaningful impact on our community'}.
          </p>
        </div>
      )}

      {/* Payment methods */}
      <div className="space-y-3 mb-6">
        <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">
          Choose a Donation Method
        </p>

        <div className="grid gap-4">

          {/* PayPal */}
          <a
            href="https://www.paypal.com/US/fundraiser/charity/1946942"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-2xl p-5 hover:border-orange-500 hover:shadow-lg transition"
          >
            <h4 className="font-bold text-lg">PayPal</h4>

            <p className="text-gray-600 mt-2">
              Donate securely using PayPal or your debit/credit card.
            </p>

            <button
              type="button"
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Open PayPal
            </button>
          </a>
          {/* Cash App */}
          <div className="border rounded-2xl p-5">
            <h4 className="font-bold text-lg">Cash App</h4>

            <div className="mt-3">
              <p className="text-sm text-gray-500">Cash App Tag</p>
              <p className="font-bold text-lg">$MiracleMission24</p>
            </div>

            <button
              onClick={() => handleCopy("$MiracleMission24", "cashapp")}
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              {copied === "cashapp" ? "✅ Copied!" : "Copy Cash App Tag"}
            </button>
          </div>

          {/* Zelle */}
          <div className="border rounded-2xl p-5">
            <h4 className="font-bold text-lg">Zelle</h4>

            <div className="mt-3">
              <p className="text-sm text-gray-500">Send to</p>
              <p className="font-bold">404-454-9854</p>
            </div>

            <button
              onClick={() => handleCopy("404-454-9854", "zelle")}
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              {copied === "zelle" ? "✅ Copied!" : "Copy Zelle Number"}
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-4">
        Miracle Mission International Outreach Inc · 501(c)(3) · EIN available upon request
      </p>
    </div>
  );
}


function VolunteerForm() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Volunteer Sign Up</h3>
      <p className="text-gray-500 text-sm mb-6">No experience required! We welcome all skills and backgrounds.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">First Name</label>
            <input type="text" placeholder="Your first name" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Last Name</label>
            <input type="text" placeholder="Your last name" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Email</label>
          <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Phone</label>
          <input type="tel" placeholder="(404) 000-0000" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Preferred Role</label>
          <select className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors text-gray-700">
            <option value="">Select a volunteer role</option>
            {volunteerRoles.map(r => <option key={r.title}>{r.title}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Availability</label>
          <textarea rows={3} placeholder="When are you available? (days, times)" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none" />
        </div>
      </div>

      <button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
        <Users className="w-5 h-5" />
        Submit Volunteer Application
      </button>
    </div>
  );
}

export default function DonatePage() {
  return (
    <>
      <Helmet>
        <title>Donate & Volunteer — Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Donate or volunteer with Miracle Mission International Outreach Inc. Support food pantry, clothing closet, and community outreach programs." />
      </Helmet>

      <PageHeader
        title="Give & Serve"
        subtitle="Your generosity changes lives. Whether through a financial gift or your time, you make our mission possible."
        breadcrumb="Home › Donate / Volunteer"
      />

      {/* Donation Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Story */}
            <div>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Make an Impact</span>
              <h2 className="section-title mb-6">
                Your Gift <span className="gradient-text">Transforms Lives</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                For over 20 years, the generosity of donors like you has allowed us to serve thousands of families in Henry County and across the globe. Every single dollar makes a measurable difference.
              </p>

              {/* Impact cards */}
              <div className="space-y-3 mb-8">
                {impactItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors group">
                    <div className="w-14 h-10 bg-orange-600 text-white font-bold text-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.amount}
                    </div>
                    <p className="text-gray-700 text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-orange-700 to-red-800 rounded-2xl p-6 text-white">
                <p className="font-accent text-xl italic leading-relaxed mb-3">
                  "Every family we serve, every child we feed, every life we touch — it all begins with someone saying 'I care enough to help.'"
                </p>
                <div className="flex items-center gap-3">
                  <ImgPlaceholder label="" aspectRatio="aspect-square" className="w-10 h-10 rounded-full overflow-hidden" />
                  <div>
                    <div className="font-bold text-sm">Evangelist Marlene G. Lemons</div>
                    <div className="text-orange-200 text-xs">Founder & Executive Director</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <DonateForm />
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section-padding" style={{ background: '#fdfaf7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Get Involved</span>
            <h2 className="section-title mb-4">Become a Volunteer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Volunteers are the heartbeat of Miracle Mission. No experience is required — just a willing heart and a desire to serve.
            </p>
            <div className="mt-4 inline-block bg-orange-100 text-orange-700 font-bold px-6 py-2 rounded-full text-sm">
              🎉 No Experience Required!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Roles */}
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Volunteer Opportunities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {volunteerRoles.map((role, i) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-5 hover:shadow-md transition-all"
                  >
                    <div className="text-2xl mb-3">{role.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1 font-display">{role.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">{role.desc}</p>
                    <div className="flex items-center gap-1.5 text-orange-600">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">{role.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gallery - Real volunteer images */}
              <div className="grid grid-cols-3 gap-3">
                {['/volunteer_work/WhatsApp Image 2026-05-16 at 4.24.38 AM.jpeg', '/volunteer_work/WhatsApp Image 2026-05-16 at 4.24.39 AM.jpeg', '/volunteer_work/WhatsApp Image 2026-05-16 at 4.24.40 AM.jpeg'].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Volunteer work - Image ${i + 1}`}
                    className="rounded-2xl w-full h-full object-cover aspect-square"
                  />
                ))}
              </div>
            </div>

            {/* Form */}
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
