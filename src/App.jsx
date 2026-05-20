import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DonatePage from './pages/DonatePage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import WishlistPage from './pages/WishlistPage';
import SponsorshipPage from './pages/SponsorshipPage';
import ContactPage from './pages/ContactPage';

function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Use setTimeout to ensure scroll happens after render
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollRestoration />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
