import { useParams, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { ProcedureCard } from '@/components/cards/ProcedureCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Languages,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

// Sample data - will be replaced with Supabase data
const clinicData: Record<string, any> = {
  'oracle-clinic-gangnam': {
    name: 'Oracle Dermatology Clinic',
    nameKo: '오라클피부과',
    neighborhood: 'gangnam',
    description: 'Oracle Dermatology Clinic is one of the leading skincare and anti-aging clinics in Gangnam. With over 15 years of experience, our team specializes in advanced skin treatments, laser procedures, and non-surgical rejuvenation.',
    address: '423 Gangnam-daero, Gangnam-gu, Seoul',
    phone: '+82-2-1234-5678',
    email: 'international@oracleclinic.com',
    website: 'https://oracleclinic.com',
    kakaoId: 'oracleclinic',
    rating: 4.9,
    reviewCount: 342,
    languages: ['English', 'Chinese', 'Japanese'],
    certifications: ['JCI Accredited', 'KMA Certified'],
    operatingHours: 'Mon-Sat: 10:00 AM - 7:00 PM',
    isRecommended: true,
    isVerified: true,
    specialties: ['Skin Rejuvenation', 'Laser Treatments', 'Anti-Aging', 'Acne Treatment'],
    images: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format',
    ],
  },
  'the-plus-clinic': {
    name: 'THE PLUS Plastic Surgery',
    nameKo: '더플러스성형외과',
    neighborhood: 'cheongdam',
    description: 'THE PLUS Plastic Surgery is a premium clinic in Cheongdam specializing in facial procedures, particularly rhinoplasty. Our surgeons are known for creating natural, harmonious results.',
    address: '78 Apgujeong-ro, Gangnam-gu, Seoul',
    phone: '+82-2-2345-6789',
    email: 'global@theplusclinic.com',
    rating: 4.8,
    reviewCount: 256,
    languages: ['English', 'Japanese'],
    certifications: ['KMA Certified'],
    isRecommended: true,
    isVerified: true,
    specialties: ['Rhinoplasty', 'Facial Contouring', 'Eye Surgery'],
  },
};

const clinicProcedures = [
  { slug: 'ultherapy', name: 'Ultherapy', category: 'Skin Care', priceMin: 800, priceMax: 3000 },
  { slug: 'botox', name: 'Botox Treatment', category: 'Injectables', priceMin: 200, priceMax: 600 },
  { slug: 'dermal-fillers', name: 'Dermal Fillers', category: 'Injectables', priceMin: 300, priceMax: 800 },
  { slug: 'laser-toning', name: 'Laser Toning', category: 'Skin Care', priceMin: 150, priceMax: 400 },
];

const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    country: 'USA',
    rating: 5,
    title: 'Amazing experience!',
    content: 'The staff was incredibly professional and the results exceeded my expectations. The English coordinator made everything so smooth.',
    procedure: 'Ultherapy',
    date: '2024-12-15',
  },
  {
    id: 2,
    author: 'Jennifer L.',
    country: 'Australia',
    rating: 5,
    title: 'Highly recommend',
    content: 'Dr. Kim was thorough in explaining the procedure. The clinic is very modern and clean. Worth the trip to Korea!',
    procedure: 'Skin Booster',
    date: '2024-11-28',
  },
  {
    id: 3,
    author: 'Emma W.',
    country: 'UK',
    rating: 4,
    title: 'Great results',
    content: 'Very satisfied with my treatment. The only minor issue was the wait time, but the quality of care was excellent.',
    procedure: 'Laser Treatment',
    date: '2024-11-10',
  },
];

