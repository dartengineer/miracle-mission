import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Package, Heart, ArrowRight, Gift, Truck, ShoppingCart } from 'lucide-react';

const wishlistItems = [
  { icon: '🥫', title: 'Dry Foods & Canned Goods', desc: 'Beans, rice, pasta, soups, and other non-perishable staples for our food pantry.', priority: 'high', progress: 45 },
  { icon: '🥦', title: 'Fresh Groceries', desc: 'Fresh produce, dairy, and other perishable items for weekly distribution.', priority: 'high', progress: 30 },
  { icon: '🧴', title: 'Toiletries & Hygiene', desc: 'Soap, shampoo, toothbrushes, toothpaste, deodorant, and feminine hygiene products.', priority: 'high', progress: 55 },
  { icon: '🏠', title: 'Household Essentials', desc: 'Cleaning supplies, paper products, laundry detergent, and household basics.', priority: 'medium', progress: 60 },
  { icon: '📎', title: 'Office Supplies', desc: 'Pens, paper, folders, staplers, and other items for our administrative needs.', priority: 'low', progress: 70 },
  { icon: '🚛', title: '10ft BOX TRUCK', desc: 'URGENT: We need a 10-foot box truck to expand our food and supply pickup and delivery capacity.', priority: 'urgent', progress: 10 },
  { icon: '🎮', title: 'Toys for Ages 13–17', desc: 'Board games, sports equipment, art supplies, and age-appropriate toys for our holiday gala.', priority: 'high', progress: 35 },
  { icon: '🎒', title: 'Backpacks & School Supplies', desc: 'Backpacks, notebooks, pencils, rulers, and supplies for our Back to School event.', priority: 'high', progress: 50 },
  { icon: '🖨️', title: 'HP Ink Cartridges', desc: 'HP Ink Cartridges 952, 953, 954, and 955 for our office printer — a critical administrative need.', priority: 'medium', progress: 20 },
  { icon: '💻', title: '10 Laptops', desc: 'Refurbished or new laptops to support digital literacy, GED programs, and staff operations.', priority: 'high', progress: 15 },
];

const priorityConfig = {
  urgent: { label: 'URGENT', color: 'bg-red-600 text-white', bar: 'bg-red-500', border: 'border-red-300' },
  high: { label: 'HIGH NEED', color: 'bg-orange-500 text-white', bar: 'bg-orange-500', border: 'border-orange-200' },
  medium: { label: 'NEEDED', color: 'bg-amber-500 text-white', bar: 'bg-amber-400', border: 'border-amber-200' },
  low: { label: 'APPRECIATED', color: 'bg-gray-400 text-white', bar: 'bg-gray-400', border: 'border-gray-200' },
};

function WishlistCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const config = priorityConfig[item.priority];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border ${config.border} hover:-translate-y-0.5 overflow-hidden`}
    >
      {/* Priority bar */}
      <div className={`h-1 ${config.bar}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{item.icon}</div>
          <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${config.color}`}>
            {item.priority === 'urgent' && <AlertTriangle className="w-3 h-3 inline mr-1" />}
            {config.label}
          </span>
        </div>

        <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>Fulfillment Progress</span>
            <span className="font-semibold">{item.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${item.progress}%` } : {}}
              transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
              className={`h-full ${config.bar} rounded-full`}
            />
          </div>
        </div>

        <a
          href="mailto:support@miraclemissionioi.net?subject=Wishlist Donation"
          className="w-full text-center block bg-gray-900 hover:bg-orange-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
        >
          Donate This Item
        </a>
      </div>
    </motion.div>
  );
}

export default function WishlistPage() {
  const urgentItems = wishlistItems.filter(i => i.priority === 'urgent');
  const otherItems = wishlistItems.filter(i => i.priority !== 'urgent');

  return (
    <>
      <Helmet>
        <title>Wishlist — Miracle Mission International Outreach Inc</title>
        <meta name="description" content="View our current wishlist of needed donations including food, supplies, a box truck, laptops, and more." />
      </Helmet>

      <PageHeader
        title="Community Wishlist"
        subtitle="See exactly what we need most right now. Every donation — big or small — makes a real difference."
        breadcrumb="Home › Wishlist"
      />

      {/* Urgent Banner */}
      {urgentItems.map((item) => (
        <section key={item.title} className="bg-red-600 py-6 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm uppercase tracking-wide">⚡ URGENT NEED</div>
                  <div className="text-white text-lg font-display font-bold">{item.title}</div>
                  <div className="text-red-200 text-sm">{item.desc}</div>
                </div>
              </div>
              <a
                href="mailto:support@miraclemissionioi.net?subject=Box Truck Donation Inquiry"
                className="flex-shrink-0 bg-white text-red-600 font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-colors shadow-lg"
              >
                Help Now →
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* Intro */}
      <section className="py-12 bg-orange-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">How to Donate Items</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            You can drop off items at our location during service hours, coordinate a pickup, or contact us to arrange delivery. We gratefully accept gently used and new items.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
            <div className="bg-white rounded-xl p-4 border border-orange-100">
              <div className="text-2xl mb-2">📍</div>
              <div className="font-bold text-gray-900">Drop Off</div>
              <div className="text-gray-500">466 Simpson St, McDonough, GA<br />Thu & Fri, 10am–2pm</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-orange-100">
              <div className="text-2xl mb-2">📧</div>
              <div className="font-bold text-gray-900">Contact Us</div>
              <div className="text-gray-500">support@miraclemissionioi.net<br />to arrange pickup</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-orange-100">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-bold text-gray-900">Buy & Ship</div>
              <div className="text-gray-500">Purchase items and<br />ship directly to us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-2 block">Current Needs</span>
              <h2 className="font-display text-3xl font-bold text-gray-900">What We Need Most</h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {Object.entries(priorityConfig).map(([key, val]) => (
                <span key={key} className={`text-xs font-bold px-3 py-1 rounded-full ${val.color}`}>{val.label}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {wishlistItems.map((item, i) => (
              <WishlistCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Donate money CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Can't Drop Off Items?</h2>
          <p className="text-gray-400 mb-8">A cash donation allows us to purchase exactly what we need, when we need it. Every dollar goes directly to serving our community.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-500 transition-colors">
              <Heart className="w-5 h-5 inline mr-2 fill-white" />
              Make a Cash Donation
            </Link>
            <a href="mailto:support@miraclemissionioi.net" className="border-2 border-gray-600 text-white font-bold px-8 py-4 rounded-full hover:border-gray-400 transition-colors">
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
