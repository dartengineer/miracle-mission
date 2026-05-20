import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, Share2, ArrowRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA Band */}
      <div className="bg-orange-600 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Ready to Make a Difference?</h3>
          <p className="text-orange-100 mb-6 text-lg">Every gift changes lives. Every volunteer hour matters.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
              Donate Now
            </Link>
            <Link to="/donate#volunteer" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Volunteer Today
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="font-bold text-sm block font-display text-white">Miracle Mission</span>
                <span className="text-xs text-orange-400">International Outreach Inc</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Eliminating hunger, fostering hope, and building stronger communities since 2005. A 501(c)(3) nonprofit organization.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'f', href: '#', title: 'Facebook' },
                { label: 'in', href: '#', title: 'Instagram' },
                { label: 'X', href: '#', title: 'Twitter / X' },
                { label: '▶', href: '#', title: 'YouTube' },
              ].map(({ label, href, title }, i) => (
                <a key={i} href={href} className="w-9 h-9 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors text-xs font-bold" aria-label={title} title={title}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Events', path: '/events' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Sponsorship', path: '/sponsorship' },
                { label: 'Wishlist', path: '/wishlist' },
                { label: 'Donate / Volunteer', path: '/donate' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">466 Simpson Street,<br />McDonough, GA 30253</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">404-454-9854</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <a href="mailto:support@miraclemissionioi.net" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">support@miraclemissionioi.net</a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Thu & Fri: 10:00am – 2:00pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">Get updates on events, programs, and how you can help.</p>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Subscribe
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Tax-Exempt</p>
              <p className="text-xs text-gray-500">501(c)(3) Nonprofit Organization<br />EIN available upon request</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} Miracle Mission International Outreach Inc. All rights reserved.</p>
          <p className="text-center">
            Incorporated 12/28/2004 · 501(c)(3) Approved 2005 · <a href="https://miraclemissionioi.net" className="hover:text-orange-400 transition-colors">miraclemissionioi.net</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
