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
    name: "Eli Kiedrowski",
    title: "Founder & Principal Architect",
    bio: "Eli is the founder and principal architect of The CRM Wizards, bringing extensive experience in Salesforce consulting and implementation. With a passion for helping businesses harness the full potential of the Salesforce platform, Eli leads our team in delivering tailored solutions that drive growth and enhance customer experiences.",
    certifications: [
      "Salesforce Certified Administrator",
      "Platform App Builder",
      "Sales Cloud Consultant",
      "Service Cloud Consultant",
      "Experience Cloud Consultant"
    ],
    experience: "10+ years",
    linkedIn: "https://www.linkedin.com/in/elikiedrowski/",
    email: "eli@thecrmwizards.com"
  },
  {
    name: "Nagy Elshal",
    title: "Technical Architect & Development Manager",
    bio: "Nagy serves as our Technical Architect and Development Manager, specializing in complex Salesforce implementations and custom development. His expertise in both Salesforce platform development and system integrations ensures our clients receive robust, scalable solutions that meet their unique business requirements.",
    certifications: [
      "Salesforce Certified Platform Developer I",
      "Platform Developer II",
      "Integration Architecture Designer",
      "Platform App Builder",
      "Administrator"
    ],
    experience: "8+ years",
    linkedIn: "https://www.linkedin.com/in/nagyelshal/",
    email: "nagy@thecrmwizards.com"
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
                        {/* Team photo */}
                        <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={`${import.meta.env.BASE_URL}images/team/${member.name.toLowerCase().replace(' ', '-')}.svg`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
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
