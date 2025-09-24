import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "The CRM Wizards transformed our sales process completely. Our lead conversion increased by 28% within the first quarter after implementation.",
    author: "Sarah Johnson", 
    title: "VP of Sales",
    company: "TechFlow Solutions",
    rating: 5
  },
  {
    content: "Their AI receptionist integration saved us 42% on call handling time while improving customer satisfaction scores. Truly impressive work.",
    author: "Michael Chen",
    title: "Operations Director", 
    company: "Global Services Inc",
    rating: 5
  },
  {
    content: "Professional, knowledgeable, and results-driven. The team delivered exactly what they promised and provided excellent ongoing support.",
    author: "Lisa Rodriguez",
    title: "CTO",
    company: "Innovation Labs",
    rating: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients say about the results we deliver.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 text-center">
              <StarRating rating={testimonial.rating} />
              
              <blockquote className="text-gray-700 my-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.title}
                </div>
                <div className="text-sm text-primary-600 font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
