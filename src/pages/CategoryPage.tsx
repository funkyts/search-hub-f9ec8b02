import { useParams, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { ProcedureCard } from '@/components/cards/ProcedureCard';
import { ClinicCard } from '@/components/cards/ClinicCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';

// Sample data - will be replaced with Supabase data
const categoryData: Record<string, any> = {
  'nose-surgery': {
    name: 'Nose Surgery',
    nameKo: '코 수술',
    icon: '👃',
    description: 'Rhinoplasty and nose reshaping procedures are among the most popular cosmetic surgeries in Korea. Korean surgeons are renowned for creating natural, harmonious results.',
    procedureCount: 15,
    clinicCount: 120,
  },
  'eye-surgery': {
    name: 'Eye Surgery',
    nameKo: '눈 수술',
    icon: '👁️',
    description: 'Double eyelid surgery and other eye procedures have been perfected by Korean surgeons over decades, offering natural-looking results.',
    procedureCount: 12,
    clinicCount: 95,
  },
  'skin-care': {
    name: 'Skin Care',
    nameKo: '피부관리',
    icon: '✨',
    description: 'Advanced dermatological treatments including laser therapy, skin rejuvenation, and anti-aging procedures.',
    procedureCount: 20,
    clinicCount: 150,
  },
  'face-lift': {
    name: 'Face Lift',
    nameKo: '페이스리프트',
    icon: '💎',
    description: 'Facial rejuvenation procedures including surgical face lifts and non-surgical alternatives like thread lifting.',
    procedureCount: 10,
    clinicCount: 55,
  },
};

const categoryProcedures = [
  { slug: 'rhinoplasty', name: 'Rhinoplasty (Nose Job)', category: 'Nose Surgery', priceMin: 3000, priceMax: 8000, recoveryTime: '1-2 weeks', clinicCount: 120, isFeatured: true },
  { slug: 'revision-rhinoplasty', name: 'Revision Rhinoplasty', category: 'Nose Surgery', priceMin: 4000, priceMax: 10000, recoveryTime: '1-2 weeks', clinicCount: 45 },
  { slug: 'alar-reduction', name: 'Alar Reduction', category: 'Nose Surgery', priceMin: 1500, priceMax: 3000, recoveryTime: '1 week', clinicCount: 80 },
  { slug: 'septoplasty', name: 'Septoplasty', category: 'Nose Surgery', priceMin: 2000, priceMax: 5000, recoveryTime: '1 week', clinicCount: 60 },
];

const categoryClinics = [
  { slug: 'the-plus-clinic', name: 'THE PLUS Plastic Surgery', rating: 4.8, reviewCount: 256, neighborhood: 'cheongdam', languages: ['English', 'Japanese'], isRecommended: true, isVerified: true },
  { slug: 'banobagi-clinic', name: 'Banobagi Plastic Surgery', rating: 4.7, reviewCount: 189, neighborhood: 'sinsa', languages: ['English'], isVerified: true },
  { slug: 'id-hospital', name: 'ID Hospital', rating: 4.6, reviewCount: 421, neighborhood: 'gangnam', languages: ['English', 'Chinese'], isRecommended: true },
];

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categoryData[slug || ''] || categoryData['nose-surgery'];

  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/procedure' },
            { label: category.name },
          ]}
        />

        {/* Hero */}
        <div className="rounded-2xl bg-gradient-to-br from-accent to-background p-8 md:p-12">
          <div className="text-center">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {category.name} in Korea
            </h1>
            {category.nameKo && (
              <p className="mt-2 text-lg text-muted-foreground">{category.nameKo}</p>
            )}
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {category.description}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-semibold">{category.procedureCount} Procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-semibold">{category.clinicCount}+ Clinics</span>
              </div>
            </div>

            <Button asChild className="mt-8">
              <Link to="/consultation">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Procedures in Category */}
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                {category.name} Procedures
              </h2>
              <p className="mt-2 text-muted-foreground">
                All procedures in this category
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryProcedures.map((proc) => (
              <ProcedureCard key={proc.slug} {...proc} />
            ))}
          </div>
        </section>

        {/* Top Clinics for Category */}
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Top {category.name} Clinics
              </h2>
              <p className="mt-2 text-muted-foreground">
                Clinics specializing in {category.name.toLowerCase()}
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/clinic">View All Clinics</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryClinics.map((clinic) => (
              <ClinicCard key={clinic.slug} {...clinic} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}