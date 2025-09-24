import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's Start Your Salesforce Journey
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your business with proven Salesforce solutions? 
                Get in touch to discuss your project and see how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                {/* Quick Contact */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Get In Touch Quickly
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Book Consultation */}
                    <div className="card p-8 border-l-4 border-l-primary-500">
                      <div className="flex items-start">
                        <Calendar className="h-8 w-8 text-primary-600 mr-4 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Book Free Consultation
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Schedule a 30-minute call to discuss your Salesforce needs and explore solutions.
                          </p>
                          <Button 
                            size="sm"
                            onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
                            className="group"
                          >
                            Schedule Now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="card p-8 border-l-4 border-l-accent-500">
                      <div className="flex items-start">
                        <Mail className="h-8 w-8 text-accent-600 mr-4 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Email Us Directly
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Send us a detailed message about your project and we'll respond within 24 hours.
                          </p>
                          <Button 
                            variant="secondary"
                            size="sm"
                            onClick={() => window.open('mailto:hello@thecrmwizards.com', '_blank')}
                          >
                            hello@thecrmwizards.com
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="card p-8 border-l-4 border-l-gray-400">
                      <div className="flex items-start">
                        <Phone className="h-8 w-8 text-gray-600 mr-4 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Call Us
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Speak directly with our team during business hours (9 AM - 6 PM EST).
                          </p>
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => window.open('tel:+1234567890', '_blank')}
                          >
                            +1 (234) 567-8900
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Send Us a Message
                  </h2>
                  
                  <form 
                    className="card p-8"
                    action="https://formspree.io/f/YOUR_FORM_ID" 
                    method="POST"
                  >
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="john.doe@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="salesforce-implementation">Salesforce Implementation</option>
                          <option value="ai-receptionist">AI Voice Receptionist</option>
                          <option value="integrations">System Integrations</option>
                          <option value="data-analytics">Data & Analytics</option>
                          <option value="support-training">Support & Training</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                        ></textarea>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="bg-gray-50 py-16">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <MapPin className="h-12 w-12 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We Work Where You Need Us
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Remote-first with nationwide coverage. We provide on-site consulting 
                and implementation services across the United States.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Remote Services</h3>
                  <p className="text-gray-600">Full project delivery capability</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">On-site Consulting</h3>
                  <p className="text-gray-600">Available for implementation phases</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Training & Support</h3>
                  <p className="text-gray-600">Both virtual and in-person options</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
