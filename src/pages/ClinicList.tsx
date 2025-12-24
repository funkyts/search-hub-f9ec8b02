import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { ClinicCard } from '@/components/cards/ClinicCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin } from 'lucide-react';

const neighborhoods = ['gangnam', 'cheongdam', 'sinsa', 'apgujeong', 'hongdae', 'myeongdong'];

const allClinics = [
  { slug: 'oracle-clinic-gangnam', name: 'Oracle Dermatology Clinic', rating: 4.9, reviewCount: 342, neighborhood: 'gangnam', languages: ['English', 'Chinese'], isRecommended: true, isVerified: true, shortDescription: 'Leading dermatology clinic specializing in skin rejuvenation.' },
  { slug: 'the-plus-clinic', name: 'THE PLUS Plastic Surgery', rating: 4.8, reviewCount: 256, neighborhood: 'cheongdam', languages: ['English', 'Japanese'], isRecommended: true, isVerified: true, shortDescription: 'Premium plastic surgery clinic known for natural results.' },
  { slug: 'banobagi-clinic', name: 'Banobagi Plastic Surgery', rating: 4.7, reviewCount: 189, neighborhood: 'sinsa', languages: ['English', 'Vietnamese'], isVerified: true, shortDescription: 'Award-winning clinic for facial contouring.' },
  { slug: 'id-hospital', name: 'ID Hospital', rating: 4.6, reviewCount: 421, neighborhood: 'gangnam', languages: ['English', 'Chinese', 'Thai'], isRecommended: true, shortDescription: 'Comprehensive plastic surgery hospital.' },
  { slug: 'apgujeong-skin', name: 'Apgujeong Skin Clinic', rating: 4.8, reviewCount: 178, neighborhood: 'apgujeong', languages: ['English'], isVerified: true, shortDescription: 'Boutique dermatology clinic.' },
  { slug: 'view-plastic-surgery', name: 'View Plastic Surgery', rating: 4.5, reviewCount: 203, neighborhood: 'gangnam', languages: ['English', 'Russian'], shortDescription: 'Modern clinic for facial and body procedures.' },
  { slug: 'mine-clinic', name: 'Mine Plastic Surgery', rating: 4.7, reviewCount: 167, neighborhood: 'gangnam', languages: ['English'], isVerified: true, shortDescription: 'Specializing in eye and nose surgery.' },
  { slug: 'wonjin-beauty', name: 'Wonjin Beauty Medical Group', rating: 4.6, reviewCount: 312, neighborhood: 'gangnam', languages: ['English', 'Chinese'], isRecommended: true, shortDescription: 'One of the largest plastic surgery groups in Korea.' },
];

export default function ClinicList() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Clinics' }]} />

        {/* Hero */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Find Your Perfect Clinic
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Browse verified clinics in Seoul with English-speaking staff and excellent patient reviews
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search clinics..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Location Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            All Locations
          </Badge>
          {neighborhoods.map((area) => (
            <Badge key={area} variant="outline" className="cursor-pointer capitalize hover:bg-primary hover:text-primary-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              {area}
            </Badge>
          ))}
        </div>

        {/* Clinics Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allClinics.map((clinic) => (
            <ClinicCard key={clinic.slug} {...clinic} />
          ))}
        </div>
      </div>
    </Layout>
  );
}