export default function ClinicDetail() {
  const { slug } = useParams<{ slug: string }>();
  const clinic = clinicData[slug || ''] || clinicData['oracle-clinic-gangnam'];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'fill-warning text-warning' : 'text-muted'}`}
      />
    ));
  };

  return (
    <Layout>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: clinic.name,
          description: clinic.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: clinic.address,
            addressLocality: 'Seoul',
            addressCountry: 'KR',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: clinic.rating,
            reviewCount: clinic.reviewCount,
          },
        })}
      </script>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 lg:h-96 bg-muted">
        {clinic.images?.[0] ? (
          <img
            src={clinic.images[0]}
            alt={clinic.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent">
            <span className="font-serif text-6xl text-primary/30">{clinic.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Clinics', href: '/clinic' },
            { label: clinic.neighborhood.charAt(0).toUpperCase() + clinic.neighborhood.slice(1), href: `/neighborhood/${clinic.neighborhood}` },
            { label: clinic.name },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex flex-wrap items-start gap-3">
              {clinic.isRecommended && <Badge className="bg-primary">Recommended</Badge>}
              {clinic.isVerified && <Badge variant="secondary" className="bg-success text-success-foreground">Verified</Badge>}
            </div>
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {clinic.name}
            </h1>
            {clinic.nameKo && (
              <p className="mt-1 text-lg text-muted-foreground">{clinic.nameKo}</p>
            )}

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex">{renderStars(clinic.rating)}</div>
              <span className="text-lg font-semibold">{clinic.rating}</span>
              <span className="text-muted-foreground">({clinic.reviewCount} reviews)</span>
            </div>

            {/* Quick Info */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="capitalize">{clinic.neighborhood}, Seoul</span>
              </div>
              {clinic.languages && (
                <div className="flex items-center gap-2 text-sm">
                  <Languages className="h-4 w-4 text-primary" />
                  <span>{clinic.languages.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Certifications */}
            {clinic.certifications && (
              <div className="mt-4 flex flex-wrap gap-2">
                {clinic.certifications.map((cert: string) => (
                  <Badge key={cert} variant="outline" className="text-xs">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    {cert}
                  </Badge>
                ))}
              </div>
            )}

            {/* Description */}
            <section className="mt-8">
              <h2 className="font-serif text-2xl font-bold">About {clinic.name}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {clinic.description}
              </p>
            </section>

            {/* Specialties */}
            {clinic.specialties && (
              <section className="mt-8">
                <h2 className="font-serif text-2xl font-bold">Specialties</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {clinic.specialties.map((specialty: string) => (
                    <Badge key={specialty} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Procedures */}
            <section className="mt-12">
              <h2 className="font-serif text-2xl font-bold">Procedures Offered</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {clinicProcedures.map((proc) => (
                  <ProcedureCard key={proc.slug} {...proc} />
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="mt-12">
              <div className="flex items-end justify-between">
                <h2 className="font-serif text-2xl font-bold">Patient Reviews</h2>
                <Button variant="outline" size="sm">Write a Review</Button>
              </div>
              <div className="mt-6 space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.author}</span>
                            <span className="text-sm text-muted-foreground">from {review.country}</span>
                          </div>
                          <div className="mt-1 flex">{renderStars(review.rating)}</div>
                        </div>
                        <Badge variant="outline">{review.procedure}</Badge>
                      </div>
                      <h3 className="mt-3 font-semibold">{review.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{review.content}</p>
                      <p className="mt-3 text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold">Contact Information</h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">{clinic.address}</span>
                    </li>
                    {clinic.phone && (
                      <li className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href={`tel:${clinic.phone}`} className="text-sm hover:text-primary">{clinic.phone}</a>
                      </li>
                    )}
                    {clinic.email && (
                      <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href={`mailto:${clinic.email}`} className="text-sm hover:text-primary">{clinic.email}</a>
                      </li>
                    )}
                    {clinic.website && (
                      <li className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">Visit Website</a>
                      </li>
                    )}
                    {clinic.kakaoId && (
                      <li className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">KakaoTalk: {clinic.kakaoId}</span>
                      </li>
                    )}
                    {clinic.operatingHours && (
                      <li className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">{clinic.operatingHours}</span>
                      </li>
                    )}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link to="/consultation">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}