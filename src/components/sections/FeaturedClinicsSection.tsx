import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClinicCard } from '@/components/cards/ClinicCard';

const featuredClinics = [
  {
    slug: 'oracle-clinic-gangnam',
    name: 'Oracle Dermatology Clinic',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format',
    rating: 4.9,
    reviewCount: 342,
    neighborhood: 'gangnam',
    languages: ['English', 'Chinese'],
    isRecommended: true,
    isVerified: true,
    shortDescription: 'Leading dermatology clinic specializing in skin rejuvenation and anti-aging treatments.',
  },
  {
    slug: 'the-plus-clinic',
    name: 'THE PLUS Plastic Surgery',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format',
    rating: 4.8,
    reviewCount: 256,
    neighborhood: 'cheongdam',
    languages: ['English', 'Japanese'],
    isRecommended: true,
    isVerified: true,
    shortDescription: 'Premium plastic surgery clinic known for natural-looking rhinoplasty results.',
  },
  {
    slug: 'banobagi-clinic',
    name: 'Banobagi Plastic Surgery',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&auto=format',
    rating: 4.7,
    reviewCount: 189,
    neighborhood: 'sinsa',
    languages: ['English', 'Vietnamese'],
    isVerified: true,
    shortDescription: 'Award-winning clinic specializing in facial contouring and body sculpting.',
  },
  {
    slug: 'id-hospital',
    name: 'ID Hospital',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format',
    rating: 4.6,
    reviewCount: 421,
    neighborhood: 'gangnam',
    languages: ['English', 'Chinese', 'Thai'],
    isRecommended: true,
    shortDescription: 'Comprehensive plastic surgery hospital with international patient services.',
  },
  {
    slug: 'apgujeong-skin',
    name: 'Apgujeong Skin Clinic',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format',
    rating: 4.8,
    reviewCount: 178,
    neighborhood: 'apgujeong',
    languages: ['English'],
    isVerified: true,
    shortDescription: 'Boutique dermatology clinic focusing on personalized skin treatments.',
  },
  {
    slug: 'view-plastic-surgery',
    name: 'View Plastic Surgery',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&auto=format',
    rating: 4.5,
    reviewCount: 203,
    neighborhood: 'gangnam',
    languages: ['English', 'Russian'],
    shortDescription: 'Modern clinic offering comprehensive facial and body procedures.',
  },
];

export function FeaturedClinicsSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Top Rated Clinics
            </h2>
            <p className="mt-2 text-muted-foreground">
              Verified clinics with excellent reviews from international patients
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/clinic">
              View All Clinics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredClinics.map((clinic) => (
            <ClinicCard key={clinic.slug} {...clinic} />
          ))}
        </div>
      </div>
    </section>
  );
}