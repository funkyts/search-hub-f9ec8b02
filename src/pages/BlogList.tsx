import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { BlogCard } from '@/components/cards/BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const categories = ['All', 'Recovery Guide', 'Clinic Guide', 'Education', 'Travel Guide', 'Cost Guide'];

const allPosts = [
  { slug: 'rhinoplasty-recovery-guide-korea', title: 'Complete Rhinoplasty Recovery Guide: What to Expect Week by Week', excerpt: 'Everything you need to know about recovering from nose surgery in Korea.', category: 'Recovery Guide', publishedAt: '2025-01-15', isFeatured: true },
  { slug: 'best-skincare-clinics-gangnam-2025', title: 'Top 10 Skincare Clinics in Gangnam for 2025', excerpt: 'Our comprehensive review of the best dermatology clinics in Gangnam.', category: 'Clinic Guide', publishedAt: '2025-01-12', isFeatured: true },
  { slug: 'korean-skincare-vs-western', title: 'Korean Skincare Treatments vs Western: Key Differences', excerpt: 'Understanding why Korean dermatological treatments are gaining worldwide recognition.', category: 'Education', publishedAt: '2025-01-10' },
  { slug: 'medical-tourism-visa-korea', title: 'Medical Tourism Visa for Korea: Complete Guide', excerpt: 'Step-by-step guide to obtaining a medical tourism visa for Korea.', category: 'Travel Guide', publishedAt: '2025-01-08' },
  { slug: 'double-eyelid-surgery-cost-korea', title: 'Double Eyelid Surgery Cost in Korea 2025', excerpt: 'Complete breakdown of costs, including surgery, accommodation, and aftercare.', category: 'Cost Guide', publishedAt: '2025-01-05' },
  { slug: 'preparing-for-plastic-surgery-korea', title: '10 Things to Know Before Plastic Surgery in Korea', excerpt: 'Essential preparation tips for your medical tourism journey.', category: 'Education', publishedAt: '2025-01-03' },
  { slug: 'best-rhinoplasty-surgeons-korea', title: 'Best Rhinoplasty Surgeons in Korea 2025', excerpt: 'Meet the top nose surgery specialists in Seoul.', category: 'Clinic Guide', publishedAt: '2024-12-28' },
  { slug: 'thread-lift-vs-face-lift', title: 'Thread Lift vs Face Lift: Which is Right for You?', excerpt: 'Comparing non-surgical and surgical options for facial rejuvenation.', category: 'Education', publishedAt: '2024-12-25' },
];

export default function BlogList() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        {/* Hero */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Medical Tourism Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Expert guides, tips, and insights for your skincare and plastic surgery journey in Korea
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat, index) => (
            <Badge
              key={cat}
              variant={index === 0 ? 'default' : 'outline'}
              className="cursor-pointer"
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold">Featured Articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {allPosts.filter(p => p.isFeatured).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold">Latest Articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}