import { Layout, Breadcrumb } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Target, Award, ArrowRight } from 'lucide-react';

const team = [
  { name: 'Dr. Sarah Kim', role: 'Medical Director', description: 'Former surgeon with 15+ years experience in Korean medical tourism.' },
  { name: 'James Park', role: 'Patient Coordinator', description: 'Bilingual specialist helping international patients navigate their journey.' },
  { name: 'Michelle Lee', role: 'Content Director', description: 'Healthcare journalist covering Korean medical trends for 10+ years.' },
];

const values = [
  { icon: Heart, title: 'Patient First', description: 'Every recommendation is based on what is best for you, not commission.' },
  { icon: Users, title: 'Transparency', description: 'We provide honest information about costs, risks, and realistic outcomes.' },
  { icon: Target, title: 'Quality Focus', description: 'We only partner with verified, reputable clinics with proven track records.' },
  { icon: Award, title: 'Expert Guidance', description: 'Our team includes medical professionals who understand your needs.' },
];

export default function About() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            About Best Skincare in Korea
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We are your trusted guide to skincare and cosmetic procedures in Korea. Our mission is to help international patients find the best clinics, make informed decisions, and achieve their aesthetic goals safely.
          </p>
        </div>

        {/* Our Story */}
        <section className="mt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-2xl font-bold md:text-3xl">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Best Skincare in Korea was founded by a team of medical professionals and expats who saw firsthand the challenges international patients face when seeking cosmetic treatments in Korea.
                </p>
                <p>
                  Despite Korea's reputation as a global leader in skincare and plastic surgery, finding reliable information in English was difficult. Many patients relied on outdated resources or biased recommendations.
                </p>
                <p>
                  We created this platform to bridge that gap - providing comprehensive, honest, and up-to-date information to help you make the best decisions for your health and beauty goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-accent p-6 text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">Verified Clinics</p>
              </div>
              <div className="rounded-2xl bg-accent p-6 text-center">
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="mt-1 text-sm text-muted-foreground">Patient Reviews</p>
              </div>
              <div className="rounded-2xl bg-accent p-6 text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="mt-1 text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div className="rounded-2xl bg-accent p-6 text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Our Values</h2>
            <p className="mt-4 text-muted-foreground">What guides everything we do</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-card border border-border p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground">Experts dedicated to your medical tourism journey</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl bg-card border border-border p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl font-serif text-primary">{member.name.charAt(0)}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Ready to Start Your Journey?</h2>
          <p className="mt-4 opacity-90">Get personalized recommendations from our medical tourism experts.</p>
          <Button asChild variant="secondary" size="lg" className="mt-6">
            <Link to="/consultation">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
}