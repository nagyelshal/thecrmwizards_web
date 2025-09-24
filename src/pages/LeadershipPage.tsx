import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  certifications: string[];
  experience: string;
  linkedIn?: string;
  email?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Michael Rodriguez",
    title: "Founder & Lead Architect",
    bio: "With over 12 years of Salesforce experience, Michael has led digital transformations for Fortune 500 companies and scaling startups alike. His expertise spans the entire Salesforce ecosystem, from complex integrations to AI-powered automation solutions. Prior to founding The CRM Wizards, he served as Principal Salesforce Architect at several consulting firms, delivering projects worth over $50M in value.",
    certifications: [
      "Salesforce Certified Technical Architect",
      "Platform Developer II",
      "Application Architect", 
      "Integration Architecture Designer",
      "Data Architecture Designer"
    ],
    experience: "12+ years",
    linkedIn: "https://linkedin.com/in/michael-rodriguez-sf",
    email: "michael@thecrmwizards.com"
  },
  {
    name: "Sarah Chen",
    title: "Head of AI & Integration Solutions",
    bio: "Sarah brings a unique blend of AI expertise and enterprise integration knowledge to every project. With a background in machine learning and 8 years of Salesforce development, she specializes in building intelligent automation systems that connect seamlessly with existing business processes. Sarah holds a Master's in Computer Science and has published research on conversational AI applications in enterprise environments.",
    certifications: [
      "Salesforce Certified Platform Developer II",
      "Einstein Analytics Consultant",
      "Integration Architecture Designer",
      "AWS Solutions Architect",
      "Google Cloud AI Engineer"
    ],
    experience: "8+ years",
    linkedIn: "https://linkedin.com/in/sarah-chen-ai",
    email: "sarah@thecrmwizards.com"
  }
];

export function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leadership Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meet the certified architects and AI specialists behind The CRM Wizards. 
                Our team combines deep technical expertise with real-world business experience.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-6xl mx-auto space-y-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="card p-12">
                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Photo & Contact */}
                    <div className="lg:col-span-1">
                      <div className="text-center">
                        {/* Placeholder for photo */}
                        <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                          <div className="text-4xl font-bold text-primary-600">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h2>
                        <p className="text-lg text-primary-600 font-medium mb-4">
                          {member.title}
                        </p>
                        <p className="text-sm text-gray-600 mb-6">
                          {member.experience} Salesforce Experience
                        </p>
                        
                        <div className="flex justify-center space-x-4">
                          {member.linkedIn && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(member.linkedIn, '_blank')}
                            >
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </Button>
                          )}
                          {member.email && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                            >
                              <Mail className="h-4 w-4 mr-2" />
                              Email
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bio & Certifications */}
                    <div className="lg:col-span-2">
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          About {member.name.split(' ')[0]}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Certifications & Expertise
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {member.certifications.map((cert, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="bg-gray-50 py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Our Core Values
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Outcome-First Delivery",
                    description: "We measure success by business impact, not just technical implementation. Every project is designed to deliver measurable ROI."
                  },
                  {
                    title: "Transparent Partnership", 
                    description: "Clear communication, realistic timelines, and honest feedback. We build long-term relationships based on trust and results."
                  },
                  {
                    title: "Continuous Innovation",
                    description: "Staying ahead of Salesforce and AI developments to bring cutting-edge solutions that future-proof your investment."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                By the Numbers
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "55+", label: "Combined Certifications" },
                  { number: "100+", label: "Projects Delivered" },
                  { number: "20+", label: "Years Combined Experience" },
                  { number: "98%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
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
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your Salesforce challenges and explore how our expertise can drive your business forward.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
