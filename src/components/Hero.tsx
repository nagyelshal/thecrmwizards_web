
import { ArrowRight, CheckCircle, Zap, Star, Award } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-2xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-full floating" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-16 h-16 bg-gradient-to-r from-accent-500/20 to-accent-700/20 rotate-45 floating" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
      </div>

      <div className="container-width section-padding relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 font-medium text-sm animate-fade-in">
              <Zap className="h-4 w-4" />
              Salesforce + AI Excellence
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-900 leading-tight animate-slide-up">
                {title.split(' ').map((word, index) => (
                  <span 
                    key={index}
                    className={word.toLowerCase().includes('stick') || word.toLowerCase().includes('ship') ? 'gradient-text' : ''}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-slide-up max-w-2xl" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => window.open(primaryCta.href, '_blank')}
                className="btn-primary btn-lg group"
              >
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              {secondaryCta && (
                <button
                  onClick={() => window.location.href = secondaryCta.href}
                  className="btn-secondary btn-lg"
                >
                  {secondaryCta.text}
                </button>
              )}
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>5.0 Client Rating</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>10+ Years Experience</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Award className="h-4 w-4 text-primary-500" />
                <span>55+ Certifications</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Salesforce Partner</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              {/* Main Salesforce illustration */}
              <div className="card card-hover overflow-hidden shadow-large">
                <img 
                  src="/images/salesforce-dashboard.svg" 
                  alt="Salesforce Implementation Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-4 card p-4 bg-primary-500 text-white shadow-xl floating" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold">55+</div>
                <div className="text-sm opacity-90">Certifications</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 card p-4 bg-accent-500 text-white shadow-xl floating" style={{ animationDelay: '1.5s' }}>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
