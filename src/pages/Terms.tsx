import { Layout, Breadcrumb } from '@/components/layout';

export default function Terms() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Terms of Service' }]} />

        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 2025</p>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
              <p className="mt-3">
                By accessing and using Best Skincare in Korea, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">2. Information Purpose</h2>
              <p className="mt-3">
                The information provided on this website is for general informational purposes only. It is not intended as medical advice and should not be used as a substitute for professional medical consultation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">3. No Medical Advice</h2>
              <p className="mt-3">
                We are not a medical provider. All medical decisions should be made in consultation with qualified healthcare professionals. We do not guarantee outcomes of any procedures or treatments.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">4. Clinic Partnerships</h2>
              <p className="mt-3">
                While we verify our partner clinics, we are not responsible for the services they provide. Any agreement you make with a clinic is between you and that clinic.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">5. User Responsibilities</h2>
              <p className="mt-3">When using our website, you agree to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Provide accurate information in consultation requests</li>
                <li>Conduct your own research before making medical decisions</li>
                <li>Not use the site for any unlawful purpose</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">6. Intellectual Property</h2>
              <p className="mt-3">
                All content on this website, including text, graphics, and logos, is owned by Best Skincare in Korea and protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p className="mt-3">
                We shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information provided.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">8. Changes to Terms</h2>
              <p className="mt-3">
                We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">9. Contact</h2>
              <p className="mt-3">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:legal@bestskincareinkorea.com" className="text-primary hover:underline">
                  legal@bestskincareinkorea.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}