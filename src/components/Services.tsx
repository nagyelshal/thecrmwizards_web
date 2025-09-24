import { ArrowRight, Cpu, Cloud, Zap, Database, Headphones, GraduationCap } from 'lucide-react';
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
    title: "Salesforce Architecture & Delivery",
    description: "End-to-end Salesforce implementations across Sales, Service, Experience, and Platform clouds.",
    features: [
      "Sales Cloud optimization",
      "Service Cloud implementation", 
      "Experience Cloud portals",
      "Custom platform development"
    ],
    href: "/services/salesforce-architecture"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Voice Receptionist",
    description: "Intelligent voice AI systems integrated with Salesforce for automated lead capture and customer service.",
    features: [
      "FreeSWITCH/Verizon integration",
      "TTS/STT processing",
      "Automated lead creation",
      "Call routing & analytics"
    ],
    href: "/services/ai-receptionist"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Integrations & Telephony", 
    description: "Seamless connections between Salesforce and your existing systems, including PBX and telephony solutions.",
    features: [
      "SIP/PBX integration",
      "S3 call recording",
      "Webhook automation",
      "Middleware development"
    ],
    href: "/services/integrations"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with advanced analytics and reporting solutions.",
    features: [
      "Data pipeline automation",
      "Customer data platforms", 
      "Advanced dashboards",
      "Performance analytics"
    ],
    href: "/services/data-analytics"
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "24/7 Support & Maintenance",
    description: "Ongoing support to ensure your Salesforce instance runs smoothly and evolves with your business.",
    features: [
      "Proactive monitoring",
      "Issue resolution",
      "Performance optimization",
      "Security updates"
    ],
    href: "/services/support"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Training & Enablement",
    description: "Comprehensive training programs to empower your team and maximize Salesforce adoption.",
    features: [
      "Admin training programs",
      "Super-user certification",
      "Custom workshops",
      "Best practice guidance"
    ],
    href: "/services/training"
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
