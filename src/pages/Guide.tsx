import { Layout, Breadcrumb } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Plane,
  Calendar,
  Building2,
  Stethoscope,
  Globe,
  Shield,
  DollarSign,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const steps = [
  {
    icon: Stethoscope,
    title: '1. Research & Plan',
    description: 'Browse procedures, compare clinics, and decide what you want to achieve.',
    tips: ['Read patient reviews', 'Compare prices', 'Understand recovery times'],
  },
  {
    icon: MessageCircle,
    title: '2. Consultation',
    description: 'Get free consultations from clinics to discuss your goals and get quotes.',
    tips: ['Ask about surgeon experience', 'Request before/after photos', 'Clarify all costs'],
  },
  {
    icon: Calendar,
    title: '3. Schedule & Prepare',
    description: 'Book your procedure, arrange travel, and prepare for your trip.',
    tips: ['Plan 7-14 days minimum stay', 'Arrange accommodation near clinic', 'Get travel insurance'],
  },
  {
    icon: Plane,
    title: '4. Travel to Korea',
    description: 'Arrive in Seoul and meet your clinic coordinator.',
    tips: ['Most clinics offer airport pickup', 'Bring all medical records', 'Have translator contact ready'],
  },
  {
    icon: Building2,
    title: '5. Treatment',
    description: 'Undergo your procedure with world-class Korean specialists.',
    tips: ['Follow pre-op instructions', 'Ask questions before surgery', 'Have emergency contacts'],
  },
  {
    icon: Shield,
    title: '6. Recovery & Return',
    description: 'Recover in Korea, attend follow-ups, then return home.',
    tips: ['Attend all follow-up appointments', 'Get post-care instructions', 'Plan comfortable return travel'],
  },
];

const faqs = [
  { q: 'Do I need a visa to visit Korea for medical treatment?', a: 'Most countries can enter Korea visa-free for up to 90 days. Some may need a medical tourism visa (G-1-10) for longer stays.' },
  { q: 'How much can I save compared to my home country?', a: 'Typically 40-70% savings depending on the procedure, while receiving world-class care.' },
  { q: 'Do Korean clinics have English-speaking staff?', a: 'Most clinics catering to international patients have dedicated English coordinators and translators.' },
  { q: 'How long should I stay in Korea?', a: 'Plan for 7-14 days minimum for most procedures. Complex surgeries may require 2-3 weeks.' },
];

export default function Guide() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Medical Tourism Guide' }]} />

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Your Complete Guide to Medical Tourism in Korea
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know about getting skincare or cosmetic procedures in Korea, from planning to recovery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/procedure">Browse Procedures</Link>
            </Button>
          </div>
        </div>

        {/* Why Korea */}
        <section className="mt-20">
          <h2 className="text-center font-serif text-2xl font-bold md:text-3xl">
            Why Choose Korea for Medical Tourism?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">Global Leader</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Korea performs 1M+ cosmetic procedures annually
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">Highest Standards</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strict regulations and JCI-accredited hospitals
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">Cost Effective</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  40-70% savings vs Western countries
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">International Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  English-speaking coordinators available
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Steps */}
        <section className="mt-20">
          <h2 className="text-center font-serif text-2xl font-bold md:text-3xl">
            Your Journey Step by Step
          </h2>
          <div className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-center font-serif text-2xl font-bold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Ready to Start?</h2>
          <p className="mt-4 opacity-90">Get personalized guidance from our medical tourism experts.</p>
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