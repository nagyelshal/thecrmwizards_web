import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CaseStudy {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    description: string;
  }[];
  duration: string;
  teamSize: string;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI Receptionist Transformation",
    company: "TechFlow Solutions",
    industry: "Technology Services",
    challenge: "Manual call handling was consuming 60% of reception staff time, leading to missed leads and poor customer experience during peak hours.",
    solution: "Implemented intelligent AI voice receptionist integrated with Salesforce, featuring natural language processing, automatic lead qualification, and seamless handoff to human agents when needed.",
    results: [
      {
        metric: "-42%",
        improvement: "Call Handling Time",
        description: "Reduced average call resolution time from 8 minutes to 4.6 minutes"
      },
      {
        metric: "+28%",
        improvement: "Lead Conversion",
        description: "Improved lead qualification accuracy and faster response times"
      },
      {
        metric: "+95%",
        improvement: "Customer Satisfaction",
        description: "24/7 availability and instant responses boosted satisfaction scores"
      }
    ],
    duration: "3 months",
    teamSize: "4 specialists"
  },
  {
    title: "Service Cloud Enterprise Rollout",
    company: "Global Services Inc",
    industry: "Professional Services",
    challenge: "Fragmented customer service across 12 regional offices with no unified case management, resulting in inconsistent service delivery and duplicate efforts.",
    solution: "Designed and implemented comprehensive Service Cloud solution with unified case management, knowledge base, automated routing, and real-time analytics dashboard.",
    results: [
      {
        metric: "+67%",
        improvement: "Case Resolution Speed",
        description: "Average case closure time dropped from 5.2 days to 1.7 days"
      },
      {
        metric: "-34%",
        improvement: "Support Costs",
        description: "Reduced operational overhead through automation and efficient routing"
      },
      {
        metric: "+89%",
        improvement: "Agent Productivity",
        description: "Streamlined workflows and better tools increased cases handled per agent"
      }
    ],
    duration: "6 months",
    teamSize: "8 specialists"
  },
  {
    title: "Data Analytics & Pipeline Optimization",
    company: "Innovation Labs",
    industry: "Research & Development",
    challenge: "Critical business data scattered across 15 different systems with no real-time reporting capabilities, hampering strategic decision making.",
    solution: "Built comprehensive data integration platform connecting all systems to Salesforce with automated ETL pipelines, real-time dashboards, and predictive analytics.",
    results: [
      {
        metric: "+156%",
        improvement: "Data Accuracy",
        description: "Eliminated data silos and inconsistencies across all systems"
      },
      {
        metric: "-78%",
        improvement: "Report Generation Time", 
        description: "Real-time dashboards replaced 40-hour manual reporting processes"
      },
      {
        metric: "+43%",
        improvement: "Revenue Growth",
        description: "Data-driven insights enabled better strategic decisions and opportunities"
      }
    ],
    duration: "4 months",
    teamSize: "6 specialists"
  }
];

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Client Success Stories
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Real results from real implementations. See how we've helped organizations 
                transform their operations with Salesforce and AI solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <div key={index} className="max-w-6xl mx-auto">
                  <div className="card p-12">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="h-4 w-4 mr-1" />
                          {study.teamSize}
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h2>
                      <p className="text-lg text-primary-600 font-medium">
                        {study.company}
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Challenge & Solution */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            The Challenge
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Our Solution
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                          Measurable Results
                        </h3>
                        <div className="space-y-6">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-6">
                              <div className="flex items-center mb-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-2xl font-bold text-primary-600">
                                  {result.metric}
                                </span>
                                <span className="ml-2 text-gray-700 font-medium">
                                  {result.improvement}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm">
                                {result.description}
                              </p>
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

        {/* CTA Section */}
        <section className="bg-primary-600 py-16">
          <div className="container-width section-padding text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with proven Salesforce solutions.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://calendly.com/thecrmwizards/consultation', '_blank')}
            >
              Schedule Your Free Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
