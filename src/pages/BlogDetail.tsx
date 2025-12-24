import { useParams, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { BlogCard } from '@/components/cards/BlogCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, Share2, Facebook, Twitter } from 'lucide-react';

const blogData: Record<string, any> = {
  'rhinoplasty-recovery-guide-korea': {
    title: 'Complete Rhinoplasty Recovery Guide: What to Expect Week by Week',
    excerpt: 'Everything you need to know about recovering from nose surgery in Korea, including timeline, tips, and what to avoid.',
    category: 'Recovery Guide',
    author: 'Dr. Kim Min-jun',
    publishedAt: '2025-01-15',
    readTime: '8 min read',
    content: `
# What to Expect After Rhinoplasty in Korea

Rhinoplasty recovery is a gradual process that requires patience and proper care. This comprehensive guide will walk you through each stage of your recovery journey.

## Week 1: Initial Recovery

The first week after your rhinoplasty is the most critical. Here's what to expect:

### Days 1-3
- **Swelling and bruising** are at their peak
- You'll have a splint on your nose
- Breathing through your mouth is normal
- Pain is manageable with prescribed medication
- Keep your head elevated, even while sleeping

### Days 4-7
- Bruising begins to fade
- Swelling starts to decrease
- Most patients feel well enough for light activities
- Follow-up appointment for splint removal

## Week 2: Returning to Normal

By the second week, you'll notice significant improvements:

- Most bruising has disappeared
- Swelling continues to reduce
- You can return to work (desk jobs)
- Avoid strenuous activities
- Be gentle when washing your face

## Weeks 3-4: Continued Healing

During this period:

- You can resume most normal activities
- Light exercise is usually permitted
- Swelling is mostly gone (but tip may still be swollen)
- Results are becoming more visible

## Months 2-6: Final Results

The final stage of healing:

- Residual swelling in the tip resolves
- Final shape becomes apparent
- Full sensation returns
- You can resume all activities, including contact sports

## Tips for Faster Recovery

1. **Follow your surgeon's instructions carefully**
2. **Stay hydrated** and eat nutritious foods
3. **Avoid smoking and alcohol** - they slow healing
4. **Sleep on your back** with head elevated
5. **Protect your nose from sun exposure**
6. **Attend all follow-up appointments**

## What to Avoid

- Wearing glasses directly on your nose (use tape or padding)
- Blowing your nose forcefully
- Swimming pools and hot tubs
- Extreme temperatures
- Strenuous exercise for 4-6 weeks

## When to Contact Your Surgeon

Seek medical attention if you experience:

- Excessive bleeding
- Signs of infection (fever, increased redness)
- Difficulty breathing that worsens
- Severe pain not relieved by medication

---

*Remember, every patient heals differently. Trust the process and be patient with your results.*
    `,
  },
};

const relatedPosts = [
  { slug: 'best-rhinoplasty-surgeons-korea', title: 'Best Rhinoplasty Surgeons in Korea 2025', excerpt: 'Meet the top nose surgery specialists in Seoul.', category: 'Clinic Guide', publishedAt: '2024-12-28' },
  { slug: 'preparing-for-plastic-surgery-korea', title: '10 Things to Know Before Plastic Surgery in Korea', excerpt: 'Essential preparation tips.', category: 'Education', publishedAt: '2025-01-03' },
  { slug: 'korean-skincare-vs-western', title: 'Korean Skincare Treatments vs Western', excerpt: 'Key differences explained.', category: 'Education', publishedAt: '2025-01-10' },
];

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData[slug || ''] || blogData['rhinoplasty-recovery-guide-korea'];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          author: { '@type': 'Person', name: post.author },
          datePublished: post.publishedAt,
        })}
      </script>

      <article className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.category },
            { label: post.title },
          ]}
        />

        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          </div>

          {/* Share */}
          <div className="mt-12 flex items-center justify-between border-t border-b border-border py-6">
            <span className="font-medium">Share this article</span>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-accent p-8 text-center">
            <h3 className="font-serif text-2xl font-bold">Ready to Start Your Journey?</h3>
            <p className="mt-2 text-muted-foreground">Get a free consultation with our medical tourism experts.</p>
            <Button asChild className="mt-4">
              <Link to="/consultation">Get Free Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-center">Related Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relPost) => (
              <BlogCard key={relPost.slug} {...relPost} />
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}