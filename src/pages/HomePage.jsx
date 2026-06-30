import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import ImpactStats from '../components/sections/ImpactStats';
import MissionSection from '../components/sections/MissionSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import DonateSection from '../components/sections/DonateSection';
import EventsPreview from '../components/sections/EventsPreview';
import GlobalOutreach from '../components/sections/GlobalOutreach';
import PartnersPreview from '../components/sections/PartnersPreview';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function CelebrationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-amber-100 font-bold text-sm uppercase tracking-widest mb-3 block">🎉 Special Milestone</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Celebrating 20 Years<br />of Impact
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              In May 2025, we celebrated two decades of serving our community with a grand 20th Anniversary Gala. Thank you to everyone who made this milestone possible.
            </p>
            <Link to="/gallery" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors inline-flex items-center gap-2 shadow-lg">
              View Celebration Photos <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/20_years_celebration/20years1.jpg" alt="20 Years Celebration" className="aspect-square object-cover rounded-2xl" />
            <img src="/anniversary/anniversary1.jpg" alt="Anniversary Gala" className="aspect-square object-cover rounded-2xl mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Miracle Mission International Outreach Inc — Eliminating Hunger. Restoring Hope.</title>
        <meta name="description" content="Miracle Mission International Outreach Inc is a 501(c)(3) nonprofit serving Henry County, GA since 2005. Food pantry, clothing closet, community outreach, and global missions." />
        <meta name="keywords" content="nonprofit, food pantry, hunger relief, Henry County Georgia, community outreach, volunteer, donate, charity" />
        <meta property="og:title" content="Miracle Mission International Outreach Inc" />
        <meta property="og:description" content="Eliminating Hunger. Restoring Hope. Building Communities. Serving since 2005." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miraclemissionioi.net" />
        <link rel="canonical" href="https://miraclemissionioi.net" />
      </Helmet>

      <Hero />
      <ImpactStats />
      <MissionSection />
      <ServicesPreview />
      <CelebrationBanner />
      <EventsPreview />
      <GlobalOutreach />
      <DonateSection />
      <PartnersPreview />
    </>
  );
}
