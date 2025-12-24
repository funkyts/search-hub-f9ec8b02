import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/cards/BlogCard';

const latestPosts = [
  {
    slug: 'rhinoplasty-recovery-guide-korea',
    title: 'Complete Rhinoplasty Recovery Guide: What to Expect Week by Week',
    excerpt: 'Everything you need to know about recovering from nose surgery in Korea, including timeline, tips, and what to avoid.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format',
    category: 'Recovery Guide',
    publishedAt: '2025-01-15',
  },
  {
    slug: 'best-skincare-clinics-gangnam-2025',
    title: 'Top 10 Skincare Clinics in Gangnam for 2025',
    excerpt: 'Our comprehensive review of the best dermatology clinics in Gangnam, based on patient reviews and treatment options.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format',
    category: 'Clinic Guide',
    publishedAt: '2025-01-12',
  },
  {
    slug: 'korean-skincare-vs-western',
    title: 'Korean Skincare Treatments vs Western: Key Differences',
    excerpt: 'Understanding why Korean dermatological treatments are gaining worldwide recognition and how they differ from Western approaches.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format',
    category: 'Education',
    publishedAt: '2025-01-10',
  },
  {
    slug: 'medical-tourism-visa-korea',
    title: 'Medical Tourism Visa for Korea: Complete Guide',
    excerpt: 'Step-by-step guide to obtaining a medical tourism visa for Korea, including required documents and application process.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format',
    category: 'Travel Guide',
    publishedAt: '2025-01-08',
  },
];

export function LatestBlogSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Latest from Our Blog
            </h2>
            <p className="mt-2 text-muted-foreground">
              Expert guides, tips, and insights for your medical tourism journey
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}