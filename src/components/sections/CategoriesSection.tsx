import { 
  Scissors, 
  Eye, 
  Sparkles, 
  Heart, 
  Flower2,
  Syringe,
  Droplet,
  Sun,
  Stethoscope,
  Smile,
  Wind,
  Palette
} from 'lucide-react';
import { CategoryCard } from '@/components/cards/CategoryCard';

const categories = [
  { slug: 'nose-surgery', name: 'Nose Surgery', icon: Wind, count: 15 },
  { slug: 'eye-surgery', name: 'Eye Surgery', icon: Eye, count: 12 },
  { slug: 'face-lift', name: 'Face Lift', icon: Sparkles, count: 10 },
  { slug: 'facial-contouring', name: 'Facial Contouring', icon: Palette, count: 8 },
  { slug: 'breast', name: 'Breast Surgery', icon: Flower2, count: 6 },
  { slug: 'liposuction', name: 'Liposuction', icon: Heart, count: 5 },
  { slug: 'skin-care', name: 'Skin Care', icon: Sun, count: 20 },
  { slug: 'dental', name: 'Dental', icon: Smile, count: 8 },
  { slug: 'hair-transplant', name: 'Hair Transplant', icon: Scissors, count: 4 },
  { slug: 'botox', name: 'Botox', icon: Syringe, count: 6 },
  { slug: 'fillers', name: 'Fillers', icon: Droplet, count: 8 },
  { slug: 'thread-lifting', name: 'Thread Lifting', icon: Stethoscope, count: 5 },
];

export function CategoriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Popular Categories
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of cosmetic and skincare procedures available at top clinics in Korea
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              icon={category.icon}
              procedureCount={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
}