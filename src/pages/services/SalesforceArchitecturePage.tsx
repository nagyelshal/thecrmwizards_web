import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Cloud, CheckCircle, ArrowRight, Users, Zap, Shield } from 'lucide-react';

export function SalesforceArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Cloud className="h-16 w-16 text-primary-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Salesforce Architecture & Delivery
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                End-to-end Salesforce implementations across Sales, Service, Experience, and Platform clouds 
                designed for scale, adoption, and measurable business impact.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
              >
                Schedule Architecture Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive Salesforce Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We architect, build, and optimize Salesforce implementations that drive real business outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Sales Cloud",
                    description: "Lead management, opportunity tracking, forecasting, and pipeline optimization"
                  },
                  {
                    icon: <Shield className="h-8 w-8" />,
                    title: "Service Cloud",
                    description: "Case management, knowledge base, omnichannel support, and SLA automation"
                  },
                  {
                    icon: <Zap className="h-8 w-8" />,
                    title: "Experience Cloud",
                    description: "Customer portals, partner communities, and self-service solutions"
                  },
                  {
                    icon: <Cloud className="h-8 w-8" />,
                    title: "Platform Development",
                    description: "Custom objects, workflows, integrations, and advanced automation"
                  }
                ].map((item, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="text-primary-600 mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Implementation Methodology
                </h2>
                <p className="text-xl text-gray-600">
                  Proven process that ensures successful adoption and measurable ROI.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description: "Deep dive into your business processes, requirements, and goals to create a tailored architecture blueprint.",
                    deliverables: ["Business requirements analysis", "Technical architecture design", "Implementation roadmap", "Success metrics definition"]
                  },
                  {
                    step: "02", 
                    title: "Implementation & Build",
                    description: "Agile development with regular checkpoints, ensuring the solution meets your exact needs and timeline.",
                    deliverables: ["Iterative development", "Regular demo sessions", "User acceptance testing", "Data migration"]
                  },
                  {
                    step: "03",
                    title: "Launch & Optimize",
                    description: "Go-live support, user training, and continuous optimization to maximize adoption and business impact.",
                    deliverables: ["Go-live support", "User training programs", "Performance monitoring", "Ongoing optimization"]
                  }
                ].map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="text-6xl font-bold text-primary-100 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Why Choose Our Architecture Services?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Certified Expertise",
                    description: "55+ Salesforce certifications across all clouds and platforms"
                  },
                  {
                    title: "Proven Track Record", 
                    description: "100+ successful implementations with measurable business outcomes"
                  },
                  {
                    title: "Future-Proof Design",
                    description: "Scalable architectures that grow with your business needs"
                  },
                  {
                    title: "Adoption Focus",
                    description: "User-centric design ensures high adoption and ROI"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="card p-8 text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 py-16">
          <div className="container-width section-padding text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Salesforce Implementation?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and design a Salesforce architecture that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
                className="group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:hello@thecrmwizards.com', '_blank')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
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
