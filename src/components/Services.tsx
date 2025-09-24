import { ArrowRight, Cloud, Zap, Database, GraduationCap } from 'lucide-react';
import { Button } from './ui/Button';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const services: Service[] = [
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Implementation",
    description: "Complete Salesforce implementations tailored to your business needs, from initial setup to go-live.",
    features: [
      "Sales Cloud setup",
      "Service Cloud configuration", 
      "Experience Cloud portals",
      "Data migration & integration"
    ],
    href: "/services"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Optimization",
    description: "Enhance your existing Salesforce org with performance improvements and workflow automation.",
    features: [
      "Process automation",
      "Workflow optimization",
      "Performance tuning",
      "User experience enhancement"
    ],
    href: "/services"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Custom Development",
    description: "Bespoke Salesforce solutions including custom objects, applications, and integrations.",
    features: [
      "Custom objects & fields",
      "Apex development",
      "Lightning components",
      "Third-party integrations"
    ],
    href: "/services"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Training and Support",
    description: "Comprehensive training programs and ongoing support to empower your team and maximize Salesforce adoption.",
    features: [
      "User training programs",
      "Administrator certification",
      "Ongoing support services",
      "Best practices guidance"
    ],
    href: "/services"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Salesforce Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial architecture to ongoing optimization, we deliver end-to-end Salesforce expertise 
            that drives measurable business outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 group cursor-pointer hover:border-primary-200 border border-transparent">
              <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" size="sm" className="group/btn w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
