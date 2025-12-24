import { useParams, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from '@/components/layout';
import { ProcedureCard } from '@/components/cards/ProcedureCard';
import { ClinicCard } from '@/components/cards/ClinicCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Clock, DollarSign, Building2, Syringe, ArrowRight, CheckCircle } from 'lucide-react';

// Sample data - will be replaced with Supabase data
const procedureData: Record<string, any> = {
  rhinoplasty: {
    name: 'Rhinoplasty (Nose Job)',
    category: 'Nose Surgery',
    categorySlug: 'nose-surgery',
    description: 'Rhinoplasty, commonly known as a nose job, is one of the most popular cosmetic procedures in Korea. Korean surgeons are renowned worldwide for their expertise in creating natural-looking results.',
    content: `
## What is Rhinoplasty?

Rhinoplasty is a surgical procedure that reshapes the nose to improve its appearance or function. In Korea, rhinoplasty techniques have been refined to achieve natural, harmonious results that complement Asian facial features.

## Types of Rhinoplasty in Korea

### 1. Augmentation Rhinoplasty
Uses implants or cartilage grafts to increase nose height and definition.

### 2. Reduction Rhinoplasty
Reduces the overall size of the nose or specific areas like the tip or bridge.

### 3. Revision Rhinoplasty
Corrects issues from previous nose surgeries.

### 4. Functional Rhinoplasty
Improves breathing while also enhancing appearance.

## The Korean Approach

Korean rhinoplasty emphasizes:
- Natural-looking results
- Minimal scarring
- Long-lasting outcomes
- Harmony with overall facial features
    `,
    priceMin: 3000,
    priceMax: 8000,
    duration: '1-3 hours',
    recoveryTime: '1-2 weeks',
    anesthesia: 'General or Local with sedation',
    clinicCount: 120,
    faqs: [
      { question: 'How long does rhinoplasty recovery take?', answer: 'Most patients can return to work after 1-2 weeks. Full recovery takes 3-6 months for swelling to completely subside.' },
      { question: 'Is Korean rhinoplasty safe?', answer: 'Yes, Korean clinics maintain high safety standards with experienced surgeons and modern facilities.' },
      { question: 'What is the cost of rhinoplasty in Korea vs USA?', answer: 'Rhinoplasty in Korea typically costs $3,000-$8,000, compared to $8,000-$15,000 in the USA.' },
      { question: 'How long should I stay in Korea for rhinoplasty?', answer: 'We recommend staying 7-10 days for initial recovery and stitch removal.' },
    ],
  },
  'double-eyelid-surgery': {
    name: 'Double Eyelid Surgery',
    category: 'Eye Surgery',
    categorySlug: 'eye-surgery',
    description: 'Double eyelid surgery (blepharoplasty) creates a natural crease in the upper eyelid. Korea is the world leader in this procedure.',
    priceMin: 1500,
    priceMax: 4000,
    duration: '30-60 minutes',
    recoveryTime: '5-7 days',
    anesthesia: 'Local with sedation',
    clinicCount: 95,
    faqs: [
      { question: 'Is double eyelid surgery permanent?', answer: 'Yes, the results are typically permanent, especially with the incision method.' },
      { question: 'What methods are available?', answer: 'There are two main methods: non-incision (suture) and incision. Your surgeon will recommend based on your anatomy.' },
    ],
  },
};

const relatedClinics = [
  {
    slug: 'oracle-clinic-gangnam',
    name: 'Oracle Dermatology Clinic',
    rating: 4.9,
    reviewCount: 342,
    neighborhood: 'gangnam',
    languages: ['English', 'Chinese'],
    isRecommended: true,
    isVerified: true,
  },
  {
    slug: 'the-plus-clinic',
    name: 'THE PLUS Plastic Surgery',
    rating: 4.8,
    reviewCount: 256,
    neighborhood: 'cheongdam',
    languages: ['English', 'Japanese'],
    isRecommended: true,
  },
  {
    slug: 'banobagi-clinic',
    name: 'Banobagi Plastic Surgery',
    rating: 4.7,
    reviewCount: 189,
    neighborhood: 'sinsa',
    languages: ['English'],
    isVerified: true,
  },
];

const relatedProcedures = [
  { slug: 'revision-rhinoplasty', name: 'Revision Rhinoplasty', category: 'Nose Surgery', priceMin: 4000, priceMax: 10000 },
  { slug: 'alar-reduction', name: 'Alar Reduction', category: 'Nose Surgery', priceMin: 1500, priceMax: 3000 },
  { slug: 'septoplasty', name: 'Septoplasty', category: 'Nose Surgery', priceMin: 2000, priceMax: 5000 },
];

const priceComparison = [
  { country: 'Korea', min: 3000, max: 8000 },
  { country: 'USA', min: 8000, max: 15000 },
  { country: 'UK', min: 6000, max: 12000 },
  { country: 'Australia', min: 8000, max: 16000 },
];

export default function ProcedureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const procedure = procedureData[slug || ''] || procedureData['rhinoplasty'];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Layout>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: procedure.name,
          description: procedure.description,
          procedureType: 'Cosmetic',
        })}
      </script>

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Procedures', href: '/procedure' },
            { label: procedure.category, href: `/category/${procedure.categorySlug}` },
            { label: procedure.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Badge className="mb-4">{procedure.category}</Badge>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {procedure.name} in Korea
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {procedure.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-card border border-border p-4">
                <DollarSign className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm text-muted-foreground">Price Range</p>
                <p className="font-semibold">{formatPrice(procedure.priceMin)} - {formatPrice(procedure.priceMax)}</p>
              </div>
              <div className="rounded-lg bg-card border border-border p-4">
                <Clock className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold">{procedure.duration}</p>
              </div>
              <div className="rounded-lg bg-card border border-border p-4">
                <Syringe className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm text-muted-foreground">Recovery</p>
                <p className="font-semibold">{procedure.recoveryTime}</p>
              </div>
              <div className="rounded-lg bg-card border border-border p-4">
                <Building2 className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm text-muted-foreground">Clinics</p>
                <p className="font-semibold">{procedure.clinicCount}+ available</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/consultation">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#clinics">Find Clinics</a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl bg-card border border-border p-6">
              <h3 className="font-serif text-lg font-semibold">Quick Info</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{procedure.duration}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Anesthesia</p>
                    <p className="text-sm text-muted-foreground">{procedure.anesthesia}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Recovery Time</p>
                    <p className="text-sm text-muted-foreground">{procedure.recoveryTime}</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link to="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        {procedure.content && (
          <section className="mt-16">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: procedure.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2 class="font-serif text-2xl font-bold mt-8 mb-4">').replace(/### /g, '<h3 class="font-serif text-xl font-semibold mt-6 mb-3">') }} />
            </div>
          </section>
        )}

        {/* Price Comparison */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            {procedure.name} Cost Comparison
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left font-semibold">Country</th>
                  <th className="py-3 px-4 text-left font-semibold">Price Range</th>
                  <th className="py-3 px-4 text-left font-semibold">Savings vs Korea</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, index) => (
                  <tr key={row.country} className={`border-b border-border ${index === 0 ? 'bg-accent' : ''}`}>
                    <td className="py-3 px-4 font-medium">{row.country}</td>
                    <td className="py-3 px-4">{formatPrice(row.min)} - {formatPrice(row.max)}</td>
                    <td className="py-3 px-4">
                      {index === 0 ? (
                        <Badge className="bg-primary">Best Value</Badge>
                      ) : (
                        <span className="text-muted-foreground">
                          Save up to {Math.round((1 - procedure.priceMax / row.max) * 100)}%
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Clinics */}
        <section id="clinics" className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Best {procedure.name} Clinics in Korea
              </h2>
              <p className="mt-2 text-muted-foreground">
                Top-rated clinics specializing in this procedure
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/clinic">View All Clinics</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedClinics.map((clinic) => (
              <ClinicCard key={clinic.slug} {...clinic} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {procedure.faqs && procedure.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-6">
              {procedure.faqs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Related Procedures */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Related Procedures
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProcedures.map((proc) => (
              <ProcedureCard key={proc.slug} {...proc} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}