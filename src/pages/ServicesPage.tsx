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
    title: "Implementation",
    description: "Complete Salesforce implementations tailored to your business needs, from initial setup to go-live.",
    longDescription: "Our expert consultants work closely with your team to design and implement Salesforce solutions that align with your business processes. We ensure smooth data migration, proper configuration, and successful user adoption.",
    features: [
      "Sales Cloud setup and configuration",
      "Service Cloud implementation", 
      "Experience Cloud portals",
      "Data migration and cleansing",
      "Custom object creation",
      "Workflow automation setup"
    ],
    href: "/services"
  },
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Optimization",
    description: "Enhance your existing Salesforce org with performance improvements and workflow automation.",
    longDescription: "Maximize the value of your existing Salesforce investment. We analyze your current setup, identify improvement opportunities, and implement optimizations that increase efficiency and user satisfaction.",
    features: [
      "Process automation enhancement",
      "Workflow optimization",
      "Performance tuning and monitoring",
      "User experience improvements",
      "Data quality enhancements",
      "Security and compliance updates"
    ],
    href: "/services"
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "Custom Development",
    description: "Bespoke Salesforce solutions including custom objects, applications, and integrations.",
    longDescription: "When out-of-the-box functionality isn't enough, our certified developers create custom solutions tailored to your unique business requirements using Apex, Lightning, and the Salesforce platform.",
    features: [
      "Custom objects and fields development",
      "Apex triggers and classes",
      "Lightning Web Components",
      "Third-party system integrations",
      "Custom applications",
      "API development and management"
    ],
    href: "/services"
  },
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Training and Support",
    description: "Comprehensive training programs and ongoing support to empower your team and maximize Salesforce adoption.",
    longDescription: "Ensure your team gets the most out of Salesforce with our comprehensive training programs and ongoing support services. From basic user training to advanced administrator certification.",
    features: [
      "End-user training programs",
      "Administrator certification prep",
      "Ongoing technical support",
      "Best practices consultation",
      "Documentation and resources",
      "Change management guidance"
    ],
    href: "/services"
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
