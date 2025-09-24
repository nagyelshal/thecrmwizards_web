import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-xl backdrop-blur-xl border-b border-white/10' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-width">
        <div className="flex justify-between items-center py-4 lg:py-6 section-padding">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="group flex items-center space-x-3"
            >
              <div className="w-10 h-10 group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/images/logo-icon.svg" 
                  alt="The CRM Wizards" 
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl lg:text-2xl font-bold gradient-text">
                  The CRM Wizards
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  Salesforce + AI Excellence
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary-500 transform transition-all duration-300 ${
                  location.pathname === item.href 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            
            <div className="ml-6 pl-6 border-l border-gray-200">
              <button
                onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
                className="btn-primary btn-md group"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-all duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-6 space-y-2 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100 mt-4">
              <button
                onClick={() => {
                  window.open('https://calendly.com/thecrmwizards/consultation', '_blank');
                  setIsOpen(false);
                }}
                className="btn-primary btn-md w-full group"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
