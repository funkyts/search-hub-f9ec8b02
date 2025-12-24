import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProcedureCard } from '@/components/cards/ProcedureCard';

const popularProcedures = [
  {
    slug: 'rhinoplasty',
    name: 'Rhinoplasty (Nose Job)',
    category: 'Nose Surgery',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&auto=format',
    priceMin: 3000,
    priceMax: 8000,
    recoveryTime: '1-2 weeks',
    clinicCount: 120,
    isFeatured: true,
  },
  {
    slug: 'double-eyelid-surgery',
    name: 'Double Eyelid Surgery',
    category: 'Eye Surgery',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format',
    priceMin: 1500,
    priceMax: 4000,
    recoveryTime: '5-7 days',
    clinicCount: 95,
    isFeatured: true,
  },
  {
    slug: 'v-line-surgery',
    name: 'V-Line Surgery',
    category: 'Facial Contouring',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&auto=format',
    priceMin: 5000,
    priceMax: 15000,
    recoveryTime: '2-4 weeks',
    clinicCount: 45,
  },
  {
    slug: 'liposuction',
    name: 'Liposuction',
    category: 'Body',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format',
    priceMin: 2500,
    priceMax: 7000,
    recoveryTime: '1-2 weeks',
    clinicCount: 78,
  },
  {
    slug: 'botox',
    name: 'Botox Treatment',
    category: 'Injectables',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format',
    priceMin: 200,
    priceMax: 600,
    recoveryTime: 'No downtime',
    clinicCount: 150,
  },
  {
    slug: 'ultherapy',
    name: 'Ultherapy',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format',
    priceMin: 800,
    priceMax: 3000,
    recoveryTime: 'No downtime',
    clinicCount: 85,
  },
];

export function PopularProceduresSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Popular Procedures
            </h2>
            <p className="mt-2 text-muted-foreground">
              Most searched treatments by international patients
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/procedure">
              View All Procedures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularProcedures.map((procedure) => (
            <ProcedureCard key={procedure.slug} {...procedure} />
          ))}
        </div>
      </div>
    </section>
  );
}