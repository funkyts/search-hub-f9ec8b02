import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { ProcedureCard } from '@/components/cards/ProcedureCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const allProcedures = [
  { slug: 'rhinoplasty', name: 'Rhinoplasty (Nose Job)', category: 'Nose Surgery', priceMin: 3000, priceMax: 8000, recoveryTime: '1-2 weeks', clinicCount: 120, isFeatured: true },
  { slug: 'double-eyelid-surgery', name: 'Double Eyelid Surgery', category: 'Eye Surgery', priceMin: 1500, priceMax: 4000, recoveryTime: '5-7 days', clinicCount: 95, isFeatured: true },
  { slug: 'v-line-surgery', name: 'V-Line Surgery', category: 'Facial Contouring', priceMin: 5000, priceMax: 15000, recoveryTime: '2-4 weeks', clinicCount: 45 },
  { slug: 'liposuction', name: 'Liposuction', category: 'Body', priceMin: 2500, priceMax: 7000, recoveryTime: '1-2 weeks', clinicCount: 78 },
  { slug: 'botox', name: 'Botox Treatment', category: 'Injectables', priceMin: 200, priceMax: 600, recoveryTime: 'No downtime', clinicCount: 150 },
  { slug: 'ultherapy', name: 'Ultherapy', category: 'Skin Care', priceMin: 800, priceMax: 3000, recoveryTime: 'No downtime', clinicCount: 85 },
  { slug: 'face-lift', name: 'Face Lift', category: 'Face Lift', priceMin: 8000, priceMax: 20000, recoveryTime: '2-3 weeks', clinicCount: 55 },
  { slug: 'thread-lift', name: 'Thread Lift', category: 'Face Lift', priceMin: 1500, priceMax: 4000, recoveryTime: '3-5 days', clinicCount: 90 },
  { slug: 'breast-augmentation', name: 'Breast Augmentation', category: 'Breast', priceMin: 5000, priceMax: 12000, recoveryTime: '1-2 weeks', clinicCount: 40 },
  { slug: 'hair-transplant', name: 'Hair Transplant', category: 'Hair', priceMin: 3000, priceMax: 10000, recoveryTime: '1-2 weeks', clinicCount: 35 },
  { slug: 'dermal-fillers', name: 'Dermal Fillers', category: 'Injectables', priceMin: 300, priceMax: 1000, recoveryTime: 'No downtime', clinicCount: 140 },
  { slug: 'laser-toning', name: 'Laser Toning', category: 'Skin Care', priceMin: 100, priceMax: 300, recoveryTime: 'No downtime', clinicCount: 120 },
];

export default function ProcedureList() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Procedures' }]} />

        {/* Hero */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            All Procedures
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our comprehensive range of cosmetic and skincare procedures available at top clinics in Korea
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search procedures..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Procedures Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProcedures.map((procedure) => (
            <ProcedureCard key={procedure.slug} {...procedure} />
          ))}
        </div>
      </div>
    </Layout>
  );
}