import { Link } from 'react-router-dom';
import { ArrowRight, Shield, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Get a free consultation with our medical tourism experts. We'll help you find the perfect clinic and procedure for your needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full"
            >
              <Link to="/consultation">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/guide">Read Our Guide</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-5 w-5" />
              <span>Verified Clinics Only</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MessageCircle className="h-5 w-5" />
              <span>Free Expert Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-5 w-5" />
              <span>50,000+ Happy Patients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}