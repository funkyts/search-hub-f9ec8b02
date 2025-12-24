import { useParams, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { ClinicCard } from '@/components/cards/ClinicCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Building2, Train, ArrowRight } from 'lucide-react';

// Sample data - will be replaced with Supabase data
const neighborhoodData: Record<string, any> = {
  gangnam: {
    name: 'Gangnam',
    nameKo: '강남',
    description: 'Gangnam is Korea\'s premier medical tourism district, home to the highest concentration of plastic surgery and dermatology clinics in the world. The famous "Gangnam Beauty Belt" stretches along Gangnam-daero, offering world-class cosmetic procedures.',
    clinicCount: 180,
    nearbyStations: ['Gangnam Station (Line 2)', 'Sinnonhyeon Station (Line 9)'],
    highlights: ['Highest clinic density in Korea', 'Premium facilities', 'International patient services'],
    gettingThere: 'Take Seoul Metro Line 2 to Gangnam Station. Most clinics are within walking distance.',
  },
  cheongdam: {
    name: 'Cheongdam',
    nameKo: '청담',
    description: 'Cheongdam-dong is known for its upscale, boutique clinics and celebrity surgeons. This affluent area offers a more exclusive, premium experience with personalized attention.',
    clinicCount: 85,
    nearbyStations: ['Cheongdam Station (Line 7)', 'Apgujeong Rodeo Station (Bundang Line)'],
    highlights: ['Celebrity surgeons', 'Luxury experience', 'Boutique clinics'],
    gettingThere: 'Take Seoul Metro Line 7 to Cheongdam Station, Exit 9.',
  },
  sinsa: {
    name: 'Sinsa',
    nameKo: '신사',
    description: 'Sinsa-dong, famous for Garosu-gil (Tree-lined Street), offers a trendy atmosphere with quality clinics. Popular among younger patients seeking modern aesthetic treatments.',
    clinicCount: 65,
    nearbyStations: ['Sinsa Station (Line 3)'],
    highlights: ['Trendy location', 'Modern clinics', 'Great for shopping & recovery'],
    gettingThere: 'Take Seoul Metro Line 3 to Sinsa Station, Exit 8 for Garosu-gil.',
  },
  apgujeong: {
    name: 'Apgujeong',
    nameKo: '압구정',
    description: 'Apgujeong is one of Seoul\'s most fashionable districts, known for high-end dermatology clinics and skin care specialists. Perfect for non-surgical treatments.',
    clinicCount: 72,
    nearbyStations: ['Apgujeong Station (Line 3)', 'Apgujeong Rodeo Station (Bundang Line)'],
    highlights: ['Dermatology specialists', 'K-beauty treatments', 'Fashion district'],
    gettingThere: 'Take Seoul Metro Line 3 to Apgujeong Station.',
  },
};

const neighborhoodClinics = [
  { slug: 'oracle-clinic-gangnam', name: 'Oracle Dermatology Clinic', rating: 4.9, reviewCount: 342, neighborhood: 'gangnam', languages: ['English', 'Chinese'], isRecommended: true, isVerified: true },
  { slug: 'the-plus-clinic', name: 'THE PLUS Plastic Surgery', rating: 4.8, reviewCount: 256, neighborhood: 'gangnam', languages: ['English', 'Japanese'], isRecommended: true, isVerified: true },
  { slug: 'id-hospital', name: 'ID Hospital', rating: 4.6, reviewCount: 421, neighborhood: 'gangnam', languages: ['English', 'Chinese', 'Thai'], isRecommended: true },
  { slug: 'view-plastic-surgery', name: 'View Plastic Surgery', rating: 4.5, reviewCount: 203, neighborhood: 'gangnam', languages: ['English', 'Russian'] },
  { slug: 'mine-clinic', name: 'Mine Plastic Surgery', rating: 4.7, reviewCount: 167, neighborhood: 'gangnam', languages: ['English'], isVerified: true },
  { slug: 'wonjin-beauty', name: 'Wonjin Beauty Medical Group', rating: 4.6, reviewCount: 312, neighborhood: 'gangnam', languages: ['English', 'Chinese'], isRecommended: true },
];

export default function NeighborhoodPage() {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = neighborhoodData[slug || ''] || neighborhoodData['gangnam'];

  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Locations' },
            { label: neighborhood.name },
          ]}
        />

        {/* Hero */}
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-accent to-background p-8 md:p-12">
          <div className="flex items-center gap-3">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {neighborhood.name}
            </h1>
            <span className="text-2xl text-muted-foreground">({neighborhood.nameKo})</span>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {neighborhood.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">{neighborhood.clinicCount}+ Clinics</span>
          </div>

          <Button asChild className="mt-8">
            <Link to="/consultation">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Clinics */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Clinics in {neighborhood.name}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {neighborhoodClinics.map((clinic) => (
                  <ClinicCard key={clinic.slug} {...clinic} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold">Why {neighborhood.name}?</h3>
                <ul className="mt-4 space-y-3">
                  {neighborhood.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Getting There */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold">Getting There</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {neighborhood.gettingThere}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Nearby Stations</h4>
                  <ul className="mt-2 space-y-2">
                    {neighborhood.nearbyStations.map((station: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Train className="h-4 w-4 text-primary" />
                        {station}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-lg font-semibold">Need Help Choosing?</h3>
                <p className="mt-2 text-sm opacity-90">
                  Our experts can recommend the best clinics for your needs.
                </p>
                <Button asChild variant="secondary" className="mt-4 w-full">
                  <Link to="/consultation">Get Free Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}