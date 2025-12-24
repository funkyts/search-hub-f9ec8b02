import { Link } from 'react-router-dom';
import { Search, ArrowRight, Star, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container-custom relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Perfect{' '}
            <span className="text-primary">Skincare Clinic</span> in Korea
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Your trusted guide to the best dermatology and plastic surgery clinics in Korea. 
            Compare prices, read verified reviews, and book free consultations.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex gap-2 rounded-full bg-card p-2 shadow-lg border border-border">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search procedures, clinics, or treatments..."
                  className="border-0 bg-transparent pl-12 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button size="lg" className="rounded-full px-6">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground md:text-3xl">500+</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Verified Clinics</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground md:text-3xl">250+</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Procedures</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground md:text-3xl">50K+</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Patient Reviews</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/consultation">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/procedure">Browse Procedures</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}