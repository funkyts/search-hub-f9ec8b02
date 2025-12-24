import { Layout, Breadcrumb } from '@/components/layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 2025</p>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">1. Introduction</h2>
              <p className="mt-3">
                Best Skincare in Korea ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <p className="mt-3">We may collect the following types of information:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, country when you submit a consultation request</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on site, browser type, device information</li>
                <li><strong>Cookies:</strong> We use cookies to improve your browsing experience</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-3">We use your information to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Respond to your consultation requests</li>
                <li>Connect you with relevant clinics</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates (with your consent)</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">4. Information Sharing</h2>
              <p className="mt-3">
                We may share your information with partner clinics when you request a consultation. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">5. Data Security</h2>
              <p className="mt-3">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">6. Your Rights</h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">7. Contact Us</h2>
              <p className="mt-3">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@bestskincareinkorea.com" className="text-primary hover:underline">
                  privacy@bestskincareinkorea.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}