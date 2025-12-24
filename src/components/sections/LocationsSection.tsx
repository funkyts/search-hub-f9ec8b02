import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const neighborhoods = [
  { slug: 'gangnam', name: 'Gangnam', clinicCount: 180 },
  { slug: 'cheongdam', name: 'Cheongdam', clinicCount: 85 },
  { slug: 'sinsa', name: 'Sinsa', clinicCount: 65 },
  { slug: 'apgujeong', name: 'Apgujeong', clinicCount: 72 },
  { slug: 'sinnonhyeon', name: 'Sinnonhyeon', clinicCount: 45 },
  { slug: 'hongdae', name: 'Hongdae', clinicCount: 28 },
  { slug: 'myeongdong', name: 'Myeongdong', clinicCount: 35 },
  { slug: 'itaewon', name: 'Itaewon', clinicCount: 22 },
];

export function LocationsSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Browse by Location
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Find clinics in Seoul's top medical tourism districts
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {neighborhoods.map((area) => (
            <Button
              key={area.slug}
              asChild
              variant="outline"
              className="rounded-full bg-card hover:bg-accent"
            >
              <Link to={`/neighborhood/${area.slug}`} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{area.name}</span>
                <span className="text-xs text-muted-foreground">({area.clinicCount})</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}