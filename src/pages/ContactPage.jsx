import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Share2, Camera, MessageCircle, Play, Send, CheckCircle } from "lucide-react";;

const contactInfo = [
  { icon: MapPin, title: 'Our Location', lines: ['466 Simpson Street', 'McDonough, Georgia 30253'], link: 'https://maps.google.com/?q=466+Simpson+Street+McDonough+GA', linkLabel: 'Get Directions' },
  { icon: Clock, title: 'Service Hours', lines: ['Thursday & Friday', '10:00am - 2:00pm'] },
  { icon: Mail, title: 'Email Us', lines: ['support@miraclemissionioi.net'], link: 'mailto:support@miraclemissionioi.net', linkLabel: 'Send Email' },
  { icon: Phone, title: 'Phone / Zelle', lines: ['404-454-9854'], link: 'tel:4044549854', linkLabel: 'Call Now' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  return (
    <>
      <Helmet>
        <title>Contact Us - Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Contact Miracle Mission at 466 Simpson Street, McDonough, GA. Open Thursday and Friday 10am-2pm." />
      </Helmet>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out for help, volunteering, or partnership opportunities." breadcrumb="Home > Contact" />
      
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-2">{info.title}</h3>
                  {info.lines.map((line, j) => <p key={j} className="text-orange-100 text-sm">{line}</p>)}
                  {info.link && <a href={info.link} className="mt-3 text-xs font-semibold text-orange-200 hover:text-white underline block">{info.linkLabel} →</a>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Get In Touch</span>
              <h2 className="section-title mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we will respond within 1-2 business days.</p>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We will get back to you within 1-2 business days.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-orange-600 font-semibold text-sm hover:underline">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Full Name *</label>
                      <input type="text" required placeholder="Your full name" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Email *</label>
                      <input type="email" required placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Phone</label>
                      <input type="tel" placeholder="(404) 000-0000" className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Subject *</label>
                      <select required className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors text-gray-700">
                        <option value="">Select a subject</option>
                        <option>Need Assistance / Services</option>
                        <option>Donation Inquiry</option>
                        <option>Volunteer Sign-Up</option>
                        <option>Partnership / Sponsorship</option>
                        <option>Event Information</option>
                        <option>Wishlist / Item Donation</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 block">Message *</label>
                    <textarea required rows={6} placeholder="Tell us how we can help or how you'd like to get involved..." className="w-full border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl overflow-hidden mb-8 border border-orange-100">
                <div className="aspect-video flex flex-col items-center justify-center text-center p-8">
                  <MapPin className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Find Us</h3>
                  <p className="text-gray-600 text-sm mb-4">466 Simpson Street<br />McDonough, Georgia 30253</p>
                  <a href="https://maps.google.com/?q=466+Simpson+Street+McDonough+GA" target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-orange-700 transition-colors">
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 font-display">Service Hours</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between"><span>Thursday</span><span className="font-semibold">10:00am - 2:00pm</span></div>
                    <div className="flex justify-between"><span>Friday</span><span className="font-semibold">10:00am - 2:00pm</span></div>
                    <div className="flex justify-between text-gray-400"><span>Saturday - Wednesday</span><span>Closed</span></div>
                  </div>
                  <div className="mt-4 bg-orange-50 rounded-xl p-3 text-orange-800 text-xs">No appointment required for food pantry and clothing closet services.</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 font-display">Follow Us</h4>
                  <div className="flex gap-3">
                    {[Share2, Camera, MessageCircle, Play].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 bg-white shadow border border-gray-100 hover:border-orange-200 hover:bg-orange-50 rounded-xl flex items-center justify-center transition-all group">
                        <Icon className="w-5 h-5 text-gray-500 group-hover:text-orange-600 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2 font-display">Need Immediate Help?</h4>
                  <p className="text-orange-100 text-sm mb-3">Visit us during service hours. No appointment needed for food pantry or clothing services.</p>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-300" /><span className="text-sm font-semibold">466 Simpson Street, McDonough, GA</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
