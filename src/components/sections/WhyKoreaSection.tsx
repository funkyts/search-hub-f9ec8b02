import { Award, DollarSign, Zap, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'World-Class Expertise',
    description: 'Korean surgeons are globally recognized for their precision and innovative techniques in cosmetic procedures.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Get premium quality treatments at 40-60% lower costs compared to Western countries.',
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'Korea leads in cosmetic technology with the latest equipment and minimally invasive techniques.',
  },
  {
    icon: Globe,
    title: 'International Support',
    description: 'Dedicated English-speaking coordinators, translation services, and medical tourism packages.',
  },
];

export function WhyKoreaSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Korea?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            South Korea is the world's leading destination for cosmetic and skincare treatments
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}