import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { CredBadges } from '@/components/CredBadges';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero 
          title="Salesforce & AI that actually ship and stick"
          subtitle="We architect, implement, and iterate—so your team adopts faster and your customers notice the difference"
          primaryCta={{
            text: "Book Free Consultation",
            href: "https://calendly.com/thecrmwizards/consultation"
          }}
          secondaryCta={{
            text: "Email Us",
            href: "mailto:hello@thecrmwizards.com"
          }}
        />
        
        <CredBadges />
        <Services />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}
