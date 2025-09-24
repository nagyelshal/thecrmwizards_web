import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Cpu, CheckCircle, ArrowRight, Phone, Brain, Zap } from 'lucide-react';

export function AIReceptionistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Cpu className="h-16 w-16 text-primary-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                AI Voice Receptionist
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Intelligent voice AI systems that integrate seamlessly with Salesforce for automated 
                lead capture, customer service, and call routing—available 24/7.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
              >
                Schedule AI Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Revolutionary AI Reception Technology
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Advanced natural language processing meets enterprise-grade Salesforce integration.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Brain className="h-8 w-8" />,
                    title: "Natural Language Processing",
                    description: "Understands context, intent, and nuanced conversations just like a human receptionist",
                    features: [
                      "Multi-language support",
                      "Sentiment analysis",
                      "Context awareness",
                      "Industry-specific vocabularies"
                    ]
                  },
                  {
                    icon: <Zap className="h-8 w-8" />,
                    title: "Salesforce Integration",
                    description: "Seamlessly creates leads, updates records, and triggers workflows in real-time",
                    features: [
                      "Automatic lead creation",
                      "Contact enrichment",
                      "Workflow automation",
                      "Real-time data sync"
                    ]
                  },
                  {
                    icon: <Phone className="h-8 w-8" />,
                    title: "Advanced Telephony",
                    description: "Enterprise-grade call handling with intelligent routing and recording",
                    features: [
                      "FreeSWITCH/Verizon support",
                      "Call recording & transcription",
                      "Intelligent routing",
                      "Analytics dashboard"
                    ]
                  }
                ].map((feature, index) => (
                  <div key={index} className="card p-8">
                    <div className="text-primary-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Perfect for Multiple Scenarios
                </h2>
                <p className="text-xl text-gray-600">
                  From lead capture to customer support, our AI receptionist handles it all.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Lead Qualification & Capture",
                    description: "Never miss a potential customer again. Our AI qualifies leads, gathers contact information, and schedules appointments automatically.",
                    results: "28% increase in lead conversion rates"
                  },
                  {
                    title: "Customer Support Triage",
                    description: "Handle basic inquiries, route complex issues to the right team, and provide 24/7 support without human intervention.",
                    results: "42% reduction in call handling time"
                  },
                  {
                    title: "Appointment Scheduling",
                    description: "Intelligent calendar integration that finds optimal meeting times, sends confirmations, and handles rescheduling requests.",
                    results: "67% faster appointment booking"
                  },
                  {
                    title: "Information Gathering",
                    description: "Collect detailed customer information, update existing records, and ensure your Salesforce data stays current.",
                    results: "89% improvement in data accuracy"
                  }
                ].map((useCase, index) => (
                  <div key={index} className="card p-8 border-l-4 border-l-primary-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                      Average Result: {useCase.results}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Enterprise-Grade Architecture
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Technology Stack
                  </h3>
                  <ul className="text-left space-y-3">
                    {[
                      "FreeSWITCH for call handling",
                      "Advanced TTS/STT engines",
                      "Natural language processing",
                      "Salesforce REST/SOAP APIs",
                      "Real-time webhooks",
                      "AWS/Azure cloud hosting"
                    ].map((tech, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Security & Compliance
                  </h3>
                  <ul className="text-left space-y-3">
                    {[
                      "End-to-end encryption",
                      "SOC 2 Type II compliant",
                      "GDPR & CCPA ready",
                      "Role-based access control",
                      "Audit logging",
                      "PCI DSS compliance"
                    ].map((security, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        {security}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Deployment Options
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose between cloud-hosted, on-premises, or hybrid deployment models 
                  to meet your specific security and compliance requirements.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cloud-Hosted</h4>
                    <p className="text-gray-600">Fast deployment, automatic updates</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">On-Premises</h4>
                    <p className="text-gray-600">Complete control, custom security</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Hybrid</h4>
                    <p className="text-gray-600">Best of both worlds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 py-16">
          <div className="container-width section-padding text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Deploy Your AI Receptionist?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              See how our AI voice technology can transform your customer interactions and boost your Salesforce ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
                className="group"
              >
                Schedule AI Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:hello@thecrmwizards.com', '_blank')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Request Technical Specs
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
