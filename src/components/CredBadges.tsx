import { Award, Users, CheckCircle, Shield } from 'lucide-react';

interface CredBadge {
  icon: React.ReactNode;
  stat: string;
  description: string;
}

const credBadges: CredBadge[] = [
  {
    icon: <Award className="h-8 w-8 text-primary-600" />,
    stat: "10+ Years",
    description: "Salesforce Consulting"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
    stat: "55",
    description: "Salesforce Certifications"
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    stat: "100+",
    description: "Successful Implementations"
  },
  {
    icon: <Shield className="h-8 w-8 text-primary-600" />,
    stat: "Certified",
    description: "Salesforce Consulting Partner"
  }
];

export function CredBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted Salesforce Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven track record delivering enterprise-grade Salesforce solutions with measurable business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credBadges.map((badge, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {badge.stat}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {badge.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
