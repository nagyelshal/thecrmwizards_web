import { Users, RotateCcw } from 'lucide-react';

interface ApproachItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const approaches: ApproachItem[] = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaborative",
    description: "We believe in the power of collaboration to create exceptional user experiences. As an extension of your team, we immerse ourselves in your vision and goals. We work closely with you to develop the correct set of tools…focusing on reflecting your brand and exceeding your expectations."
  },
  {
    icon: <RotateCcw className="h-8 w-8" />,
    title: "Iterative", 
    description: "We employ an iterative approach to ensure that the final Salesforce implementation aligns with your strategic vision and reflects your unique business processes & identity. By collaborating closely with your team, we continuously refine and optimize the solution."
  }
];

export function Approach() {
  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine collaborative partnership with iterative methodology to deliver Salesforce solutions that truly fit your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <div className="text-primary-600">
                  {approach.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {approach.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
