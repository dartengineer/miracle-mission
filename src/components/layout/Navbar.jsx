import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navStructure = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    submenu: [
      { label: 'About Us', path: '/about' },
      { label: 'Biography', path: '/bio' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    label: 'What We Do',
    submenu: [
      { label: 'Services', path: '/services' },
      { label: 'Events', path: '/events' },
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Counseling', path: '/spiritual-guidance' },
    ],
  },
  {
    label: 'Support',
    submenu: [
      { label: 'Gallery', path: '/gallery' },
      { label: 'Sponsorship', path: '/sponsorship' },
      { label: 'Wishlist', path: '/wishlist' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isHome = location.pathname === '/';

  // Desktop Dropdown Component
  const DesktopDropdown = ({ item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (!item.submenu) {
      return (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
              ? 'text-orange-600 bg-orange-50'
              : scrolled || !isHome
                ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`
          }
        >
          {item.label}
        </NavLink>
      );
    }

    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${scrolled || !isHome
            ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
            : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
        >
          {item.label}
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
            >
              {item.submenu.map((subitem) => (
                <NavLink
                  key={subitem.path}
                  to={subitem.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm transition-colors ${isActive
                      ? 'bg-orange-50 text-orange-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                    }`
                  }
                >
                  {subitem.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome
        ? 'bg-white shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${scrolled || !isHome ? 'bg-orange-600' : 'bg-orange-500'}`}>
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <span className={`font-bold text-sm md:text-base leading-tight block font-display transition-colors duration-300 ${scrolled || !isHome ? 'text-gray-900' : 'text-white'}`}>
                Miracle Mission
              </span>
              <span className={`text-xs leading-tight block transition-colors duration-300 ${scrolled || !isHome ? 'text-orange-600' : 'text-orange-300'}`}>
                International Outreach Inc
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navStructure.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden lg:block">
            <Link to="/donate" className="btn-primary text-sm py-3 px-6">
              <Heart className="w-4 h-4 fill-white" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || !isHome ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navStructure.map((item) => (
                <div key={item.label}>
                  {!item.submenu ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-between transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            {item.submenu.map((subitem) => (
                              <NavLink
                                key={subitem.path}
                                to={subitem.path}
                                className={({ isActive }) =>
                                  `block px-8 py-2 text-sm rounded-lg transition-colors ml-2 ${isActive
                                    ? 'bg-orange-50 text-orange-600 font-semibold'
                                    : 'text-gray-600 hover:text-orange-600'
                                  }`
                                }
                              >
                                {subitem.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/donate"
                className="block mt-3 text-center bg-orange-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
              >
                ♥ Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
