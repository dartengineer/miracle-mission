import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3, X, ZoomIn } from 'lucide-react';
import { galleryItems as realGalleryItems } from '../data/galleryData';

const categories = [
  'All',
  'Phenomenal Woman Award',
  '20 Years Celebration',
  'Community Outreach',
  'Food Pantry',
  'Volunteer Work',
  'Nigeria Outreach',
  'Kenya Outreach',
  'Pakistan Outreach',
  'Events',
  'Feeding Programs',
  'Children Support',
];

// Combine real gallery items with placeholder items for other categories
const generateGalleryItems = () => {
  const placeholderItems = {
    'Phenomenal Woman Award': ['Award Ceremony', 'Recognition Event', 'Marlene Honored', 'Award Presentation', 'Celebration Moment'],
    'Community Outreach': ['Community Service', 'Neighborhood Support', 'Local Outreach', 'Community Together', 'Service Drive', 'Community Day'],
    'Food Pantry': ['Food Distribution', 'Pantry Shelves', 'Grocery Bags', 'Fresh Produce', 'Family Pickup', 'Volunteers Sorting'],
    'Nigeria Outreach': ['Nigeria Mission', 'Nigeria Community', 'Nigeria Feeding', 'Nigeria Children', 'Nigeria Women', 'Nigeria Support'],
    'Kenya Outreach': ['Kenya Outreach', 'Kenya Mission', 'Kenya Children', 'Kenya Community', 'Kenya Programs', 'Kenya Families'],
    'Pakistan Outreach': ['Pakistan Mission', 'Pakistan Community', 'Pakistan Outreach', 'Pakistan Families', 'Pakistan Programs', 'Pakistan Aid'],
    'Events': ['Thanksgiving Gala', 'Back to School', 'Fundraising Event', 'Community Gala', 'Holiday Event', 'Annual Celebration'],
    'Feeding Programs': ['Meal Distribution', 'Hot Meals', 'Feeding Drive', 'Homeless Feeding', 'Community Dinner', 'Food Drive'],
    'Children Support': ['Children Programs', 'School Supplies', 'Toy Giveaway', 'Kids Activities', 'Youth Support', 'Children Community'],
  };

  const items = [...realGalleryItems];
  let id = items.length;

  Object.entries(placeholderItems).forEach(([cat, labels]) => {
    labels.forEach((label) => {
      items.push({
        id: `placeholder_${id}`,
        category: cat,
        label,
        // Vary sizes for masonry effect
        size: id % 5 === 0 ? 'large' : id % 3 === 0 ? 'wide' : 'normal',
      });
      id++;
    });
  });
  return items;
};

const galleryItems = generateGalleryItems();

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery — Miracle Mission International Outreach Inc</title>
        <meta name="description" content="Photos from our community outreach, food pantry, volunteer programs, global missions, and events." />
      </Helmet>

      <PageHeader
        title="Our Gallery"
        subtitle="A visual testament to 20+ years of service, love, and transformation in our community and around the world."
        breadcrumb="Home › Gallery"
      />

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Grid3X3 className="w-5 h-5" />
              <span className="font-semibold">{filtered.length} photos</span>
            </div>
            <span className="text-orange-600 text-sm font-semibold">{activeCategory}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.6) }}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl ${item.size === 'large' ? 'col-span-2 row-span-2' :
                    item.size === 'wide' ? 'col-span-2' : ''
                    }`}
                  onClick={() => setLightboxItem(item)}
                >
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.label}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.size === 'large' ? 'aspect-square' : 'aspect-video'
                          }`}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        //  src={`/food_pantry/pantry${(i % 5) + 1}.jpg`}
                        alt={item.label}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.size === 'large' ? 'aspect-square' : 'aspect-video'
                          }`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) e.target.nextSibling.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold">{item.label}</p>
                    <p className="text-white/60 text-xs">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Upload CTA */}
          <div className="mt-16 text-center bg-orange-50 border-2 border-dashed border-orange-200 rounded-3xl py-12 px-8">
            <div className="text-orange-300 text-6xl mb-4">📷</div>
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">More Photos Coming Soon</h3>
            <p className="text-gray-600 max-w-lg mx-auto text-sm">
              We're continuously adding photos from our programs, events, and global outreach. Have photos to share? Contact us!
            </p>
            <a href="mailto:support@miraclemissionioi.net" className="mt-6 btn-outline inline-flex">
              Share Your Photos
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightboxItem(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxItem.image ? (
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.label}
                  className="rounded-2xl w-full h-auto object-contain max-h-[80vh]"
                />
              ) : (
                <img
                  src="/food_pantry/pantry.jpg"
                  alt={lightboxItem.label}
                  className="rounded-2xl w-full h-auto object-contain max-h-[80vh]"
                />
              )}
              <div className="text-white text-center mt-4">
                <p className="font-semibold">{lightboxItem.label}</p>
                <p className="text-white/60 text-sm">{lightboxItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



