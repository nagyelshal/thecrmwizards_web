import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width section-padding py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              The CRM Wizards
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Salesforce & AI consultancy helping businesses harness technology 
              for growth, streamlined processes, and enhanced customer experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services/salesforce-architecture" className="hover:text-white transition-colors">Salesforce Architecture</a></li>
              <li><a href="/services/ai-receptionist" className="hover:text-white transition-colors">AI Voice Receptionist</a></li>
              <li><a href="/services/integrations" className="hover:text-white transition-colors">Integrations & Telephony</a></li>
              <li><a href="/services/data-analytics" className="hover:text-white transition-colors">Data & Analytics</a></li>
              <li><a href="/services/support" className="hover:text-white transition-colors">Support & Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/leadership" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="/insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary-400" />
                <a href="mailto:hello@thecrmwizards.com" className="hover:text-white transition-colors">
                  hello@thecrmwizards.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary-400" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary-400 mt-1" />
                <span>Remote & On-site<br />Nationwide Coverage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} The CRM Wizards. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
