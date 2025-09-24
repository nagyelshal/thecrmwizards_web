import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { CredBadges } from '@/components/CredBadges';
import { Approach } from '@/components/Approach';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero 
          title="Harness the Full Potential of Salesforce"
          subtitle="At The CRM Wizards, we're dedicated to helping businesses harness the full potential of Salesforce, the world's leading customer relationship management (CRM) platform. With our expert team of certified Salesforce consultants, we provide tailored solutions that drive growth, streamline processes, and enhance customer experiences."
          primaryCta={{
            text: "Contact Us",
            href: "https://www.thecrmwizards.com/contact-us"
          }}
          secondaryCta={{
            text: "View Services",
            href: "/services"
          }}
        />
        
        <CredBadges />
        <Approach />
        <Services />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}
