import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Cloud, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  longDescription: string;
}

const services: Service[] = [
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Salesforce Architecture & Delivery",
    description: "End-to-end Salesforce implementations across Sales, Service, Experience, and Platform clouds.",
    longDescription: "Transform your business with comprehensive Salesforce solutions. From initial strategy to full implementation and ongoing optimization, we deliver Salesforce projects that your team actually adopts and your customers love.",
    features: [
      "Sales Cloud optimization and automation",
      "Service Cloud implementation and customization", 
      "Experience Cloud portals and communities",
      "Custom platform development and integrations",
      "Data migration and cleansing",
      "User training and adoption strategies"
    ],
    href: "/services/salesforce-architecture"
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "AI Voice Receptionist",
    description: "Intelligent voice AI systems integrated with Salesforce for automated lead capture and customer service.",
    longDescription: "Never miss a lead or customer inquiry again. Our AI Voice Receptionist seamlessly integrates with your Salesforce org to capture, qualify, and route calls automatically while providing a professional experience for your callers.",
    features: [
      "FreeSWITCH/Verizon integration for reliable telephony",
      "Real-time Salesforce lead creation and updates",
      "Natural language processing for intelligent conversations",
      "Appointment scheduling and calendar integration",
      "Custom call routing and escalation rules",
      "Comprehensive analytics and reporting"
    ],
    href: "/services/ai-receptionist"
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="container-width section-padding">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
                Comprehensive Salesforce and AI solutions designed to accelerate your business growth and enhance customer experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-primary-600 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                          {service.longDescription}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <ArrowRight className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Link to={service.href}>
                          <Button className="group">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-width section-padding text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our Salesforce and AI solutions can accelerate your growth and enhance your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'mailto:hello@thecrmwizards.com'}
              >
                Email Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
