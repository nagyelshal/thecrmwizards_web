import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

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

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-width section-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              The CRM Wizards
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="w-full mt-4">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
